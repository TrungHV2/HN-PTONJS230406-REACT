import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('componentDidMount')
        if (!sessionStorage.getItem('user'))
            navigate('/login')
        return () => {
            console.log('componentWillUnmount');
        }
    }, [])
    return (
        <div>
            <h1>Home page</h1>
        </div>
    )
}
