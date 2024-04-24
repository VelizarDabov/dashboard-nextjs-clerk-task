import React from 'react'
import { DatePickerWithRange } from './DatePicker'
import { Button } from '@/components/ui/button'

const DashboardMiddle = () => {
  return (
    <div className='flex flex-col text-center md:flex-row justify-between mx-5 p-5'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Dashboard</h1>
        <div className='flex flex-col md:flex-row gap-2'>
           <DatePickerWithRange  />
           <Button >Download</Button>
        </div>
       
    </div>
  )
}

export default DashboardMiddle