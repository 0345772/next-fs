import cl from './Button.module.css'
import Link from 'next/link'


const Button =({text, url}) => {
  return (
    <Link href={url}>
      <button className={cl.button}>
        {text}
      </button>
    </Link>
  )
}

export default Button