import React from 'react';
import cup1 from '../../public/images/cups/Rectangle 9.png'
import cup2 from '../../public/images/cups/Rectangle 10.png'
import cup3 from '../../public/images/cups/Rectangle 11.png'
import cup4 from '../../public/images/cups/Rectangle 12.png'
import cup5 from '../../public/images/cups/Rectangle 13.png'
import cup6 from '../../public/images/cups/Rectangle 14.png'
import cup7 from '../../public/images/cups/Rectangle 15.png'
import cup8 from '../../public/images/cups/Rectangle 16.png'
const Glaray = () => {
  return (
    <div className='max-w-7xl mx-auto font-[Rancho]'>
      <div className='text-center pb-6'>
        <p className='text-xl '>Follow Us Now</p>
        <h2 className='text-[55px] font-semibold'>Follow on Instagram</h2>
      </div>
      <div className='grid md:grid-cols-4 gap-4 '>
        <img src={cup1} alt="" />
        <img src={cup2} alt="" />
        <img src={cup3} alt="" />
        <img src={cup4} alt="" />
        <img src={cup5} alt="" />
        <img src={cup6} alt="" />
        <img src={cup7} alt="" />
        <img src={cup8} alt="" />
      </div>
    </div>
  );
};

export default Glaray;