import React from 'react'
import Image from 'next/image'
interface props {
    type: string;
    total: number
}

const UserCard = ({ type, total }: props) => {
    return (
        <div className='rounded-2xl odd:bg-lamaPurpleLight even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>

            <div className='flex items-center justify-between'>
                <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/25</span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className='text-2xl font-semibold my-4'>{total}</h1>
            <h1 className='capitalize text-sm font-semibold text-gray-300'>{type}</h1>
        </div>
    )
}

export default UserCard
