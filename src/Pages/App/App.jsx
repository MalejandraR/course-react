import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/Index'
import SignIn from '../SignIn/Index'
import Navbar from '../../Components/Navbar/index'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
     <BrowserRouter>
      <AppRoutes/>
     <Navbar />
    </BrowserRouter>
   </ShoppingCartProvider>
  )
}

export default App
   