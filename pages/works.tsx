import Layout from '@/components/layout'
import Section from '@/components/section'

export default function AboutPage() {
  return (
    <Layout>
      <Section linebreak>
        <div className='container mx-auto'>
          <div className='grid-cols-3 p-20 space-y-2 bg-gruvbox-light0 md:space-y-0 md:grid md:gap-3 md:grid-rows-3'>
            <div className='w-full rounded'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
                alt='image'
              />
            </div>
            <div className='w-full col-span-2 row-span-2 rounded'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
                alt='image'
              />
            </div>
            <div className='w-full rounded'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
                alt='image'
              />
            </div>
            <div className='w-full rounded'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
                alt='image'
              />
            </div>
            <div className='w-full rounded'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
                alt='image'
              />
            </div>
            <div className='w-full rounded'>
              <img
                src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
                alt='image'
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
