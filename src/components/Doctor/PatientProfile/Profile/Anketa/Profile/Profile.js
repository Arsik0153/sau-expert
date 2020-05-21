import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import Preloader from './../../../../../helpers/Preloader'
import { useHistory, Link } from 'react-router-dom'
import { newAnketa } from './../../../../../../redux/actions/doctor/anketa'

const formSchema = Yup.object().shape({
  height: Yup.string().required('Заполните поле Рост'),
  weigh: Yup.string().required('Заполните поле Вес'),
  waist_circumference: Yup.string().required('Заполните поле Окружность талии'),
  complaints: Yup.string().required('Заполните поле Жалобы'),
  anamnesis_morbi: Yup.string().required('Заполните поле ANAMNESIS MORBI'),
  allergic_history: Yup.string().required('Заполните поле Аллергоанамнез'),
  heredity_id: Yup.string().required('Заполните поле Наследственность'),
  heredity_description: Yup.string().required(
    'Заполните описание поля Наследственность'
  ),
  taking_medication_id: Yup.string().required(
    'Заполните поле Прием медикаментов'
  ),
  taking_medication_description: Yup.string().required(
    'Заполните описание поля Прием медикаментов'
  ),
  previous_infections_id: Yup.string().required(
    'Заполните поле Перенесенные инфекции'
  ),
  previous_infections_description: Yup.string().required(
    'Заполните описание поля Перенесенные инфекции'
  ),
  contact_infectious_patients_id: Yup.string().required(
    'Заполните поле Контакт с инфекционными больными'
  ),
  contact_infectious_patients_description: Yup.string().required(
    'Заполните описание поля Контакт с инфекционными больными'
  ),
  registered_dispensary_id: Yup.string().required(
    'Заполните поле Состоит на диспансерном учете'
  ),
  registered_dispensary_description: Yup.string().required(
    'Заполните описание поля Состоит на диспансерном учете'
  ),
  hospitalizations_operations_id: Yup.string().required(
    'Заполните поле Госпитализации/операции'
  ),
  hospitalizations_operations_description: Yup.string().required(
    'Заполните описание поля Госпитализации/операции'
  ),
  blood_transfusion: Yup.string().required(
    'Заполните поле Проводилась ли гемотрансфузия'
  ),
  blood_transfusion_reaction: Yup.string(),
  condition_id: Yup.string().required('Заполните поле Состояние'),
  condition_description: Yup.string().required(
    'Заполните описание поля Состояние'
  ),
  conscious_id: Yup.string().required('Заполните поле Сознание'),
  conscious_description: Yup.string().required(
    'Заполните описание поля Сознание'
  ),
  speech_id: Yup.string().required('Заполните поле Речь'),
  speech_description: Yup.string().required('Заполните описание поля Речь'),
  hearing_id: Yup.string().required('Заполните поле Слух'),
  hearing_description: Yup.string().required('Заполните описание поля Слух'),
  vision_id: Yup.string().required('Заполните поле Зрение'),
  vision_description: Yup.string().required('Заполните описание поля Зрение'),
  activity_id: Yup.string().required('Заполните поле Активность'),
  constitution_id: Yup.string().required('Заполните поле Конституция'),
  emotional_status_id: Yup.string().required(
    'Заполните поле Эмоциональный статус'
  ),
  sleep_id: Yup.string().required('Заполните поле Сон'),
  sleep_description: Yup.string().required('Заполните описание поля Сон'),
  appetite_id: Yup.string().required('Заполните поле Аппетит'),
  appetite_description: Yup.string().required(
    'Заполните описание поля Аппетит'
  ),
  temperature: Yup.string().required('Заполните поле Температура (°С )'),
  visible_mucous_membranes_id: Yup.string().required(
    'Заполните поле Видимые слизистые'
  ),
  visible_mucous_membranes_description: Yup.string().required(
    'Заполните описание поля Видимые слизистые'
  ),
  pharynx_id: Yup.string().required('Заполните поле Зев'),
  pharynx_description: Yup.string().required('Заполните описание поля Зев'),
  color_of_skin_description: Yup.string().required(
    'Заполните описание поля Цвет кожи'
  ),
  tugor_id: Yup.string().required('Заполните поле Тугор'),
  humidity_id: Yup.string().required('Заполните поле Влажность'),
  sensitivity_id: Yup.string().required('Заполните поле Чувствительность'),
  sensitivity_description: Yup.string().required(
    'Заполните описание поля Чувствительность'
  ),
  lymph_nodes_id: Yup.string().required('Заполните поле Лимфатические узлы'),
  lymph_nodes_description: Yup.string().required(
    'Заполните описание поля Лимфатические узлы'
  ),
  osteoarticular_system_id: Yup.string().required(
    'Заполните поле Костно-суставная система'
  ),
  osteoarticular_system_description: Yup.string().required(
    'Заполните описание поля Костно-суставная система'
  ),
  muscular_system_id: Yup.string().required('Заполните поле Мышечная система'),
  breath_id: Yup.string().required('Заполните поле Дыхание'),
  breathing_rate: Yup.string().required('Заполните поле Частота дыхания'),
  wheezing_id: Yup.string().required('Заполните поле Хрипы'),
  wheezing_description: Yup.string().required('Заполните описание поля Хрипы'),
  involvement_of_ancillary_muscles_id: Yup.string().required(
    'Заполните поле Участие вспомогательной мускулатуры'
  ),
  cough_id: Yup.string().required('Заполните поле Кашель'),
  auscultatory_id: Yup.string().required('Заполните поле Аускультативно'),
  auscultatory_description: Yup.string().required(
    'Заполните описание поля Аускультативно'
  ),
  rhythm_id: Yup.string().required('Заполните поле Ритм'),
  swelling_id: Yup.string().required('Заполните поле Отеки'),
  swelling_description: Yup.string(),
  heart_tones_id: Yup.string().required('Заполните поле Тоны сердца'),
  heart_murmur_id: Yup.string().required('Заполните поле Шумы сердца'),
  heart_murmur_description: Yup.string().required(
    'Заполните описание поля Шумы сердца'
  ),
  tongue_description: Yup.string(),
  stomach_id: Yup.string().required('Заполните поле Живот'),
  stomach_description: Yup.string().required('Заполните описание поля Живот'),
  liver_id: Yup.string().required('Заполните поле Печень'),
  liver_value: Yup.string(),
  color_id: Yup.string().required('Заполните поле Цвет'),
  color_description: Yup.string(),
  color_description: Yup.string().required('Заполните описание поля Цвет'),
  urination_description: Yup.string().required(
    'Заполните описание поля Мочеиспускание'
  ),
  bleeding_symptoms_id: Yup.string().required(
    'Заполните поле Симптомы поколачивания'
  ),
  bleeding_symptoms_side_id: Yup.string(),
  tongue: Yup.array().of(Yup.string()),
  chair: Yup.array().of(Yup.string()),
  urination: Yup.array().of(Yup.string()),
  urinary_incontinence: Yup.array().of(Yup.string()),
})

