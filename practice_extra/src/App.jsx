import React from "react"
import Accordian from './components/accordion/Accordian'
import Rating from "./components/star_rating/Rating"
import './App.css'
import Slider from "./components/image_slider/Slider"
import LoadMore from "./components/load_more_button/LoadMore"
import QRcode from "./components/qr_code_generator/QRcode"
import TreeView from "./components/tree_view/TreeView"
import ScrollIndicator from "./components/scroll_indicator/ScrollIndicator"
import ModalPopup from "./components/modal_popup/ModalPopup"
import GithubProfileFinder from "./components/github_profile/GithubProfileFinder"
import SearchAutocomplete from "./components/search_autocomplete/SearchAutocomplete"
import UseFetchTest from "./components/use_fetch_hook/UseFetchTest"
import UseClickOutsideTest from "./components/use_click_outside/UseClickOutsideTest"

function App() {

  return (
    <>

      {/* <ScrollIndicator />
      <Accordian />
      <Rating /> */}
      {/* <Slider /> */}
      {/* <LoadMore total={100} limit={20} />
      <QRcode />
      <TreeView /> */}
      {/* <ModalPopup /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <UseFetchTest /> */}
      <UseClickOutsideTest />
    </>
  )
}

export default App
