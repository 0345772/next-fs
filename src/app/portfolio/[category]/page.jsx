import cl from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Category = ({params}) => {
  console.log(params)
  return (
    <div className= {cl.category}>
      <h3 className={cl.catTitle}>{params.category}</h3>
      <div className={cl.item} key='1'>
        <div className={cl.content}>
          <h3 className={cl.title}>Test</h3>
          <p className={cl.desc}>desc</p>
          <Button url='#' text='See More'/>
        </div>
        <div className={cl.imgContainer}>
          <Image
            className={cl.img}
            fill={true}
            src='https://cdn.pixabay.com/photo/2023/10/16/04/24/apartment-8318376_1280.jpg'
            alt=''
          /> 
        </div>
      </div>
    </div>
  );
};

export default Category;
