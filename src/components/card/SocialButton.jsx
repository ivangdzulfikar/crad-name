import React from 'react'

export const SocialButton = ({icon}) => {
  return (
    <button>
      <i className={`fa-brands fa-${icon}`}></i>
    </button>
  )
}
