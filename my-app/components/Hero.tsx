import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from '@/components/ui/TextGeneratedEffect'
import MagicButton from "@/components/ui/MagicButton"
import { cn } from '@/lib/utils'
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div className="dark:block hidden">
                <Spotlight className="-top-40 -left-10 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
            </div>
            <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center 
                            bg-white dark:bg-black-100 
                            bg-grid-black-100/5 dark:bg-grid-white/3">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center 
                                bg-white dark:bg-black-100 
                                mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-600 dark:text-blue-100'>
                        Dynamic web magic with Next.js
                    </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Duy Khang is the greatest boy in the world!'>
                    </TextGenerateEffect>
                    <p className='text-center tracking-wider text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Duy Khang, a Fresher AI Engineer and I&apos;m from Vietnam. To be easier, you can call me as Kelvin.
                    </p>
                    <a href='#about'>
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero