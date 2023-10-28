import React from 'react'
import Section from './section'
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
import { motion } from 'framer-motion'

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

const Footer = () => {
  return (
    <div className='mt-20 lg:mt-40 pt-6 md:pt-18 px-8 md:px-52 pb-10 md:pb-20 relative bg-gruvbox-light1 box-border'>
      <Section>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl'>
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
