import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Buscar en Google Book</Link>
                </li>
                <li>
                    <Link>Crear libreta</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
