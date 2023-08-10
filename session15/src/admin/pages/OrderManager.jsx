import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function OrderManager() {
    const orderStatus = [
        {key: 1, value: "Chờ xử lý"},
        {key: 2, value: "Đang giao hàng"},
        {key: 3, value: "Thành công"},
        {key: -1, value: "Hủy"},
    ]
    const [isMount, setIsMount] = useState(false);

    const { data: orders, orderDetails } = useSelector(s => s.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isMount) {
            dispatch({ type: "ORDER_FECTH" })
        } else {
            setIsMount(true);
        }
    }, [isMount])

    const handleDetails = (orderId) => {
        dispatch({type: "ORDER_FECTH_DETAILS", payload: orderId})
    }

    const handleChangeStatus = (order, newStatus) => {
        let initOrder = {...order, status: parseInt(newStatus)};
        dispatch({type: "ORDER_UPDATE", payload: initOrder});
    }

    return (
        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Quản lý đơn hàng</h1>
                </section>
                <section className="content">
                    <div className="box">
                        <div className="box-header with-border">
                        </div>
                        <div className="box-body">
                            <div className='row'>
                                <div className='col-md-7'>
                                    <h3 className="box-title">Danh sách đơn hàng</h3>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Tên khách hàng</th>
                                                <th>Email</th>
                                                <th>Số điện thoại</th>
                                                <th>Ngày tạo</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(o => <tr key={o.id} onDoubleClick={e => handleDetails(o.id)}>
                                                <td>{o.customerName}</td>
                                                <td>{o.email}</td>
                                                <td>{o.phone}</td>
                                                <td>{o.created}</td>
                                                <td>
                                                    <select defaultValue={o.status} className='form-control' onChange={e => handleChangeStatus(o, e.target.value)}>
                                                        {orderStatus.map(x => (
                                                            <option key={x.key} 
                                                                value={x.key}
                                                                disabled={x.key < o.status && o.status !== 1}
                                                            >
                                                                {x.value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                            </tr>)}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='col-md-5'>
                                    <h3 className="box-title">Chi tiết đơn hàng</h3>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Đơn giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetails.map(x => <tr>
                                                <td>
                                                    <img src={x.product.image} alt="" width={75} />
                                                    {x.product.name}
                                                </td>
                                                <td>{x.price}</td>
                                                <td>{x.quantity}</td>
                                                <td>{x.quantity * x.price}</td>
                                            </tr>)}
                                        </tbody>
                                    </table>
                                </div>
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
