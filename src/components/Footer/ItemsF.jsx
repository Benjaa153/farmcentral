import React from 'react'

const ItemsF = ({ Links, title }) => {
  return (
    <ul className='sm:mx-auto md:mx-auto lg:mx-auto'>
      <h1 className='mb-1 font-lora'>{title}</h1>
      {
        Links.map((link) => (
          <li key={link.name}>
            <a className='text-darkcyan hover:text-keppel duration-300 text-sm cursor-pointer leading-6' href={link.link}>{link.name}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default ItemsF