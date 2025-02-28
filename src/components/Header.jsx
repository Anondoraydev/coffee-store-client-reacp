import React from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/images/more/logo1.png'

const Header = () => {
    return (
        <div className='bg-black font-[Rancho]'>
            <div className="navbar container mx-auto">
                {/* Left Side: Dropdown Menu */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Center: Logo and Title */}
                <div className="navbar-center">
                    <div className='flex justify-center items-center gap-4'>
                        <img src={logo} alt="Espresso Emporium Logo" width={75} height={90} />
                        <h1 className='text-4xl font-semibold text-white'>Espresso Emporium</h1>
                    </div>
                </div>

                {/* Right Side: Search & Cart Icons */}
                <div className="navbar-end flex gap-4">
                     <NavLink className={'font-semibold text-xl hover:text-purple-600'} to="/singUp">Sing up</NavLink>  
                     <NavLink  className={'font-semibold text-xl hover:text-purple-600'}to="/singIn">Sing In</NavLink>  
                </div>
            </div>
        </div>
    );
};

export default Header;
