import React from 'react'
import Section from './section'
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaCopy
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

type IconItem = {
  name: string
  component: React.JSX.Element
}

const iconItems: IconItem[] = [
  { name: 'https://twitter.com', component: <FaTwitter /> },
  { name: 'https://facebook.com', component: <FaFacebook /> },
  { name: 'https://instagram.com', component: <FaInstagram /> },
  { name: 'https://youtube.com', component: <FaYoutube /> },
  { name: 'https://linkedin.com', component: <FaLinkedin /> }
]

const InputContainer = () => {
  const email = 'emailaddress@provider.com'

  const copyText = () => {
    navigator.clipboard.writeText(email)
  }

  return (
    <div className='flex w-full relative row-auto my-2'>
      <input
        className='text-gruvbox-dark3 bg-gruvbox-light0 overflow-x-auto
        border-solid border-b-2 border-gruvbox-orange w-full text-lg focus:outline-none'
        type='text'
        value={email}
        readOnly
      />
      <button className='-ml-4' onClick={copyText}>
        <FaCopy />
      </button>
    </div>
  )
}

const Contact = () => {
  return (
    <div
      className='flex flex-col w-96  bg-gruvbox-light0
       border-2 border-gruvbox-dark4 -mt-24 p-6 relative'
    >
      <h2
        className={`text-3xl mb-6 bold text-gruvbox-dark0 ${robotoMono.className}`}
      >
        Contact Me
      </h2>
      <label className='bold text-xl text-gruvbox-dark0'>Email</label>
      <InputContainer />
      <p className='text-gruvbox-dark2 text-sm'>sed do eiusmod tempor</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='flex items-center mt-20 md:mt-40 pt-6 md:pt-18 pb-10 md:pb-20 relative bg-gruvbox-light1'>
      <Section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-24 max-w-4xl'>
          <Contact />
          <div className='space-y-4 text-2xl'>
            <div className='flex flex-row space-x-4'>
              {iconItems.map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.name}
                >
                  {item.component}
                </motion.a>
              ))}
            </div>
            <div className='text-base italic'>
              <p>Lorem ipsum dolor sit,</p>
              <p>consectetur adipiscing,</p>
              <p>sed do eiusmod tempor</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Footer
