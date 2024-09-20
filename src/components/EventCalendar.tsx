"use client"

import Image from 'next/image';
import React from 'react'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Value = ValuePiece | [ValuePiece, ValuePiece];
type ValuePiece = Date | null;

const events = [
    {
        id: 1,
        title: "Event One",
        time: "12:00 PM - 2:00 PM",
        description: "This is the first event in the list"
    },
    {
        id: 2,
        title: "Event One",
        time: "12:00 PM - 2:00 PM",
        description: "This is the first event in the list"
    },
    {
        id: 3,
        title: "Event One",
        time: "12:00 PM - 2:00 PM",
        description: "This is the first event in the list"
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-lg'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl'>Events</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col'>
                {events.map(event => (
                    <div key={event.id} className='border-2 border-gray-100 border-t-4 p-5 odd:border-t-lamaSky even:border-t-lamaYellow'>
                        <div className='flex items-center justify-between'>
                            <h1>{event.title}</h1>
                            <span>{event.time}</span>
                        </div>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar
