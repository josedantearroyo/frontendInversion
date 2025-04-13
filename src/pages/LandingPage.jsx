import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/LandingPage.css"; // Importamos los estilos personalizados
import Header from "../components/header/Header";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // Inicializar AOS cuando el componente se monta
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120
    });
  }, []);

  return (
    <div className="landing-container">
      <Header />

      {/* Hero Section */}
      <section className="hero-section w-full flex flex-column md:flex-row align-items-center justify-content-center py-8 px-4">
        <div 
          className="flex flex-column md:w-6 md:pr-4 mb-4 md:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-bold mb-4">Inversiones que <span className="text-gradient">transforman</span> tu futuro</h1>
          <p className="text-xl line-height-3 mb-4">
            Descubre oportunidades únicas para hacer crecer tu capital con estrategias de inversión personalizadas.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button label="Comenzar ahora" className="p-button-raised p-button-primary hover-grow" />
            <Button label="Saber más" className="p-button-outlined hover-grow" />
          </div>
        </div>
        <div 
          className="md:w-6 float-animation"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image 
            src="https://img.freepik.com/free-vector/financial-investment-concept-illustration_114360-7928.jpg" 
            alt="Inversiones" 
            className="border-round-xl shadow-4" 
            width="100%" 
          />
        </div>
      </section>

      {/* Secciones con efecto de aparición */}
      <Card className="w-full px-4 py-6 border-none shadow-none">
        {/* Quiénes somos */}
        <div 
          className="flex flex-column md:flex-row align-items-center justify-content-between mb-8 py-4"
          data-aos="fade-up"
        >
          <div className="md:w-6 md:order-2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-3">Quiénes Somos</h2>
            <p className="line-height-3 text-lg">
              Somos una plataforma líder en inversiones con enfoque en tecnología y sostenibilidad.
              Nuestro equipo de expertos analiza constantemente el mercado para identificar las mejores oportunidades
              y minimizar los riesgos para nuestros inversores.
            </p>
          </div>
          <div className="md:w-5 md:order-1" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-hover">
              <Image 
                src="https://img.freepik.com/free-vector/start-up-concept-illustration_114360-1363.jpg" 
                alt="Equipo de trabajo" 
                className="border-round-xl shadow-2" 
                width="100%" 
              />
            </div>
          </div>
        </div>

        {/* Misión */}
        <div 
          className="flex flex-column md:flex-row align-items-center justify-content-between mb-8 py-4"
          data-aos="fade-up"
        >
          <div className="md:w-6 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-3">Nuestra Misión</h2>
            <p className="line-height-3 text-lg">
              Nuestra misión es democratizar el acceso a oportunidades de inversión de calidad,
              permitiendo a personas de todos los niveles económicos participar en el crecimiento
              de los mercados globales con transparencia y seguridad.
            </p>
            <ul className="list-none p-0 mt-4">
              <li className="flex align-items-center mb-2" data-aos="fade-right" data-aos-delay="100">
                <i className="pi pi-check-circle text-primary mr-2"></i>
                <span>Inversiones accesibles para todos</span>
              </li>
              <li className="flex align-items-center mb-2" data-aos="fade-right" data-aos-delay="200">
                <i className="pi pi-check-circle text-primary mr-2"></i>
                <span>Asesoramiento financiero personalizado</span>
              </li>
              <li className="flex align-items-center" data-aos="fade-right" data-aos-delay="300">
                <i className="pi pi-check-circle text-primary mr-2"></i>
                <span>Tecnología de vanguardia para tus inversiones</span>
              </li>
            </ul>
          </div>
          <div className="md:w-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-hover">
              <Image 
                src="https://img.freepik.com/free-vector/goal-achievement-concept-illustration_114360-5401.jpg" 
                alt="Misión" 
                className="border-round-xl shadow-2" 
                width="100%" 
              />
            </div>
          </div>
        </div>

        {/* Visión */}
        <div 
          className="flex flex-column md:flex-row align-items-center justify-content-between py-4"
          data-aos="fade-up"
        >
          <div className="md:w-6 md:order-2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-3">Nuestra Visión</h2>
            <p className="line-height-3 text-lg">
              Aspiramos a ser la plataforma preferida para inversiones inteligentes a nivel global,
              reconocida por nuestra innovación, transparencia y por generar valor sostenible
              tanto para nuestros inversores como para la sociedad.
            </p>
            <div className="mt-4 p-3 bg-primary-50 border-round card-hover" data-aos="fade-up" data-aos-delay="300">
              <div className="flex align-items-center">
                <i className="pi pi-chart-line text-primary text-4xl mr-3"></i>
                <p className="m-0 text-lg font-medium">
                  "Construyendo un futuro financiero sólido juntos"
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-5 md:order-1" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-hover">
              <Image 
                src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg" 
                alt="Visión" 
                className="border-round-xl shadow-2" 
                width="100%" 
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Sección de estadísticas */}
      <section className="statistics-section w-full bg-primary py-6 my-6 parallax-bg" data-aos="fade-up">
        <div className="container">
          <div className="grid">
            <div className="col-12 md:col-3 text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-white hover-grow">
                <h2 className="text-5xl font-bold mb-2">15K+</h2>
                <p className="text-white-alpha-70 m-0">Inversores activos</p>
              </div>
            </div>
            <div className="col-12 md:col-3 text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-white hover-grow">
                <h2 className="text-5xl font-bold mb-2">$250M</h2>
                <p className="text-white-alpha-70 m-0">Activos gestionados</p>
              </div>
            </div>
            <div className="col-12 md:col-3 text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-white hover-grow">
                <h2 className="text-5xl font-bold mb-2">18%</h2>
                <p className="text-white-alpha-70 m-0">Rendimiento anual medio</p>
              </div>
            </div>
            <div className="col-12 md:col-3 text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-white hover-grow">
                <h2 className="text-5xl font-bold mb-2">24/7</h2>
                <p className="text-white-alpha-70 m-0">Soporte disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section w-full py-8 my-4 px-4" data-aos="fade-up">
        <Card className="w-full md:w-8 md:mx-auto shadow-8 border-none p-5 card-hover">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">¿Listo para empezar a invertir?</h2>
            <p className="line-height-3 mb-4 text-lg">
              Únete hoy y comienza tu viaje hacia la libertad financiera con nuestra plataforma de inversiones.
            </p>
            <div className="flex flex-wrap justify-content-center gap-2">
              <Link to="/register">
                <Button label="Crear cuenta" icon="pi pi-user-plus" className="p-button-raised p-button-lg hover-grow" />
              </Link>
              <Link to="/login">
                <Button label="Iniciar sesión" icon="pi pi-sign-in" className="p-button-outlined p-button-lg hover-grow" />
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer simple */}
      <footer className="w-full bg-gray-900 text-white py-4 text-center">
        <p>© 2025 Inversion | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default LandingPage;