import React, { useEffect, useState } from 'react'

const App = () => {

  const [search, setSearch] =useState('')
  const [values, setValues] =useState('')
  const [icon, setIcon] =useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=roma&lang=es&units=metric&appid=a839e3d2f7d006a95610cfd459ff4966`

  const getData = async() => {
    await fetch(URL)
      .then(response => { return response.json()})
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <div className='App'>
      <h2>React Weather App</h2>
    </div>
  )
}

export default App