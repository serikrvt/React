import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './components/user'
import { Button } from './components/Button'
import { Admin } from './components/Admin'


function App() {
  const [count, setCount] = useState(0)
   const user={
    name: 'Serik',
    age: 36,
    city: 'Actau'
  }

  let onClick=()=>{
    isShouUser = true
    console.log(isShouUser);
    
}
let isShouUser=false






  return (
    <>
      {isShouUser ? <User/>: <Admin/>}

    {/* <User {...user}  /> */}
    <Button onClick={onClick}/>
    {/* <Admin /> */}
    </>
  )
}

export default App
