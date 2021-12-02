import swal from 'sweetalert';

const FormTemplate = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: event.target.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response=>{
      swal("registro con exito!", "En breve me comunicaré contigo!", "success");
      event.target.reset();
    }).catch(error => {
      swal("fatal!", "oops, hubo un error y no se pudo registrar con exito,!", "error");
    });
  }
  

  return (
    <>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xnqwawpo" method="POST">
        <label htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          type="text" 
        />
        <label htmlFor="email">
          Correo electronico:
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <label htmlFor="message">
          Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
        />
        <button type="submit" >
          ENVIAR
        </button>
      </form>
    </>
  )
}

export default FormTemplate;
