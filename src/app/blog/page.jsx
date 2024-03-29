import Link from "next/link";
import cl from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "BLOG",
  description: "The page Blog",
};


async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={cl.mainContainer}>
      {data.map((item) => (
        <Link
          href={`blog/${item._id}`}
          className={cl.container}
          key={item._id}
        >
          <div className={cl.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={cl.image}
            />
          </div>
          <div className={cl.content}>
            <h1 className={cl.title}>{item.title}</h1>
            <p className={cl.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;