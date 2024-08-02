'use client'

import 'next-cloudinary/dist/cld-video-player.css'
import SectionDivider from '@/common/components/shared/section-divider'
import TextAnimation from './_components/text-animation'
import { useSectionInView } from '@/common/lib/hooks'
import { useActiveSectionContext } from '@/common/stores/active-section'
import { smoothScrollTo } from '@/common/lib/utils'
import { motion } from 'framer-motion'
import { Linkedin, Facebook, Github } from 'lucide-react'
import { SiZalo } from "react-icons/si";
import Image from 'next/image'

export default function Hero() {
  const { ref } = useSectionInView('home')
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <>
      <section
        className="flex flex-col h-screen w-full scroll-mt-36 justify-center items-center relative"
        id="home"
        ref={ref}
      >
        <div
          className={
            'absolute top-0 left-0 h-screen dark:bg-[#0000007c]'
          }
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 object-cover h-screen w-screen"
        >
          <source src="/layout.mp4" />
        </video>
        <div className="flex flex-col items-start justify-center container tracking-wide text-black dark:text-[#ff5c00]">
          <div className="relative w-full h-full container flex flex-col items-center">
            <div className="lg:text-[3rem] text-[2rem] font-extrabold lg:mb-5 text-center h-72 w-[280px] sm:w-[520px] md:w-[700px] lg:w-[920px]">
              <motion.span
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                className="font-extrabold mb-10 text-start"
              >
                Xin Chào!
              </motion.span>
              <br />
              <TextAnimation delay={1} baseText={`Tôi là Huỳnh Vĩnh Tiến`} />
              {/* <p>Tôi là Huỳnh Vĩnh Tiến</p> */}
            </div>
            <motion.div
              className="flex flex-col md:flex-row w-92 items-center md:mt-12 justify-center gap-3 px-4 lg:text-lg font-medium text-sm"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group w-64 sm:w-auto bg-darkBg text-white hover:dark:text-black px-7 py-3 cursor-pointer flex items-center gap-2 rounded-full outline-none hover:bg-lightBeige/50 hover:text-black transition justify-center"
                onClick={(e) => {
                  smoothScrollTo({ e, id: 'contact' })
                  setActiveSection('contact')
                  setTimeOfLastClick(Date.now())
                }}
              >
                <span>Contact me</span>
              </a>

              <a
                className="group w-64 sm:w-auto bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10 justify-center text-black dark:text-[#ff5c00] dark:hover:bg-white/20 hover:bg-white/50"
                href="/"
                download
              >
                <span>Download CV</span>
              </a>

              <div className="flex gap-2">
                <a
                  className="bg-white p-2 text-black hover:text-gray-950 flex items-center justify-center gap-2 rounded-full w-[50px] h-[50px] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#ff5c00] dark:hover:bg-white/20 hover:bg-white/50"
                  href="/"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  className="bg-white p-2 text-black hover:text-gray-950 flex items-center justify-center gap-2 rounded-full w-[50px] h-[50px] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#ff5c00] dark:hover:bg-white/20 hover:bg-white/50"
                  href="/"
                  target="_blank"
                >
                  <SiZalo />
                </a>
                <a
                  className="bg-white p-2 text-gray-700 flex items-center gap-2 rounded-full hover:text-gray-950 w-[50px] h-[50px] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#ff5c00] justify-center dark:hover:bg-white/20 hover:bg-white/50"
                  href="/"
                  target="_blank"
                >
                  <Github
                    width={25}
                    height={25}
                    // src={'/svgs/github.svg'}
                    // alt="github icon"
                  />
                </a>
                <a
                  className="bg-white p-2 text-black hover:text-gray-950 flex items-center justify-center gap-2 rounded-full w-[50px] h-[50px] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#ff5c00] dark:hover:bg-white/20 hover:bg-white/50"
                  href="/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="dark:bg-darkBg flex justify-center rotate-90">
        <SectionDivider />
      </div>
    </>
  )
}
