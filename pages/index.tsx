import Layout from '@/components/layout'
import Section from '@/components/section'
import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'
import ArrowSvg from '@/components/arrowSvg'
import EmptySection from '@/components/emptySection'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const list = ['Devloper', 'Photographer', 'Speaker', 'Designer']

const Section1 = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 1.2,
      behavior: 'smooth'
    })
  }

  return (
    <Section linebreak>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-52'>
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
            onClick={handleScroll}
            className='flex flex-row mt-12 md:mt-24 cursor-pointer'
          >
            <p className='text-4xl font-bold'>
              More About Me
            </p>
            <ArrowSvg />
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section2 = () => {
  return (
    <Section linebreak>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-32'>
        <div className='col-span-2'>
          <h1 className={`${robotoMono.className} font-bold text-6xl mb-16`}>
            In brief.
          </h1>
        </div>
        <div className='col-span-1 mb-56'>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
