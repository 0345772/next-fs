import cl from './page.module.css'
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={cl.portfolio}>
      <h3 className={cl.selectTitle}>Choose a gallery</h3>
      <div className={cl.items}>
        <Link href='/portfolio/illustrations' className={cl.item}>
          <span className={cl.title}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={cl.item}>
          <span className={cl.title}>Websites</span>
        </Link>
        <Link href='/portfolio/application' className={cl.item}>
          <span className={cl.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
