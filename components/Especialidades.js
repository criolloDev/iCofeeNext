import Image from 'next/image';

const Especialidades = () => {
  return (
    <article className="especialidades">

   <div className="heading">
      <Image width={350} height={80} src="/img/heading-img.png" alt="img-heading"/>
      <h3>Nuestras especialidades</h3>
   </div>

   <div className="box-container">

      <div className="box">
         <Image width={120} height={120} src="/img/icon-1.png" alt="logo1"/>
         <h3>Variedades de café</h3>
         <p>Variedades de cafe de porte alto y bajo, de frutos rojos o amarillos</p>
      </div>

      <div className="box">
         <Image width={120} height={120} src="/img/icon-2.png" alt="logo2"/>
         <h3>Granos de café</h3>
         <p>La mejor calidad de granos de café tipo nacional he importado.</p>
      </div>

      <div className="box">
         <Image width={120} height={120} src="/img/icon-3.png" alt="logo3"/>
         <h3>Desayunos y postres</h3>
         <p>Menu amplio de desayunos y postres con todo el amor.</p>
      </div>

      <div className="box">
         <Image width={120} height={120} src="/img/icon-4.png" alt="logo4"/>
         <h3>Leer y tomar café</h3>
         <p>Un entorno tranquilo para poder disfrutar de una buena lectura.</p>
      </div>

   </div>

</article>
  )
}

export default Especialidades