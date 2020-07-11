import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import "../components/app.css"

const AppContainer = styled.div`
  background: #5583ac;
  height: 100%;
`

const IndexPage = () => (
  <AppContainer>
    <SEO title="App" />
  </AppContainer>
)

export default IndexPage
