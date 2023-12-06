import React from 'react'
import FlexTemplate from '../components/FlexTemplate'
import '../styles/grid.css'
import { PieChart } from '@mui/x-charts/PieChart'
import { BarChart, axisClasses } from '@mui/x-charts'

const Home = () => {
  const chartSetting = {
    yAxis: [
      {
        label: ''
      }
    ],
    width: 650,
    height: 270,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)'
      }
    }
  }
  const dataset = [
    {
      london: 65,
      paris: 21,
      newYork: 5,
      seoul: 24,
      month: 'Enero'
    },
    {
      london: 58,
      paris: 48,
      newYork: 0,
      seoul: 36,
      month: 'Febrero'
    },
    {
      london: 90,
      paris: 40,
      newYork: 0,
      seoul: 0,
      month: 'Marzo'
    },
    {
      london: 81,
      paris: 19,
      newYork: 0,
      seoul: 0,
      month: 'Abril'
    },
    {
      london: 56,
      paris: 96,
      newYork: 0,
      seoul: 0,
      month: 'Mayo'
    },
    {
      london: 55,
      paris: 27,
      newYork: 0,
      seoul: 0,
      month: 'Junio'
    },
    {
      london: 44,
      paris: 99,
      newYork: 0,
      seoul: 0,
      month: 'Julio'
    }
  ]

  const valueFormatter = (value) => `${value}`

  return (
    <>
      <FlexTemplate
        title={'Bienvenid@ de nuevo, Admin'}
        subtitle={'!Aquí tienes las estadísticas en tiempo real!'}
      >
        <div className=' h-full w-full flex items-center justify-center bg-[#F7F6F6]  ' >
          <div className='container_grid_layout w-[90%] h-[90%]  ' >
            <div className='flex items-center h-full w-full' style={{ gridArea: 'card1' }} >
              <div className='bg-[#0069BE] text-white w-[96%] h-[100%]  rounded-lg pl-4 pt-2 ' >
                <h4 className='font-bold text-[27px]' >Total Campañas</h4>
                <p className='font-bold text-[27px]' >75</p>
              </div>
            </div>
            <div className=' flex items-center w-full h-full justify-end  ' style={{ gridArea: 'card2' }} >
              <div className=' w-[96%] h-[100%]  bg-white  pl-4 pt-2 border-2 border-gray-400/30 rounded-lg ' >
                <h4 className='font-medium text-[27px]' >Total Clientes</h4>
                <p className='font-bold text-[27px]' >234</p>
              </div>
            </div>
            <div className='flex items-center h-full  justify-center' style={{ gridArea: 'card3' }} >
              <div className=' w-[85%] h-[100%]  bg-white pl-4 pt-2 border-2 border-gray-400/30 rounded-lg ' >
                <h4 className='font-medium text-[27px]' >Total Ingresos</h4>
                <p className='font-bold text-[27px]' >$23.000.000 COP</p>
              </div>
            </div>
            <div className='  flex items-center justify-center ' style={{ gridArea: 'bar' }} >
              <div className='w-[100%]  bg-white  border-2 border-gray-400/30 rounded-lg  h-[100%]' >
                <div className=' w-[100%] flex justify-evenly items-center  h-[20%]'>
                  <h2 className='font-bold text-[20px]'>Estadisticas De Rendimiento</h2>
                  <div className=' border-2 border-gray-400/30 rounded-full w-[30%] text-center text-[18px] ' >
                    <p >Ultimos 15 días</p>
                  </div>
                </div>
                <div className='  w-full flex flex-col items-center justify-center   h-[80%]' >
                  <div className='  flex items-center justify-center h-[80%] w-[100]' >
                    <BarChart
                      dataset={dataset}
                      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                      series={[
                        { dataKey: 'london', valueFormatter, color: '#3498DB' },
                        { dataKey: 'paris', valueFormatter, color: '#2ECC71' },
                        { dataKey: 'newYork', valueFormatter, color: '#9B59B6' },
                        { dataKey: 'seoul', valueFormatter, color: '#F1C40F' }
                      ]}
                      {...chartSetting}
                    />
                  </div>
                  <div className='flex h-[20%] w-[90%] justify-evenly  items-center  ' >
                    {
                      [{ name: 'Redes Sociales', color: '#3498DB' }, { name: 'Marca', color: '#2ECC71' }, { name: 'Producto', color: '#9B59B6' }, { name: 'Imagen', color: '#F1C40F' }].map(tend => (
                        <>
                          <div key={tend.name} className='flex gap-4 justify-center items-center' >
                            <h1 className='text-[18px]' >{tend.name}</h1> <div style={{ backgroundColor: tend.color }} className= {`h-[20px] w-[20px] ` } ></div>
                          </div>
                        </>
                      ))
                    }
                  </div>

                </div>
              </div>
            </div>
            <div className=' flex items-center justify-center' style={{ gridArea: 'donut' }} >
              <div className='bg-white flex flex-col  border-2 border-gray-400/30 rounded-lg h-[100%] w-[85%] ' >
                <div className='h-[20%] w-full ' >
                  <div className='w-[50%] h-full  flex items-center justify-center'>
                    <h1 className='font-bold text-[20px]'>Categorias</h1>
                  </div>
                </div>
                <div className='w-full  flex items-center justify-center h-[100%]' >
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 25, color: '#3498DB' },
                          { id: 1, value: 40, color: '#9B59B6' },
                          { id: 2, value: 25, color: '#2ECC71' }
                        ],
                        innerRadius: 50,
                        outerRadius: 100,
                        paddingAngle: 0,
                        cornerRadius: 0,
                        startAngle: -100,
                        endAngle: 400,
                        cx: 145,
                        cy: 105
                      }
                    ]}
                    width={310}
                    height={220}
                    tooltip={false}
                  />
                </div>
                <div className='w-full h-[40%]  flex items-center '>
                  <div className='  w-[60%] h-[100%] flex justify-center items-center flex-col' >
                    <div className='  flex justify-between flex-col h-[80%] w-[70%]' >
                      {
                        [{ name: 'Producto', color: '#3498DB' }, { name: 'Imagen', color: '#2ECC71' }, { name: 'Comerecial', color: '#9B59B6' }].map(tend => (
                          <>
                            <div className='flex justify-between items-center' >
                              <div className='h-[20px] w-[20px]' style={{ backgroundColor: tend.color }} ></div>
                              <div className=' text-[18px] w-[80%]' >
                                <h3 key={tend.name} >{tend.name}</h3>
                              </div>
                            </div>
                          </>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </FlexTemplate>
    </>
  )
}

export default Home
