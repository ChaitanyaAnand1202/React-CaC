import React from 'react'
import menus from './data'
import MenuList from './MenuList'

function TreeView() {



  return (
    <div className='h-[100vh] w-[100vw] bg-gray-500 text-white'>
      <div className='h-[100vh] w-[30%] bg-gray-700 text-white'>
        <MenuList menu={menus} />
      </div>

    </div>
  )
}

export default TreeView