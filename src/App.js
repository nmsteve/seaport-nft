
import { useState } from 'react';
import { getName, sign } from './seaport'
import { createOrder } from "./seaport-js"

function App() {

  const [name, setName] = useState('')
  const [signature, setSign] = useState('')
  const [order, setOrder] = useState()

  const displayName = async () => {
    setName('')
    setName(await getName())

  }

  const displaySign = async () => {
    setSign('')
    await setSign(await sign())
    console.log(signature)
  }

  const displayOrder = async () => {
    setOrder('')
    setOrder(await createOrder())

  }

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center bg-success'>
        <h1>seaport Interactions</h1>
      </div>
      <div className='d-flex align-items-center mt-3'>
        <button className='className="btn bg-success rounded-2 py-0 w-md  d-none d-md-inline'
          onClick={displayName}>Get Name</button>
        <p className='ms-2'>{name}</p>
      </div>
      <div className='d-flex align-items-center mt-3'>
        <button className='className="btn bg-success rounded-2 py-0 w-md  d-none d-md-inline'
          onClick={displayOrder}>sign</button>
        <p className='ms-2'>{signature}</p>
      </div>

    </div>



  );
}

export default App;
