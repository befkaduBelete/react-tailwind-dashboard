"use client"

import React, { useState } from 'react'
import Button from './Button';
import Image from 'next/image';

type FormModelProps = {
    table: "teacher" | "student" | "parent" | "subject" | "class";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number
}




const FormModalT = ({ type, table, data, id }: FormModelProps) => {
    const [open, setOpen] = useState(false);

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type === "create"
        ? "bg-lamaYellow"
        : type == "update"
            ? "bg-lamaSky" : "bg-lamaPurpleLight";


    const Form = () => {
        return type === "delete" ? (<form action="" className='p-4 flex flex-col gap-4'>
            <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
            <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>Delete</button>
        </form>) : (<div>bbbbbbbbbbbbb</div>)
    }

    return (
        <>
            <button className={`${size}  w-7 h-7 items-center justify-center rounded-full p-2 m-1 ${bgColor}`}
                onClick={() => setOpen(true)} >
                <Image src={`/${type}.png`} alt='' width={16} height={16} /> {open}
            </button>
            {open && <div className='absolute w-screen h-screen left-0 top-0 bg-black z-50 bg-opacity-60 flex items-center justify-center'>
                <div className='bg-white rounded-md relative p-4 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl::w-[40%]'>
                    <Form />
                    <div className='absolute top-4 right-4 cursor-pointer'>
                        <Image src='/close.png' alt='' width={14} height={14} onClick={() => setOpen(false)} />
                    </div>
                </div>
            </div>}


        </>
    )
}

export default FormModalT
