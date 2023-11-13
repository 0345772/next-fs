import cl from './page.module.css'
import Image from 'next/image';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data !!!!!!!!!!!!");
  }

  return res.json();
}

export async function generateMetadata({params}) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}

const BlogId = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={cl.container}>
      <div className={cl.top}>
        <div className={cl.info}>
          <h1 className={cl.title}>{data.title}</h1>
          <p className={cl.desc}>{data.desc}</p>
          <div className={cl.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={cl.avatar}
            />
            <span className={cl.username}>{data.username}</span>
          </div>
        </div>
        <div className={cl.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={cl.image} />
        </div>
      </div>
      <div className={cl.content}>
        <p className={cl.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
