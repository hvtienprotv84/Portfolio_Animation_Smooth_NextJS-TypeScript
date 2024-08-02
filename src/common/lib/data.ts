import React from 'react'

import campwithusImg from '@/../public/images/nuxt.png'
import filedriveImg from '@/../public/images/react.webp'
import surgeImg from '@/../public/images/angular2.svg'
import portfolioImg from '@/../public/images/vue.png'
import aiLawyerImg from '@/../public/images/next3.png'
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react'

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Thực Tập tại Công ty TNHH Giải Pháp và Công Nghệ',
    location: 'Quận 10, TP.HCM',
    description: `⫸ Thực Tập Front-End Developer`,
    description2: `⫸ Công Nghệ Sử Dụng: ReactJS, Tailwind CSS,...`,
    description3: `⫸ Top 1 Sinh Viên Hoàn Thành Xuất Sắc Task Được Giao.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Tháng 4 - Tháng 7, 2024',
  },
  {
    title: 'Technology University',
    location: 'Quận 9, TP.HCM',
    description: `⫸ Chuyên Ngành: Công Nghệ Phần Mềm`,
    description2: `⫸ GPA: 8.5/10`,
    description3: `⫸ Tốt Nghiệp Loại Giỏi Toàn Khóa Học.`,
    icon: React.createElement(BookIcon),
    date: '2020 - 2024',
  },
] as const

export const images = {
  campwithusImg,
}

export const projectsData = [
  {
    title: 'Portfolio ReactJS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: [
      'ReactJS',
      'Tailwind CSS',
    ],
    imageUrl: filedriveImg,
    link: '/',
  },
  {
    title: 'Portfolio VueJS',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    tags: [
      'ReactJS',
      'Tailwind CSS',
      'Vite'
    ],
    imageUrl: portfolioImg,
    link: '/',
  },
  {
    title: 'Portfolio NextJS',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    tags: [
      'NextJS',
      'ReactJS',
      'TypeScript',
      'Tailwind CSS',
    ],
    imageUrl: aiLawyerImg,
    link: '/',
  },
  {
    title: 'Portfolio Angular',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: [
      'Angular',
      'TypeScript',
    ],
    imageUrl: surgeImg,
    link: '/',
  },
  {
    title: 'Portfolio NuxtJS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: [
      'NuxtJS',
      'VueJS',
      'TypeScript',
      'Tailwind CSS',
    ],
    imageUrl: campwithusImg,
    link: '/',
  },
] as const

export const skillsData = [
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['ReactJS', '/svgs/react.svg'],
  ['NextJS', '/svgs/nextjs.svg'],
  ['VueJS', '/svgs/vue.webp'],
  ['Angular', '/svgs/angular.webp'],
  ['NodeJS', '/svgs/node-js.svg'],
  ['ExpressJS', '/svgs/express-original.svg'],
  ['Tailwind CSS', '/svgs/tailwind-css.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const
