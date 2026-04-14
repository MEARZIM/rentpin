import React from 'react'

import { MountProvider } from '@/providers/MountProvider'
import Nav from '@/components/Navbar'
import MobileBottomNav from '@/components/Bottom.nav'

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
            </MountProvider>
        </>
    )
}

export default MaainLayout
