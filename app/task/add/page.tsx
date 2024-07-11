

import Link from 'next/link'
import React from 'react'
import { createTask } from '@/utilites/action';

import AddTaskForm from '@/components/AddTaskForm';




const AddTaskPage = () => {
    return (
        <section>
            <Link href={'/'} className='underline block mb-10'>
                {">> back to task table"}
            </Link>

            <div className='w-2/3 mx-auto rounded-md p-5 bg-slate-800 bottom-2 border-gray-300'>
                <h1 className='mb-7 font-bold text-3xl'>Add Your Task</h1>

               < AddTaskForm/>

            </div>
        </section>
    )
}

export default AddTaskPage
