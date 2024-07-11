




import Link from 'next/link'
import React from 'react'
import prisma from '@/utilites/db'

import StatusPage from "@/components/StatusPage"

const HomePage = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <section>
      <h1 className='mb-7 font-bold text-3xl'>Task List App</h1>
      <div className='flex items-center justify-end mb-10'>
        <Link href={'/task/add'} className='bg-cyan-300 hover:bg-cyan-500 transition-colors text-black font-semibold py-1 px-2 rounded-sm text-xl'>
          Add Task

        </Link>

      

      </div>

      <table className='table w-full mt-5 text-left'>
          <thead>
            <tr>
              <th className='p-3'>#</th>
              <th>Task Title</th>
              <th>Task Status</th>
              <th>Task Details</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task,ind)=>(
              <tr key={task.id} className='border-b border-gray-500'>
                <td className='p-3'>{ind+1}</td>
                <td>{task.title}</td>
                <td>
                <StatusPage status={task.status}/>
                </td>
                <td>
                  <Link href={`/task/${task.id}`}
                  className='bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded-md p-2'
                  >Details</Link>
                </td>

              </tr>
            ))}
          </tbody>


        </table>

    </section>
  )
}

export default HomePage

