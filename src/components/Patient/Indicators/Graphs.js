import React, { useState } from 'react'
import styled from 'styled-components'
import './Datepicker.css'
import BarGLucose from './Glucose/BarGLucose'
import TableGlucose from './Glucose/TableGlucose'
import PressureBar from './Pressure/PressureBar.js'
import PressureTable from './Pressure/PressureTable.js'
import PulseBar from './Pulse/PulseBar'
import PulseTable from './Pulse/PulseTable'

const Graphs = () => {
  return (
    <Container>
      <Box>
        <BarGLucose />
      </Box>
      <Box>
        <TableGlucose />
      </Box>
      <Box>
        <PressureBar />
      </Box>
      <Box>
        <PressureTable />
      </Box>
      <Box>
        <PulseBar />
      </Box>
      <Box>
        <PulseTable />
      </Box>
    </Container>
  )
}

const Container = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  padding: 30px;
  max-width: 710px;
  max-height: 375px;
  .flex {
    display: flex;
    justify-content: space-between;
  }
`

export default Graphs
