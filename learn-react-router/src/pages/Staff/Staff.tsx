import { Outlet, NavLink, Route, Routes } from 'react-router-dom'
import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) =>
                ` inline-block rounded-t-lg border-b-2 ${
                  isActive ? 'border-blue-600 p-4 text-blue-600' : 'hover:border-gray-300 hover:text-gray-600'
                }`
              }
              aria-current='page'
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) =>
                ` inline-block rounded-t-lg border-b-2 ${
                  isActive ? 'border-blue-600 p-4 text-blue-600' : 'hover:border-gray-300 hover:text-gray-600'
                }`
              }
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
        <Route index element={<StaffList />} />
      </Routes>
      {/* <Outlet context={{ profile: { name: 'Duoc' } }} /> */}

      {/* <StaffList />
      <Link to='/staff/add' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
        Add Staff
      </Link> */}
      {/* <AddStaff /> */}
    </div>
  )
}
