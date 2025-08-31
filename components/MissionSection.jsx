import Link from 'next/link'
import React from 'react'

const MissionSection = () => {
    return (
        <div className='bg-white text-black flex items-center justify-center'>
            <div className='w-11/12 items-start flex my-12 space-y-2 flex-col'>
                <h3 className='text-2xl md:text-4xl'>
                    Mission with Purpose
                </h3>
                <p className='text-base md:text-lg'>
                    We strive to foster a network for Mexican international students, facilitating meaningful exchanges between our members and the wider University community. Through celebrating cultural events, educational endeavors, and social gatherings, MEXT is committed to deepening the understanding of Mexico&apos;s rich traditions, history, and contemporary issues as well as representing Mexican international students and their interest in the University. Together, we aspire to create a space of unity, respect, and personal growth, where every member can thrive academically, personally, and socially, and where the spirit of Mexico resonates in every endeavor.
                </p>
                <Link href="/about" className='text-base md:text-lg font-bold'>
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default MissionSection