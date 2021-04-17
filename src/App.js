import React from 'react'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import { Provider } from "react-redux";

// import theme from "./theme/theme"
// import AppRouter from './navigation/AppRouter'

import store from './model/store'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
const App = () => {

    return (
        <Provider store={store}>
            <Grommet>
                <Wrapper>
                    <div>AAAAAAAA</div>
                </Wrapper>
            </Grommet>
        </Provider>
    )
}

export default App
