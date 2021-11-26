import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contactos.css'

function Contactos() {

  const [state, handleSubmit] = useForm("xeqvyyzz");

  const send = () => {
      if(state.succeeded) {
        window.location.reload(false);
      }
  }
  
  return (
      
      <div>
          <h1><span>CONT</span>ÁCTANOS</h1>
          <div className="containerCont">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deserunt recusandae necessitatibus corporis vitae iste sed, molestiae voluptates fuga ratione, rerum at non est alias perferendis. Dicta veritatis illum fugit molestiae. Sit, architecto nam. Distinctio ab eos pariatur officiis illo tempore eius, quos labore enim quas, facilis eveniet! Dignissimos dolorem, saepe dolorum nemo eaque itaque id ducimus tempora doloribus nostrum necessitatibus. Dolore ut distinctio suscipit optio nihil vitae labore. Natus, exercitationem eius sapiente corrupti maiores minima voluptas eaque impedit eos nulla voluptatem, facere in autem. </p>
              <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Asunto" name="asunto" autoComplete="off" required/>
                    <input type="text" placeholder="Nombre completo" name="name" autoComplete="off" required/>
                    <input type="email" placeholder="Correo electrónico" name="email" autoComplete="off" required/>
                    <textarea name="message" placeholder="Su mensaje" name="" cols="30" rows="3"></textarea>
                    <button type="submit" className="btn" disabled={state.submitting} onClick={() => state.succeeded ==true, send()}>
                        Submit
                    </button>
              </form>
          </div>
      </div>
  );
}

export default Contactos
