import React from 'react'
import FlexTemplate from '../components/FlexTemplate'
import { MaterialSymbolsLightTrendingUp, OcticonPlus16 } from '../assets/icons/icons'

const Seguimiento = () => {
  const clientesLeads = [
    {
      nombre: 'Daniela Peréz',
      correo: 'dperez@gmail.com',
      estado: 'Nuevo'
    },
    {
      nombre: 'Luis Díaz',
      correo: 'luisd@gmail.com',
      estado: 'Descalificado'
    },
    {
      nombre: 'Carmen García',
      correo: 'carmengarc@gmail.com',
      estado: 'Nuevo'
    },
    {
      nombre: 'Gloria Meza',
      correo: 'gmendez16@outlook.com',
      estado: 'Descalificado'
    },
    {
      nombre: 'Carlos Bolivar',
      correo: 'bolivarc@outlook.com',
      estado: 'Nuevo'
    }
  ]

  return (
    <>
      <FlexTemplate
        title={'Gestión De Leads'}
        subtitle={'!Aquí tienes las estadísticas en tiempo real!'}
      >

        <div className='bg-red-400 h-full flex flex-col' >
          <section className='h-[25%] w-full justify-center  ' >
            <div className='flex h-full w-[52%] items-center justify-center gap-8  ml-4'>
              <div className='bg-[#0069BE] text-white w-[303px] h-[80%] rounded-lg p-2 ' >
                <h4 className='font-bold text-[20px]' >Total Leads</h4>
                <p className='font-bold text-[20px]' >234</p>
              </div>
              <div className=' border-2 border-gray-400/30 rounded-lg w-[303px] h-[80%] flex flex-col justify-center items-center' >
                <div className='w-[90%] flex flex-col gap-2 ' >
                  <div className='bg-[#0069BE] h-[44px] w-[255px] cursor-pointer flex justify-evenly items-center rounded-full '>
                    <OcticonPlus16 height={'30px'} width={'30px'} />
                    <p className='font-bold text-[20px] text-white' >Añadir Lead</p>
                  </div>
                  <div className='flex  items-center gap-2'>
                    <MaterialSymbolsLightTrendingUp height={'30px'} width={'30px'} />
                    <p>15%</p>
                  </div>
                </div>
              </div>
            </ div>
            <div></div>
          </section>
          <section className=' flex items-center justify-center   h-[75%]' >
            <div className=' h-[90%] w-[92%] border-2  rounded-lg' >
              <div className=' w-full h-[15%] flex justify-center items-center '>
                <div className='w-full  flex items-center justify-between' >
                  <div className=' w-[30%] p-6 ' >
                    <h2 className='text-[20px] font-bold' >Campañas Existentes</h2>
                  </div>
                  <div className=' w-[35%]  flex justify-center items-center ' >
                    <div className=' border-2 border-gray-400/30 rounded-full w-[40%] text-center text-[18px] ' >
                      <p>Ultimos 15 días</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='  w-full h-[85%] flex  items-center justify-center ' >
                <table className=' w-[95%] h-[92%] ' >
                  <thead>
                    <tr className='text-[20px] font-bold' >
                      <th className='w-[30%] border-b-[1px] border-gray-400/30 text-start ' >Nombre</th>
                      <th className='w-[20%] border-b-[1px] border-gray-400/30' >Correo</th>
                      <th className='w-[20%] border-b-[1px] border-gray-400/30' >Estado</th>
                      <th className='w-[30%] ' ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      clientesLeads.map((cliente, index) => (
                        <>
                          <tr className='text-[18px] font-medium ' >
                            <td key={cliente.cliente} className={`  ${(clientesLeads.length - 1) === index ? 'border-none' : 'border-b-[1px] border-gray-400/30 '}`} >{cliente.nombre}</td>
                            <td className={` text-center ${(clientesLeads.length - 1) === index ? 'border-none' : 'border-b-[1px] border-gray-400/30 '}`} >{cliente.correo}</td>
                            <td className= {` text-center ${(clientesLeads.length - 1) === index ? 'border-none' : 'border-b-[1px] border-gray-400/30 '}`} >{cliente.estado}</td>
                            <td className='  text-center h-full flex items-center  justify-center gap-4 ' >
                              <button className='  text-[20px] text-white font-bold w-[50%]   bg-[#00B91E]' >Editar</button>
                              <button className='  text-[20px] text-white font-bold  w-[50%] bg-[#ED0000]' >Eliminar</button>
                            </td>
                          </tr>
                        </>

                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>

      </FlexTemplate>
    </>
  )
}

export default Seguimiento
