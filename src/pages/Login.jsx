import { Fragment } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="flex flex-column h-screen align-items-center justify-content-center gap-2 bg-yellow-900 bg-gradient-dar ">
        <Card className="md:w-30rem shadow-7">
          <div className="flex flex-column align-items-center">
            <img src="" alt="Logo" style={{ width: "200px" }} />
            <h2>¡Bienvenido de Nuevo!</h2>
          </div>
          <form className="mb-2 w-full">
            <div className="flex flex-column gap-3 align-items-center w-full">
              {/* Campo de usuario */}
              <div className="p-inputgroup w-full">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  name="usuario"
                  placeholder="Usuario"
                  className="w-full"
                />
              </div>
              <div className="p-inputgroup w-full">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-lock"></i>
                </span>
                <span className="w-full">
                  {" "}
                  <Password
                    feedback={false}
                    name="password"
                    placeholder="Contraseña"
                    toggleMask
                    className="w-full"
                    inputClassName="w-full"
                    panelClassName="w-full"
                    pt={{
                      root: { style: { width: "100%" } },
                      input: { style: { width: "100%" } },
                      panel: { style: { width: "100%" } },
                    }}
                    style={{ display: "block", width: "100%" }}
                  />
                </span>
              </div>

              <Button
                onClick={handleLogin}
                type="submit"
                severity="secondary"
                size="large"
                label="Iniciar Sesión"
                className="w-full"
              />
            </div>
          </form>
          <div className="flex justify-content-center gap-2 mb-2">
            <span className="text-md"> ¿No tienes una cuenta aún?</span>
            <Link
              to="/register"
              className="text-blue-800 font-medium text-md no-underline"
            >
              Registrarse
            </Link>
          </div>
          <div className="flex justify-content-center gap-2 mb-2">
            <Link
              to="/recuperar-cuenta"
              className="text-blue-800 font-medium text-md no-underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};
export default Login;
