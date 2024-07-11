import React from 'react'

import prisma from '@/utilites/db'
import StatusPage from '@/components/StatusPage'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { deletData } from '@/utilites/action'
interface TaskDetailsPageProps {
    params: { id: string }
}

const TaskDetailsPage = async ({ params }: TaskDetailsPageProps) => {
    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!task) notFound()
    return (
        <section>
            <div className="flex items-center justify-between">
                <Link href="/" className="underline">
                    {"<< "} Back to tasks table
                </Link>
                <div className="flex items-center">
                    <Link
                        href={`/task/${task.id}/edit`}
                        className="bg-green-700 hover:bg-green-600 transition-colors rounded-lg py-1 px-2 me-3 text-xl"
                    >
                        Edit
                    </Link>
                    <form action={deletData}>
                        
                        <input type="hidden" name="id" value={task.id} />
                        <button type="submit" className="bg-red-700 hover:bg-red-600 transition-colors rounded-lg py-1 px-2 text-xl">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-16 p-5 rounded-lg bg-gray-600">
                <div className="flex items-center justify-between">
              
                </div>
                <small className="text-yellow-400">
                    {new Date(task.createAt).toDateString()}
                </small>
                <p className="mt-5 text-xl">{task.description}</p>
            </div>
        </section>

    )
}

export default TaskDetailsPage