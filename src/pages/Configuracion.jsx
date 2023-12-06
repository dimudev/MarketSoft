import React from 'react'
import FlexTemplate from '../components/FlexTemplate'

const Configuracion = () => {
  return (
    <>
      <FlexTemplate
        title={'Configuración y Documentación'}
        subtitle={'configurar preferencias del usuario y acceder a la documentación'}
      >
        <div className=' h-full w-full flex  bg-[#F7F6F6] justify-center items-center ' >
          <div className='w-[95%]  h-[90%] flex flex-col gap-4  ' >
            <div className=' flex gap-4 h-[75%] w-[65%] bg-[#F7F6F6]  '>
              <div className=' bg-white  h-full w-[40%] flex  flex-col  justify-center items-center border-2 border-gray-400/30 rounded-lg ' >
                <div className=' w-[80%] h-[80%]' >
                  {
                    ['Mi cuenta', 'Apariencia', 'Privacidad y Seguridad', 'Integraciones', 'Facturaciones', 'Notificaciones', 'Lenguaje'].map(element => (
                      <div className='w-[100%] h-[14%] flex items-center rounded-lg text-[17px]' style={{ backgroundColor: element === 'Mi cuenta' && '#F7F6F6', fontWeight: element === 'Mi cuenta' && 'bold' }} key={element}>
                        <button className='pl-4' >{element}</button>
                      </div>
                    ))
                  }
                </div>

              </div>
              <div className='h-full w-[60%] flex items-center justify-center bg-white border-2 border-gray-400/30 rounded-lg' >
                <div className=' h-[90%] w-[90%] flex flex-col  '>
                  <div className='font-bold flex items-center text-[18px] h-[10%] ' >Mi cuenta</div>
                  <div className=' flex flex-col justify-evenly  h-[70%]'>
                    <div >
                      <label className='font-semibold' >Usuario</label>
                      <div className=' flex flex-row-reverse items-center border-2 pr-[4px] border-gray-400/30  h-[90%] w-full bg-[#F7F6F6] rounded-lg' >
                        <button className='font-bold bg-[#0069BE] rounded-md w-[20%] h-[90%] text-white' >Editar</button>
                      </div>
                    </div>
                    <div>
                      <label className='font-semibold' >Correo</label>
                      <input type="text" className='text-[22px] h-[90%] w-full border-2 border-gray-400/30  rounded-lg' />
                    </div>
                    <div>
                      <label className='font-semibold' >Rol</label>
                      <input type="text" className='text-[22px] h-[90%] w-full border-2 border-gray-400/30  rounded-lg' />
                    </div>

                  </div>
                  <div className=' flex items-center justify-center h-[20%]'>
                    <button className=' w-full h-[60%] text-[18px] text-white font-bold bg-[#0069BE]' >Cambiar contraseña</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white h-[25%] border-2 border-gray-400/30 rounded-lg '>
              <div className=' flex h-full gap-16 items-center pl-10'>
                <div>
                  <h4 className='text-[22px]' >
                  Manual de Usuario
                  </h4>
                  <button className='font-bold text-[20px]' >Descargar</button>
                </div>
                <div>

                  <h4 className='text-[22px]'>
                Guias de integracón
                  </h4>
                  <button className='font-bold text-[20px]' >Descargar </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </FlexTemplate>
    </>
  )
}

export default Configuracion
