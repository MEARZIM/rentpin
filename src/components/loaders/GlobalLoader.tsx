'use client'

import { motion, AnimatePresence } from 'motion/react'
import { Globe } from 'lucide-react'

interface GlobalLoaderProps {
    isLoading: boolean
}

const GlobalLoader = ({ isLoading }: GlobalLoaderProps) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                   
                    className="fixed inset-0 z-9999 flex items-center justify-center bg-white/80 backdrop-blur-2xl"
                >
                    <div className="relative flex flex-col items-center">


                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}

                            className="w-24 h-24 rounded-full border-2 border-transparent border-t-[#006948] border-r-[#00855d]/30"
                        />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#006948] flex items-center justify-center text-white shadow-xl shadow-[#006948]/20">
                                <Globe size={24} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-center"
                        >
                            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#171c1f]">
                                Curating your sanctuary
                            </p>
    
                            <div className="mt-4 w-48 h-1 bg-[#bccac0]/20 rounded-full overflow-hidden mx-auto">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-full bg-[#006948]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default GlobalLoader