const Profile = (props) => {
  let user = JSON.parse(localStorage.getItem('user'))
  let profile = JSON.parse(localStorage.getItem('profile'))
  console.log(profile)
  let token = localStorage.getItem('token')
  let history = useHistory()
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (values) => {
    let vals = {
      token,
      id: props.match.params.patientId,
      request: {
        title: profile.title,
        patient: props.match.params.patientId,
        doctor: user.id,
        ...values,
      },
    }
    console.log(vals)
    props.newAnketa(vals)
  }
  useEffect(() => {
    if (props.newAnketaInfo.status === 'success') {
      history.goBack()
    }
  }, [props.newAnketaInfo.status])

  return (
    <Container>
      <Card>
        <div className="flex">
          <H3>Анкета “Первичный осмотр”</H3>
          <Link to={`/doctor/patient/${props.match.params.patientId}`}>
            Назад
          </Link>
        </div>
        <p>Пациент: {profile.name}</p>
        <br /> <br />
        <H4>Общий осмотр</H4>
        <br />
        <Formik
          initialValues={{
            height: '',
            weigh: '',
            waist_circumference: '',
            complaints: '',
            anamnesis_morbi: '',
            allergic_history: '',
            heredity_id: null,
            heredity_description: '',
            taking_medication_id: null,
            taking_medication_description: '',
            previous_infections_id: null,
            previous_infections_description: '',
            contact_infectious_patients_id: null,
            contact_infectious_patients_description: '',
            registered_dispensary_id: null,
            registered_dispensary_description: '',
            hospitalizations_operations_id: null,
            hospitalizations_operations_description: '',
            blood_transfusion: '',
            blood_transfusion_reaction: '',
            condition_id: null,
            condition_description: '',
            conscious_id: null,
            conscious_description: '',
            speech_id: null,
            speech_description: '',
            hearing_id: null,
            hearing_description: '',
            vision_id: null,
            vision_description: '',
            activity_id: null,
            constitution_id: null,
            emotional_status_id: null,
            sleep_id: null,
            sleep_description: '',
            appetite_id: null,
            appetite_description: '',
            temperature: '',
            visible_mucous_membranes_id: null,
            visible_mucous_membranes_description: '',
            pharynx_id: null,
            pharynx_description: '',
            color_of_skin_description: '',
            tugor_id: null,
            humidity_id: null,
            sensitivity_id: null,
            sensitivity_description: '',
            lymph_nodes_id: null,
            lymph_nodes_description: '',
            osteoarticular_system_id: null,
            osteoarticular_system_description: '',
            muscular_system_id: null,
            breath_id: null,
            breathing_rate: '',
            wheezing_id: null,
            wheezing_description: '',
            involvement_of_ancillary_muscles_id: null,
            cough_id: null,
            auscultatory_id: null,
            auscultatory_description: '',
            rhythm_id: null,
            swelling_id: null,
            swelling_description: '',
            heart_tones_id: null,
            heart_murmur_id: null,
            heart_murmur_description: '',
            tongue_description: '',
            stomach_id: null,
            stomach_description: '',
            liver_id: null,
            liver_value: '',
            color_id: null,
            color_description: '',
            urination_description: '',
            bleeding_symptoms_id: null,
            bleeding_symptoms_side_id: null,
            tongue: [],
            chair: [],
            urination: [],
            urinary_incontinence: [],
          }}
          validationSchema={formSchema}
          onSubmit={(values) => handleSubmit(values)}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => {
            //setError(props.errors)
            return (
              <Form className="form-container">
                <div className="grid-3">
                  <div>
                    <label>Рост</label>
                    <Field
                      name="height"
                      type="number"
                      placeholder="Введите значение"
                    />
                  </div>
                  <div>
                    <label>Вес</label>
                    <Field
                      name="weigh"
                      type="number"
                      placeholder="Введите значение"
                    />
                  </div>
                  <div>
                    <label>Окружность талии</label>
                    <Field
                      name="waist_circumference"
                      type="number"
                      placeholder="Введите значение"
                    />
                  </div>
                </div>
                <label>Жалобы</label>
                <Field
                  as="textarea"
                  name="complaints"
                  placeholder="Введите значение"
                />
                <label>ANAMNESIS MORBI</label>
                <Field
                  as="textarea"
                  name="anamnesis_morbi"
                  placeholder="Введите значение"
                />
                <br />
                <H4>ANAMNESIS VITAE</H4>
                <br />
                <label>Аллергоанамнез</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="allergic_history1"
                      name="allergic_history"
                      value="1"
                    />
                    <label htmlFor="allergic_history1">не отягощен</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="allergic_history2"
                      name="allergic_history"
                      value="2"
                    />
                    <label htmlFor="allergic_history2">отягощен</label>
                  </div>
                </div>
                <br />
                <label>Наследственность</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="heredity_id1"
                      name="heredity_id"
                      value="1"
                    />
                    <label htmlFor="heredity_id1">не отягощен</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="heredity_id2"
                      name="heredity_id"
                      value="2"
                    />
                    <label htmlFor="heredity_id2">отягощен</label>
                  </div>
                </div>
                <Field
                  name="heredity_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Прием медикаментов</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="taking_medication_id1"
                      name="taking_medication_id"
                      value="1"
                    />
                    <label htmlFor="taking_medication_id1">не принимает</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="taking_medication_id2"
                      name="taking_medication_id"
                      value="2"
                    />
                    <label htmlFor="taking_medication_id2">принимает</label>
                  </div>
                </div>
                <Field
                  name="taking_medication_description"
                  type="text"
                  placeholder="Описание медикаментов, количество и цель приема"
                />
                <label>Перенесенные инфекции</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="previous_infections_id1"
                      name="previous_infections_id"
                      value="1"
                    />
                    <label htmlFor="previous_infections_id1">отрицает</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="previous_infections_id2"
                      name="previous_infections_id"
                      value="2"
                    />
                    <label htmlFor="previous_infections_id2">да</label>
                  </div>
                </div>
                <Field
                  name="previous_infections_description"
                  type="text"
                  placeholder="Какое заболевание и когда перенесено"
                />
                <label>Контакт с инфекционными больными</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="contact_infectious_patients_id1"
                      name="contact_infectious_patients_id"
                      value="1"
                    />
                    <label htmlFor="contact_infectious_patients_id1">
                      отрицает
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="contact_infectious_patients_id2"
                      name="contact_infectious_patients_id"
                      value="2"
                    />
                    <label htmlFor="contact_infectious_patients_id2">да</label>
                  </div>
                </div>
                <Field
                  name="contact_infectious_patients_description"
                  type="text"
                  placeholder="Название инфекционного заболевания, длительность и близость"
                />
                <label>Состоит на диспансерном учете</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="registered_dispensary_id1"
                      name="registered_dispensary_id"
                      value="1"
                    />
                    <label htmlFor="registered_dispensary_id1">нет</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="registered_dispensary_id2"
                      name="registered_dispensary_id"
                      value="2"
                    />
                    <label htmlFor="registered_dispensary_id2">да</label>
                  </div>
                </div>
                <Field
                  name="registered_dispensary_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Госпитализации/операции</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="hospitalizations_operations_id1"
                      name="hospitalizations_operations_id"
                      value="1"
                    />
                    <label htmlFor="hospitalizations_operations_id1">
                      не было
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="hospitalizations_operations_id2"
                      name="hospitalizations_operations_id"
                      value="2"
                    />
                    <label htmlFor="hospitalizations_operations_id2">да</label>
                  </div>
                </div>
                <Field
                  name="hospitalizations_operations_description"
                  type="text"
                  placeholder="Последние госпитализации/операции, год, причина"
                />
                <label>Проводилась ли гемотрансфузия:</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="blood_transfusion1"
                      name="blood_transfusion"
                      value="1"
                    />
                    <label htmlFor="blood_transfusion1">нет</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="blood_transfusion2"
                      name="blood_transfusion"
                      value="2"
                    />
                    <label htmlFor="blood_transfusion2">да</label>
                  </div>
                </div>
                {props.values.blood_transfusion === '2' && (
                  <>
                    <label>Была ли трансфузионная реакция:</label>
                    <div className="radio-container">
                      <div>
                        <Field
                          type="radio"
                          id="blood_transfusion_reaction1"
                          name="blood_transfusion_reaction"
                          value="1"
                        />
                        <label htmlFor="blood_transfusion_reaction1">нет</label>
                      </div>
                      <div>
                        <Field
                          type="radio"
                          id="blood_transfusion_reaction2"
                          name="blood_transfusion_reaction"
                          value="2"
                        />
                        <label htmlFor="blood_transfusion_reaction2">да</label>
                      </div>
                    </div>
                  </>
                )}{' '}
                <br />
                <H4>STATUS PRAESENS, STATUS NERVOSUS</H4>
                <br />
                <label>Состояние</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="condition_id1"
                      name="condition_id"
                      value="1"
                    />
                    <label htmlFor="condition_id1">удовлетворительное</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="condition_id2"
                      name="condition_id"
                      value="2"
                    />
                    <label htmlFor="condition_id2">средней степени</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="condition_id3"
                      name="condition_id"
                      value="3"
                    />
                    <label htmlFor="condition_id3">тяжелое</label>
                  </div>
                </div>
                <Field
                  name="condition_description"
                  type="text"
                  placeholder="Чем обусловлено"
                />
                <label>Сознание</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="conscious_id1"
                      name="conscious_id"
                      value="1"
                    />
                    <label htmlFor="conscious_id1">ясное</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="conscious_id2"
                      name="conscious_id"
                      value="2"
                    />
                    <label htmlFor="conscious_id2">другое</label>
                  </div>
                </div>
                <Field
                  name="conscious_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Речь</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="speech_id1"
                      name="speech_id"
                      value="1"
                    />
                    <label htmlFor="speech_id1">ясное</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="speech_id2"
                      name="speech_id"
                      value="2"
                    />
                    <label htmlFor="speech_id2">другое</label>
                  </div>
                </div>
                <Field
                  name="speech_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Слух</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="hearing_id1"
                      name="hearing_id"
                      value="1"
                    />
                    <label htmlFor="hearing_id1">не беспокоит</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="hearing_id2"
                      name="hearing_id"
                      value="2"
                    />
                    <label htmlFor="hearing_id2">значительно снижен</label>
                  </div>
                </div>
                <Field
                  name="hearing_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Зрение</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="vision_id1"
                      name="vision_id"
                      value="1"
                    />
                    <label htmlFor="vision_id1">не беспокоит</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="vision_id2"
                      name="vision_id"
                      value="2"
                    />
                    <label htmlFor="vision_id2">значительно нарушено</label>
                  </div>
                </div>
                <Field
                  name="vision_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Активность</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="activity_id1"
                      name="activity_id"
                      value="1"
                    />
                    <label htmlFor="activity_id1">сохранена</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="activity_id2"
                      name="activity_id"
                      value="2"
                    />
                    <label htmlFor="activity_id2">ограничена</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="activity_id3"
                      name="activity_id"
                      value="3"
                    />
                    <label htmlFor="activity_id3">резко ограничена</label>
                  </div>
                </div>
                <br />
                <label>Конституция</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="constitution_id1"
                      name="constitution_id"
                      value="1"
                    />
                    <label htmlFor="constitution_id1">норма</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="constitution_id2"
                      name="constitution_id"
                      value="2"
                    />
                    <label htmlFor="constitution_id2">астеническая</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="constitution_id3"
                      name="constitution_id"
                      value="3"
                    />
                    <label htmlFor="constitution_id3">гипостеническая </label>
                  </div>
                </div>
                <br />
                <label>Эмоциональный статус</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="emotional_status_id1"
                      name="emotional_status_id"
                      value="1"
                    />
                    <label htmlFor="emotional_status_id1">нормальный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="emotional_status_id2"
                      name="emotional_status_id"
                      value="2"
                    />
                    <label htmlFor="emotional_status_id2">лабильный</label>
                  </div>
                </div>
                <br />
                <label>Сон</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="sleep_id1"
                      name="sleep_id"
                      value="1"
                    />
                    <label htmlFor="sleep_id1">нормальный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="sleep_id2"
                      name="sleep_id"
                      value="2"
                    />
                    <label htmlFor="sleep_id2">нарушен</label>
                  </div>
                </div>
                <Field
                  name="sleep_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Аппетит</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="appetite_id1"
                      name="appetite_id"
                      value="1"
                    />
                    <label htmlFor="appetite_id1">нормальный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="appetite_id2"
                      name="appetite_id"
                      value="2"
                    />
                    <label htmlFor="appetite_id2">повышен</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="appetite_id3"
                      name="appetite_id"
                      value="3"
                    />
                    <label htmlFor="appetite_id3">снижен</label>
                  </div>
                </div>
                <Field
                  name="appetite_description"
                  type="text"
                  placeholder="С каких пор, на каком основании"
                />
                <br />
                <H4>КОЖНЫЕ ПОКРОВЫ</H4>
                <br />
                <label>Температура (°С )</label>
                <Field
                  type="number"
                  name="temperature"
                  placeholder="Введите значение"
                />
                <label>Видимые слизистые</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="visible_mucous_membranes_id1"
                      name="visible_mucous_membranes_id"
                      value="1"
                    />
                    <label htmlFor="visible_mucous_membranes_id1">сухие </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="visible_mucous_membranes_id2"
                      name="visible_mucous_membranes_id"
                      value="2"
                    />
                    <label htmlFor="visible_mucous_membranes_id2">чистые</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="visible_mucous_membranes_id3"
                      name="visible_mucous_membranes_id"
                      value="3"
                    />
                    <label htmlFor="visible_mucous_membranes_id3">
                      влажные
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="visible_mucous_membranes_id4"
                      name="visible_mucous_membranes_id"
                      value="4"
                    />
                    <label htmlFor="visible_mucous_membranes_id4">
                      влажные
                    </label>
                  </div>
                </div>
                <Field
                  name="visible_mucous_membranes_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Зев</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="pharynx_id1"
                      name="pharynx_id"
                      value="1"
                    />
                    <label htmlFor="pharynx_id1">в норме </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="pharynx_id2"
                      name="pharynx_id"
                      value="2"
                    />
                    <label htmlFor="pharynx_id2">гиперемирован</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="pharynx_id3"
                      name="pharynx_id"
                      value="3"
                    />
                    <label htmlFor="pharynx_id3">другое</label>
                  </div>
                </div>
                <Field
                  name="pharynx_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Цвет кожи</label>
                <Field
                  name="color_of_skin_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Тугор</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="tugor_id1"
                      name="tugor_id"
                      value="1"
                    />
                    <label htmlFor="tugor_id1">в норме</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="tugor_id2"
                      name="tugor_id"
                      value="2"
                    />
                    <label htmlFor="tugor_id2">снижен</label>
                  </div>
                </div>
                <br />
                <label>Влажность</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="humidity_id1"
                      name="humidity_id"
                      value="1"
                    />
                    <label htmlFor="humidity_id1">в норме</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="humidity_id2"
                      name="humidity_id"
                      value="2"
                    />
                    <label htmlFor="humidity_id2">гипергидроз</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="humidity_id3"
                      name="humidity_id"
                      value="3"
                    />
                    <label htmlFor="humidity_id3">сухая </label>
                  </div>
                </div>
                <br />
                <label>Чувствительность</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="sensitivity_id1"
                      name="sensitivity_id"
                      value="1"
                    />
                    <label htmlFor="sensitivity_id1">в норме</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="sensitivity_id2"
                      name="sensitivity_id"
                      value="2"
                    />
                    <label htmlFor="sensitivity_id2">снижена</label>
                  </div>
                </div>
                <Field
                  name="sensitivity_description"
                  type="text"
                  placeholder="Локализация"
                />
                <label>Лимфатические узлы</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="lymph_nodes_id1"
                      name="lymph_nodes_id"
                      value="1"
                    />
                    <label htmlFor="lymph_nodes_id1">не увеличены</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="lymph_nodes_id2"
                      name="lymph_nodes_id"
                      value="2"
                    />
                    <label htmlFor="lymph_nodes_id2">увеличены</label>
                  </div>
                </div>
                <Field
                  name="lymph_nodes_description"
                  type="text"
                  placeholder="Болезнены, безболезнены"
                />{' '}
                <br />
                <H4>МЫШЕЧНАЯ И КОСТНО-СУСТАВНАЯ СИСТЕМА</H4> <br />
                <label>Костно-суставная система</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="osteoarticular_system_id1"
                      name="osteoarticular_system_id"
                      value="1"
                    />
                    <label htmlFor="osteoarticular_system_id1">
                      без деформаций
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="osteoarticular_system_id2"
                      name="osteoarticular_system_id"
                      value="2"
                    />
                    <label htmlFor="osteoarticular_system_id2">другое</label>
                  </div>
                </div>
                <Field
                  name="osteoarticular_system_description"
                  type="text"
                  placeholder="Описание"
                />
                <label>Мышечная система</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="muscular_system_id1"
                      name="muscular_system_id"
                      value="1"
                    />
                    <label htmlFor="muscular_system_id1">без патологий</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="muscular_system_id2"
                      name="muscular_system_id"
                      value="2"
                    />
                    <label htmlFor="muscular_system_id2">гипертония</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="muscular_system_id3"
                      name="muscular_system_id"
                      value="3"
                    />
                    <label htmlFor="muscular_system_id3">гипотония</label>
                  </div>
                </div>
                <br />
                <H4>ДЫХАТЕЛЬНАЯ СИСТЕМА</H4> <br />
                <label>Дыхание</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="breath_id1"
                      name="breath_id"
                      value="1"
                    />
                    <label htmlFor="breath_id1">грудное</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="breath_id2"
                      name="breath_id"
                      value="2"
                    />
                    <label htmlFor="breath_id2">брюшное</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="breath_id3"
                      name="breath_id"
                      value="3"
                    />
                    <label htmlFor="breath_id3">смешанное</label>
                  </div>
                </div>
                <br />
                <label>Частота дыхания (раз в минуту)</label>
                <Field
                  name="breathing_rate"
                  type="number"
                  placeholder="Введите значение"
                />
                <label>Хрипы</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="wheezing_id1"
                      name="wheezing_id"
                      value="1"
                    />
                    <label htmlFor="wheezing_id1">нет</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="wheezing_id2"
                      name="wheezing_id"
                      value="2"
                    />
                    <label htmlFor="wheezing_id2">есть</label>
                  </div>
                </div>
                <Field
                  name="wheezing_description"
                  type="text"
                  placeholder="Характер, локализация"
                />
                <label>Участие вспомогательной мускулатуры</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="involvement_of_ancillary_muscles_id1"
                      name="involvement_of_ancillary_muscles_id"
                      value="1"
                    />
                    <label htmlFor="involvement_of_ancillary_muscles_id1">
                      да
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="involvement_of_ancillary_muscles_id2"
                      name="involvement_of_ancillary_muscles_id"
                      value="2"
                    />
                    <label htmlFor="involvement_of_ancillary_muscles_id2">
                      нет
                    </label>
                  </div>
                </div>
                <br />
                <label>Кашель</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="cough_id1"
                      name="cough_id"
                      value="1"
                    />
                    <label htmlFor="cough_id1">нет</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="cough_id2"
                      name="cough_id"
                      value="2"
                    />
                    <label htmlFor="cough_id2">есть, непродуктивный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="cough_id3"
                      name="cough_id"
                      value="3"
                    />
                    <label htmlFor="cough_id3">есть, продуктивный</label>
                  </div>
                </div>
                <br />
                <label>Аускультативно</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="auscultatory_id1"
                      name="auscultatory_id"
                      value="1"
                    />
                    <label htmlFor="auscultatory_id1">везикулярное</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="auscultatory_id2"
                      name="auscultatory_id"
                      value="2"
                    />
                    <label htmlFor="auscultatory_id2">жесткое</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="auscultatory_id3"
                      name="auscultatory_id"
                      value="3"
                    />
                    <label htmlFor="auscultatory_id3">ослабление хрипы</label>
                  </div>
                </div>
                <Field
                  type="text"
                  name="auscultatory_description"
                  placeholder="Описание"
                />
                <br />
                <H4>СЕРДЕЧНО-СОСУДИСТАЯ СИСТЕМА</H4>
                <br />
                <label>Ритм</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="rhythm_id1"
                      name="rhythm_id"
                      value="1"
                    />
                    <label htmlFor="rhythm_id1">правильный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="rhythm_id2"
                      name="rhythm_id"
                      value="2"
                    />
                    <label htmlFor="rhythm_id2">неправильный</label>
                  </div>
                </div>
                <br />
                <label>Отеки</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="swelling_id1"
                      name="swelling_id"
                      value="1"
                    />
                    <label htmlFor="swelling_id1">нет</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="swelling_id2"
                      name="swelling_id"
                      value="2"
                    />
                    <label htmlFor="swelling_id2">есть</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="swelling_id3"
                      name="swelling_id"
                      value="3"
                    />
                    <label htmlFor="swelling_id3">
                      отеки нижних конечностей
                    </label>
                  </div>
                </div>
                {props.values.swelling_id === '2' ||
                props.values.swelling_id === '3' ? (
                  <Field
                    type="text"
                    name="swelling_description"
                    placeholder="Локализация"
                  />
                ) : null}
                <br />
                <label>Тоны сердца</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="heart_tones_id1"
                      name="heart_tones_id"
                      value="1"
                    />
                    <label htmlFor="heart_tones_id1">ясные</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="heart_tones_id2"
                      name="heart_tones_id"
                      value="2"
                    />
                    <label htmlFor="heart_tones_id2">приглушенные</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="heart_tones_id3"
                      name="heart_tones_id"
                      value="3"
                    />
                    <label htmlFor="heart_tones_id3">глухие</label>
                  </div>
                </div>
                <br />
                <label>Шумы сердца</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="heart_murmur_id1"
                      name="heart_murmur_id"
                      value="1"
                    />
                    <label htmlFor="heart_murmur_id1">нет</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="heart_murmur_id2"
                      name="heart_murmur_id"
                      value="2"
                    />
                    <label htmlFor="heart_murmur_id2">есть</label>
                  </div>
                </div>
                <Field
                  type="text"
                  name="heart_murmur_description"
                  placeholder="Описание, локализация"
                />{' '}
                <br />
                <H4>ЖЕЛУДОЧНО-КИШЕЧНЫЙ ТРАКТ</H4>
                <br />
                <label>Язык</label>
                <div className="wrap-checkbox">
                  <Checkboxx
                    name="tongue"
                    value="1"
                    label="влажный"
                    Id="tongue1"
                  />
                  <Checkboxx
                    name="tongue"
                    value="2"
                    label="сухой"
                    Id="tongue2"
                  />
                  <Checkboxx
                    name="tongue"
                    value="3"
                    label="чистый"
                    Id="tongue3"
                  />
                  <Checkboxx
                    name="tongue"
                    value="4"
                    label="язвенные элементы"
                    Id="tongue4"
                  />
                </div>
                {props.values.tongue.includes('3') &&
                  props.values.tongue.includes('4') && (
                    <Field
                      type="text"
                      name="tongue_description"
                      placeholder="Описание"
                    />
                  )}
                <br />
                <label>Живот</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="stomach_id1"
                      name="stomach_id"
                      value="1"
                    />
                    <label htmlFor="stomach_id1">болезненный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="stomach_id2"
                      name="stomach_id"
                      value="2"
                    />
                    <label htmlFor="stomach_id2">безболезненный</label>
                  </div>
                </div>
                <Field
                  type="text"
                  name="stomach_description"
                  placeholder="Описание"
                />
                <br />
                <label>Печень</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="liver_id1"
                      name="liver_id"
                      value="1"
                    />
                    <label htmlFor="liver_id1">не увеличена</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="liver_id2"
                      name="liver_id"
                      value="2"
                    />
                    <label htmlFor="liver_id2">увеличена</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="liver_id3"
                      name="liver_id"
                      value="3"
                    />
                    <label htmlFor="liver_id3">уменьшена</label>
                  </div>
                </div>
                <br />
                {props.values.liver_id === '2' ||
                props.values.liver_id === '3' ? (
                  <>
                    <label>На сколько см от края реберной дуги?</label>
                    <Field
                      type="number"
                      name="liver_value"
                      placeholder="Введите значение"
                    />
                  </>
                ) : null}
                <label>Стул</label>
                <div className="wrap-checkbox">
                  <Checkboxx
                    name="chair"
                    value="1"
                    label="не нарушен"
                    Id="chair1"
                  />
                  <Checkboxx
                    name="chair"
                    value="2"
                    label="диарея"
                    Id="chair2"
                  />
                  <Checkboxx
                    name="chair"
                    value="3"
                    label="запоры"
                    Id="chair3"
                  />
                  <Checkboxx
                    name="chair"
                    value="4"
                    label="дегтеобразный стул"
                    Id="chair4"
                  />
                  <Checkboxx
                    name="tongue"
                    value="5"
                    label="другое"
                    Id="tongue5"
                  />
                </div>
                <label>Цвет</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="color_id1"
                      name="color_id"
                      value="1"
                    />
                    <label htmlFor="color_id1">Норма</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="color_id2"
                      name="color_id"
                      value="2"
                    />
                    <label htmlFor="color_id2">другое</label>
                  </div>
                </div>
                {props.values.color_id === '2' && (
                  <Field
                    type="text"
                    name="color_description"
                    placeholder="Описание"
                  />
                )}
                <br />
                <H4>МОЧЕВЫДЕЛИТЕЛЬНАЯ СИСТЕМА</H4>
                <br />
                <label>Мочеиспускание</label>
                <div className="wrap-checkbox">
                  <Checkboxx
                    name="urination"
                    value="1"
                    label="свободное"
                    Id="urination1"
                  />
                  <Checkboxx
                    name="urination"
                    value="2"
                    label="затрудненное"
                    Id="urination2"
                  />
                  <Checkboxx
                    name="urination"
                    value="3"
                    label="болезненное"
                    Id="urination3"
                  />
                  <Checkboxx
                    name="urination"
                    value="4"
                    label="безболезненное"
                    Id="urination4"
                  />
                </div>
                <Field
                  type="text"
                  name="urination_description"
                  placeholder="Цвет"
                />
                <label>Недержание мочи</label>
                <div className="wrap-checkbox">
                  <Checkboxx
                    name="urinary_incontinence"
                    value="1"
                    label="нет"
                    Id="urinary_incontinence1"
                  />
                  <Checkboxx
                    name="urinary_incontinence"
                    value="2"
                    label="есть"
                    Id="urinary_incontinence2"
                  />
                  <Checkboxx
                    name="urinary_incontinence"
                    value="3"
                    label="позывы императивные"
                    Id="urinary_incontinence3"
                  />
                  <Checkboxx
                    name="urinary_incontinence"
                    value="4"
                    label="позывы стрессовые"
                    Id="urinary_incontinence4"
                  />
                </div>
                <br />
                <label>Симптомы поколачивания</label>
                <div className="radio-container">
                  <div>
                    <Field
                      type="radio"
                      id="bleeding_symptoms_id1"
                      name="bleeding_symptoms_id"
                      value="1"
                    />
                    <label htmlFor="bleeding_symptoms_id1">отрицательный</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="bleeding_symptoms_id2"
                      name="bleeding_symptoms_id"
                      value="2"
                    />
                    <label htmlFor="bleeding_symptoms_id2">положительный</label>
                  </div>
                </div>
                {props.values.bleeding_symptoms_id === '2' && (
                  <>
                    <br />
                    <label>С какой стороны?</label>
                    <div className="radio-container">
                      <div>
                        <Field
                          type="radio"
                          id="bleeding_symptoms_side_id1"
                          name="bleeding_symptoms_side_id"
                          value="1"
                        />
                        <label htmlFor="bleeding_symptoms_side_id1">
                          справа
                        </label>
                      </div>
                      <div>
                        <Field
                          type="radio"
                          id="bleeding_symptoms_side_id2"
                          name="bleeding_symptoms_side_id"
                          value="2"
                        />
                        <label htmlFor="bleeding_symptoms_side_id2">
                          слева
                        </label>
                      </div>
                      <div>
                        <Field
                          type="radio"
                          id="bleeding_symptoms_side_id3"
                          name="bleeding_symptoms_side_id"
                          value="3"
                        />
                        <label htmlFor="bleeding_symptoms_side_id3">
                          с обеих сторон
                        </label>
                      </div>
                    </div>
                  </>
                )}
                {Object.keys(props.errors).length > 0 && (
                  <div className="field-error">
                    Заполните все поля внимательно
                  </div>
                )}
                {status === 'pending' ? (
                  <div className="preloader-container">
                    <Preloader />
                  </div>
                ) : (
                  <button type="submit">Сохранить</button>
                )}
              </Form>
            )
          }}
        </Formik>
      </Card>
    </Container>
  )
}

