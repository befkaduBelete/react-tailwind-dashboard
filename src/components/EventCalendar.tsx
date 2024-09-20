"use client"

import React from 'react'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Value = ValuePiece | [ValuePiece, ValuePiece];
type ValuePiece = Date | null;

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-lg'>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default EventCalendar
