import React from 'react'
import FlexTemplate from '../components/FlexTemplate'
import { BarChart, PieChart } from '@mui/x-charts'
import '../styles/grid.css'
import { BxBxsUser, IconamoonArrowDown2Thin, MaterialSymbolsArrowForwardIos, MaterialSymbolsLightTrendingUp, MaterialSymbolsLocalMall } from '../assets/icons/icons'

const Analisis = () => {
  return (
    <>
      <FlexTemplate
        title={'Análisis De Datos'}
        subtitle={'!Aquí tienes las estadísticas de hoy de tu tienda online!'}
      >
        <div className=' h-full w-full flex items-center justify-center bg-[#F7F6F6]  ' >
          <div className='container_grid_layout w-[90%] h-[90%]  ' >
            <div className='flex items-center h-full w-full' style={{ gridArea: 'card1' }} >
              <div className='bg-[#0069BE] text-white p-4  w-[96%] h-[100%]  rounded-lg  ' >
                <div className='  flex items-center w-full   h-[45%]'>
                  <div className=' flex items-center   h-[100%] w-full '>
                    <div className='h-full w-[40%]   flex items-center justify-between' >
                      <div className=' flex rounded-2xl items-center justify-center bg-blue-300/40 h-[80%] w-[60%]' >
                        <MaterialSymbolsLocalMall height={'25px'} width={'25px'} />
                      </div>
                    </div>
                    <div className='w-full h-full  flex flex-col   justify-center' >
                      <p className='font-bold text-[18px]' >Total Ingresos </p>
                      <p className='text-[14px] font-semibold text-gray-400/70 ' >131 Servicios</p>
                    </div>
                  </div>
                  <div className=' h-full  flex items-center justify-center w-[20%]'>
                    <span className='cursor-pointer' >
                      <MaterialSymbolsArrowForwardIos width={'20px'} height={'20px'} />
                    </span>
                  </div>
                </div>
                <div className=' flex items-center 0  font-bold text-[20px] w-full h-[40%] ' >
                  <p className='' >$23.000.000 COP</p>
                </div>
                <div className='  font-bold items-center text-[14px] h-[15%] w-full flex' >
                  <div className='flex  h-full   justify-between  w-[25%] items-center' >
                    <MaterialSymbolsLightTrendingUp fill='#ffffff' height={'30px'} width={'30px'} />
                    <p>+15.6%</p>
                  </div>
                  <div className='w-[75%]  h-full flex items-center justify-center'>
                    <p>+3.600.000 esta semana</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=' flex items-center w-full h-full justify-end  ' style={{ gridArea: 'card2' }} >
              <div className=' bg-white  p-4  w-[96%] h-[100%]  border-2 border-gray-400/30  rounded-lg  ' >
                <div className='  flex items-center w-full   h-[45%]'>
                  <div className=' flex items-center   h-[100%] w-full '>
                    <div className='h-full w-[40%]   flex items-center justify-between' >
                      <div className=' flex rounded-2xl items-center justify-center bg-gray-300/40 h-[80%] w-[60%]' >
                        <BxBxsUser height={'25px'} width={'25px'} />
                      </div>
                    </div>
                    <div className='w-full h-full  flex flex-col   justify-center' >
                      <p className='font-bold text-[18px]' >Visitantes </p>
                      <p className='text-[14px] font-semibold text-gray-400 ' >132 Servicios  </p>
                      <p className='text-[14px] font-semibold text-gray-400 ' >4:30m</p>
                    </div>
                  </div>
                  <div className=' h-full  flex items-center justify-center w-[20%]'>
                    <span className='cursor-pointer' >
                      <MaterialSymbolsArrowForwardIos width={'20px'} height={'20px'} />
                    </span>
                  </div>
                </div>
                <div className=' flex items-center 0  font-bold text-[20px] w-full h-[40%] ' >
                  <p className='' >12,302</p>
                </div>
                <div className='  font-bold items-center text-[14px] h-[15%] w-full flex' >
                  <div className='flex  h-full   justify-between  w-[25%] items-center' >
                    <MaterialSymbolsLightTrendingUp fill='#000000' height={'30px'} width={'30px'} />
                    <p>+12.7%</p>
                  </div>
                  <div className='w-[75%]  h-full flex items-center justify-center'>
                    <p>+3.600.000 esta semana</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center h-full  justify-center' style={{ gridArea: 'card3' }} >
              <div className=' flex w-[85%] h-[100%] items-center   pl-4 pt-2 border-2 border-gray-400/30 rounded-lg ' >
                <div className=' flex flex-col justify-between items-center w-[20%] h-[70%] ' >
                  <div className=' w-[70%] h-[45%] flex flex-col rounded-2xl items-center justify-center bg-gray-300/40 ' >
                    <BxBxsUser height={'25px'} width={'25px'} />
                  </div>
                  <div>
                    <p className='font-bold text[20px]'>163</p>
                  </div>
                </div>
                <div className='w-[40%] flex flex-col  h-[75%]  ' >
                  <h3 className='text-[20px] font-bold' >Exportar Datos</h3>
                  <p className='text-gray-400 text-[14px]' >2 En Proceso</p>
                </div>
              </div>
            </div>
            <div className='  flex items-center justify-center ' style={{ gridArea: 'bar' }} >
              <div className='w-[100%]  bg-white  border-2 border-gray-400/30 rounded-lg  h-[100%]' >
                <div className=' w-full flex justify-evenly items-center h-[20%]'>
                  <h2 className='font-bold text-[20px]'>Estadisticas De Rendimiento</h2>
                  <div className='w-[25%] h-[50%]' >
                    <button className=' text-gray-500 font-bold flex items-center justify-center border-2 border-gray-400/30  rounded-full w-full h-full text-center text-[16px]'> Exportar Datos  <IconamoonArrowDown2Thin height={'34px'} width={'34px'} /> </button>
                  </div>
                  <div className=' text-gray-500 font-bold flex w-[25%] h-[50%] items-center justify-center' >
                    <button className=' flex items-center justify-center border-2 border-gray-400/30  rounded-full w-full h-full text-center text-[16px]'> Ultimos 15 Dias  <IconamoonArrowDown2Thin height={'34px'} width={'34px'} /> </button>
                  </div>
                </div>
                <div className='  w-full flex flex-col items-center justify-center   h-[80%]' >
                  <div className='  flex items-center justify-center h-[100%] w-[100]' >
                    <BarChart
                      series={[
                        { data: [20, 40, 42, 38, 40, 60, 50, 5, 34], stack: 'A', label: 'Redes Sociales', color: '#2D6CFF' },
                        { data: [80, 60, 80, 60, 80, 100, 80, 20, 40], stack: 'A', label: 'Marca', color: '#01FF22' },
                        { data: [120, 80, 100, 80, 100, 140, 100, 40, 100], stack: 'A', label: 'Imagen', color: '#2DCBFF' },
                        { data: [180, 100, 140, 100, 140, 180, 120, 70, 140], stack: 'A', label: 'Producto', color: '#FF5E00' },
                        { data: [220, 120, 180, 130, 180, 220, 150, 100, 190], stack: 'A', label: 'Leads', color: '#F12DFF' }
                      ]}
                      xAxis={[{ scaleType: 'band', data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'] }]}
                      width={680}
                      height={270}
                    />
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
                          { id: 0, value: 65, color: '#004AE9' },
                          { id: 1, value: 40, color: '#A8C6FA' },
                          { id: 2, value: 12, color: '#5F6065' }
                        ],
                        innerRadius: 85,
                        outerRadius: 100,
                        paddingAngle: 4,
                        cornerRadius: 20,
                        startAngle: -700,
                        endAngle: 300,
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
                        [{ name: 'Producto', color: '#004AE9' }, { name: 'Imagen', color: '#A8C6FA' }, { name: 'Comerecial', color: '#5F6065' }].map(tend => (
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

export default Analisis
