import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [jokes ,setJokes]=useState([])



const handlebtn=()=>{


    fetch('https://v2.jokeapi.dev/joke/Any?amount')
    .then (response=> response.json())
    .then(data=>setJokes(data))
    .catch(err=> console.log(err))
    console.log(jokes)
  
   
   



 }






  return (
    <>
    <div className='container'>

    <div className="box1">
      <h1>Jokes genrator</h1>
   <button className='btn' onClick={handlebtn}>click me</button>

   <div className="box2">
   <h2>{jokes.setup}</h2>
   <h2>{jokes. delivery}</h2>
   </div>
   </div>
</div>
    </>
  )
}

export default App
