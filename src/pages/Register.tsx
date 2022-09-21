import { Form } from '../components/Form';

import { Link } from 'react-router-dom';
import { ListOfPlayers } from '../components/ListOfPlayers';

export function Register() {
  return (
    <div className="w-full min-h-screen flex justify-between text-center">
      <Link to="/" className="block fixed px-4 mt-4 text-white font-bold">
        Voltar
      </Link>

      <Form />

      <ListOfPlayers />
    </div>
  );
}
