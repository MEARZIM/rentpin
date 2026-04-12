'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, ChevronRight, ArrowLeft, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import RentPinLogo from '@/components/icons/logo'
import Link from 'next/link'

const LoginPage = () => {
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSendOTP = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('otp');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-center p-6 md:p-12">

            {/* Header / Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-12"
            >
                <RentPinLogo className="w-10 h-10 md:w-12 md:h-12" />
                <span className="font-heading text-xl md:text-2xl text-[#171c1f] leading-none">
                    Rent Pin
                </span>
            </motion.div>

            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-110 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(23,28,31,0.08)] relative overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    {step === 'phone' ? (
                        <motion.div
                            key="phone-step"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                        >
                            <div className="text-center">
                                <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#171c1f] mb-3">Welcome back</h1>
                                <p className="text-[#404944] text-sm md:text-base opacity-70">
                                    Join the community of verified rental properties.
                                </p>
                            </div>

                            <div className="bg-[#006948]/5 rounded-3xl p-5 flex items-center gap-4 border border-[#006948]/10">
                                <div className="w-10 h-10 rounded-full bg-[#006948]/10 flex items-center justify-center text-[#006948]">
                                    <ShieldCheck size={20} />
                                </div>
                                <p className="text-xs md:text-sm font-medium text-[#171c1f] leading-tight">
                                    Only genuine owner listings. <span className="text-[#006948] font-bold">100% Verified.</span>
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="relative">
                                    <label className="absolute -top-2.5 left-5 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-[#006948] z-10">
                                        Phone Number
                                    </label>
                                    <div className="flex items-center bg-[#f0f4f8] rounded-2xl border border-transparent focus-within:border-[#006948]/20 transition-all overflow-hidden">
                                        <span className="pl-5 pr-3 text-[#171c1f] font-bold text-sm border-r border-[#bccac0]/20">+91</span>
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Enter mobile number"
                                            className="w-full bg-transparent py-4 px-4 outline-none text-sm font-medium text-[#171c1f] placeholder:text-[#404944]/40"
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleSendOTP}
                                    disabled={isLoading || phoneNumber.length < 10}
                                    variant="premium"
                                    size="premium"
                                    className="w-full rounded-2xl h-14 group"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : "Continue with OTP"}
                                    {!isLoading && <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />}
                                </Button>
                            </div>

                            <div className="relative text-center">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#171c1f]/5"></div></div>
                                <span className="relative bg-white px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#404944]/40">OR</span>
                            </div>

                            <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-[#bccac0]/30 rounded-2xl hover:bg-[#f0f4f8] transition-all group">
                                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                                <span className="text-sm font-bold text-[#171c1f]">Continue with Google</span>
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="otp-step"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <button
                                onClick={() => setStep('phone')}
                                className="flex items-center gap-2 text-[#404944] hover:text-[#006948] transition-colors text-sm font-bold uppercase tracking-widest"
                            >
                                <ArrowLeft size={16} /> Back
                            </button>

                            <div className="text-center">
                                <h2 className="font-heading text-3xl font-bold text-[#171c1f] mb-3">Verify it's you</h2>
                                <p className="text-[#404944] text-sm opacity-70">
                                    We sent a 6-digit code to <span className="font-bold text-[#171c1f]">+1 {phoneNumber}</span>
                                </p>
                            </div>

                            <div className="flex justify-center py-4">
                                <InputOTP maxLength={6} containerClassName="gap-2">
                                    <InputOTPGroup className="gap-2">
                                        {[0, 1, 2, 3, 4, 5].map((index) => (
                                            <InputOTPSlot
                                                key={index}
                                                index={index}
                                                className="w-12 h-14 md:w-14 md:h-16 rounded-xl border-[#bccac0]/30 bg-[#f0f4f8] text-[#171c1f] font-bold text-xl focus:ring-[#006948]"
                                            />
                                        ))}
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>

                            <div className="space-y-4">
                                <Button variant="premium" size="premium" className="w-full rounded-2xl h-14">
                                    Verify & Login
                                </Button>
                                <p className="text-center text-sm text-[#404944]">
                                    Didn't receive the code? <button className="text-[#006948] font-bold hover:underline">Resend</button>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Footer */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
                <p className="text-sm text-[#404944] mb-8">
                    Don't have an account? <Link href={'/register'} className="text-[#006948] font-bold cursor-pointer hover:underline">Sign up</Link>
                </p>
                <div className="flex gap-8 justify-center opacity-40">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#171c1f]">Privacy Policy</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#171c1f]">Terms of Service</span>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginPage