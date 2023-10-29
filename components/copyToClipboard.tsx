import * as React from 'react'
import { FaCopy } from 'react-icons/fa'

type Props = {
  email: string
}

const ClipboardInputBar = ({ email }: Props) => {
  const copyText = () => {
    navigator.clipboard.writeText(email)
  }

  return (
    <div className='flex w-full relative row-auto my-2'>
      <input
        className='text-gruvbox-dark3 bg-gruvbox-light0 overflow-x-auto
        border-solid border-b-2 border-gruvbox-orange max-w-xs w-full text-lg focus:outline-none'
        type='text'
        value={email}
        readOnly
      />
      <button className='-ml-4' onClick={copyText}>
        <FaCopy />
      </button>
    </div>
  )
}

export default ClipboardInputBar
