import React, { useState } from 'react'
import styled from 'styled-components'
import search from './../../../assets/search.svg'
import Table from './Table'

const Main = () => {
  const [activeSwitch, setActiveSwitch] = useState('new')
  return (
    <Container>
      <div className="flex">
        <H1>Уведомления</H1>
        <div>
          <Switchers>
            <Switcher
              active={activeSwitch === 'new'}
              onClick={() => setActiveSwitch('new')}
            >
              Новые
            </Switcher>
            <Switcher
              active={activeSwitch === 'old'}
              onClick={() => setActiveSwitch('old')}
            >
              Старые
            </Switcher>
          </Switchers>
          <img src={search} alt="Search" />
        </div>
      </div>
      <Table />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
    justify-content: space-between;
    margin: 50px 50px 45px 50px;
    img {
      height: fit-content;
      margin: 15px 0 0 20px;
      cursor: pointer;
    }
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`
const Switchers = styled.div`
  display: flex;
  padding: 6px 7px;
  background: #fff;
  float: left;
`
const Switcher = styled.div`
  font-size: 13px;
  font-weight: 400;
  padding: 8px 15px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  margin: 0 4px;
  cursor: pointer;
  ${(props) =>
    props.active
      ? 'background: #57c3a7; color: #fff;'
      : 'color: #686868; opacity: 0.45;'}
`

export default Main
