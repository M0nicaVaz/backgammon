import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-semibold mb-8 text-white drop-shadow-lg ">
        Gamão Online
      </h1>

      <nav className="flex  gap-4 items-center justify-center flex-wrap">
        <NavLink
          to="/game"
          className="text-lg font-bold text-black bg-zinc-300 border-none hover:bg-zinc-400 py-4 w-56 rounded-sm block text-center"
        >
          Sortear Jogos
        </NavLink>
        <NavLink
          to="/register"
          className="text-lg font-bold text-black bg-zinc-300 border-none hover:bg-zinc-400 py-4 w-56 rounded-sm block text-center"
        >
          Registrar Jogadores
        </NavLink>
      </nav>
    </div>
  );
}
