'use client'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'

const HomePage = () => {
  const  user  = useUser();
  const router = useRouter();
  useEffect(()=> {
    if(user?.isSignedIn){
      router.replace('/dashboard')
    }
  },[user])
  return (
    <div className="relative mt-[50%] md:mt-[40%] lg:mt-[30%] xl:mt-[20%]  text-center "  >
    <h1 className="text-3xl mb-6 text-white">
    Streamlining Your Data Experience with:{' '}
      <span className="inline-block relative font-bold mt-2">
      Dashboardify
        <Image
          src={'/curve.png'}
          className="absolute top-full w-full left-0 "
          width={624}
          height={28}
          alt="curve"
        />
      </span>
       {' '}
    </h1>
    <p className="text-xl max-w-3xl mx-auto mb-6 lg:mb-8 text-gray-100">
    Effortlessly Manage and Visualize Your Data with Our Intuitive Dashboard Solution
    </p>
    {/* <div className='flex items-center justify-center gap-5'>
    <SignedIn>
          <Link href={"/dashboard"}>
            <Button className='backgroun-white'>Dashboard</Button>
          </Link>
<Button>
<SignOutButton />
</Button>
       
        </SignedIn>
    </div> */}
  
        <SignedOut>
          <Button asChild className="rounded-xl" size="lg">
            <Link href="/sign-in">Login to Start</Link>
          </Button>
        </SignedOut>
   
  </div>
  )
}

export default HomePage