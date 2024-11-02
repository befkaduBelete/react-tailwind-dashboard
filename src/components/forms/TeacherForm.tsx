"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';



const schema = z.object({
    username: z.string()
        .min(3, { message: 'Username must be at least 3 characters long !' })
        .max(20, { message: 'Username must not be more than 20 characters long !' }),
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message: 'Password must be at least 3 characters long !' }),
    bloodType: z.string().min(1, { message: 'Blood Type is required' }),
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'First name is required' }),
    phone: z.string().min(1, { message: 'First name is required' }),
    address: z.string().min(1, { message: 'First name is required' }),
    birthday: z.date({ message: "Birthday is required !" }),
    sex: z.enum(["male", "female"], { message: "Sex is required" }),
    img: z.instanceof(File, { message: "Image is Required" })
});

type Inputs = z.infer<typeof schema>;
type FormInputProps = { type: "create" | "update"; data?: any }

const TeacherForm = (
    { type, data }: FormInputProps
) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onsubmit = handleSubmit(data => {
        console.log(data)
    });
    return (
        <form className='flex flex-col gap-8' onSubmit={onsubmit}>
            <h1 className='text-xl font-semibold'> Create Teacher</h1>
            <span className='text-xs text-gray-400 font-medium '>Authentication Information</span>
            <div className='flex flex-wrap gap-2 justify-between'>
                <InputField label='Username'
                    name='username'
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputField label='Email'
                    name='email'
                    defaultValue={data?.email}
                    register={register}
                    type='email'
                    error={errors?.email}
                />
                <InputField label='Password'
                    name='password'
                    type='password'
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />
            </div>
            <span className='text-xs text-gray-400 font-medium '>Personal  Information</span>
            <div className='flex flex-wrap gap-2 justify-between'>
                <InputField label='First Name'
                    name='First Name'
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors?.firstName}
                />
                <InputField label='Last Name'
                    name='lastName'
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors?.lastName}
                />
                <InputField label='Phone'
                    name='phone'
                    defaultValue={data?.phone}
                    register={register}
                    error={errors?.phone}
                    type='phone'
                />
                <InputField label='Address'
                    name='address'
                    defaultValue={data?.address}
                    register={register}
                    error={errors?.address}
                />
                <InputField label='Birthday'
                    name='birthday'
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors?.birthday}
                    type='date'
                />
                <InputField label='Blood Type'
                    name='bloodType'
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors?.bloodType}
                />

                <div className='flex flex-col gap-2 w-full md:w-1/4'>
                    <label className='text-sm text-gray-400 font-bold'>Sex</label>
                    <select
                        {...register('sex')}
                        defaultValue={data?.sex}
                        className='ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full focus:border-green-300'
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.sex?.message && <p className='text-sm text-red-500'>{errors.sex?.message.toString()}</p>}
                </div>

                <div className='flex flex-col gap-2 w-full md:w-1/4 '>
                    <label htmlFor='img' className='text-sm text-gray-400 font-bold flex items-center cursor-pointer pt-4'>
                        <Image src="/upload.png" alt='' width={28} height={28} />
                        <span>Upload a photo</span>
                    </label>
                    <input type='file' {...register('img')} id='img' className='hidden' />
                    {errors.img?.message && <p className='text-sm text-red-500'>{errors.img?.message.toString()}</p>}
                </div>


            </div>
            <button className='text-white capitalize font-bold bg-blue-400 rounded-md p-2'>{type === "create" ? "create" : "update"}</button>
        </form>
    )
}

export default TeacherForm
