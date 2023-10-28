import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Roboto_Mono } from 'next/font/google'
import { motion } from 'framer-motion'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const fontStyle = { objectFit: 'cover', width: '100%', height: '100%' }

type Link = {
  name: string
  url: string
}

const Links: Link[] = [
  { name: 'About', url: '/' },
  { name: 'Works', url: '/works' },
  { name: 'Contact', url: '/contact' }
]

const containerVariants = {
  hidden: {
    opacity: 1,
    x: '100%',
    transition: { ease: [0.17, 0.67, 0.83, 0.67] }
  },
  visible: { opacity: 1, x: 0, transition: { ease: [0.16, 1, 0.3, 1] } }
}

const Header = () => {
  const router = useRouter()
  const [isUlOpen, setUlOpen] = useState(false)

  const isActive = (pathname: string) => {
    return router.pathname === pathname
      ? 'text-gruvbox-dark2 font-bold'
      : 'text-gruvbox-gray'
  }

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth > 768) {
        setUlOpen(true)
      } else {
        setUlOpen(false)
      }
    }

    const handleScroll = () => {
      if (isUlOpen) {
        setUlOpen(false)
      }
    }

    window.addEventListener('resize', checkWindowSize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkWindowSize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isUlOpen])

  const toggleUl = () => {
    setUlOpen(!isUlOpen)
  }

  return (
    <nav
      className='flex justify-end items-end fixed z-50
      flex-col-reverse right-0 w-screen h-screen ml-auto
      md:flex-row md:top-0 md:w-full md:h-16 md:ml-0'
    >
      <motion.ul
        className={`${
          robotoMono.className
        } text-2xl flex flex-col md:flex-row bg-gruvbox-light0 border-gruvbox-light0
         w-full h-full items-end md:justify-end
          ${isUlOpen ? 'block' : 'hidden'}
        `}
        variants={containerVariants}
        initial='visible'
        animate={isUlOpen ? 'visible' : 'hidden'}
      >
        {Links.map((item, index) => (
          <motion.li
            key={index}
            className='mx-6 my-8 md:my-0'
            whileTap={{ scale: 0.9 }}
          >
            <Link href={item.url} className={`${isActive(item.url)}`}>
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <div
        className={`flex w-screen md:w-fit justify-end ${
          isUlOpen ? 'bg-transparent' : 'bg-gruvbox-light0'
        }`}
      >
        <motion.button
          onClick={toggleUl}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='h-8 w-8 flex items-center justify-center cursor-pointer text-gruvbox-dark2 mx-8 my-8 md:my-0'
        >
          {isUlOpen ? (
            <FaTimes style={fontStyle} />
          ) : (
            <FaBars style={fontStyle} />
          )}
        </motion.button>
      </div>
    </nav>
  )
}

export default Header
