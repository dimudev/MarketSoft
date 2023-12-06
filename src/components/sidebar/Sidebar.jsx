import React, { useState } from 'react'
import { TiHome } from 'react-icons/ti'
import { MdOutlineBarChart } from 'react-icons/md'
import { SlGraph } from 'react-icons/sl'
import { RiSettings3Fill } from 'react-icons/ri'
import { FaClipboardList } from 'react-icons/fa'
import { HiClipboardDocumentList } from 'react-icons/hi2'
import { HiClipboardList } from 'react-icons/hi'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Gestion from '../../pages/Gestion'
import Seguimiento from '../../pages/Seguimiento'
import Analisis from '../../pages/Analisis'
import Supervision from '../../pages/Supervision'
import Integracion from '../../pages/Integracion'
import Configuracion from '../../pages/Configuracion'
import Home from '../../pages/Home'
import { MaterialSymbolsExpandCircleRight } from '../../assets/icons/icons'

const Sidebard = () => {
  const [open, setOpen] = useState(true)
  const location = useLocation()
  const rutaActual = location.pathname.substring(1)
  console.log(rutaActual)

  const Menus = [
    { title: 'Inicio', icon: <TiHome fontSize={24}/>, url: '' },
    { title: 'Gestión', icon: <FaClipboardList fontSize={24}/>, url: 'gestion' },
    { title: 'Seguimiento', icon: <MdOutlineBarChart fontSize={24}/>, url: 'seguimiento' },
    { title: 'Análisis ', icon: <SlGraph fontSize={24}/>, url: 'analisis' },
    { title: 'Supervisión', icon: <HiClipboardList fontSize={24}/>, url: 'supervision' },
    { title: 'Integración ', icon: <HiClipboardDocumentList fontSize={24}/>, url: 'integracion' },
    { title: 'Configuración', icon: <RiSettings3Fill fontSize={24}/>, url: 'configuracion' }
  ]

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-68' : 'w-32 '
        } bg-[#0069BE] h-screen p-5  pt-8 relative duration-300 `}
      >
        <div
          className={`absolute cursor-pointer -right-2 top-9 w-7 h-[2%]  border-dark-purple
          rounded-full  ${!open && 'rotate-180 top-12 '}`}
          onClick={() => setOpen(!open)}

        >
          <MaterialSymbolsExpandCircleRight/>
        </div>
        <div className="flex gap-x-4 justify-center ">
          { !open
            ? <h1
              className={`text-white origin-left  font-bold text-[26px] duration-200 ${
                !open && 'scale'
              }`}
            >
              @MS
            </h1>
            : <h1
              className={`text-white origin-left font-semibold text-[26px] duration-200 ${
                !open && 'scale'
              }`}
            >
            Market<span className='font-thin'>soft</span>

            </h1>
          }
        </div>
        <div className=' h-4/5 flex flex-col justify-center  items-center' >

          <ul className=" flex flex-col gap-2 ">
            {Menus.map((Menu, index) => (
              <Link key={Menu.title} to={`/${Menu.url}`} >
                <li
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
                >
                  {Menu.icon}
                  <span className={`${!open && 'hidden'} ${rutaActual === Menu.url && 'font-extrabold'}  origin-left duration-200 text-[20px]  `}>
                    {Menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-screen w-screen">
        <Routes>
          <Route path='/MarketSoft' element={ <Home/>} />
          <Route path='/gestion' element={ <Gestion/>} />
          <Route path='/seguimiento' element={ <Seguimiento/>} />
          <Route path='/analisis' element={ <Analisis/>} />
          <Route path='/supervision' element={ <Supervision/>} />
          <Route path='/integracion' element={ <Integracion/>} />
          <Route path='/configuracion' element={ <Configuracion/>} />
        </Routes>
      </div>
    </div>
  )
}
export default Sidebard
