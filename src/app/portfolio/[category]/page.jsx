import cl from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';
import {items} from './data'
import {notFound} from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]
  if(!data) {
    return notFound()
  }
  if(data) {
    return data
  }
}

const Category = ({params}) => {
  // console.log(params)
  const data = getData(params.category)
  return (
    <div className= {cl.category}>
      <h3 className={cl.catTitle}>{params.category}</h3>

      {data.map((item) => (
        <div className={cl.item} key={item.id}>
        <div className={cl.content}>
          <h3 className={cl.title}>{item.title}</h3>
          <p className={cl.desc}>{item.desc}</p>
          <Button url='#' text='See More'/>
        </div>
        <div className={cl.imgContainer}>
          <Image
            className={cl.img}
            fill={true}
            src={item.image}
            alt={item.title}
          /> 
        </div>
      </div>
      ))}

    </div>
  );
};

export default Category;
