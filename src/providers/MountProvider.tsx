"use client";

import { createContext, useContext } from "react";

import { useMounted } from "@/hooks/use-mounted";
import GlobalLoader from "@/components/loaders/GlobalLoader";

const MountContext = createContext(false);

export function MountProvider({ children }: { children: React.ReactNode }) {
    const mounted = useMounted();

    if (!mounted) return <GlobalLoader isLoading={mounted} />;

    return (
        <MountContext.Provider value={mounted}>
            {children}
        </MountContext.Provider>
    );
}

export const useMount = () => useContext(MountContext);