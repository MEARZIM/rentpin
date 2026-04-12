'use client'

import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, UserCircle, Mail, MapPin, ChevronRight, CheckCircle, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel,
    FieldGroup
} from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import RentPinLogo from '@/components/icons/logo'

import { RegisterFormValues, registerSchema } from "@/modules/user/validations/user.auth"

const RegisterPage = () => {
    const [step, setStep] = useState<'details' | 'verify'>('details')
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep('verify')
    }

    const steps = [
        { icon: <UserCircle />, title: "Personal Details", desc: "Your legal name and contact." },
        { icon: <Globe />, title: "Community Verify", desc: "One-step identity check." },
        { icon: <MapPin />, title: "Find a Sanctuary", desc: "Start your direct connection." }
    ];

    return (
        <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center p-6 md:p-12 selection:bg-[#006948]/10">

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center gap-2 mb-16 md:mb-20 cursor-pointer group"
            >
                <RentPinLogo className="w-10 h-10 md:w-12 md:h-12" />
                <span className="font-heading text-xl md:text-2xl text-[#171c1f]">Rent Pin</span>
            </motion.div>

            <div className="w-full max-w-7xl grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">

                {/* Editorial Voice */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
                    className="lg:col-span-5 space-y-12 pr-6"
                >
                    <div>
                        <span className="text-[#006948] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Join The Community</span>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-[#171c1f] leading-none tracking-tighter">
                            Create your <br /> direct <span className="italic font-serif font-light text-[#006948]">account</span>
                        </h1>
                        <p className="mt-8 text-[#404944] text-lg md:text-xl leading-relaxed max-w-md opacity-90">
                            No brokers. No hidden fees. Just direct connections to thoughtful hosts.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.15 }}
                                className="flex items-center gap-5 p-5 bg-white rounded-3xl shadow-sm border border-[#bccac0]/10"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#006948]/5 flex items-center justify-center text-[#006948]">
                                    {React.cloneElement(step.icon as React.ReactElement, { size: 24 } as any)}
                                </div>
                                <div>
                                    <h4 className="font-heading text-lg font-bold text-[#171c1f] mb-1">{step.title}</h4>
                                    <p className="text-sm text-[#404944]/80">{step.desc}</p>
                                </div>
                                <CheckCircle size={20} className="ml-auto text-[#006948]/20" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Logic Managed Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
                    className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_48px_80px_-20px_rgba(23,28,31,0.08)] relative overflow-hidden min-h-150"
                >
                    <AnimatePresence mode="wait">
                        {step === 'details' ? (
                            <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <div className="text-center mb-12">
                                    <UserCircle size={48} className="text-[#006948] mx-auto mb-6" />
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#171c1f]">Start your journey</h2>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    <FieldGroup className="grid md:grid-cols-2 gap-8">
                                        <Field invalid={!!errors.firstName}>
                                            <FieldLabel className="text-[10px] font-bold uppercase tracking-widest text-[#006948] ml-2">First Name</FieldLabel>
                                            <FieldContent>
                                                <Input
                                                    placeholder="John"
                                                    className="h-14 rounded-2xl bg-[#f0f4f8] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#006948]/20"
                                                    {...register("firstName")}
                                                />
                                            </FieldContent>
                                            <FieldError errors={[errors.firstName]} className="text-[10px] ml-2" />
                                        </Field>

                                        <Field invalid={!!errors.lastName}>
                                            <FieldLabel className="text-[10px] font-bold uppercase tracking-widest text-[#006948] ml-2">Last Name</FieldLabel>
                                            <FieldContent>
                                                <Input
                                                    placeholder="Doe"
                                                    className="h-14 rounded-2xl bg-[#f0f4f8] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#006948]/20"
                                                    {...register("lastName")}
                                                />
                                            </FieldContent>
                                            <FieldError errors={[errors.lastName]} className="text-[10px] ml-2" />
                                        </Field>
                                    </FieldGroup>

                                    <Field invalid={!!errors.email}>
                                        <FieldLabel className="text-[10px] font-bold uppercase tracking-widest text-[#006948] ml-2">Email Address</FieldLabel>
                                        <FieldContent className="relative">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#404944]/40" size={18} />
                                            <Input
                                                placeholder="john@example.com"
                                                className="h-14 rounded-2xl bg-[#f0f4f8] border-none pl-12 pr-6 focus-visible:ring-1 focus-visible:ring-[#006948]/20"
                                                {...register("email")}
                                            />
                                        </FieldContent>
                                        <FieldError errors={[errors.email]} className="text-[10px] ml-2" />
                                    </Field>

                                    <Field invalid={!!errors.phone}>
                                        <FieldLabel className="text-[10px] font-bold uppercase tracking-widest text-[#006948] ml-2">Phone Number</FieldLabel>
                                        <FieldContent className="flex h-14 rounded-2xl bg-[#f0f4f8] overflow-hidden focus-within:ring-1 focus-within:ring-[#006948]/20 transition-all">
                                            <div className="flex items-center px-5 border-r border-[#bccac0]/20 text-sm font-bold text-[#171c1f]">+1</div>
                                            <Input
                                                type="tel"
                                                placeholder="Mobile number"
                                                className="h-full border-none bg-transparent focus-visible:ring-0 px-5 w-full"
                                                {...register("phone")}
                                            />
                                        </FieldContent>
                                        <FieldError errors={[errors.phone]} className="text-[10px] ml-2" />
                                    </Field>

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full rounded-2xl h-16 text-base font-bold bg-[#006948] hover:bg-[#005a3e] shadow-lg shadow-[#006948]/20 group transition-all"
                                    >
                                        {isLoading ? <Loader2 className="animate-spin mx-auto" /> : (
                                            <>
                                                Verify & Create Account
                                                <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </Button>
                                </form>

                                <div className="relative my-12 text-center">
                                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#171c1f]/5"></div></div>
                                    <span className="relative bg-white px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#404944]/40">OR</span>
                                </div>

                                <Button variant="outline" className="w-full h-14 rounded-2xl border-[#bccac0] hover:bg-[#f0f4f8] font-bold transition-colors">
                                    <img src="https://www.google.com/favicon.ico" className="w-6 h-6 mr-2" alt="Google" />
                                    Google
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div key="verify" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <button onClick={() => setStep('details')} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#404944] mb-8 hover:text-[#006948] transition-colors">
                                    <ArrowLeft size={14} /> Back to Details
                                </button>

                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-[#006948]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#006948]">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#171c1f]">Confirm Code</h2>
                                    <p className="text-sm text-[#404944] opacity-60 mt-2">Sent to {getValues("phone")}</p>
                                </div>

                                <div className="flex justify-center mb-10">
                                    <InputOTP maxLength={6}>
                                        <InputOTPGroup className="gap-3">
                                            {[0, 1, 2, 3, 4, 5].map(i => (
                                                <InputOTPSlot key={i} index={i} className="w-12 h-16 md:w-14 md:h-20 rounded-2xl bg-[#f0f4f8] border-none text-2xl font-bold text-[#171c1f] focus:ring-1 focus:ring-[#006948]" />
                                            ))}
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>

                                <Button className="w-full h-16 rounded-2xl bg-[#006948] hover:bg-[#005a3e] text-white font-bold transition-all shadow-lg shadow-[#006948]/20">
                                    Complete Registration
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-16 text-center">
                <p className="text-sm text-[#404944]">
                    Already part of the sanctuary? <Link href={'/login'} className="text-[#006948] font-bold cursor-pointer hover:underline">Log In</Link>
                </p>
            </motion.div>
        </div>
    )
}

export default RegisterPage