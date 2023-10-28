import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  children?: ReactNode
}

const variants = {
  enter: { opacity: 1, x: 0, y: 100 },
  exit: { opacity: 0, x: 0, y: -100 }
}

const Layout = ({ children }: Props): React.JSX.Element => {
  return (
    <div>
      <AnimatePresence>
        <motion.main
          className='flex flex-col items-center w-full h-full'
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ type: 'linear' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout
