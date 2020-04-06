import { updateProfileDetails } from './login.actions';
export const getGallery = () => {
  return (dispatch) => {
    dispatch({ type: 'SET_PROCESSING', payload: true })
    return fetch('https://nehruacademy-1d46.restdb.io/rest/gallery', { headers: 
    { 
      'x-apikey': '5e876350111788414066c610',
      'Content-Type': 'application/json' 
    } })
      .then(res => res.json())
      .then(resp => dispatch({ type: 'GALLERY', payload: resp }))
  }
}

export const getNotice = () => {
  return (dispatch) => {
    dispatch({ type: 'SET_PROCESSING', payload: true })
    return fetch('https://nehruacademy-1d46.restdb.io/rest/notice', { headers: 
    { 
      'x-apikey': '5e876350111788414066c610',
      'Content-Type': 'application/json' 
    } })
      .then(res => res.json())
      .then(resp => dispatch({ type: 'NOTICE', payload: resp }))
  }
}

export const getExercise = (className) => {
  return (dispatch) => {
    dispatch({ type: 'SET_PROCESSING', payload: true })
    return fetch(`https://nehruacademy-1d46.restdb.io/rest/exercises?q={"class":${className}}`, { headers: 
    { 
      'x-apikey': '5e876350111788414066c610',
      'Content-Type': 'application/json' 
    } })
      .then(res => res.json())
      .then(resp => dispatch({ type: 'EXERCISE', payload: resp }))
  }
}

export const getResult = (className) => {
  return (dispatch) => {
    dispatch({ type: 'SET_PROCESSING', payload: true })
    return fetch(`https://nehruacademy-1d46.restdb.io/rest/results?q={"class":${className}}`, { headers: 
    { 
      'x-apikey': '5e876350111788414066c610',
      'Content-Type': 'application/json' 
    } })
      .then(res => res.json())
      .then(resp => dispatch({ type: 'RESULTS', payload: resp }))
  }
}

export const getHomework = (className) => {
  return (dispatch) => {
    dispatch({ type: 'SET_PROCESSING', payload: true })
    return fetch(`https://nehruacademy-1d46.restdb.io/rest/homework?q={"class":${className}}`, { headers: 
    { 
      'x-apikey': '5e876350111788414066c610',
      'Content-Type': 'application/json' 
    } })
      .then(res => res.json())
      .then(resp => dispatch({ type: 'HOMEWORK', payload: resp }))
  }
}

export const getClass = () => {
  return (dispatch) => {
    dispatch({ type: 'SET_PROCESSING', payload: true })
    return fetch('https://nehruacademy-1d46.restdb.io/rest/classes?sort=id', { headers: 
    { 
      'x-apikey': '5e876350111788414066c610',
      'Content-Type': 'application/json' 
    } })
      .then(res => res.json())
      .then(resp => dispatch({ type: 'CLASSES', payload: resp }))
  }
}

