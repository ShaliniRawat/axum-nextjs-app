import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  id?: string
  linebreak?: boolean
}

const linebreakStyles = 'mt-18 md:mt-32'

const Section = ({ id, children, linebreak = false }: IProps): JSX.Element => (
  <section
    id={id}
    className={`text-gruvbox-dark2 ${
      linebreak ? linebreakStyles : 'mt-12'
    } mx-auto mb-auto`}
  >
    {children}
  </section>
)

export default Section
