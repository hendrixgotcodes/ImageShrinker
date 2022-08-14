import * as React from 'react'
import * as ReactDom from 'react-dom'

export default function render() {
  ReactDom.render(
    <div className='bg-primary p-4 text-secondary'>Hello from react 😎💓</div>, document.body
  )
}


render()