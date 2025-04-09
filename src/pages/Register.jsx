import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import qrPago from "../assets/qrPago.png";
import { Image } from "primereact/image";

import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: "España", code: "ES" },
    { name: "Estados Unidos", code: "US" },
    { name: "Canadá", code: "CA" },
    { name: "México", code: "MX" },
    { name: "Guatemala", code: "GT" },
    { name: "Belice", code: "BZ" },
    { name: "Honduras", code: "HN" },
    { name: "El Salvador", code: "SV" },
    { name: "Nicaragua", code: "NI" },
    { name: "Costa Rica", code: "CR" },
    { name: "Panamá", code: "PA" },
    { name: "Colombia", code: "CO" },
    { name: "Venezuela", code: "VE" },
    { name: "Ecuador", code: "EC" },
    { name: "Perú", code: "PE" },
    { name: "Bolivia", code: "BO" },
    { name: "Chile", code: "CL" },
    { name: "Argentina", code: "AR" },
    { name: "Uruguay", code: "UY" },
    { name: "Paraguay", code: "PY" },
    { name: "Brasil", code: "BR" },
    { name: "Cuba", code: "CU" },
    { name: "República Dominicana", code: "DO" },
    { name: "Haití", code: "HT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Jamaica", code: "JM" },
    { name: "Trinidad y Tobago", code: "TT" },
    { name: "Barbados", code: "BB" },
    { name: "Bahamas", code: "BS" },
    { name: "Guyana", code: "GY" },
    { name: "Surinam", code: "SR" },
    { name: "Guayana Francesa", code: "GF" },
    { name: "Antigua y Barbuda", code: "AG" },
    { name: "San Cristóbal y Nieves", code: "KN" },
    { name: "Santa Lucía", code: "LC" },
    { name: "San Vicente y las Granadinas", code: "VC" },
    { name: "Granada", code: "GD" },
    { name: "Dominica", code: "DM" }
  ]
  return (
    <>
      <div className="flex flex-column align-items-center justify-content-center gap-2 m-3">
        <Card className=" w-full mx-3 md:w-6 overflow-hidden p-3 shadow-8">
          <div className="flex flex-column align-items-center">
            <img src="" alt="Logo" style={{ width: "200px" }} />
            <h2 className="text-base md:text-2xl font-normal">Registrarse en el sistema</h2>
          </div>
          <form className="w-full">
            <div className="flex flex-column md:flex-row gap-1">
              <div className="field w-full mb-1">
                <label htmlFor="nombres" className="text-sm md:text-lg">
                  Nombres
                </label>
                <InputText id="nombres" className="w-full shadow-3" />
              </div>
              <div className="field w-full ">
                <label htmlFor="apellidos" className="text-sm md:text-lg">
                  Apellidos
                </label>
                <InputText id="apellidos" className="w-full shadow-3" />
              </div>
            </div>
            <div className="flex flex-column gap-2 mb-2">
              <Dropdown
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.value)}
                options={countries}
                optionLabel="name"
                placeholder="Selecciona tu pais"
                className="w-full xlg:w-14rem"
                checkmark={true}
                highlightOnSelect={false}
              />
            </div>
            <div className="flex flex-column gap-2 mb-2">
              <label htmlFor="apellidos" className="text-sm md:text-lg">
                Usuario
              </label>
              <InputText id="apellidos" className="w-full" />
            </div>
            <div className="flex flex-column gap-2">
              <label htmlFor="apellidos" className="text-sm md:text-lg">
                Correo Electronico
              </label>
              <InputText type="email" id="apellidos" className="w-full" />
            </div>
            <div className="flex justify-content-center m-2">
              <Image
                src={qrPago}
                alt="Image"
                width="150"
              />
            </div>
            <Button
                type="submit"
                className="flex flex-column justify-content-center align-items-center w-full"
                severity="secondary"
                size="large"
                label="Pagar y Registrarse"
                onClick={() => navigate("/login")}
              />
          </form>
          <div className="flex flex-column justify-content-between">
            <p className="px-5">Ya tienes una cuenta?
               <Link to="/login" className="text-900 ml-2">
              Iniciar Sesion
            </Link> 
            </p> 
          </div>
        </Card>
      </div>
    </>
  );
};
export default Register;
