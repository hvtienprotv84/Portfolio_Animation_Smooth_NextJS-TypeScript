'use client'

import { useSectionInView } from '@/common/lib/hooks'
import portfolioImg from '@/../public/images/logo_1.jpg'
import { smoothScrollTo } from '@/common/lib/utils'
import SectionDivider from '@/common/components/shared/section-divider'
import SectionHeading from '@/common/components/shared/section-heading'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'

export default function About() {
  const { ref } = useSectionInView('about', 0.4)
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section
      className="flex flex-col md:scroll-mt-4 lg:scroll-mt-24 items-center justify-start leading-8 pb-[50px] z-50 w-full dark:bg-darkBg dark:text-white mt-[50px]"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col items-center w-full">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full sm:w-[60%] sm:text-center lg:w-[1040px] xl:w-[1180px] lg:h-[550px] overflow-hidden py-12 px-4"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div className="relative group w-full ">
            <div className="flex flex-col gap-3 relative lg:text-start lg:block lg:absolute lg:right-0 lg:top-[27%] xl:top-1/3 lg:max-w-[580px] xl:max-w-[650px] text-md lg:text-lg z-40 font-semibold tracking-wide text-primary xl:h-[442px]">
              <div className="flex flex-col gap-6 justify-center h-full">
                <b className='lg:text-6xl text-4xl'>Huỳnh Vĩnh Tiến</b>
                <span>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod vehicula sodales aptent imperdiet vestibulum 
                ultricies euismod velit. Platea vel blandit primis facilisi aptent inceptos. Mattis facilisis laoreet habitant 
                consectetur sodales molestie at.
                </span>
                <span>
                Morbi neque tempor porta, dapibus eget eros. Ultricies fusce hendrerit auctor 
                elit fermentum porta potenti aliquet. Curabitur tempor ultrices rhoncus
                maecenas semper varius magnis ante.
                </span>
                <p className="flex flex-col items-start sm:items-center lg:items-start">
                  <span>Xin Cám Ơn! Hãy Liên Hệ Tôi.</span>
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' })
                    }}
                    className="w-52 lg:w-40"
                  >
                    <span className="text-2xl font-bold dark:bg-[#ddbea9] uppercase lg:normal-case bg-[#ffcbb4]">
                      Liên hệ tôi!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="absolute hidden lg:block lg:left-0 lg:top-1/4 z-30">
              <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px] xl:w-[470px] xl:h-[470px]">
                <div className="group-hover:opacity-60 transition-opacity absolute inset-0 bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] rounded-full z-20"></div>
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="portfolio image"
                    placeholder="blur"
                    width={470}
                    height={470}
                    className="rounded-full z-10 lg:w-[380px] lg:h-[380px] xl:w-[470px] xl:h-[470px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="dark:bg-darkBg flex justify-center rotate-90">
        <SectionDivider />
      </div>
    </motion.section>
  )
}
