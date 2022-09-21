import Flag from 'react-world-flags';
import { api } from '../services/api';

export function ListItem({ name, country, id }: Player) {
  async function handleRemove(id: string) {
    try {
      await api.delete(`/users/${id}`);
      alert('Removido');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li
      key={id}
      className="flex flex-col items-center justify-between py-4 border-b border-b-zinc-100/10 flex-wrap gap-1 md:flex-row"
    >
      <div className="flex gap-2">
        <Flag
          className="h-5 w-5 rounded-sm"
          code={country}
          fallback={<span>{country}</span>}
        />
        <span>{name}</span>
      </div>

      <button
        type="button"
        title="Remover jogador"
        onClick={() => handleRemove(id)}
        className="text-xs text-red-400 mx-auto lg:mx-0"
      >
        Remover
      </button>
    </li>
  );
}
