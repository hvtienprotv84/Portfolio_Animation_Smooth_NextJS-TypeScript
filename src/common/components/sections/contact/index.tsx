'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/common/lib/hooks'
import SubmitBtn from './_components/submit-btn'
import SectionHeading from '@/common/components/shared/section-heading'
import toast from 'react-hot-toast'
import { sendEmail } from '@/common/utils/actions/send-email'

export default function Contact() {
  const { ref } = useSectionInView('contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center dark:text-white dark:bg-darkBg w-full items-center flex flex-col lg:pb-[-150px] scroll-mt-12"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className='lg:mt-[-150px]'>
      <SectionHeading >Contact</SectionHeading>
      </div>
      <div className="w-[min(100%,38rem)] px-4">

        <form
          className="mt-4 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Email sent successfully!')
          }}
        >
          <input
            className="h-14 px-4 border bg-gray-50 dark:bg-white rounded-lg dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Email của bạn"
          />
          <textarea
            className="h-52 my-3 rounded-lg resize-none border p-4 bg-gray-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Nội Dung Tin Nhắn"
            required
            maxLength={5000}
          />
          <div className="flex mt-[10px] pb-[30px]">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  )
}
