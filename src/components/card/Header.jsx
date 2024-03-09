import React from 'react'
import { SocialButton } from './SocialButton'

export const Header = () => {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon='facebook' />
        <SocialButton icon='instagram' />
        <SocialButton icon='twitter' />
      </div>
      <div className="social-buttons right">
        <SocialButton icon='linkedin' />
        <SocialButton icon='github' />
      </div>
    </>
  )
}
