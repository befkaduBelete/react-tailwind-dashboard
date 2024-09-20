import React from 'react'

const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md mt-6'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl'>Announcement</h1>
                <span className='text-xs text-gray-300'>View All</span>
            </div>
            <div className='bg-lamaSkyLight rounded-md p-4 mt-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>Title One</h1>
                    <span className='text-xs text-gray-400 bg-white rounded-md  px-2'>2025-07-01</span>
                </div>
                <p className='mt-2 text-sm text-gray-400'>This is announcement One </p>
            </div>
            <div className='bg-lamaYellow rounded-md p-4 mt-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>Title One</h1>
                    <span className='text-xs text-gray-400 bg-white rounded-md  px-2'>2025-07-01</span>
                </div>
                <p className='mt-2 text-sm text-gray-400'>This is announcement One </p>
            </div>

            <div className='bg-lamaPurpleLight rounded-md p-4 mt-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>Title One</h1>
                    <span className='text-xs text-gray-400 bg-white rounded-md  px-2'>2025-07-01</span>
                </div>
                <p className='mt-2 text-sm text-gray-400'>This is announcement One </p>
            </div>
        </div>
    )
}

export default Announcements
