import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
  return (
    <h1>Let's study react</h1>
  )
}


// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "blank"
//   },
//   content: "Click here to got to google"
// }

const reactElement = (
  <a href='https://www.google.com' target='blank'>Search with google</a>
)

const newElement = React.createElement(
  "h3",
  {
    className:"heading",
    id:"react-element"
  },
  "Hello there, learn react?"
)

ReactDOM.createRoot(document.getElementById('root')).render(

  newElement

)
