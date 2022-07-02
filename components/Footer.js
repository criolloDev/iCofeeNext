const Footer = () => {
  return (
    <article className="footer">
      <div className="box-container">
        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>Nuestros emails</h3>
          <p>EsenciaC@gmail.com</p>
          <p>CafeEsencia@gmail.com</p>
        </div>

        <div className="box">
          <i className="fas fa-clock"></i>
          <h3>Horario de atención</h3>
          <p>07:00am a 09:00pm</p>
        </div>

        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Ubicación</h3>
          <p>Tolima, Ibague - cr4 estadio 37</p>
        </div>

        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>Nuestros telefonos</h3>
          <p>+3225698569</p>
          <p>+3156301352</p>
        </div>
      </div>
    </article>
  );
};

export default Footer;
