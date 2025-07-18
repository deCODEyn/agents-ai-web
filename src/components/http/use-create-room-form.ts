import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createRoomSchema } from './schemas/create-room-schema';
import type { CreateRoomRequest } from './types/create-room-request';

export function useCreateRoomForm() {
  return useForm<CreateRoomRequest>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
}
