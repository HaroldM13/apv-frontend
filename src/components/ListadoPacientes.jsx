import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

function ListadoPacientes() {

  const { pacientes } = usePacientes();

  return (
    <>
      {pacientes.length ? 
      (
        <>
          <h2 className="font-black text-3xl text-center" >Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center" >
            Administra tus {''}
            <span className="text-indigo-600 font-bold" >Pacientes y Citas</span>
          </p>

          {pacientes.map( paciente => (
            <Paciente 
              key={paciente._id}
              paciente={paciente}
            />
          ) )}
        </>
      ) 
      : 
      (
        <>
          <h2 className="font-black text-3xl text-center" >No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center" >
              Comienza agrgando pacientes {''}
              <span className="text-indigo-600 font-bold" >Y apareceran en esta area</span>
            </p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes