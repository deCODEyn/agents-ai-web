import { useQuery } from '@tanstack/react-query';
import type { GetRoomsQuestionsResponse } from './types/get-questions-response';

export function useQuestions(idRoom: string) {
  return useQuery({
    queryKey: ['get-questions', idRoom],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${idRoom}/questions`
      );
      const result: GetRoomsQuestionsResponse = await response.json();

      return result;
    },
  });
}
