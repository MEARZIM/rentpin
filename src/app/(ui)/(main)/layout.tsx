import React from 'react'

import { MountProvider } from '@/providers/MountProvider'
import Nav from '@/components/Navbar'
import MobileBottomNav from '@/components/Bottom.nav'
import Footer from '@/components/Footer'

const MaainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <MountProvider>
                <Nav />
                {children}
                <MobileBottomNav />
                <Footer />
            </MountProvider>
        </>
    )
}

export default MaainLayout
