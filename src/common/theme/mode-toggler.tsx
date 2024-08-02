'use client'

import * as React from 'react'
import { Moon, Sun, ChevronUp } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/common/components/ui/button'
import { useHasMounted } from '@/common/lib/hooks'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const hasMounted = useHasMounted()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const goToHome = () => {
    window.location.href = '#'; // Điều hướng đến /home
  };

  if (!hasMounted) return null

  return (
    <div  className='lg:w-[1500px]'>
    <Button
      className="bg-transparent text-gray-700 dark:text-white opacity-80 p-0 border-black dark:border-white border-[2px] border-dashed"
      size={'sm'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
    <Button
        className="bg-transparent text-gray-700 absolute ml-[310px] lg:mr-[30px] lg:right-0 dark:text-white opacity-80 p-0 border-black dark:border-white border-[2px] border-dashed"
        size={'sm'}
        onClick={goToHome}>
        <ChevronUp />
      </Button>
    </div>
  )
}
