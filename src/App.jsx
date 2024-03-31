import { useState } from 'react'
import SearchBox  from './Components/SearchBox'
import InfoBox  from './Components/InfoBox'
import Weather from './Components/Weather'
function App() {

  return (
    <div className='h-screen w-screen flex items-center flex-col gap-10'> 
        <Weather />
       
        
    </div>

  )
}

export default App
