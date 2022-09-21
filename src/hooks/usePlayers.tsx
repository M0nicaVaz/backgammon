import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function getPlayerFromDb() {
      const { data: playersFromDb } = await api.get('/users');

      playersFromDb.map(
        (player: Player) =>
          (player.avatar = `${api.defaults.baseURL}/files/${player.avatar}`)
      );

      setPlayers(playersFromDb);
    }

    getPlayerFromDb();
  }, [players]);

  return players;
}
