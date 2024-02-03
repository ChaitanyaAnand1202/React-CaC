import React from 'react'
import MenuItem from './MenuItem'
import {nanoid} from 'nanoid'

function MenuList({menu}) {
  return (
    <div>
      {
        menu.map((item) => 
          <div key={nanoid()} className='p-3'>
            <MenuItem item = {item} />
          </div>
        )
      }
    </div>
  )
}

export default MenuList