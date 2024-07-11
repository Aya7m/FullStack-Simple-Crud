import React from 'react'

import { Status } from '@prisma/client'

interface statusPageProps{
    status:Status
}

const statusPage = ({status}:statusPageProps) => {
    const ststusColor=status==Status.TODO
    ?"bg-red-400 text-red-950":status===Status.IN_PROGRESS
    ?"bg-yello-400 text-yello-950":"bg-green-400 text-green-950"
  return (
    <div className={`${ststusColor} py-1 px-2 w-min rounded-lg font-semibold`}>

        {status.toString()}
    </div>
  )
}

export default statusPage