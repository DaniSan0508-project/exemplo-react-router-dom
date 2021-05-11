import { Link } from 'react-router-dom'


export default function Error(){
  return(
    <div>
      <h1> NOT FOUND! 404</h1>
      <Link to="/">Voltar para Home</Link>
    </div>
  )
}