import { Button } from '@/components/ui/button'
import React from 'react'
import DashboardHeader from './_components/DashboardHeader'
import DashboardMiddle from './_components/DashboardMiddle'
import MenuBar from './_components/MenuBar'
import { cardInfo } from './_constants'
import DashboardCard from './_components/DashboardCard'
import DashboardSales from './_components/DashboardSales'
import DashboardBarChart from './_components/DashboardBarChart'
import DashboardFooter from './_components/DashboardFooter'
import Link from 'next/link'
import { SignOutButton, useUser } from '@clerk/nextjs'


const Dashboard = () => {

 
  return (
    <div className=''>
        <div className='flex flex-col  items-center mt-10'>
        <h1 className='text-bold text-white text-4xl'>Check out some examples</h1>
        <p className='text-gray-200 text-lg text-center mx-5 lg:mx-10 mt-5'>Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.</p>
        <div className=' flex items-center gap-5 mt-7'>
          <Link href={'#dashboard'}>
          <Button>Get Started</Button>
          </Link>
          
          <Button variant="ghost" className='text-white'>Components</Button>
          <Link href={'/'}>
          <Button>
<SignOutButton />
</Button>
          </Link>
       
        </div>
       
        </div>
        <div className=' mt-10 border mx-5 rounded-md border-gray-500 '>
         <DashboardHeader />
         <DashboardMiddle/>
         <MenuBar />
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mx-5'>
         {cardInfo.map((item) => (
          
             <DashboardCard key={item.id} icon={item.icon} comparison={item.comparison} amount={item.amount} title={item.title} id={item.id} />
            
         
         ))}
         </div>
         <div className='mx-5 mt-5 flex flex-col md:flex-row'>
         <DashboardBarChart />
         <DashboardSales />
         </div>
    
     <DashboardFooter />
        </div>
    </div>

  )
}

export default Dashboard