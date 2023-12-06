import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import Sidebard from '../components/sidebar/Sidebar'

const Login = () => {
  const { handleSubmit, control, reset } = useForm()
  const [logged, setLogged] = useState(false)

  const onSubmit = ({ correo, contraseña }) => {
    if (correo === 'admin' && contraseña === 'admin') setLogged(true)
    reset()
  }

  return (
    <>
      {!logged
        ? (
          <div className=' h-screen w-screen flex'>

            <picture className='bg-red-400 h-full w-[60%]'>
              <img style={{ width: '100%', height: '100%' }} src="https://www.conteudoinboundmarketing.com.br/wp-content/uploads/2018/02/As-5-estrat%C3%A9gias-de-Marketing-que-mais-geram-resultados-1024x1024.png" alt="" />
            </picture>

            <div className=' h-full w-[45%] flex flex-col items-center'>
              <div className='h-[20%] w-[75%] flex items-center' >
                <h1 className='font-bold text-lg text-[26px]' >Market<span className='font-normal'>soft</span> </h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='  flex flex-col w-[75%] h-[50%] gap-6' >
                <div>
                  <h1 className='font-bold  text-xl tracking-wide text-[28px] ' >Iniciar sesión en su cuenta</h1>
                  <p className='tracking-wide text-[22px] ' >Ingresa tus credenciales</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col'>

                    <Controller
                      name={'correo'}
                      defaultValue=''
                      control={control}
                      rules={{
                        required: true,
                        pattern: {
                          message: 'Password is requerid.',
                          value: /(.*)/
                        }
                      }}
                      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                        <>
                          <label>
                            <p className='text-[22px]' >Correo</p>
                          </label>
                          <input onChange={onChange} value={value} type="text" className=' text-[22px] p-2  h-[54px] w-[494px] border-2 border-gray-400/30 rounded-lg ' />
                        </>
                      )}
                    />

                  </div>
                  <div className='flex flex-col' >

                    <Controller
                      name={'contraseña'}
                      defaultValue=''
                      control={control}
                      rules={{
                        required: true,
                        pattern: {
                          message: 'Password is requerid.',
                          value: /(.*)/
                        }
                      }}
                      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                        <>
                          <label>
                            <p className='text-[22px]' >Contraseña</p>
                          </label>
                          <input value={value} type="password" className='text-[22px] p-2 h-[54px] w-[494px] border-2 border-gray-400/30  rounded-lg' onChange={onChange} />
                        </>
                      )}
                    />

                  </div>
                </div>
                <div className='flex flex-col gap-3' >
                  <button className=' bg-[#0069BE]  font-bold text-[24px] h-[54px] w-[494px] text-white rounded-lg tracking-wider ' >Iniciar Sesión</button>
                  <button className='border-2 border-gray-400/30   flex  h-[54px] w-[494px] items-center justify-center gap-1 rounded-lg tracking-wider ' > <FcGoogle size={40}/> <span className='font-bold text-[22px]' > Ingresa con Google  </span> </button>
                </div>
              </form>

            </div>

          </div>
        )
        : <Sidebard/>
      }
    </>

  )
}

export default Login
