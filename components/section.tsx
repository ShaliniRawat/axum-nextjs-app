import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  linebreak?: boolean
}

const linebreakStyles = 'mt-18 md:mt-32'

const Section = ({ children, linebreak = false }: IProps): JSX.Element => (
  <section
    className={`text-gruvbox-dark2 ${
      linebreak ? linebreakStyles : 'mt-12'
    } mx-auto mb-auto`}
  >
    {children}
  </section>
)

export default Section
