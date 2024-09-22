import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
    return (
        <div className='w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.2px] ring-gray-300 p-2' >
            <Image src="/search.png" alt='' width={14} height={14} />
            <input type="text" placeholder='Search ...' className='w-[200px] bg-transparent outline-none' />
        </div>
    )
}

export default TableSearch
