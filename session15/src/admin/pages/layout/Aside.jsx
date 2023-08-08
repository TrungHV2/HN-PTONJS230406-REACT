import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
    return (
        <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel">
                    <div className="pull-left image">
                        <img
                            src="../../dist/img/user2-160x160.jpg"
                            className="img-circle"
                            alt="User Image"
                        />
                    </div>
                    <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#">
                            <i className="fa fa-circle text-success" /> Online
                        </a>
                    </div>
                </div>
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input
                            type="text"
                            name="q"
                            className="form-control"
                            placeholder="Search..."
                        />
                        <span className="input-group-btn">
                            <button
                                type="submit"
                                name="search"
                                id="search-btn"
                                className="btn btn-flat"
                            >
                                <i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </form>
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-dashboard" /> <span>Dashboard</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <Link to={'product'}>
                            <i className="fa fa-dashboard" /> <span>Quản lý sản phẩm</span>
                        </Link>
                    </li>
                </ul>
            </section>
            {/* /.sidebar */}
        </aside>

    )
}
