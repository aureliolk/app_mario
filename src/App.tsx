import { useEffect, useState } from 'react'
import classnames from 'classnames'

function App() {
  const [jump, setJump] = useState(false)
  console.log(jump)
  
  document.addEventListener("keydown",()=>{
    setJump(true)
    setTimeout(()=>{
      setJump(false)
    },1000)
  })
  


  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-[80%] h-[500px] border rounded relative overflow-hidden'>
          <img className='w-[80px] absolute bottom-0 animate-pipe' src="pipe.png" alt="Pipe Imagen" />
          <img className={classnames('w-[150px] absolute bottom-0',{"animate-jump": jump})} src="mario.gif" alt="Mario Imagen" />
      </div>
    </div>
  )
}

export default App
