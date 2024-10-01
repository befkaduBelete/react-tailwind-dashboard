import React from 'react'

const SingleTeacherPage = () => {
    return (
        <div className='flex-1 flex gap-4 flex-col xl:flex-row p-4'>
            {/* LEFT */}
            <div className='w-full xl:w-2/3'>
                {/* TOP SECTION */}
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* USER INFO CARD */}
                    <div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>USER INFO</div>
                    {/* SMALL CARDS */}
                    <div className=''> SMALL CARD</div>
                </div>
                {/* BOTTOM SECTION */}
                <div className=''>
                    SHEDULE
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-full xl:1/2'> </div>

        </div>
    )
}

export default SingleTeacherPage
