import React from 'react'
import {render} from 'react-dom'

import App from './App'

const rootElement = document.querySelector('react')

const appRender = Component => {
    render(<Component/>, rootElement)
}

appRender(App)