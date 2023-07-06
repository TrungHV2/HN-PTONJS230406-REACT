import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { useState } from 'react'

export default function TableComponent() {
    const columns = [
        {label: 'Id', field: 'id'},
        {label: 'Email', field: 'email'},
        {label: 'Name', field: 'name'},
        {label: 'Phone', field: 'phone'},
        {label: 'Birthday', field: 'birthday'},
    ]

    const [data, setData] = useState([
        {id: 1, name: 'Nguyễn Văn A', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
        {id: 2, name: 'Nguyễn Văn B', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
        {id: 3, name: 'Nguyễn Văn C', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
        {id: 4, name: 'Nguyễn Văn D', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
        {id: 5, name: 'Nguyễn Văn E', email: 'abc@gmail.com', birthday: '04/07/2000', phone: '0987654321'},
    ])
    /**
     * Xây dựng tính năng sắp xếp dữ liệu khi click vào tiêu đề của từng cột, sử dụng hooks, events, props, ...
     * Tham khảo cách sắp xếp trong bài thực hành session4
     * 
     * Sử dụng reducer và useReducer để định nghĩa các logic xử lý (thêm, sửa, xóa) cho state data. Viết hàm xử lý sự kiện cho 3 button Thêm, Sửa, Xóa để dispatch action để reducer update dữ liệu state data.
     */
    return (
        <div>
            <h1>Table Component</h1>
            <table border={1} cellPadding={5} cellSpacing={0} width={'100%'}>
                <TableHead columns={columns} />
                <TableBody data={data} columns={columns} />
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
