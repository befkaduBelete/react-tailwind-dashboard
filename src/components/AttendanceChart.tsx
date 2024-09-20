"use client"

import React from 'react'
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 24,

    },
    {
        name: 'Tus',
        present: 30,
        absent: 13,

    },
    {
        name: 'Wen',
        present: 20,
        absent: 98,

    },
    {
        name: 'Thr',
        present: 27,
        absent: 39,

    },
    {
        name: 'Fri',
        present: 18,
        absent: 48,

    }

];


const AttendanceChart = () => {
    return (
        <div className='w-full h-full p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className='w-full h-full relative'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        barSize={40}

                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                        <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
                        <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
                        <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                        <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                        <Bar radius={[10, 10, 0, 0]} legendType='circle' dataKey="present" fill="#C3EBFA" activeBar={<Rectangle stroke="blue" />} />
                        <Bar radius={[10, 10, 0, 0]} legendType='circle' dataKey="absent" fill="#FAE27C" activeBar={<Rectangle stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default AttendanceChart
