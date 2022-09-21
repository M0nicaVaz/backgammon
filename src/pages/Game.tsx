import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlayerCard } from '../components/PlayerCard';
import { usePlayers } from '../hooks/usePlayers';
import { useShuffle } from '../hooks/useShuffle';
import { useVariants } from '../hooks/useVariants';

export function Game() {
  const players = usePlayers();
  const [pairs, setPairs] = useState<any[]>([]);
  const navigate = useNavigate();

  const { playerOne, playerTwo, defaultVariants } = useVariants();

  function handleSortPairs() {
    const PLAYERS_MAX_LIMIT = 16;

    if (players.length != PLAYERS_MAX_LIMIT) {
      alert(
        'A lista de jogadores não está completa. Você será encaminhado para a tela de cadastro.'
      );

      navigate('/register');
    }

    const shuffledPairs = useShuffle(players);

    setPairs(shuffledPairs);
  }

  return (
    <>
      <Link to="/" className="block px-4 mt-4 text-white font-bold">
        Voltar
      </Link>
      <div className="w-full flex justify-between pb-4">
        <main className="flex-1 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mt-5 text-white drop-shadow-lg ">
            Gamão Online
          </h1>

          {pairs.length === 0 && (
            <button
              onClick={handleSortPairs}
              className="m4-6 text-black shadow-zinc-700 shadow-sm text-xl font-semibold  bg-red-100/10 hover:bg-red-100/20 py-2 px-6 rounded-md"
            >
              Sortear duplas
            </button>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-10">
            <AnimatePresence>
              {pairs.map((pair, i) => (
                <motion.div
                  key={`${pair[0].id}${pair[1].id}`}
                  className="flex flex-col items-center justify-between bg-zinc-200/10 bg-gradient-brown p-4 gap-10 rounded-md mx-auto"
                  variants={defaultVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  custom={i}
                  transition={{ delay: i * 0.7 }}
                >
                  <PlayerCard
                    key={pair[0].id}
                    player={pair[0]}
                    index={1}
                    variants={playerOne}
                    initial="hidden"
                    animate="visible"
                    exit="removed"
                    custom={i}
                    transition={{ delay: i * 0.7 }}
                  />

                  <motion.span
                    className="font-bold text-red-600 text-2xl"
                    variants={defaultVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={i}
                    transition={{ delay: i * 0.7 }}
                  >
                    VS
                  </motion.span>

                  <PlayerCard
                    key={pair[1].id}
                    player={pair[1]}
                    index={2}
                    variants={playerTwo}
                    initial="hidden"
                    animate="visible"
                    exit="removed"
                    custom={i}
                    transition={{ delay: i * 0.7 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}
