import React from 'react'

const Pagination = () => {
    return (
        <div className='flex justify-between items-center text-gray-500 p-2'>
            <button disabled className='bg-slate-200 py-2 px-4 rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed'> Prev </button>
            <div className='text-sm font-semibold flex gap-2'>
                <button className='px-2 rounded-sm bg-lamaSky'>1</button>
                <button className='px-2 rounded-sm '>2</button>
                <button className='px-2 rounded-sm '>3</button>
                ...
                <button className='px-2 rounded-sm '>10</button>

            </div>
            <button disabled className='bg-slate-200 py-2 px-4 rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed'> Next </button>

        </div>
    )
}

export default Pagination
