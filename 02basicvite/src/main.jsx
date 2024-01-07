import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

const aReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to go google",
)
ReactDOM.createRoot(document.getElementById('root')).render(
  aReactElement
)
