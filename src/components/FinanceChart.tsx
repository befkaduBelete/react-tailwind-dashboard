"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image'

const data = [
    {
        name: 'Jan',
        income: 4000,
        expence: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expence: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expence: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expence: 3908,
    },
    {
        name: 'May',
        income: 1890,
        expence: 4800,
    },
    {
        name: 'Jun',
        income: 2390,
        expence: 3800,
    },
    {
        name: 'Juy',
        income: 3490,
        expence: 4300,
    },
    {
        name: 'Ogu',
        income: 3490,
        expence: 4300,
    },
    {
        name: 'Set',
        income: 3490,
        expence: 4300,
    },
    {
        name: 'Oct',
        income: 3490,
        expence: 4300,
    },
    {
        name: 'Nav',
        income: 3490,
        expence: 4300,
    },
    {
        name: 'Des',
        income: 3490,
        expence: 4300,
    },
];

const FinanceChart = () => {
    return (
        <div className='w-full h-full p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl'>Finances</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className='w-full h-full'>

                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
                        <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                        <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
                        <Line type="monotone" dataKey="expence" stroke="#FAE27C" strokeWidth={5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default FinanceChart
