'use client'
import NavBar from '@/components/NavBar'
import BoardMenu from '@/components/BoardMenu'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <NavBar />
            <BoardMenu />
            <Footer/>
        </>
    )
}

export default page