import 'ejercicio1.less'; // Importa los estilos LESS

import soyeseImage from 'soyese.jpg'; // Importa la imagen

document.addEventListener('DOMContentLoaded', function() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    <header>
      <h1>Franklin Reniery Maradiaga Martinez</h1>
    </header>

    <section>
      <img src="${soyeseImage}" alt="Mi Foto de Perfil" class="foto-perfil">
      <h2>Biografía</h2>
      <p>
        ¡Hola! Soy un desarrollador web apasionado por la creación de experiencias web increíbles.
        Tengo 21 años y muchas ganas de seguir aprendiendo más.
      </p>

      <h2>Contacto</h2>
      <p>¡Estoy abierto a nuevas oportunidades! Puedes contactarme a través de:</p>
      <ul>
        <li>Email: <a href="mailto:franklinmaradiaga14@gmail.com">franklinmaradiaga14@gmail.com</a></li>
      </ul>
    </section>
  `;
});

