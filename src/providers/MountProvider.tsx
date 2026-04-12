"use client";

import { createContext, useContext } from "react";

import { useMounted } from "@/hooks/use-mounted";

const MountContext = createContext(false);

export function MountProvider({ children }: { children: React.ReactNode }) {
    const mounted = useMounted();

    if (!mounted) return null;

    return (
        <MountContext.Provider value={mounted}>
            {children}
        </MountContext.Provider>
    );
}

export const useMount = () => useContext(MountContext);