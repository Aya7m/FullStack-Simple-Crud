"use server";
import prisma from '@/utilites/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { Status } from '@prisma/client';


export async function createTask(formData:FormData) {
    const title = formData.get("title")?.toString();


    const description = formData.get("description")?.toString();

    if (!title || !description)
        return console.log("Required");

    
    try {

          await prisma.task.create({
        data:{
            title,
            description
            
        }
    });
    } catch (error) {
        throw new Error("cant create task , try agin")
    }


  

    revalidatePath("/")
    redirect("/");
}


export async function deletData(formData:FormData){

    const id=formData.get("id")?.toString()
    if(!id) return;

    try {
        await prisma.task.delete({where:{id:parseInt(id)}})
    } catch (error) {
        throw new Error("cant delete task , try agin")
    }

    revalidatePath("/")
    redirect("/");

}

export async function updateTask(formData:FormData){
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const status = formData.get("status") as Status;
    const id = formData.get("id")?.toString();

    if (typeof title !== 'string' || title.length < 2) return;
    if (typeof description !== 'string' || description.length < 4) return;
    if (!status) return;
    if (typeof id !== 'string') return;

    try {
        await prisma.task.update({
            where: { id: parseInt(id) },
            data: { title, description, status }
        });
    } catch (error) {
        throw new Error("could not update the task, please try again");
    }

    revalidatePath(`/task/${id}`);
    redirect(`/task/${id}`);
}