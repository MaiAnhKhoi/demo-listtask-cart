import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { TodoTask } from './page/todoTask'
import { ProductHome } from './page/products'
import { CartProvider } from './context/Context'
import { Provider } from 'react-redux'
import { store } from './store'


function App() {
  

  return (
    <>
    <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoTask />} />
        </Routes>

        <Routes>
          <Route path="/products" element={<ProductHome />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </Provider>
    </>
  )
}

export default App
