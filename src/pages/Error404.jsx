import logo from "../assets/error404.svg";

const Error404 = () => {
  return (
    <div className="notFound">
      <h2 className="text-notFound">Oops no encontramos lo que buscabas!</h2>
      <img className="cover-error-page" src={logo}/>
    </div>
  )
}

export default Error404; 
