const injectElement = function(element, container){
  // console.log("inside injectElement");
  
  const newElement = document.createElement(element.type)
  newElement.innerHTML = element.content

  for (const prop in element.props) {
    if(prop === "children") continue;
    newElement.setAttribute(prop, element.props.prop)
  }

  newElement.setAttribute("href", element.props.href)
  newElement.setAttribute("target", element.props.target)

  container.appendChild(newElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "blank"
  },
  content: "Click here to got to google"
}

const rootContainer = document.querySelector("#root")

injectElement(reactElement, rootContainer)