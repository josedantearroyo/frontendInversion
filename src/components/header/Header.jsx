import React from "react";
import { Menubar } from "primereact/menubar"
import { Badge } from "primereact/badge"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import "./Header.css"

const Header = () => {
    const navigate = useNavigate()
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
    },
    {
      label: "Servicios",
      icon: "pi pi-pen-to-square",
    },
    {
      label: "Preguntas",
      icon: "pi pi-question",
    },
    {
      label: "Sobre Nosotros",
      icon: "pi pi-building",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    />
  );
  const end = (
    <div className="flex align-items-center justify-content-center">
      <Button
        label="Ingresar"
        className="p-button-md md:p-button-sm"
        icon="pi pi-user"
        severity="secondary"
        onClick={() => navigate("/login")}
      />
    </div>
  );

  // Enfoque 1: Implementación personalizada del menú
  const customMenu = () => {
    return (
      <div className="custom-menubar">
        <div className="menubar-start">{start}</div>
        <div className="menubar-center">
          <ul className="menu-items">
            {items.map((item, i) => (
              <li key={i} className="menu-item">
                <a className="menu-link">
                  <i className={item.icon}></i>
                  <span className="menu-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menubar-end">{end}</div>
      </div>
    );
  };

  // Enfoque 2: Usando el componente Menubar de PrimeReact
  const primeReactMenu = () => {
    return (
      <Menubar
        model={items}
        start={start}
        end={end}
        className="p-menubar-custom"
      />
    );
  };

  // Puedes elegir qué enfoque usar
  return (
    <div>
      {/* Elige uno de estos dos enfoques */}
      {primeReactMenu()}
      {/* {primeReactMenu()} */}
    </div>
  );
};

export default Header;
