import { useState, lazy, Suspense} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Loading from './components/Loading'

const Search= lazy(()=> import('./pages/Search'))
const Cart=  lazy(()=> import('./pages/Cart'))
const Home = lazy(()=> import('./pages/Home')) 
const ProductCart = lazy(()=> import('./components/Product-Cart')) 
const Shipping = lazy(()=> import('./pages/Shipping')) 
const Login = lazy(()=> import('./pages/login')) 
const Orders = lazy(()=> import('./pages/Orders')) 
const OrderDetails = lazy(()=> import('./pages/orderDetails')) 
const Dashboadr = lazy(()=> import('./pages/AdminPages/Dashboadr')) 
const Product = lazy(()=> import('./pages/AdminPages/Product')) 
const AddProduct = lazy(()=> import('./components/AdminComponents/AddProduct')) 
const ManageProduct = lazy(()=> import('./components/AdminComponents/ManageProduct')) 


function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
{/* header */}
      <Header/>
        <Suspense fallback={<Loading/>}>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/productcart' element={<ProductCart/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* loggedIn files only */}
            <Route>
              <Route path='/shipping' element={<Shipping/>}/>
              <Route path='/orders' element={<Orders/>}/>
              <Route path='/order/:id' element={<OrderDetails/>}/>
            </Route>

            {/* admin route */}
            <Route>
              <Route path='/admin/dashboard' element={<Dashboadr/>} />
              <Route path='/admin/product' element={<Product/>} />
              <Route path='/admin/addproduct' element={<AddProduct/>} />
              <Route path='/admin/:id' element={<ManageProduct/>} />
            </Route>

          </Routes>
        </Suspense>
      </Router>
  )
}

export default App
