import React from "react"
import Accordian from './components/accordion/Accordian'
import Rating from "./components/star_rating/Rating"
import './App.css'
import Slider from "./components/image_slider/Slider"
import LoadMore from "./components/load_more_button/LoadMore"
import QRcode from "./components/qr_code_generator/QRcode"

function App() {

  return (
    <>
      <Accordian />
      <Rating />
      {/* <Slider /> */}
      <LoadMore total={100} limit={20}/>
      <QRcode />
    </>
  )
}

export default App
