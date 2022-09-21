import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { api } from '../services/api';
import { usePlayers } from '../hooks/usePlayers';
import { FormEvent } from 'react';

const newPlayerValidation = zod.object({
  name: zod.string().min(1, 'Digite seu nome'),
  country: zod.string().min(1).max(3),
  avatar: zod.instanceof(File).refine((file) => file ?? 'Adicione uma foto.'),
});

type PlayerFormData = zod.infer<typeof newPlayerValidation>;

export function Form() {
  const players = usePlayers();

  const { register, handleSubmit, reset } = useForm<PlayerFormData>();

  const registerPlayerForm = useForm<PlayerFormData>({
    resolver: zodResolver(newPlayerValidation),
  });

  const onSubmit: SubmitHandler<PlayerFormData> = async (data) => {
    try {
      await api.post('/users', data);
    } catch (err) {
      console.log(err);
    }

    reset();
  };

  const reachedPlayersLimit = players.length === 16;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4 flex-1 px-4"
    >
      <h1 className="text-4xl text-white font-semibold drop-shadow-sm mb-5">
        Cadastro de jogadores
      </h1>
      <div className="flex flex-col gap-4">
        <label
          className="bg-zinc-200 text-black px-8 py-2 rounded-sm drop-shadow-sm text-md  cursor-pointer"
          htmlFor="avatar"
        >
          Selecionar foto
        </label>
        <input
          type="file"
          id="avatar"
          {...register('avatar', { required: true })}
          className="hidden"
          accept="image/*"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-white drop-shadow-sm text-lg" htmlFor="name">
          Nome do jogador:
        </label>
        <input
          className="rounded-sm bg-zinc-200 px-4 py-2 border border-transparent invalid:border-red-500"
          type="text"
          id="name"
          {...register('name', { required: true })}
          placeholder="Nome"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-white drop-shadow-sm text-lg" htmlFor="country">
          País de origem:
        </label>
        <input
          className="rounded-sm bg-zinc-200 px-4 py-2 border border-transparent invalid:border-red-500"
          type="text"
          id="country"
          {...register('country', { required: true })}
          placeholder="ex: BR, USA"
          maxLength={3}
        />
      </div>

      <button
        className="bg-zinc-900 text-amber-400 font-semibold py-4 w-48 rounded-md hover:bg-zinc-800 mt-4 cursor-pointer disabled:bg-zinc-500 disabled:cursor-not-allowed "
        type="submit"
        disabled={reachedPlayersLimit}
      >
        {reachedPlayersLimit ? 'Lista cheia' : 'Registrar jogador'}
      </button>
    </form>
  );
}
