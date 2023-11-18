import Image from 'next/image';
import cl from './page.module.css'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "ABOUT",
  description: "The page About",
};


const About = () => {

  return (
    <div className={cl.about}>

      <div className={cl.imgContainer}>
        <Image src='https://cdn.pixabay.com/photo/2023/10/21/18/47/boat-8332114_1280.jpg' 
          fill={true}
          alt='about us'
          className={cl.img}
        />
        <div className={cl.imgText}>
          <h1 className={cl.imgTitle}>My About Page</h1>
          <h3 className={cl.imgDesc}>Hello, my frend! It is my live page. Hi is name About Page.</h3>
        </div>
      </div>
      
        <div className={cl.textContainer}>
          <div className={cl.item}>
            <h1 className={cl.title}>Who Are We?</h1>
            <p className={cl.desc}>
              Tempor eu aliqua nostrud laborum enim laborum 
              cillum incididunt amet qui elit aliqua duis. Exercitation
              laboris esse ex laboris in deserunt laboris ea veniam nisi nostrud 
              ullamco adipisicing. Sunt irure nulla elit nulla est commodo ipsum occaecat
              quis nostrud sint minim dolore. Ut laborum ea sunt laborum dolor consequat magna
              cupidatat labore occaecat. Quis pariatur ut mollit adipisicing cillum dolore
            </p>
          </div>
        
        <div className={cl.item}>
          <h1 className={cl.title}>Wath We Do?</h1>
          <p className={cl.desc}>
            Elit laboris sint voluptate exercitation <br /> culpa ut do laboris minim. Eu labore 
            cillum id quis. Non adipisicing enim elit culpa adipisicing <br /> et est. Minim non ipsum 
            eu nostrud cillum duis in qui sit. Voluptate magna 
            <br />
            <br />
            mollit duis laborum nulla 
            <br />
            <br />deserunt
            <br />
            <br />
            duis.
          </p>
          <Button url='/contacts' text='Contacts'/>
        </div>
        </div>
      
    </div>
  );
};

export default About;
