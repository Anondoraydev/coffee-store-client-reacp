import React from 'react';
import logo from '../../public/images/more/logo1.png'
const Header = () => {
    return (
        <div className='bg-black py-5'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-center items-center gap-4'>
                    <img src={logo} alt="" width={75} height={90} />
                    <h1 className='text-6xl font-semibold text-white'>Espresso Emporium</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;