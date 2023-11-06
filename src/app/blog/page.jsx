import cl from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
const Blog = () => {
  return (
    <div className={cl.mainContainer}>
      <Link href='blog/test-1' className={cl.container} key='1'>
        <div className={cl.imageContainer}>
          <Image 
            src='https://cdn.pixabay.com/photo/2017/08/30/17/26/please-2697949_1280.jpg'
            alt='img Blog'
            width={300}
            height={200}
            className={cl.image}
          />
        </div>
        <div className={cl.content}>
          <h3 className={cl.title}>Title</h3>
          <p className={cl.desc}>description</p>
        </div>
      </Link>
        <Link href='blog/test-2' className={cl.container} key="2">
        <div className={cl.imageContainer}>
          <Image 
            src='https://cdn.pixabay.com/photo/2017/08/30/17/26/please-2697949_1280.jpg'
            alt='img Blog'
            width={300}
            height={200}
            className={cl.image}
          />
        </div>
        <div className={cl.content}>
          <h3 className={cl.title}>Title</h3>
          <p className={cl.desc}>description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
