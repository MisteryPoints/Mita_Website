import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [seccion, setSeccion] = useState('')
  const [lang, setLang] = useState(false)

  const navigation = [ 
    { key: 1, name: 'Doctrina', href: '/templosede', current: seccion == 'Doctrina' },
    { key: 2, name: 'Líderes Espirituales', href: '#', current: seccion == 'Líderes Espirituales' },
    { key: 3, name: 'Música', href: '#', current: seccion == 'Música' },
    { key: 4, name: 'Países', href: '#', current: seccion == 'Países' },
    { key: 5, name: 'Sobre Nosotros', href: '#', current: seccion == 'Sobre Nosotros' }, 
  ]

  const section = [ 
    { key: 1, name: 'Líderes Espirituales', disc: [
      { id: 1, name: 'Juanita (Mita)', href: '#'},
      { id: 2, name: 'Aarón', href: '#'},
      { id: 3, name: 'Rosinín', href: 'rosinin'},
    ]},
    { key: 2, name: 'Música', disc: [
      { id: 1, name: 'Banda de vientos', href: '#'},
      { id: 2, name: 'Banda de cuerdas', href: '#'},
      { id: 3, name: 'Agrupación de arpas', href: '#'},
      { id: 4, name: 'Agrupación Coral', href: '#'},
      { id: 5, name: 'Banda de Violin', href: '#'},
      { id: 6, name: 'Banda de Trompeta', href: '#'},
    ]},
    { key: 3, name: 'Países', disc: [
      { id: 1, name: 'Puerto Rico', href: '#'},
      { id: 2, name: 'Estados Unidos', href: '#'},
      { id: 3, name: 'República Dominicana', href: '#'},
      { id: 4, name: 'Más', href: '#'},
    ]},
    { key: 4, name: 'Sobre Nosotros', disc: [
      { id: 1, name: 'Eventos Históricos', href: '#'},
      { id: 2, name: 'Servicio Social', href: '#'},
      { id: 3, name: 'Contáctanos', href: '#'},
    ]}
  ]
  const language = { name: 'Language', current: lang }  

  let result = navigation.filter((i) => i.current == true)
  let resultSection = section.filter((s) => s.name == result[0]?.name) 

  return (
    <Disclosure as="nav" className="block">
      {({ open }) => (
        <>
          <div className="w-full mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 text-lg fixed bg-white shadow-lg shadow-white">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> 
                <Link className="flex flex-shrink-0 items-center" href="/"> 
                  <Image src="/main/logo.png" width="35" height="35" alt="Congregación Mita" className="hidden h-8 w-auto lg:block hover:h-8 hover:w-8 transition-all duration-300"/>
                  <Image src="/main/logo.png" width="35" height="35" alt="Congregación Mita" className="block h-8 w-auto lg:hidden"/>
                  <p className='text-gray-700 font-["Montserrat"] select-none hover:text-gray-900'>Congregación Mita</p>
                </Link> 
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> 
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => item.name !== 'Doctrina' ? (
                      <Menu as="div" className="relative ml-3" key={item.key}> 
                        <Menu.Button className={classNames( language.current ? 'bg-gray-600 text-white' : 'text-gray-800 hover:bg-gray-100 hover:text-gray-700 hover:shadow-xl transition-all duration-300', 'px-3 py-[18px]')} aria-current={item.current ? 'page' : undefined} onClick={() => setSeccion(item.name)} >  
                          { (item.name != null) ? item.name : ""}   <FontAwesomeIcon icon={faCaretDown}/>
                        </Menu.Button> 
                        
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items  className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {({ active }) =>  (resultSection[0]?.disc.map((i) => (
                              <Menu.Item key={i.id}>
                                <div className={classNames(active ? 'bg-gray-100' : '', 'inline-block w-full px-2 py-2 hover:bg-gray-100')}> 
                                  <Link href={i.href} className={classNames(active ? 'bg-gray-100' : '', 'px-4 text-sm text-gray-700')}> 
                                    {i.name}
                                  </Link>
                                </div> 
                              </Menu.Item>
                            )))} 
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <Link key={item.name} href={item.href} className={classNames( item.current ? 'bg-gray-600 text-white' : 'text-gray-800 hover:bg-gray-100 hover:text-gray-700', 'px-3 py-[18px] ')} aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3" > 
                  <Menu.Button className={classNames( language.current ? 'bg-gray-600 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-600 hover:shadow-xl', 'px-3 py-[18px]')} aria-current={language.current ? 'page' : undefined}>  
                    <FontAwesomeIcon icon={faEarthAmericas}  />
                  </Menu.Button> 
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div className={classNames(active ? 'bg-gray-100' : '', 'inline-block w-full px-2 py-2')}> 
                            <Link href="#" className={classNames(active ? 'bg-gray-100' : '', 'px-4 text-sm text-gray-700')}> 
                              <Image src="/main/english.png" width="30" height="30" alt="Idioma Inglés" className='float-left' />
                              Inglés 
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={classNames(active ? 'bg-gray-100' : '', 'inline-block w-full px-2 py-2')}> 
                            <Link href="#" className={classNames(active ? 'bg-gray-100' : '', 'px-4 text-sm text-gray-700')}> 
                              <Image src="/main/espanol.png" width="30" height="30" alt="Idioma Inglés" className='float-left' />
                              Español 
                            </Link>
                        </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={classNames(active ? 'bg-gray-100' : '', 'inline-block w-full px-2 py-2')}> 
                            <Link href="#" className={classNames(active ? 'bg-gray-100' : '', 'px-4 text-sm text-gray-700')}> 
                              <Image src="/main/frances.png" width="30" height="30" alt="Idioma Inglés" className='float-left' />
                              Francés 
                            </Link>
                        </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={classNames(active ? 'bg-gray-100' : '', 'inline-block w-full px-2 py-2')}> 
                            <Link href="#" className={classNames(active ? 'bg-gray-100' : '', 'px-4 text-sm text-gray-700')}> 
                              <Image src="/main/portugues.png" width="30" height="30" alt="Idioma Inglés" className='float-left' />
                              Portugués 
                            </Link>
                        </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          

          <Transition   
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden" static> 
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href} 
                    className={classNames(
                      item.current ? 'bg-gray-600 text-white' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}