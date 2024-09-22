

import Link from 'next/link'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'
import { role } from '@/lib/data'
import { menuItem } from '@/lib/NavList'

const Menu = () => {
    return (
        <div className='mt-4 text-sm ml-4'>
            {menuItem.map(i => (
                <div className='flex flex-col gap-1 ' key={i.title} >
                    <span className='hidden lg:block text-gray-800 font-light my-2'>{i.title}</span>
                    {
                        i.items.map(item => {
                            if (item.visible.includes(role)) {
                                return (
                                    <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray- py-2 hover:bg-lamaSkyLight hover:translate-x-2 hover:duration-300 hover:rounded-md lg:pl-3'  >
                                        <Image src={item.icon} alt="" width={20} height={20} />
                                        <span className='hidden lg:block'>{item.label}</span>
                                    </Link>
                                )
                            }
                        })
                    }

                </div>
            ))}
        </div>
    )
}

export default Menu
