import React from 'react'
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'
import Charts from './charts/Chart'
import TopTransaction from '../../components/AdminComponents/TopTransaction'

function Dashboadr() {
  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
      <AdminSideBar />
        <div className='absolute left-0 sm:left-64 w-full sm:pr-64'>
          <div >
            <Charts />

          </div>
          <div className='m-3'>
            <TopTransaction/>
          </div>
        </div>
    </div>
  )
}

export default Dashboadr
