import React, { useState } from 'react'
import MenuList from './MenuList'

function MenuItem({ item }) {
  // console.log(item);
  const [showingChildren, setShowingChildren] = useState(false)
  const toggleShowing = () => {
    setShowingChildren(prev => !prev)
  }
  return (
    <div>
      <div className='flex gap-4'>
        <div>--- {item.label}</div>
        {
          item.children ? 
            showingChildren ? 
              <div onClick={toggleShowing} className='cursor-pointer'>-</div> 
              : <div onClick={toggleShowing} className='cursor-pointer'>+</div> 
            : null
        }
      </div>

      {
        item.children && item.children.length && showingChildren ? <MenuList menu={item.children} /> : null
      }
    </div>
  )
}

export default MenuItem