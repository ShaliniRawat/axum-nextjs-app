import { useState } from 'react'

const SectionSpy = () => {
  const [activeSection, setActiveSection] = useState('')

  return <div>{activeSection}</div>
}

export default SectionSpy
