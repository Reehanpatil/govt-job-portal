import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-white border-t mt-10'>
      <div className='max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4'>
        {/* LEFT */}
        <p className='text-sm text-gray-500'>© 2026 All rights reserved</p>

        {/* CENTER */}
        <h2 className='font-bold text-[#0f172a]'>
          Reehan<span className='text-[#2563eb]'> M P</span>
        </h2>

        {/* RIGHT */}
        <div className='flex gap-4 text-lg text-[#0f172a]'>
          <FaFacebook className='cursor-pointer hover:text-[#2563eb]' />
          <FaTelegram className='cursor-pointer hover:text-[#2563eb]' />
        </div>
      </div>
    </footer>
  );
}
