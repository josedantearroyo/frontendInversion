import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Link, useNavigate } from "react-router-dom";
const RecuperarCuenta = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-column m-3 h-screen align-items-center justify-content-center gap-2 bg-yellow-900 bg-gradient-dark">
        <Card className=" w-full md:w-30rem shadow-8 p-2 mx-2">
          <div className="flex flex-column align-items-center">
            <h2>Recuperar Acceso!</h2>
          </div>
          <form className="p-d-flex p-jc-center p-ai-center mb-2">
            <div className="flex flex-column gap-3 align-items-center">
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-inbox"></i>
                </span>
                <InputText name="usuario" placeholder="correo electronico" />
              </div>
              <Button
                type="submit"
                severity="secondary"
                size="large"
                label="Recuperar Cuenta"
                className="w-full text-sm md:text-lg"
                onClick={() => navigate("/login")}
              />
            </div>
          </form>
          <div className="flex justify-content-center gap-2 mb-2">
            <span className="text-sm"> ¿No tienes una cuenta aún?</span>
            <Link to="/register" className="text-blue-800 font-medium text-sm no-underline">
              Registrarse
            </Link>
          </div>
          <div className="flex justify-content-center gap-2">
            <span className="text-sm">Tambien puedes</span>
            <Link to="/login" className="text-color-secondary font-medium text-sm no-underline hover:text-primary-200">
              Iniciar sesion
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};
export default RecuperarCuenta;
