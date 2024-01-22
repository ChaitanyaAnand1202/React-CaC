import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const username = "Chaitanya Anand"

export function MyApp(){
  return (
    <h1>Hey {username}, Let's study react</h1>
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
<>
<App />
<h1>hello</h1>
<MyApp />
</>
  
  
  

)
