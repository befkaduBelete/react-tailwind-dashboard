import React from 'react'
import { FieldError } from 'react-hook-form';
type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const InputField = (
    {
        label,
        type = "text",
        register,
        name,
        defaultValue,
        error,
        inputProps
    }: InputFieldProps
) => {
    return (
        <div className='flex flex-col gap-2 w-full md:w-1/4'>
            <label className='text-sm text-gray-400 font-bold'>{label}</label>
            <input type={type}
                {...register(name)}
                className='ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full focus:border-green-300'
                {...inputProps}
                defaultValue={defaultValue}
            />
            {error?.message && <p className='text-sm text-red-500'>{error?.message.toString()}</p>}

        </div>
    )
}

export default InputField
