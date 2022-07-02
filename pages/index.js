import Especialidades from "../components/Especialidades";
import Layout from "../components/Layout";
import Link from 'next/link'

export default function Home() {
  return (
    <Layout pagina="inicio">
      <div className="home-bg">
        <section className="home" id="home">
          <div className="content">
            <h3>Esencia de Café</h3>
            <p>
              Un entrono confortable y agradable para que los clientes puedan 
              tener una estancia de lo más satisfactoria en nuestro establecimiento.
              <br/>
              <span> Cafe para soñar despiertos! </span>
            </p>
            <Link href="/nosotros">
              <div className="btn">
                Conócenos
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Especialidades/>
    </Layout>
  );
}