function Checkboxx(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div className="checkbox-container">
          <Checkbox
            className="styled-checkbox"
            id={props.Id}
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  (value) => value !== props.value
                )
                form.setFieldValue(props.name, nextValue)
              } else {
                const nextValue = field.value.concat(props.value)
                form.setFieldValue(props.name, nextValue)
              }
            }}
          />
          <label htmlFor={props.Id}>{props.label}</label>
        </div>
      )}
    </Field>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Card = styled.div`
  max-width: 814px;
  width: 100%;
  padding: 30px;
  margin-top: 50px;
  border-radius: 5px;
  background: #fff;
  .preloader-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  input,
  textarea {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 20px 0;
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
  textarea {
    height: 80px;
    appearance: none;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    a {
      text-decoration: underline;
      font-size: 16px;
      color: #57c3a7;
      margin-top: 20px;
    }
  }
  .grid-3 {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
  .checkbox-container {
    display: flex;
    margin-right: 20px;
    label {
      margin: 15px 0 !important;
      :before {
        margin-right: 10px !important;
      }
    }
  }
  .wrap-checkbox {
    display: flex;
    flex-wrap: wrap;
  }
  .radio-container {
    display: flex;
    div {
      margin: 15px 50px 10px 0;
    }
  }
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type='radio']:checked + label,
  [type='radio']:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #686868;
    font-size: 16px;
  }
  [type='radio']:checked + label:before,
  [type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #57c3a7;
    border-radius: 100%;
    background: #fff;
  }
  [type='radio']:checked + label:after,
  [type='radio']:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #57c3a7;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #202020;
  margin-top: 20px;
  margin-bottom: 20px;
`
const H4 = styled.h4`
  font-weight: 600;
  font-size: 20px;
  color: #202020;
`
const Checkbox = styled.input`
  position: absolute;
  width: 0 !important;
  opacity: 0;
  + label {
    margin-top: 0 !important;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
    padding: 0;
    width: fit-content;
    height: fit-content;
  }
  + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 4px;
    border: 2px solid #57c3a7;
  }
  :disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }
  :disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }
  :checked + label:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 7px;
    background: white;
    width: 11px;
    height: 5px;
    border-left: 2px solid #57c3a7;
    border-bottom: 2px solid #57c3a7;
    transform: rotate(-45deg);
  }
`

const mapStateToProps = (state) => {
  return {
    newAnketaInfo: state.newAnketaInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newAnketa: (values) => {
      dispatch(newAnketa(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
