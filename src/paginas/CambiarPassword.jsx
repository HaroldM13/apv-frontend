import AdminNav from "../components/AdminNav";
import { useState } from "react";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

function CambiarPassword() {

  const { guardarPassword } = useAuth();

  const [alerta, setAlerta] = useState({});

  const [password, setPassword] = useState({
    pwd_actual: '',
    pwd_nuevo: ''
  });
  const [passwordConfirmado, setPasswordConfirmado] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if ( Object.values(password).some( campo => campo === '' ) ) {
      setAlerta({
        msg: 'Todos los campos son Obligatorios!!',
        error: true
      })
      return;
    }

    if (password.pwd_nuevo.trim().length < 6) {
      setAlerta({
        msg: 'El password debe tener minimo 6 caracteres!!',
        error: true
      })
    }

    if (password.pwd_nuevo !== passwordConfirmado) {
      setAlerta({
        msg: 'Las contraseñas no coinciden!!',
        error: true
      });
      return;
      
    }

    const respuesta = await guardarPassword(password);

    setAlerta(respuesta);

  }

  const {msg} = alerta;

  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10" >Cambiar Password</h2>
        <p className="text-xl mt-5 mb-10 text-center" >Modifica tu {''} 
            <span className="text-indigo-600 font-bold" >Password aqui</span>
        </p>

        <div className="flex justify-center" >
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5" >
                <form action="" onSubmit={handleSubmit}>
                    { msg && <Alerta 
                        alerta ={alerta}
                     /> }
                    <div className="my-3" >
                        <label htmlFor="passwordActual" className="uppercase font-bold text-gray-600" >Password Actual:</label>
                        <input
                            id="passwordActual" 
                            type="password"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="pwd_actual"
                            placeholder="Escribe tu password Actual"
                            onChange={ e => setPassword({
                              ...password,
                              [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3" >
                        <label htmlFor="password" className="uppercase font-bold text-gray-600" >Password Nuevo:</label>
                        <input
                            id="password" 
                            type="password"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="pwd_nuevo"
                            placeholder="Escribe tu password Nuevo"
                            onChange={ e => setPassword({
                              ...password,
                              [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3" >
                        <label htmlFor="confirmarPassword" className="uppercase font-bold text-gray-600" >Confirmar Password:</label>
                        <input
                            id="confirmarPassword" 
                            type="password"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="pwd_confirmado"
                            placeholder="Confirma tu password"
                            onChange={ e => setPasswordConfirmado(e.target.value)}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Actualizar Pasword"
                        className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
                    />

                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword