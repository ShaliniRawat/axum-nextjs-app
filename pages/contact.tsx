import Layout from '@/components/layout'
import Section from '@/components/section'
import { Roboto_Mono } from 'next/font/google'
import ClipboardInputBar from '@/components/copyToClipboard'
import ContactSvg from '@/components/contactSvg'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

type social = {
  name: string
  url: string
}

const SocialLink = ({ name, url }: social): React.JSX.Element => {
  return (
    <a
      className='text-gruvbox-green border-b-2 border-b-gruvbox-green border-dotted focus:outline-none'
      href={url}
    >
      {name}
    </a>
  )
}

export default function ContactPage() {
  return (
    <Layout>
      <Section linebreak>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 mb-52 ml-6'>
          <div className='w-full row-span-1'>
            <h1 className={`${robotoMono.className} text-6xl mb-4`}>
              Contact Me
            </h1>
            <p className='text-xl font-sans'>
              Feel free to send me a dm on{' '}
              <SocialLink name='Twitter' url='https://twitter.com' /> or{' '}
              <SocialLink name='Facebook' url='https://facebook.com' />.
            </p>
            <p className='text-xl mb-16 font-sans'>
              If you prefer email, you can reach me at my email below.
            </p>
            <ClipboardInputBar email='email@provider@gmail.com' />
          </div>
          <div className='row-span-2 hidden md:block'>
          <ContactSvg />
          </div>
        </div>
      </Section>
    </Layout>
  )
}
