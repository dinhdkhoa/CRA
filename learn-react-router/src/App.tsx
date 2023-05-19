import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Route, Routes, useLocation, useSearchParams, useRoutes } from 'react-router-dom'

function App() {
  //dung useroutes
  const elements = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: 'about', element: <About /> },
    { path: '/staff/*', element: <Staff /> },
    { path: '*', element: <NotFound /> }
  ])
  return (
    <div className='App'>
      <MainLayout>
        {elements}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      </MainLayout>
    </div>
  )
}

export default App
