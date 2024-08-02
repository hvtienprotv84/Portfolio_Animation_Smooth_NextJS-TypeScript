'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export interface IRedoTextAnimationProps {
  delay: number
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0)

  const texts = [
    'Software Engineer',
    'Front-End Developer',
    'Back-End Developer',
    'Designer UI/UX',
  ]

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '')
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  )
  const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false)
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0)
          } else {
            textIndex.set(textIndex.get() + 1)
          }
          updatedThisRound.set(true)
        }
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.span className="lg:text-[1.7rem] md:text-[1.5rem] text-[1.2rem] h-32 max-w-96 font-bold bg-lightBeige dark:bg-darkBeige">
      {displayText}
    </motion.span>
  )
}
