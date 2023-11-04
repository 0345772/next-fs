import cl from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div>2023. Step_65. All rights reserved</div>
      <div className={cl.social}>
        <Image 
          src={'/fb-icon.svg'}
          width={20}
          height={20}
          className={cl.icon}
          alt='fb.com'
        />
          <Image 
          src={'/telegram-icon.svg'}
          width={20}
          height={20}
          className={cl.icon}
          alt='telegram.com'
        />
          <Image 
          src={'/viber-icon.svg'}
          width={25}
          height={25}
          className={cl.icon}
          alt='viber.com'
        />
          <Image 
          src={'/twitter-icon.svg'}
          width={20}
          height={20}
          className={cl.icon}
          alt='twitter.com'
        />
          <Image 
          src={'/inst-icon.png'}
          width={20}
          height={20}
          className={cl.icon}
          alt='instagram.com'
        />
      </div>
    </footer>
  );
}; 

export default Footer;
