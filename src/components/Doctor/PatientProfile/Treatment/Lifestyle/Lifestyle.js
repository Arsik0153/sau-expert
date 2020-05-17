import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  getLifestyle,
  setLifestyle,
} from '../../../../../redux/actions/doctor/lifestyle'
import Preloader from '../../../../helpers/Preloader'

const Lifestyle = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    let values = {
      id: props.id,
      token,
    }
    props.getLifestyle(values)
  }, [])

  const [goal_steps, setGoalSteps] = useState('')
  const [smoking, setSmoking] = useState('')
  const [alcohol, setAlcohol] = useState('')
  const [exercises, setExercises] = useState('')
  const [nutrition, setNutrition] = useState('')
  const [additionally, setAdditionally] = useState('')
  useEffect(() => {
    let info = props.getLifestyleInfo.info
    if (props.getLifestyleInfo.status === 'success') {
      setGoalSteps(info.goal_steps)
      setSmoking(info.smoking)
      setAlcohol(info.alcohol)
      setExercises(info.exercises)
      setNutrition(info.nutrition)
      setAdditionally(info.additionally)
    }
  }, [props.getLifestyleInfo.status])
  const handleSubmit = () => {
    let values = {
      token,
      id: props.id,
      request: {
        goal_steps,
        smoking,
        alcohol,
        exercises,
        nutrition,
        additionally,
      },
    }
    props.setLifestyle(values)
  }

  return (
    <Container>
      <H3>Рекомендации</H3>
      {props.getLifestyleInfo.status === 'pending' ||
      props.setLifestyleInfo.status === 'pending' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <Grid>
          <div>
            <label>Цель по шагам</label>
            <input
              type="text"
              placeholder="Текст"
              value={goal_steps}
              onChange={(e) => setGoalSteps(e.target.value)}
            />
            <label>Упражнения</label>
            <textarea
              placeholder="Текст"
              value={exercises}
              onChange={(e) => setExercises(e.target.value)}
            ></textarea>
            <button type="submit" onClick={() => handleSubmit()}>
              Сохранить
            </button>
          </div>
          <div>
            <label>Курение</label>
            <input
              type="text"
              placeholder="Текст"
              value={smoking}
              onChange={(e) => setSmoking(e.target.value)}
            />
            <label>Питание</label>
            <textarea
              placeholder="Текст"
              value={nutrition}
              onChange={(e) => setNutrition(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Алкоголь</label>
            <input
              type="text"
              placeholder="Текст"
              value={alcohol}
              onChange={(e) => setAlcohol(e.target.value)}
            />
            <label>Дополнительно</label>
            <textarea
              placeholder="Текст"
              value={additionally}
              onChange={(e) => setAdditionally(e.target.value)}
            ></textarea>
          </div>
        </Grid>
      )}
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  textarea,
  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 13px 10px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 10px 0;
    outline: none;
    resize: none;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
      font-weight: 300;
    }
  }
  button[type='submit'] {
    width: 100%;
    background: #57c3a7;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    padding: 20px 0;
    border: none;
    margin-top: 15px;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
    cursor: pointer;
  }
  label {
    font-size: 16px;
    color: #333333;
    font-weight: 400;
    display: inline-block;
    margin-top: 15px;
  }
  textarea {
    height: 150px;
  }
  .field-error {
    width: 100%;
    padding: 20px 15px;
    color: white;
    background: #f47775;
    font-weight: 300;
    margin-top: 10px;
    border-radius: 4px;
  }
`

const mapStateToProps = (state) => {
  return {
    getLifestyleInfo: state.getLifestyleInfo,
    setLifestyleInfo: state.setLifestyleInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLifestyle: (values) => {
      dispatch(getLifestyle(values))
    },
    setLifestyle: (values) => {
      dispatch(setLifestyle(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lifestyle)
