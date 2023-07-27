import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard() {
    const dispatch = useDispatch();

    const {data: users, page, pennding } = useSelector(s => s.users);

    const handlePrev = () => {
        dispatch({type: "USER_FETCH", payload: page - 1});
    }
    const handleNext = () => {
        dispatch({type: "USER_FETCH", payload: page + 1});
    }

    return (
        <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Blank page
                        <small>it all starts here</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard" /> Home
                            </a>
                        </li>
                        <li>
                            <a href="#">Examples</a>
                        </li>
                        <li className="active">Blank page</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Title</h3>
                            <button className='btn btn-primary' onClick={e => dispatch({type: "USER_FETCH"})}>Fetch()</button> 
                            <button className='btn btn-success' onClick={e => dispatch({type: "USER_POST"})}>Post()</button>
                            {pennding && <div>Loading...</div>}
                        </div>
                        <div className="box-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(u => <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        <td>{u.password}</td>
                                    </tr>)}
                                </tbody>
                            </table>
                            <div className='box-footer clearfix'>
                            <ul className="pagination pagination-sm no-margin pull-right">
                                <li><a href="#" onClick={handlePrev}>Prev</a></li>
                                <li><a href="#" onClick={handleNext}>Next</a></li>
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