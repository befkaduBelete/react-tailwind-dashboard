import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, subjectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Subjects = {
    id: number;
    name: string;
    teachers: string[];

}
const columns = [

    {
        header: "Subject Name",
        accessor: "subjectName",
        className: "hidden md:table-cell"
    },

    {
        header: "Teachers ",
        accessor: "teachers",
        className: "hidden lg:table-cell"
    },

    {
        header: "Actions ",
        accessor: "action",

    }
]

const SubjectListPage = () => {
    const renderRow = (item: Subjects) => (
        <tr key={item.id} className='border-b border-b-slate-100 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>

                <div className='flex flex-col'>
                    <h3 className='font-semibold'>{item.name}</h3>

                </div>
            </td>
            <td className='hidden md:table-cell'>{item.teachers.join(",")}</td>

            <td>
                <div className=''>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 items-center justify-center rounded-full bg-lamaSky p-2'>
                            <Image src="/view.png" height={16} width={16} alt='' />
                        </button>
                    </Link>

                    {role === "admin" && (<button className='w-7 h-7 items-center justify-center rounded-full bg-lamaPurpleLight p-2'>
                        <Image src="/delete.png" height={14} width={14} alt='' />
                    </button>)}

                </div>
            </td>
        </tr>

    )
    return (
        <div className='bg-white p-4 rounded-md m-4 mt-0 flex-1'>
            {/* TOP  */}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>
                <div className='flex flex-col md:flex-row gap-2 w-full md:w-auto'>
                    <TableSearch />
                    <div className='flex items-center gap-1 self-end'>
                        <button className='items-center justify-center w-8 h-8 rounded-full bg-lamaYellow p-2'>
                            <Image src="/filter.png" alt='' width={14} height={14} />
                        </button>
                        <button className='items-center justify-center w-8 h-8 rounded-full bg-lamaYellow p-2'>
                            <Image src="/sort.png" alt='' width={14} height={14} />
                        </button>

                        <button className='items-center justify-center w-8 h-8 rounded-full bg-lamaYellow p-2'>
                            <Image src="/plus.png" alt='' width={14} height={14} />
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div className='w-full'>
                <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            </div>
            <Pagination />
        </div>
    )
}

export default SubjectListPage