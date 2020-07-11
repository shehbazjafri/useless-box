import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import "../components/app.css"

const AppContainer = styled.div`
  background: #5583ac;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`

const Box = styled.div`
  /* margin: auto; */
`

const BoxTop = styled.div`
  width: 30vw;
  height: 20vh;
  background: #bca386;
`
const BoxBottom = styled.div`
  width: 30vw;
  height: 20vh;
  background: #987c5a;
`

const IndexPage = () => (
  <AppContainer>
    <SEO title="App" />
    <Box>
      <BoxTop />
      <BoxBottom />
    </Box>
  </AppContainer>
)

export default IndexPage
