import ful from '../../public/images/more/logo1.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneVolume, FaMessage, FaLocationDot } from "react-icons/fa6";

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
            <div className='flex gap-3 mt-5'>
              <FaFacebook className='text-2xl text-[#331A15]' />
              <FaTwitter className='text-2xl text-[#331A15]' />
              <FaInstagram className='text-2xl text-[#331A15]' />
              <FaLinkedin className='text-2xl text-[#331A15]' />
            </div>
            <div>
              <h3 className='text-[35px] font-[Rancho] text-[#331A15] mt-5'>Get in Touch</h3>
              <div className='mt-6 space-y-3'>
                <p className='text-[#1B1A1A] font-semibold '><FaPhoneVolume className='text-[#331A15] text-xl inline-block mr-4' />01826339098</p>
                <p className='text-[#1B1A1A] font-semibold '><FaMessage className='text-[#331A15] text-xl inline-block mr-4' />anondo554@gmail.com</p>
                <p className='text-[#1B1A1A] font-semibold '><FaLocationDot className='text-[#331A15] text-xl inline-block mr-4' />Nakhenda, Rajarhat, Kurigram </p> 
              </div>
            </div>
          </div>
          <div className='w-1/2 pl-10'>
            <h3 className='text-[25px] font-[Rancho] mt-32'>Connect with Us</h3>
            <div className='pt-5'>
              <input type="text" name="name" placeholder='name' id="" className='block mt-2 w-full p-2 rounded-sm' />
              <input type="email" name="name" placeholder='name' id="" className='block mt-2 w-full p-2 rounded-sm' />
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