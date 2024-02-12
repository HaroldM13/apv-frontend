import { useState, useEffect } from "react";

import AdminNav from "../components/AdminNav";
import useAuth from '../hooks/useAuth';

import Alerta from "../components/Alerta";

function EditarPerfil() {

    const { auth, actualizarPerfil } = useAuth();

    console.log(auth);

    const [perfil, setPerfil] = useState({});
    const [alerta, setAlerta] = useState({});

    

    useEffect( () => {
        setPerfil(auth);
    }, [auth] );

    const handleSubmit = async e => {
        e.preventDefault();

        if ([perfil.nombre, perfil.email].includes('')  ) {
            setAlerta({msg: 'El campo de Nombre y Correo son Obligatorios!!', error: true})
            return;
        }

        const resultado = await actualizarPerfil(perfil);

        setPerfil({});

        setAlerta(resultado);
    }


    const { msg } = alerta;
  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10" >Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center" >Modifica tu {''} 
            <span className="text-indigo-600 font-bold" >Informacion aqui</span>
        </p>

        <div className="flex justify-center" >
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5" >
                <form action="" onSubmit={handleSubmit}>
                    { msg && <Alerta 
                        alerta ={alerta}
                     /> }
                    <div className="my-3" >
                        <label htmlFor="nombre" className="uppercase font-bold text-gray-600" >Nombre:</label>
                        <input
                            id="nombre" 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3" >
                        <label htmlFor="web" className="uppercase font-bold text-gray-600" >Sitio Web:</label>
                        <input
                            id="web" 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="web"
                            value={perfil.web || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3" >
                        <label htmlFor="telefono" className="uppercase font-bold text-gray-600" >Telefono:</label>
                        <input
                            id="telefono" 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3" >
                        <label htmlFor="email" className="uppercase font-bold text-gray-600" >Email:</label>
                        <input
                            id="email"
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name="email"
                            value={perfil.email || ''}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Guardar Cambios"
                        className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
                    />

                </form>
            </div>
        </div>
    </>
  )
}

export default EditarPerfil