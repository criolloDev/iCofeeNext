import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const nosotros = () => {
  return (
    <Layout pagina="nosotros">
      <section className="nosotros">
        <div className="image">
          <Image
            width={900}
            height={800}
            src="/img/nosotros.svg"
            alt="about"
          />
        </div>

        <div className="content">
          <h3>Nuestra identidad</h3>
          <p>
            El alcance del café a través de las fronteras nacionales y
            culturales siempre ha influido en la forma en que hacemos negocios.
            Desde el trabajador en la finca hasta el barista que sirve la taza
            de café terminada, cada uno es una parte integral del proceso y
            crucial para su éxito.
          </p>
          <p>
            Estamos orgullosos de nuestra reputación y de
            las personas que trabajan con nosotros para hacer realidad nuestra
            misión. Es lo que nos hace sentir parte de algo más grande que
            nosotros mismos.
          </p>
          <Link href="/menu">
            <a className="btn">Nuestro menu</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default nosotros;
