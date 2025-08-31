'use client'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex flex-col'>
            <NavBar />
            <div className='bg-white text-black flex flex-col h-screen items-center justify-center'>
                <h1 className='text-8xl'>
                    404
                </h1>
                <span className='text-2xl'>
                    Page could not be found
                </span>
                <Link href="/" className='bg-red text-white rounded-lg p-2 mt-4'>
                    Go to Main Menu                
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound