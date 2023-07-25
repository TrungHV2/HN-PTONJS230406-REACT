import React, { useState } from 'react'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from '../config/firebase-config';

export default function FileUpload() {
    const [file, setFile] = useState();
    const [imgUrl, setImgUrl] = useState();
    const handleUpload = async () => {
        if (file) {
            // Đường dẫn lưu file
            let path = `/filesUpload/${file.name}`;
            // Tạo tham chiếu đến storage lưu trữ file
            const storageRef = ref(storage, path)
            // Tải file lên
            let response = await uploadBytes(storageRef, file);
            // Lấy đường dẫn
            let imageUrlUploaded = await getDownloadURL(response.ref);
            setImgUrl(imageUrlUploaded);
        }
    }
    return (
        <div>
            <h1>Upload file</h1>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <img src={imgUrl} alt="" />
        </div>
    )
}
