import Link from 'next/link'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'
const menuItem = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/"
            },
            {
                icon: "/teacher.png",
                label: "Teachers",
                href: "/teachers"
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/students"
            },
            {
                icon: "/parent.png",
                label: "Parents",
                href: "/parents"
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/classes"
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/lessons",
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/exams",
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/assignments",
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/results",
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "attendance",
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/events",
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "messages"
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "announcements",
            }
        ]
    }, {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
            }
        ]
    }
]

const Menu = () => {
    return (
        <div className='mt-4 text-sm ml-4'>
            {menuItem.map(i => (
                <div className='flex flex-col gap-1 ' key={i.title} >
                    <span className='hidden lg:block text-gray-800 font-light my-2'>{i.title}</span>
                    {
                        i.items.map(i => (
                            <Link href={i.href} key={i.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray- py-2 hover:bg-white hover:translate-x-2 hover:duration-300 hover:rounded-md lg:pl-3'  >
                                <Image src={i.icon} alt="" width={20} height={20} />
                                <span className='hidden lg:block'>{i.label}</span>
                            </Link>
                        ))
                    }

                </div>
            ))}
        </div>
    )
}

export default Menu
