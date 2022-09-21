import Flag from 'react-world-flags';
import { motion, MotionProps } from 'framer-motion';

interface PlayerCardProps extends MotionProps {
  player: Player;
  index: number;
}

export function PlayerCard({ player, index, ...rest }: PlayerCardProps) {
  return (
    <motion.article className="text-center" {...rest}>
      {index === 1 && (
        <span className="mb-2 block text-red-100 bg-zinc-100/5 rounded-sm text-sm font-light">
          Player {index}
        </span>
      )}

      <div
        key={player.id}
        className="bg-zinc-900 text-white w-32 h-36 rounded-md flex flex-col items-center justify-between py-2 shadow-black shadow-md"
      >
        <strong>{player.name}</strong>

        <img
          src={player.avatar}
          alt=""
          className="rounded-lg bg-center object-center object-cover  w-16 h-16 aspect-square"
        />

        <Flag
          className="h-8 w-8 rounded-sm"
          code={player.country}
          fallback={<span>{player.country}</span>}
        />
      </div>

      {index === 2 && (
        <span className="mt-2 block text-red-100 bg-zinc-100/5 rounded-sm text-sm font-light">
          Player {index}
        </span>
      )}
    </motion.article>
  );
}
