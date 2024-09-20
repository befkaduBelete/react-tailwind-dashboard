"use client"
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'total',
        count: 100,

        fill: 'white',
    },
    {
        name: 'Girls',
        count: 50,

        fill: '#C3EBFA',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#FAE27C',
    },


];



const CountChart = () => {
    return (
        <div className='h-full w-full p-4 bg-white rounded-xl'>
            {/* TITLE */}
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl'>Student</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            {/* CHART */}
            <div className='w-full h-[75%] relative'>

                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={35} data={data}>
                        <RadialBar

                            background
                            dataKey="count"
                        />

                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* FOOTER */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h1 className='text-xs text-gray-300'>Boys (55%)</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h1 className='text-xs text-gray-300'>Boys (55%)</h1>
                </div>

            </div>

        </div>
    )
}

export default CountChart
