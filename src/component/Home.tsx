import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <ul className='nav-list'>
                <li onClick={() => { navigate("home") }}>Home</li>
                <li onClick={() => { navigate("employees") }}>Employees</li>
            </ul>
            <Outlet />
        </div>
        // <h2 className="text-center">Home</h2>
    )
}


export default Home;