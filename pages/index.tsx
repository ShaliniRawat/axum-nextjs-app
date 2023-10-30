import Layout from '@/components/layout'
import Section from '@/components/section'
import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'
import ArrowSvg from '@/components/arrow-svg'
import EmptySection from '@/components/empty-section'
import { motion, AnimatePresence } from 'framer-motion'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const list = ['Devloper', 'Photographer', 'Speaker', 'Designer']

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Section1 = () => {
  return (
    <Section linebreak>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-52 ml-6'>
        <div className='h-96 flex md:h-auto w-full'>
          <Image
            src='/gruv.jpg'
            alt='My Image'
            width={500}
            height={500}
            loading='lazy'
          />
        </div>
        <div className={`${robotoMono.className} ml-14`}>
          <h1 className='text-7xl font-bold mb-12'>NAME</h1>
          <ul className='list-none mb-12'>
            {list.map((info, index) => (
              <li className='text-4xl box-border mt-5' key={index}>
                {info}
              </li>
            ))}
          </ul>
          <div
            onClick={() => {
              scrollTo('aboutMe')
            }}
            className='flex flex-row mt-12 md:mt-24 cursor-pointer'
          >
            <AnimatePresence>
              <motion.p
                className='text-4xl font-bold cursor-pointer'
                animate={{
                  WebkitTextFillColor: ['#d65d0e', '#98971a'],
                  y: 10,
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    type: 'keyframes',
                    repeatType: 'reverse',
                    ease: 'linear'
                  }
                }}
              >
                More About Me
              </motion.p>
            </AnimatePresence>
            <ArrowSvg />
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section2 = () => {
  return (
    <Section id='aboutMe' linebreak>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-32 ml-6'>
        <div className='col-span-2'>
          <h1 className={`${robotoMono.className} font-bold text-6xl mb-16`}>
            In brief.
          </h1>
        </div>
        <div className='col-span-1 mb-56'>
          <p className='text-xl mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='text-xl'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default function Index() {
  return (
    <Layout>
      <Section1 />
      <EmptySection />
      <Section2 />
    </Layout>
  )
}
