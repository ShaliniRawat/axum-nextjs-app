import { useEffect, useState } from 'react'

const SectionSpy = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting && id) {
          setActiveSection(id)
        } else if (activeSection === id) {
          setActiveSection('')
        }
      })
    })

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  })

  return (
    <span
      className='text-gruvbox-dark2 font-bold bg-transparent text-2xl'
      style={{
        transform: 'rotate(90deg)',
        whiteSpace: 'nowrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {activeSection}
    </span>
  )
}

export default SectionSpy
