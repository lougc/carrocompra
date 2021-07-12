import React, {useState} from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faHome, faTshirt, faShoePrints, faSocks} from '@fortawesome/free-solid-svg-icons'
import Inicio from './components/Inicio'
import Ropa from './components/Ropa'
import Calzado from './components/Calzado'
import Accesorios from './components/Accesorios'
import Error404 from './components/Error404'
import Carrito from './components/Carrito'


const App = () => {
  const [carrito, cambiarCarrito] = useState([])

  const agregarProducto = (idProducto, marca, modelo, precio) =>{
    if(carrito.length === 0){
      cambiarCarrito([{id: idProducto, marca: marca, modelo: modelo, precio: precio, cantidad: 1}])
    } else {
      const nuevoCarrito = [...carrito]
      const estaEnCarrito = nuevoCarrito.filter((productoCarrito)=>{
        return productoCarrito.id === idProducto
      }).length > 0

      if(estaEnCarrito){
        nuevoCarrito.forEach((productoDeCarrito, index)=> {
          if(productoDeCarrito.id === idProducto){
            const cantidad = nuevoCarrito[index].cantidad
            nuevoCarrito[index] = {id: idProducto, marca: marca, modelo: modelo, precio: precio, cantidad: cantidad +1}
          }
        })
      } else {
        nuevoCarrito.push(
          {id: idProducto, marca: marca, modelo: modelo, precio: precio, cantidad: 1}
        )
      }
      cambiarCarrito(nuevoCarrito)
    }
  }

  const incrementarCantidad = (product) => {
    const existe = carrito.find((x) => x.id === product.id)
    if (existe) {
      cambiarCarrito(
        carrito.map((x) =>
          x.id === product.id ? {...existe, cantidad: existe.cantidad + 1} : x
        )
      )
    } else {
      cambiarCarrito([...carrito, {...product, cantidad: 1}])
    }
  }

  const eliminarProducto = (product) => {
    const existe = carrito.find((x) => x.id === product.id)
    if (existe.cantidad === 1) {
      cambiarCarrito(carrito.filter((x) => x.id !== product.id))
    } else {
      cambiarCarrito(
        carrito.map((x)=>
          x.id === product.id ? {...existe, cantidad: existe.cantidad - 1} : x
        )
      )
    }
  }
  const cantidadTotalCarrito = carrito.reduce((a, c)=> a + c.cantidad, 0)

  return (
    <div className="container">
      <nav className="menu">
        <NavLink className="menu__link" to="/carrocompra" exact={true}>Inicio</NavLink>
        <NavLink to="/carrocompra" exact={true}><FontAwesomeIcon className="iconos__menu" icon={faHome}/></NavLink>
        <NavLink className="menu__link" to="/ropa">Ropa</NavLink>
        <NavLink to="/ropa"><FontAwesomeIcon className="iconos__menu" icon={faTshirt}/></NavLink>
        <NavLink className="menu__link" to="/calzado">Calzado</NavLink>
        <NavLink to="/calzado"><FontAwesomeIcon className="iconos__menu" icon={faShoePrints}/></NavLink>
        <NavLink className="menu__link" to="/accesorios">Accesorios</NavLink>
        <NavLink to="/accesorios"><FontAwesomeIcon className="iconos__menu" icon={faSocks}/></NavLink>
        <NavLink to="/carrito">
          <div>
            <FontAwesomeIcon className="icono__carrito" icon={faShoppingCart}/>
                {carrito.length > 0 ?
                  carrito.map((product, index)=>{
                    return (
                      <div key={index} className="cantidad__carrito">{cantidadTotalCarrito}</div>
                    )
                })
                :
                <div className="cantidad__carrito">0</div>
              }
          </div>
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path="/carrocompra" exact={true} component={Inicio}/>
          <Route path="/ropa">
            <Ropa agregarProducto={agregarProducto}/>
          </Route>
          <Route path="/calzado">
            <Calzado agregarProducto={agregarProducto}/>
          </Route>
          <Route path="/accesorios">
            <Accesorios agregarProducto={agregarProducto}/>
          </Route>
          <Route path="/carrito">
            <Carrito carrito={carrito} eliminarProducto={eliminarProducto} incrementarCantidad={incrementarCantidad}/>
          </Route>
          <Route component={Error404}/>
        </Switch>
      </main>
      <aside className="aside">
        <Carrito carrito={carrito} eliminarProducto={eliminarProducto} incrementarCantidad={incrementarCantidad}/>
      </aside>
    </div>
  )
}

export default App