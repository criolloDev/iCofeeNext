import Layout from "../components/Layout";
import Image from "next/image";

const galeria = () => {
  return (
    <Layout pagina="galeria">
      <article className="galeria">
        <div className="heading">
          <Image width={350} height={80} src="/img/heading-img.png" alt="heading" />
          <h3>Nuestra galeria</h3>
        </div>

        <div className="box-container">
          <Image width={500} height={500} src="/img/gallery-5.jpg" alt="g1" />
          <Image width={500} height={500} src="/img/gallery-2.webp" alt="g2" />
          <Image width={500} height={500} src="/img/gallery-3.webp" alt="g3" />
          <Image width={500} height={500} src="/img/gallery-4.webp" alt="g4" />
          <Image width={500} height={500} src="/img/gallery-1.jpg" alt="g5" />
          <Image width={500} height={500} src="/img/gallery-6.jpg" alt="g6" />
        </div>
      </article>
    </Layout>
  );
};

export default galeria;
