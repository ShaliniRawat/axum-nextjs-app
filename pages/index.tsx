import Layout from '@/components/layout'
import Section from '@/components/section'
import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'
import AnimatedSvg from '@/components/svganim'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const list = ['Devloper', 'Photographer', 'Speaker', 'Designer']

export default function Index() {
  return (
    <Layout>
      <Section linebreak>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-52'>
          <div className='h-auto w-full'>
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
            <div className='flex flex-row mt-12 md:mt-24'>
              <p className='text-4xl font-bold'>More About Me</p>
              <AnimatedSvg />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
