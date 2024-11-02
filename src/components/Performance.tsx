
"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400, fill: "#C3EBFA" },
    { name: 'Group B', value: 300, fill: "#FAE27C" },
];


const Performance = () => {
    return (
        <div className='bg-white p-2 rounded-md h-80 relative'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Performance</h1>
                <Image src='/moreDark.png' alt='' width={16} height={16} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        fill="#8884d8"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className='absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2  text-center'>
                <h1 className='text-lg font-bold'>9.6</h1>
                <p className='text-xs text-gray-500'>LTS</p>
            </div>
            <h1 className='absolute font-medium bottom-16 left-0 right-0 m-auto text-center'>
                1st Semister - 2nd Semister
            </h1>
        </div>
    )
}

export default Performance
