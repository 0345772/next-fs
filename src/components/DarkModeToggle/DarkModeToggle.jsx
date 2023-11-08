import { useContext } from 'react'
import cl from './DarkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

function DarkModeToggle() {
  // const mode = 'light'
  const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className={cl.container} onClick={toggle}>
      <div className={cl.icon}>☀️</div>
      <div className={cl.icon}>🌙</div>
      <div className={cl.ball}
      style={mode==='light' ? {left: '2px'} : {right: '2px'}}
      ></div>
    </div>
  )
}

export default DarkModeToggle

