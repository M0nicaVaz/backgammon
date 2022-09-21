import { useState } from 'react';
import { usePlayers } from '../hooks/usePlayers';
import { ListItem } from './ListItem';

export function ListOfPlayers() {
  const players = usePlayers();

  const [isListOpen, setIsListOpen] = useState<Boolean>(false);

  function handleList() {
    setIsListOpen(!isListOpen);
  }

  return (
    <>
      <button
        className="block fixed px-4 mt-4 text-white font-bold self-end right-0 top-0"
        onClick={handleList}
      >
        Lista de jogadores
      </button>
      {isListOpen && (
        <section className="w-full absolute z-10 bg-zinc-900 text-white md:w-64 flex flex-col items-center py-5 px-6 shadow-black shadow-lg max-h-screen overflow-auto">
          <div className="flex w-full items-center">
            <strong className="text-lg mb-2 flex-1">Lista de Jogadores</strong>
            <button
              className="text-red-500 font-bold text-2xl"
              onClick={handleList}
            >
              X
            </button>
          </div>
          <span className="text-sm text-zinc-300">
            {String(players.length).padStart(2, '0')} / 16
          </span>

          {players.length > 0 ? (
            <ul className="w-full">
              {players.map((player) => (
                <ListItem
                  key={player.id}
                  country={player.country}
                  name={player.name}
                  id={player.id}
                />
              ))}
            </ul>
          ) : (
            <span className="text-red-200 text-sm">Carregando...</span>
          )}
        </section>
      )}
    </>
  );
}
