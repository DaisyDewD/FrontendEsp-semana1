import './App.css'
import { Fahrenheit, Input, Kelvin } from './components'
//Render props recibe una función como prop y la ejecuta dentro de su renderizado. 
//La función recibe el estado y las funciones de actualización como argumentos y devuelve un elemento React.
function App() {

  return (
    <div className="App">
      <h1>Convertidor de Temperatura⛅</h1>
      <Input render={(value)=>(
          <> //* Esto es un fragment, es un componente que no renderiza nada, solo sirve para encapsular otros componentes
          <Kelvin value={value} />
          <Fahrenheit value={value} />
          </>
        
  )}/>
      {/* <Kelvin value={0} />
      <Fahrenheit value={0} /> */} //*Esto no funciona porque no se puede renderizar dos componentes en un mismo lugar, así que debemos encapsularlos(unwrap) en un componente padre
    
    </div>
  )
}

export default App
