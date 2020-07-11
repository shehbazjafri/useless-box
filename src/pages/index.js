import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import "../components/app.css"
import SwitchImg from "../images/switchBlack.svg"

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

const SwitchContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-content: center;
  background: #c4c4c4;
  top: 40%;
  right: 55%;
  border-radius: 90%;
  width: 30px;
  height: 30px;
`

const BoxTop = styled.div`
  width: 30vw;
  height: 20vh;
  background: #bca386;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`
const BoxBottom = styled.div`
  width: 30vw;
  height: 20vh;
  background: #987c5a;
`

const Divider = styled.div`
  /* background: linear-gradient(#6e5c48, #6e5c48) no-repeat center/2px 100%; */
  border-right: 2px solid #6e5c48;
`

const Switch = styled.img`
  position: absolute;
  top: -30%;
  /* left: 10%; */
  right: 15%;
  /* transform: rotate(0deg); */
  /* filter: invert(53%) sepia(15%) saturate(4283%) hue-rotate(322deg)
    brightness(106%) contrast(95%); */
  filter: invert(50%) sepia(10%) saturate(2199%) hue-rotate(314deg)
    brightness(98%) contrast(92%);
`

const IndexPage = () => (
  <AppContainer>
    <SEO title="App" />
    <Box>
      <BoxTop>
        <SwitchContainer>
          <Switch src={SwitchImg} width="30px" alt="Red Switch" />
        </SwitchContainer>
        <Divider />
      </BoxTop>
      <BoxBottom />
    </Box>
  </AppContainer>
)

export default IndexPage
