import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from '../../config/firebase-config'

export default function ProductManager() {
  const { data: products } = useSelector(s => s.products);
  const { data: categories } = useSelector(s => s.categories);
  const dispatch = useDispatch();

  const [isMount, setIsMount] = useState(false);
  const [current, setCurrent] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (isMount) {
      dispatch({ type: "CATEGORY_FECTH" });
      dispatch({ type: "PRODUCT_FECTH" });
    } else {
      setIsMount(true);
    }
  }, [isMount]);

  const handleOnChange = (evt) => {
    switch (evt.target.type) {
      case "text":
        setCurrent({ ...current, [evt.target.name]: evt.target.value });
        break;
      case "number":
        setCurrent({ ...current, [evt.target.name]: parseInt(evt.target.value) });
        break;
      case "checkbox":
        console.log(evt.target.checked);
        setCurrent({ ...current, [evt.target.name]: evt.target.checked });
        break;
      case "file":
        console.log(evt.target.files[0]);
        setCurrent({ ...current, [evt.target.name]: evt.target.files[0] });
        break;
      default:
        setCurrent({ ...current, [evt.target.name]: evt.target.value });
        break;
    }
  }

  const handleSave = async () => {
    let imageUrlUploaded = '';
    if (current.image) {
      // Đường dẫn lưu file
      let path = `/filesUpload/${current.image.name}`;
      // Tạo tham chiếu đến storage lưu trữ file
      const storageRef = ref(storage, path)
      // Tải file lên
      let response = await uploadBytes(storageRef, current.image);
      // Lấy đường dẫn
      imageUrlUploaded = await getDownloadURL(response.ref);
      //setImgUrl(imageUrlUploaded);
    }
    if (isEdit) {
      setCurrent({ ...current, image: imageUrlUploaded });
      dispatch({ type: "PRODUCT_PUT", payload: { ...current, image: imageUrlUploaded } });
    } else {
      let id = uuidv4();
      setCurrent({ ...current, id: id, image: imageUrlUploaded });
      dispatch({ type: "PRODUCT_POST", payload: { ...current, id: id, image: imageUrlUploaded } });
    }
  }

  const handleEdit = (product) => {
    setIsEdit(true);
    setCurrent({ ...product })
  }

  const handleCancel = () => {
    setIsEdit(false);
    setCurrent({})
  }

  return (
    <>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Quản lý sản phẩm {uuidv4()}
          </h1>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Danh sách sản phẩm</h3>
            </div>
            <div className="box-body">
              <div className='form-vertical'>
                <div className='row'>
                  <div className="col-md-6">
                    <div className='form-group row'>
                      <input type="hidden" name='id' value={current?.id || ''} />
                      <label htmlFor="" className='control-label col-md-3'>Tên sản phẩm</label>
                      <div className='col-md-9'>
                        <input type="text" name='name' value={current?.name || ''} onChange={handleOnChange} className='form-control' />
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor="" className='control-label col-md-3'>Danh mục</label>
                      <div className='col-md-9'>
                        <select name="categoryId" onChange={handleOnChange} id="" className='form-control'>
                          <option value="">Chọn danh mục</option>
                          {categories.map(c => <option key={c.id} value={c.id} selected={c.id == current.categoryId}>{c.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor="" className='control-label col-md-3'>Hình ảnh</label>
                      <div className='col-md-9'>
                        <input type="file" onChange={handleOnChange} name='image' id="exampleInputFile" />
                        <img src={current?.image || ''} alt='Ảnh sản phẩm' width={75} />
                      </div>
                    </div>
                    <div className='form-group row'>
                      <div className='col-md-9 col-md-offset-3'>
                        <button className={isEdit ? 'btn btn-primary' : 'btn btn-success'} onClick={handleSave}>{isEdit ? 'Lưu' : 'Thêm'}</button>&nbsp;&nbsp;
                        {isEdit && <button className='btn btn-default' onClick={handleCancel}>Cancel</button>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='form-group row'>
                      <label htmlFor="" className='control-label col-md-3'>Giá tiền</label>
                      <div className='col-md-9'>
                        <input type="number" value={current?.price || ''} onChange={handleOnChange} name='price' className='form-control' />
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor="" className='control-label col-md-3'>Giảm giá</label>
                      <div className='col-md-9'>
                        <input type="number" onChange={handleOnChange} value={current?.discount || ''} name='discount' className='form-control' />
                      </div>
                    </div>
                    <div className='form-group row'>
                      <label htmlFor="" className='control-label col-md-3'>Trạng thái</label>
                      <div className='col-md-9'>
                        <label>
                          <input type="checkbox" checked={current.status} onChange={handleOnChange} name='status' /> Còn hàng
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <table className='table'>
                <thead>
                  <tr>
                    {/* <th>Mã</th> */}
                    <th>Tên sản phẩm</th>
                    <th>Ảnh</th>
                    <th>Danh mục</th>
                    <th>Giá tiền</th>
                    <th>Giảm giá</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => <tr key={p.id}>
                    {/* <td>{p.id}</td> */}
                    <td>{p.name}</td>
                    <td>
                      <img src={p.image} alt="" width={100} />
                    </td>
                    <td>{categories.find(x => x.id == p.categoryId)?.name}</td>
                    <td>{p.price}</td>
                    <td>{p.discount}</td>
                    <td>{p.status ? 'Còn hàng' : 'Hết hàng'}</td>
                    <td>
                      <button className='btn btn-warning' onClick={e => handleEdit(p)}>Sửa</button>
                      <button className='btn btn-danger'>Xóa</button>
                    </td>
                  </tr>)}
                </tbody>
              </table>
              <div className='box-footer clearfix'>
                <ul className="pagination pagination-sm no-margin pull-right">
                  <li><a href="#">Prev</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
            </div>
            {/* /.box-body */}
            <div className="box-footer">Footer</div>
            {/* /.box-footer*/}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </>
  )
}
