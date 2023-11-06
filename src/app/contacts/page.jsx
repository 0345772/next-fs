import cl from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button'

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
          <input
            type='text'
            placeholder='name'
            className={cl.input}
          />
          <input
            type='text'
            placeholder='email'
            className={cl.input}
          />
          <textarea 
          className={cl.textArea}
          name='' 
          id='' 
          cols='30' 
          rows='10'
          ></textarea>
          <Button url='#' text='Send'/>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
