import Image from "next/image";
import cl from "./page.module.css";
import Button from '@/components/Button/Button'
import Photo from '../../public/middle-age-motorcyclist-woman-wearing-motorcycle-helmet-isolated-white-background-surprised-with-hand-head-mistake-remember-error-forgot-bad-memory-concept.jpg'

export default function Home() {
  return (
    <main className={cl.main}>
      <div className={cl.item}>
        <h3 className={cl.title}>
          The feature of AI in the next few years
        </h3>
        <p className={cl.desc}>
          Turning your Idea Reality. We bring together the teams from the 
          global tech industry.
        </p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <div className={cl.item}>
        <Image src={Photo} alt="photo" className={cl.img}/>

      </div>
    </main>
  );
}
