import type z from 'zod';
import type { createRoomSchema } from '../schemas/create-room-schema';

export type CreateRoomRequest = z.infer<typeof createRoomSchema>;
