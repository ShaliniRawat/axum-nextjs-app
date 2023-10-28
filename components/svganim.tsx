import { motion } from 'framer-motion'

const transition = {
  duration: 2,
  type: 'tween',
  repeat: Infinity
}

const AnimatedSvg = () => {
  return (
    <svg
      width='120'
      height='100'
      viewBox='0 0 120 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.g id='svgAnimation'>
        <motion.g id='darkGroup'>
          <motion.path
            id='dark1'
            d='M60.5 53L34.0862 7.25L86.9138 7.25L60.5 53Z'
            fill='#D65D0E'
            fillOpacity='0.7'
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transition}
          />
          <motion.path
            id='dark2'
            d='M60.5 74L34.0862 28.25L86.9138 28.25L60.5 74Z'
            fill='#D65D0E'
            fillOpacity='0.7'
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: '20%', opacity: 0 }}
            transition={transition}
          />
        </motion.g>
        <motion.g id='lightGroup'>
          <motion.path
            id='light1'
            d='M60.5 53L34.0862 7.25L86.9138 7.25L60.5 53Z'
            fill='#98971A'
            fillOpacity='0.6'
            initial={{ y: 0 }}
            animate={{ y: '20%' }}
            transition={transition}
          />
        </motion.g>
      </motion.g>
    </svg>
  )
}

export default AnimatedSvg
