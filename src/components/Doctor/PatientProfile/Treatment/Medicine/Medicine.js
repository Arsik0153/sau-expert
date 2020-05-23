import React, { useEffect } from 'react'
import styled from 'styled-components'
import Appointment from './Appointment'
import Table from './Table'
import { connect } from 'react-redux'
import { getMedicineList } from '../../../../../redux/actions/doctor/getMedicineList'

const Medicine = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    update()
  }, [])
  const update = () => {
    setTimeout(() => {
      props.getMedicineList({ id: props.id, token })
    }, 200)
  }
  return (
    <Container>
      <Appointment id={props.id} update={update} />
      <Table medicineList={props.medicineList} />
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
    medicineList: state.medicineList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMedicineList: (values) => dispatch(getMedicineList(values)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Medicine)
