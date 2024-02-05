import React, { useRef, useState } from 'react'
import useClickOutside from './useClickOutside'

function UseClickOutsideTest() {
  const [showContent, setShowContent] = useState(false)
  const hideRef = useRef()
  useClickOutside(hideRef, () => setShowContent(false))

  return (
    <div className='min-h-[100vh] w-[100vw] bg-gray-600 text-white'>
      {
        showContent ?
          <div className='text-center' ref={hideRef}>
            <p className='text-3xl p-4'>This is Hidden Content</p>
            <p className='text-2xl p-2'>Click outside this to hide the content</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis, ea natus soluta quis voluptatibus hic asperiores sed temporibus corrupti dolorum, corporis eveniet, accusamus quasi voluptatem? Quia sint itaque neque.
            Corrupti, culpa temporibus. Dolor delectus quisquam exercitationem voluptatem harum nobis minima, cum vel consequatur ullam, repudiandae non, fugit molestias rerum hic odio labore possimus consectetur amet doloribus distinctio tempore iste!
            Voluptas necessitatibus, tempora exercitationem reiciendis accusamus delectus deserunt. Iste numquam fuga optio eius id maxime at quaerat veniam temporibus sunt, quae, animi earum illum suscipit ex consequuntur quos perferendis quas.
            Laudantium itaque totam quod obcaecati exercitationem vero rerum fuga, doloribus voluptatum necessitatibus unde error similique animi sint nobis suscipit mollitia temporibus quis aspernatur at! Inventore, enim? Consequuntur quidem asperiores quaerat?
            Ab nihil hic totam exercitationem ratione tempore adipisci sit doloremque harum eius provident deserunt in, excepturi esse architecto temporibus aliquam aspernatur laborum accusamus porro laudantium molestias. Eius quo ut fugiat!</p>
          </div>
        : <div className='flex justify-center my-4'><button onClick={()=>setShowContent(true)} className='p-2 bg-white text-black'>Show Content</button></div>
      }
    </div>
  )
}

export default UseClickOutsideTest