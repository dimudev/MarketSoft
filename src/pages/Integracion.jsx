import React from 'react'
import FlexTemplate from '../components/FlexTemplate'
import '../styles/grid.css'
import { DeviconFacebook, SkillIconsInstagram, LogosWhatsappIcon, LogosPinterest, IonLogoTiktok, SkillIconsLinkedin, Fa6BrandsSquareXTwitter, FileIconsAdobeAcrobat, VscodeIconsFileTypeExcel, IconamoonArrowDown2Thin, FlatColorIconsAdvertising, FlatColorIconsBullish, FlatColorIconsPositiveDynamic, FlatColorIconsViewDetails } from '../assets/icons/icons'

const Integracion = () => {
  return (
    <>
      <FlexTemplate
        title={'Integración con Herramientas Externas'}
        subtitle={'Gestionar la integración con otras plataformas'}
      >
        <div className= {` h-full bg-[#F7F6F6] w-full flex flex-col items-center justify-center ` }>
          <div className='container_grid w-[96%] h-[94%]' >
            <section className=' flex flex-col  border-2 border-gray-400/30 rounded-lg ' style={{ gridArea: 'account' }} >
              <div className='h-1/2 flex flex-col justify-center ' >
                <div className='w-[28%]  text-center ' >

                  <h3 className='font-bold text-[25px]' >Configurar Cuenta</h3>
                </div>
              </div>
              <div className='flex h-1/2  justify-evenly ' >
                {['Modificar Usuario', 'Estado De Usuario', 'Ver Historial', 'Pedidos'].map(btn => (
                  <button className='text-white text-[24px] font-bold bg-[#0069BE] h-[70%] w-[22%] rounded-3xl  ' key={btn} > {btn} </button>
                ))}
              </div>
            </section>
            <section className='flex flex-col border-2 border-gray-400/30 rounded-lg' style={{ gridArea: 'sync' }}>
              <div className='h-1/2 flex items-center pl-12 ' >
                <h3 className='font-bold text-[24px]' >Sincronizar Cuenta</h3>
              </div>

              <div className='flex justify-between  h-1/2 w-[70%] ml-10'>
                <span className='cursor-pointer' > <DeviconFacebook width={'48px'} height={'48px'} /> </span>
                <span className='cursor-pointer' >
                  <SkillIconsInstagram width={'48px'} height={'48px'} />
                </span>
                <span className='cursor-pointer' >
                  <LogosWhatsappIcon width={'48px'} height={'48px'} />
                </span>
                <span className='cursor-pointer' >
                  <LogosPinterest width={'48px'} height={'48px'} />
                </span>
                <span className='cursor-pointer' >
                  <IonLogoTiktok width={'48px'} height={'48px'} />
                </span>
                <span className='cursor-pointer' >
                  <SkillIconsLinkedin width={'48px'} height={'48px'} />

                </span>
                <span className='cursor-pointer' >
                  <Fa6BrandsSquareXTwitter width={'48px'} height={'48px'} />

                </span>
              </div>
            </section>
            <section className=' flex flex-col border-2 border-gray-400/30 rounded-lg' style={{ gridArea: 'exp' }}>
              <div className='h-1/2 flex items-center pl-12'>
                <h3 className='font-bold text-[24px]' >Exportar Datos  De La Cuenta</h3>
              </div>
              <div className='flex  h-1/2 w-[25%] justify-between cursor-pointer ml-10' >
                <span className='cursor-pointer' >
                  <VscodeIconsFileTypeExcel width={'48px'} height={'48px'} />

                </span>
                <span className='cursor-pointer' >
                  <FileIconsAdobeAcrobat width={'46px'} height={'46px'} />

                </span>
              </div>
            </section>
            <section className='border-2 border-gray-400/30 rounded-lg flex items-center justify-center' style={{ gridArea: 'fact' }}>
              <div className='flex flex-col  justify-center  gap-4 h-[70%]' >
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-[24px]' >Exportar Datos De Facturación</h3>
                  <p className='text-[25px]' > Filtrar</p>
                </div>
                <div className='w-full' >
                  <button className='w-[300px] border-2 text-[25px] flex justify-evenly items-center rounded-3xl'> Ultimos 15 Dias  <IconamoonArrowDown2Thin height={'34px'} width={'34px'} /> </button>
                </div>
              </div>
            </section>
            <section className=' border-2 border-gray-400/30 rounded-lg' style={{ gridArea: 'data' }}>
              <div className='h-1/2 flex items-center p-12 '>
                <h3 className='font-bold text-[24px]' >Sincronizar Datos En La Nube</h3>
              </div>
              <div className='flex justify-between gap-6  h-1/2 w-[70%] ml-10' >
                <div className='flex flex-col items-center' >
                  <span className='cursor-pointer' >
                    <FlatColorIconsAdvertising width={'48px'} height={'48px'} />
                  </span>
                  <p className='font-bold text-[25px]' >Campañas</p>
                </div>
                <div className='flex flex-col items-center' >
                  <span className='cursor-pointer' >
                    <FlatColorIconsViewDetails width={'48px'} height={'48px'} />
                  </span>
                  <p className='font-bold text-[25px]' >Cotizaciones</p>
                </div>
                <div className='flex flex-col items-center' >
                  <span className='cursor-pointer' >

                    <FlatColorIconsPositiveDynamic width={'48px'} height={'48px'} />
                  </span>
                  <p className='font-bold text-[25px]' >Ventas</p>
                </div>
                <div className='flex flex-col items-center' >
                  <span className='cursor-pointer' >
                    <FlatColorIconsBullish width={'48px'} height={'48px'} />
                  </span>
                  <p className='font-bold text-[25px]' >Ingresos</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </FlexTemplate>
    </>
  )
}

export default Integracion
