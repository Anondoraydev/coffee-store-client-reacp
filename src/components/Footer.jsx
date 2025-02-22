import ful from '../../public/images/more/logo1.png'
const Footer = () => {
  return (
    <div style={{
      backgroundImage: "url(https://i.ibb.co.com/Cpd57Sr5/13.jpg)",
    }}>
      <div className='max-w-7xl mx-auto '>
        <footer className=" flex p-10 mt-[119px]">
          <div className='w-1/2'>
            <aside>
              <img src={ful} alt="" width={75} height={90} />
              <h3 className='text-[45px] text-[#331A15] font-[Rancho] pt-4'>Espresso Emporium</h3>
              <p className=' pt-5 text-[20px] text-[#331A15]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            </aside>
          </div>
          <div className='w-1/2 pl-10'>
            <h3 className='text-[45px] font-[Rancho] '>Connect with Us</h3>
            <div className=''> 
              <input type="text" name="name" placeholder='name' id=""  className='block mt-2 w-full p-2 rounded-sm'/>
              <input type="email" name="name" placeholder='name' id=""  className='block mt-2 w-full p-2 rounded-sm'/>
              <textarea name="" placeholder='Message' id="" className='block mt-2 w-full pb-14 pt-2 pl-5 rounded-sm'></textarea>
            </div>
            <button className='mt-5 p-2 border rounded-3xl'>Send Message</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;