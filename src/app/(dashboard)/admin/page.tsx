import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
    return (
        <div className='flex  flex-col md:flex-row p-4 gap-4  '>
            {/* LEFT */}
            <div className='w-full lg:w-2/3  flex-col gap-8'>
                <div className='flex gap-3 justify-between flex-wrap'>
                    <UserCard type='Students' total={2000} />
                    <UserCard type='Teachers' total={2000} />
                    <UserCard type='Parents' total={2000} />
                    <UserCard type='Staffs' total={2000} />
                </div>
                {/* MIDDLE CHARTS */}
                <div className='flex gap-4 flex-col lg:flex-row mt-6'>
                    <div className='w-full lg:w-1/3 h-[450px] bg-white p-2 rounded-lg'>
                        <CountChart />
                    </div>
                    <div className='w-full lg:w-2/3 h-[450px]  bg-white p-2 rounded-lg'>
                        <div className='w-full h-full bg-white p-2 rounded-lg'>
                            <AttendanceChart />
                        </div>
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className='w-full bg-white mt-4 h-[500px] p-2 rounded-lg'>

                    <FinanceChart />
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-full lg:w-1/3' >
                <EventCalendar />
                <Announcements />
            </div>

        </div>
    )
}

export default AdminPage
