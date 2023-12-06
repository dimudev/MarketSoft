import React from 'react'
import FlexTemplate from '../components/FlexTemplate'
import { PieChart } from '@mui/x-charts'

const Supervision = () => {
  const cotizaciones = [
    {
      tipo: 'Reservas',
      cantidad: 20
    },
    {
      tipo: 'Pendientes',
      cantidad: 8
    },
    {
      tipo: 'Pendites De Emisión',
      cantidad: 14
    },
    {
      tipo: 'Emitidas Sin Pago',
      cantidad: 6
    }
  ]

  const dataPie = [
    [
      {
        data: [
          { id: 0, value: 20, color: '#08519C' },
          { id: 1, value: 20, color: '#2171B5' },
          { id: 2, value: 20, color: '#4292C6' },
          { id: 3, value: 20, color: '#6BAED6' },
          { id: 4, value: 10, color: '#08306B' }
        ]
      }
    ],
    [
      {
        data: [
          { id: 0, value: 35, color: '#08306B' },
          { id: 1, value: 20, color: '#4292C6' },
          { id: 2, value: 20, color: '#6BAED6' },
          { id: 3, value: 20, color: '#2171B5' },
          { id: 4, value: 15, color: '#08519C' }
        ]
      }
    ],
    [
      {
        data: [
          { id: 0, value: 35, color: '#6BAED6' },
          { id: 1, value: 25, color: '#08306B' },
          { id: 2, value: 15, color: '#08519C' },
          { id: 3, value: 15, color: '#2171B5' },
          { id: 4, value: 15, color: '#4292C6' }
        ]
      }
    ],
    [
      {
        data: [
          { id: 0, value: 35, color: '#08306B' },
          { id: 1, value: 25, color: '#4292C6' },
          { id: 2, value: 25, color: '#6BAED6' },
          { id: 3, value: 20, color: '#08519C' },
          { id: 4, value: 15, color: '#2171B5' }
        ]
      }
    ]
  ]

  const textPie = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre']

  return (
    <>
      <FlexTemplate
        title={'Supervisión del Rendimiento'}
        subtitle={'Monitoreo el rendimiento de las campañas en tiempo real'}
      >
        <div className='flex bg-[#F7F6F6]  rounded-lg  flex-col items-center  pt-6 gap-4 h-full w-full ' >
          <section className=' flex flex-col w-[95%] h-[25%] border-2 border-gray-400/30 rounded-lg  ' >
            <div className='flex justify-center items-center h-[40%] w-[20%]' >
              <h2 className='font-bold text-[20px]' >Mis  Cotizaciones</h2>
            </div>
            <div className='h-[60%] w-[80%]  flex justify-evenly' >
              {
                cotizaciones.map(cot => (
                  <div className=' text-[20px] flex flex-col  justify-evenly' key={cot.tipo} >
                    <h3 className='font-bold' >{cot.tipo}</h3>
                    <p className='text-center font-semibold' >{cot.cantidad}</p>
                  </div>
                ))
              }
            </div>
          </section>
          <section className=' w-[95%] h-[55%] border-2 border-gray-400/30 rounded-lg  ' >
            <div className='h-[30%] flex flex-col justify-center ' >
              <div className='h-[40%]  w-[15%] flex justify-center items-center' >
                <p className='text-[22px] font-bold' >Tendencia</p>
              </div>
              <div className='w-[90%] h-[60%]  flex  justify-center items-center ' >
                <div className=' w-[85%]    h-full flex justify-evenly items-center  ' >
                  {
                    [{ name: 'Redes Sociales', color: '#08306B' }, { name: 'Marca', color: '#08519C' }, { name: 'Imagen', color: '#2171B5' }, { name: 'Producto', color: '#4292C' }, { name: 'Leads', color: '#6BAED6' }].map(tend => (
                      <>
                        <div className='flex gap-4 justify-center items-center' >
                          <h1 key={tend} className='text-[18px]' >{tend.name}</h1> <div style={{ backgroundColor: tend.color }} className= {`h-[20px] w-[20px] ` } ></div>
                        </div>
                      </>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='h-[70%]  w-full flex justify-center items-center' >
              {
                dataPie.map((pie, index) => (
                  <>
                    <div className=' flex flex-col justify-center ' >
                      <PieChart
                        key={index}
                        series={dataPie[index]}
                        width={250}
                        height={150}

                      />
                      <h1 className='pl-8 font-bold text-[22px]' > {textPie[index]} </h1>
                    </div>
                  </>
                ))
              }
            </div>

          </section>
        </div>

      </FlexTemplate>
    </>
  )
}

export default Supervision
