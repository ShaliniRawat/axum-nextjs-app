import { motion, AnimatePresence } from 'framer-motion'

const ContactSvg = () => {
  const colors = ['#d5c4a1', '#bdae93', '#a89984']

  return (
    <svg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='svg 1' clipPath='url(#clip0_5_11)'>
        <g id='mainGroup'>
          <motion.path
            animate={{
              fill: colors,
              transition: {
                type: 'keyframes',
                repeat: Infinity,
                duration: 2,
                repeatType: 'reverse',
                ease: 'linear'
              }
            }}
            id='contact-phone'
            d='M147.328 99.1367C146.368 99.1367 145.423 99.3046 144.527 99.6406C142.727 100.305 141.089 101.096 139.625 102.008L136.264 104.377C135.819 104.77 135.387 105.178 134.969 105.6C131.777 108.8 129.481 112.944 128.145 117.928C121.233 143.864 140.519 186.087 175.039 220.623C204.343 249.927 240.288 268.863 266.6 268.863C270.64 268.863 274.384 268.408 277.736 267.512C282.72 266.184 286.872 263.888 290.072 260.68C290.584 260.168 291.072 259.648 291.512 259.08L293.904 255.672C294.568 254.584 295.36 252.952 296.016 251.16C297.376 247.488 295.849 243.08 292.385 240.664L264.152 220.943C260.024 218.063 253.888 219.152 251.016 223.264L242.057 236.129C239.601 239.625 234.848 240.584 231.232 238.32C218.64 230.4 204.232 218.56 190.672 205C177.104 191.44 165.272 177.031 157.344 164.439C156.249 162.698 155.867 160.602 156.276 158.586C156.686 156.571 157.857 154.791 159.545 153.615L172.385 144.656C176.665 141.672 177.697 135.776 174.721 131.496L155 103.279C154.14 102.031 152.996 101.005 151.662 100.285C150.329 99.565 148.843 99.1714 147.328 99.1367Z'
            fill='#EBDBB2'
          />
          <path
            id='contact-bindings'
            d='M8 88C5.87827 88 3.84344 88.8428 2.34315 90.3431C0.842856 91.8434 0 93.8783 0 96V128C-1.01012e-06 130.12 0.841783 132.154 2.34039 133.654C3.83899 135.154 5.87181 135.998 7.99219 136H58.6641C60.7858 136 62.8206 135.157 64.3209 133.657C65.8212 132.157 66.6641 130.122 66.6641 128V96C66.6641 93.8783 65.8212 91.8434 64.3209 90.3431C62.8206 88.8428 60.7858 88 58.6641 88H8ZM8 160C5.87827 160 3.84344 160.843 2.34315 162.343C0.842856 163.843 0 165.878 0 168V200C-1.01012e-06 202.12 0.841783 204.154 2.34039 205.654C3.83899 207.154 5.87181 207.998 7.99219 208H58.6641C60.7858 208 62.8206 207.157 64.3209 205.657C65.8212 204.157 66.6641 202.122 66.6641 200V168C66.6641 165.878 65.8212 163.843 64.3209 162.343C62.8206 160.843 60.7858 160 58.6641 160H8ZM8 232C5.87827 232 3.84344 232.843 2.34315 234.343C0.842856 235.843 0 237.878 0 240V272C0 274.122 0.842856 276.157 2.34315 277.657C3.84344 279.157 5.87827 280 8 280H58.6641C60.7858 280 62.8206 279.157 64.3209 277.657C65.8212 276.157 66.6641 274.122 66.6641 272V240C66.6641 237.878 65.8212 235.843 64.3209 234.343C62.8206 232.843 60.7858 232 58.6641 232H8Z'
            fill='#7C6F64'
          />
          <path
            id='contact-book'
            d='M319.672 0H69.672C47.616 0 29.672 17.944 29.672 40V72H58.664C71.904 72 82.664 82.768 82.664 96V128C82.6615 131.965 81.6758 135.867 79.7952 139.357C77.9146 142.848 75.1978 145.817 71.888 148C75.1978 150.183 77.9146 153.152 79.7952 156.643C81.6758 160.133 82.6615 164.035 82.664 168V200C82.6615 203.965 81.6758 207.867 79.7952 211.357C77.9146 214.848 75.1978 217.817 71.888 220C75.1978 222.183 77.9146 225.152 79.7952 228.643C81.6758 232.133 82.6615 236.035 82.664 240V272C82.664 285.232 71.904 296 58.664 296H29.672V328C29.672 350.056 47.624 368 69.672 368H319.672C341.728 368 359.672 350.056 359.672 328V40C359.672 17.944 341.728 0 319.672 0ZM311.032 256.704C309.992 259.504 308.712 262.144 307.232 264.512L304.376 268.592C303.459 269.796 302.459 270.935 301.384 272C296.168 277.216 289.608 280.904 281.864 282.976C276.882 284.265 271.754 284.9 266.608 284.864C235.792 284.864 196.368 264.584 163.728 231.936C124.752 192.96 104.24 145.488 112.688 113.8C114.752 106.064 118.448 99.496 123.664 94.28C124.648 93.296 125.664 92.384 126.736 91.536L130.792 88.672C133.37 87.0414 136.114 85.6873 138.976 84.632C149.336 80.792 161.632 84.84 168.112 94.12L187.84 122.344C191.699 127.881 193.202 134.723 192.02 141.368C190.838 148.013 187.068 153.917 181.536 157.784L175.12 162.256C182.168 172.272 191.496 183.208 201.984 193.68C212.464 204.168 223.392 213.496 233.408 220.544L237.888 214.12C239.799 211.379 242.232 209.042 245.047 207.241C247.862 205.441 251.004 204.213 254.294 203.627C257.583 203.042 260.956 203.11 264.22 203.829C267.483 204.548 270.573 205.903 273.312 207.816L301.552 227.544C311.04 234.184 314.944 246.168 311.024 256.704H311.032Z'
            fill='#EBDBB2'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_5_11'>
          <rect width='359.672' height='368' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ContactSvg
