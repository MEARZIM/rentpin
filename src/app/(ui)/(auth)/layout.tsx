import React from 'react'

import { MountProvider } from '@/providers/MountProvider'

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <MountProvider>
                {children}
            </MountProvider>
        </>
    )
}

export default AuthLayout
