import Layout from "../components/Layout";
import Image from "next/image";

const contacto = () => {
  return (
    <Layout pagina="contacto">
      <section className="contacto">
        <div className="heading">
          <Image width={350} height={80} src="/img/heading-img.png" alt="heading" />
          <h3>Contáctanos</h3>
        </div>

        <div className="row">
          <div className="image">
            <Image layout="responsive" width={900} height={700} src="/img/contacto.svg" alt="contact" />
          </div>

          <form action="" method="post">
            <h3>Reserva tu mesa</h3>
            <input
              type="text"
              name="nombre"
              required
              className="box"
              maxLength="20"
              placeholder="Ingresa tu nombre"
            />
            <input
              type="number"
              name="telefono"
              required
              className="box"
              maxLength="20"
              placeholder="Numero telefonico"
              min="0"
              max="9999999999"
            />
            <input
              type="number"
              name="clientes"
              required
              className="box"
              maxLength="20"
              placeholder="Cuantas personas?"
              min="0"
              max="99"
            />
            <input type="submit" name="send" value="Enviar" className="btn" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default contacto;
