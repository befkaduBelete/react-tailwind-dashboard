import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleStudentsPage = () => {
    return (
        <div className='flex-1 flex gap-4 flex-col xl:flex-row p-4'>
            {/* LEFT */}
            <div className='w-full xl:w-2/3 md:w-2/3'>
                {/* TOP SECTION */}
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* USER INFO CARD */}
                    <div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>
                        <div className='w-1/3'>
                            <Image src="/avatar.png" alt='User Logo' height={144} width={144} className='w-36 h-36 rounded-full object-cover' />
                        </div>
                        <div className='w-2/3 p-2'>
                            <h1 className='text-xl font-semibold'>Tena Belete</h1>
                            <p className='text-sm text-gray-500'> He is a teacher having MSC in computer Sceince</p>
                            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                                <div className='flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3'>
                                    <Image src="/blood.png" alt='' width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className='flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3'>
                                    <Image src="/date.png" alt='' width={14} height={14} />
                                    <span>Jan 2025</span>
                                </div>
                                <div className='flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3'>
                                    <Image src="/mail.png" alt='' width={14} height={14} />
                                    <span>befkadu@gmail.com</span>
                                </div>
                                <div className='flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3'>
                                    <Image src="/phone.png" alt='' width={14} height={14} />
                                    <span>+251946334153</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex gap-4 justify-between flex-wrap '>
                        {/* CARDS */}
                        <div className='bg-white w-full p-2 rounded-md flex gap-4 md:w-[48%] lx:w-[45%] 2xl:w-[48%]'>
                            <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6' />
                            <div className=''>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'> Attendance</span>
                            </div>
                        </div>
                        <div className='bg-white w-full p-2 rounded-md flex gap-4 md:w-[48%] lx:w-[45%] 2xl:w-[48%]'>
                            <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6' />
                            <div className=''>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'> Attendance</span>
                            </div>
                        </div>
                        <div className='bg-white w-full p-2 rounded-md flex gap-4 md:w-[48%] lx:w-[45%] 2xl:w-[48%]'>
                            <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6' />
                            <div className=''>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'> Attendance</span>
                            </div>
                        </div>
                        <div className='bg-white w-full p-2 rounded-md flex gap-4 md:w-[48%] lx:w-[45%] 2xl:w-[48%]'>
                            <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6' />
                            <div className=''>
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'> Attendance</span>
                            </div>
                        </div>


                    </div>
                    {/* SMALL CARDS */}

                </div>
                {/* BOTTOM SECTION */}
                <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                    <h1> Teacher Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-full xl:w-1/3 flex flex-col gap-4'>
                <div className='bg-white p-4 rounded-md'>
                    <h1 className='text-xl font-semibold'>Shortcuts</h1>
                    <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href="/"> Teacher's Classes</Link>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href="/"> Teacher's Students</Link>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href="/"> Teacher's Lessons</Link>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href="/"> Teacher's Exams</Link>
                        <Link className='p-3 rounded-md bg-lamaSkyLight' href="/"> Teacher's Assignment</Link>
                    </div>
                </div>
                <Performance />
                <Announcements />

            </div>
        </div>
    )
}

export default SingleStudentsPage
