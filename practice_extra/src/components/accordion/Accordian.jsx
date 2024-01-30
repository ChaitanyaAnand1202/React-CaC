import React, { useEffect, useState } from 'react'
import data from './data'

function Accordian() {
  const [enableMulti, setEnableMulti] = useState(false)
  const [selected, setSelected] = useState(null)
  const [multiselect, setMultiSelect] = useState([])

  const handleClick = (id) => {
    if (enableMulti) {
      console.log("Inside handlclick");
      let tempSelect = [...multiselect];
      console.log(tempSelect);
      if (tempSelect.indexOf(id) == -1) tempSelect.push(id)
      else tempSelect.splice(tempSelect.indexOf(id), 1)
      console.log(tempSelect);
      setMultiSelect(tempSelect)
    }
    else
    (selected === id) ? setSelected(null) : setSelected(id)


  }

  useEffect(() => {
    console.log(selected);
    console.log(multiselect);
    console.log(enableMulti);
  }, [selected, multiselect, enableMulti])

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-500 text-white flex justify-center items-center'>
      <div className='w-[55%] '>
        <button 
          onClick={() => setEnableMulti(prev => !prev)}
          className={`p-3 outline-slate-200 ${enableMulti ? "bg-red-500" : "bg-green-500"}`}>Multi-Select</button>
        {
          data && data.length > 0
            ? data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className='p-5 m-3 bg-gray-700'>
                <div>{item.question}</div>
                {
                  // ((selected === item.id) || (multiselect.indexOf(item.id) != -1))
                  (enableMulti) 
                    ? (multiselect.indexOf(item.id) != -1) && <div>{item.answer}</div>
                    : (selected === item.id) && <div>{item.answer}</div>
                }
              </div>
            ))
            : null
        }
      </div>
    </div>
  )
}

export default Accordian