import swal from 'sweetalert';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

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
      swal("fatal!", "oops, hubo un error y no se pudo registrar con exito!", "error");
    });
  }
  

  return (
    <>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xnqwawpo" method="POST" className="container-form" autoComplete="off">
        <label htmlFor="name" className="text-form">
          <UserOutlined className="site-form-item-icon" />  Nombre:
        </label>
        <input
          id="name"
          type="text"
          required
        />
        <label htmlFor="email" className="text-form">
          <MailOutlined />  Correo electronico:
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <label htmlFor="message" className="text-form">
          <MessageOutlined />  Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
          required
        />
        <button type="submit" className="btn-form">
          ENVIAR
        </button>
      </form>
    </>
  )
}

export default FormTemplate;
