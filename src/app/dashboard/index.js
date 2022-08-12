import React from 'react'
import { Outlet } from "react-router-dom"
import SideNavigation from '../../components/Sidebar'

export default function Dashboard() {
  return (
    <div id='main' className='flex xl:flex-row lg:flex-row sm:flex-col md:flex-col'>
      <SideNavigation/>
      <main id='content' className='w-full px-6 pt-6 2xl:container'>
        <Outlet/>
      </main>
    </div>
  )
}
