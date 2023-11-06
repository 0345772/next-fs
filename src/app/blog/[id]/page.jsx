import cl from './page.module.css'
import Image from 'next/image';

const BlogId = ({params}) => {
  return (
    <div className={cl.container}>
      <div className={cl.top}>
        <div className={cl.info}>
          <h3 className={cl.title}>Title</h3>
          <p className={cl.desc}>description</p>
          <div className={cl.author}>
            <Image
              src='https://cdn.pixabay.com/photo/2023/11/03/10/48/indian-8362684_1280.jpg'
              alt='leopard'
              width={40}
              height={40}
              className={cl.avatar}
            />
            <span className={cl.username}>username</span>
          </div>
        </div>
        <div className={cl.imageContainer}>
          <Image
            src='https://cdn.pixabay.com/photo/2023/11/03/19/55/ai-generated-8363769_1280.jpg'
            alt='leopard'
            // width={40}
            // height={40}
            fill={true}
            className={cl.avatar}
          />
        </div>
      </div>
      <div className={cl.content}>
      <p className={cl.text}>description</p>
        <div></div>
      </div>
    </div>
  );
};

export default BlogId;
