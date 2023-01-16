import React from 'react'
let x = React.createElement("marquee", { style: { color: "red" } }, "hhhfsfsf");
let demo = React.createElement(
  "marquee", null, "Welcome to shraddha"
)

export default function Marquee() {
  return (
    <div>
      {
        demo
      }{
        x
      }
    </div>
  )
}
