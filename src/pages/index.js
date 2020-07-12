import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import "../components/app.css"
import SwitchImg from "../images/switchBlack.svg"
import PawImg from "../images/paw.svg"
import SwitchSound from "../assets/switch-5.mp3"

const AppContainer = styled.div`
  background: #5583ac;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`

const Box = styled.div`
  width: 30vw;
  height: 20vh;
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
  background: linear-gradient(90deg, #bca386 50%, #413221 50%);
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`
const BoxBottom = styled.div`
  background: #987c5a;
`

const RightSlider = styled.div`
  position: absolute;
  right: 0;
  width: ${props => (props.isOpen ? `35%` : `49%`)};
  background: #bca386;
  transition: width 0.5s;
`

const Switch = styled.img`
  position: absolute;
  top: -30%;
  right: ${props => (props.isSwitchedOn ? `0%` : `25%`)};
  transform: ${props =>
    props.isSwitchedOn ? `rotate(45deg)` : `rotate(0deg)`};
  filter: ${props =>
    props.isSwitchedOn
      ? `invert(53%) sepia(15%) saturate(4283%) hue-rotate(322deg)
    brightness(106%) contrast(95%)`
      : `invert(50%) sepia(10%) saturate(2199%) hue-rotate(314deg)
    brightness(98%) contrast(92%)`};
`

const Paw = styled.img`
  position: absolute;
  right: ${props => (props.switchOff ? `19%` : `0%`)};
  top: 30%;
  height: 50px;
  width: 40%;
  transition: right 0.5s;
`

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const App = () => {
  const [isSwitchedOn, setIsSwitchedOn] = useState(false)
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [catClosing, setCatClosing] = useState(false)
  const switchSound = new Audio(SwitchSound)

  const catShouldCloseTheBox = () => {
    const randomInterval = randomIntFromInterval(0, 2000)
    setTimeout(() => {
      setCatClosing(true)
      setTimeout(() => {
        switchSound.play()
        setIsSwitchedOn(false)
        setCatClosing(false)
        setIsBoxOpen(false)
      }, 500)
    }, randomInterval)
  }

  useEffect(() => {
    if (isBoxOpen) {
      catShouldCloseTheBox()
    }
  }, [isBoxOpen])

  const handleSlider = shouldBoxOpen => {
    if (shouldBoxOpen) {
      const randomInterval = randomIntFromInterval(0, 2000)
      setTimeout(() => {
        setIsBoxOpen(true)
      }, randomInterval)
    } else {
      setIsBoxOpen(false)
    }
  }

  const handleSwitch = () => {
    switchSound.play()
    setIsSwitchedOn(!isSwitchedOn)
    handleSlider(!isSwitchedOn)
  }
  return (
    <AppContainer>
      <SEO title="App" />
      <Box>
        <BoxTop>
          <SwitchContainer>
            <Switch
              src={SwitchImg}
              alt="Red Switch"
              onClick={isSwitchedOn ? null : handleSwitch}
              isSwitchedOn={isSwitchedOn}
            />
          </SwitchContainer>
          <Paw src={PawImg} switchOff={catClosing} />
          <RightSlider isOpen={isBoxOpen} />
        </BoxTop>
        <BoxBottom />
      </Box>
    </AppContainer>
  )
}

export default App
