import React, { useEffect } from 'react'
import styled from 'styled-components'
import Indicator from './Indicator'
import Table from './Table'
import { connect } from 'react-redux'
import { getMeasures } from '../../../../../redux/actions/doctor/measures'

const Measures = (props) => {
  let token = localStorage.getItem('token')
  const update = () => {
    props.getMeasures({ id: props.id, token })
  }

  useEffect(() => {
    update()
  }, [])

  return (
    <Container>
      <Indicator />
      <Table info={props.getMeasuresInfo.info} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 370px 1fr;
  grid-gap: 30px;
  h3 {
    font-weight: 600;
    font-size: 24px;
    color: #202020;
  }
`

const mapStateToProps = (state) => {
  return {
    getMeasuresInfo: state.getMeasuresInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMeasures: (values) => {
      dispatch(getMeasures(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Measures)
