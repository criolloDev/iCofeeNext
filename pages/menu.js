import Layout from "../components/Layout";
import Image from "next/image";

const menu = () => {
  return (
    <Layout pagina="menu">
      <article className="menu">
        <div className="heading">
          <Image
            width={350}
            height={80}
            src="/img/heading-img.png"
            alt="heading"
          />
          <h3>popular menu</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <Image
              width={350}
              height={350}
              src="/img/menu-1.png"
              alt="menu1"
            />
            <h3>love you coffee</h3>
          </div>

          <div className="box">
            <Image
              width={350}
              height={350}
              src="/img/menu-2.png"
              alt="menu2"
            />
            <h3>Cappuccino</h3>
          </div>

          <div className="box">
            <Image
              width={350}
              height={350}
              src="/img/menu-3.png"
              alt="menu3"
            />
            <h3>Mocha coffee</h3>
          </div>

          <div className="box">
            <Image
              width={350}
              height={350}
              src="/img/menu-4.png"
              alt="menu4"
            />
            <h3>Frappuccino</h3>
          </div>

          <div className="box">
            <Image
              width={350}
              height={350}
              src="/img/menu-5.png"
              alt="menu5"
            />
            <h3>black coffee</h3>
          </div>

          <div className="box">
            <Image
              width={350}
              height={350}
              src="/img/menu-6.png"
              alt="menu6"
            />
            <h3>love heart coffee</h3>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default menu;
