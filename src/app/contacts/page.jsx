import cl from './page.module.css'
import Image from 'next/image';

const Contacts = () => {
  return (
    <div className={cl.contacts}>
      <h3 className={cl.title}>Let's Keep in Touch</h3>
      <div className={cl.content}>
        <div className={cl.imgContainer}>
          <Image 
            src='/contacts.png'
            alt='contacts'
            fill={true}
            className={cl.image}
          />
        </div>
        <form className={cl.form}> 

        </form>
      </div>
    </div>
  );
};

export default Contacts;
