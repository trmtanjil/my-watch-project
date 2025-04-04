 
import { Suspense } from 'react'
import './App.css'
import Watches from './components/watches/watches'

const watchPromise = fetch('./watch.json')
.then(res=>res.json())

function App() {
   

  return (
    <>
      
      <h1> My watch project</h1>
      
      <Suspense fallback={<h2>Product is loading....</h2>}>
        <Watches watchPromise={watchPromise} ></Watches>
      </Suspense>
    </>
  )
}

export default App
