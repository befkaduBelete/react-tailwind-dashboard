import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4  sticky top-0 left-50  bottom-1 border w-full z-50 bg-white'>
            {/* SEARCH BAR */}
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.2px] ring-gray-300 p-2' >
                <Image src="/search.png" alt='' width={14} height={14} />
                <input type="text" placeholder='search' className='w-[200px] bg-transparent outline-none' />
            </div>
            {/* PROFILE SETTING */}
            <div className='flex gap-6 items-center justify-end w-full' >
                <div className='bg-white rounded-full flex items-center justify-center cursor-pointer'>
                    <Image src="/message.png" alt='' width={20} height={20} />
                </div>
                <div className='bg-white rounded-full flex items-center justify-center cursor-pointer relative'>
                    <Image src="/announcement.png" alt='' width={20} height={20} />
                    <div className='absolute -top-3  -right-3  w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-white text-xs'>1</div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium'>
                        Befkadu Belete
                    </span>
                    <span className='text-[10px] text-gray-500 text-right'>Admin</span>
                </div>
                <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full' />
            </div>
        </div>
    )
}

export default Navbar




