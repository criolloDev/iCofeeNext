import Layout from "../components/Layout";
import Image from "next/image";

const equipo = () => {
  return (
    <Layout pagina="equipo">
      <article className="team">
        <div className="heading">
          <Image width={350} height={80} src="/img/heading-img.png" alt="heading" />
          <h3>Nuestro team</h3>
        </div>
        <div className="container">
          <div className="box">
            <div className="imgBx">
              <Image
                width={250}
                height={250}
                layout="responsive"
                src="/img/our-team-1.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Cristian</h2>
              <p>
                “El café es un bálsamo para el corazón y el espíritu.”
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <Image
                layout="responsive"
                width={250}
                height={250}
                src="/img/our-team-3.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Paula</h2>
              <p>
                “El café huele a cielo recién molido.”
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <Image
                width={250}
                height={250}
                objectFit="cover"
                layout="responsive"
                src="/img/our-team-2.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Felipe</h2>
              <p>
                “No es que el café me de insomnio, es que me hace soñar despierto.”
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default equipo;
