import { Navigate, useParams } from 'react-router-dom';
import { CreateQuestionForm } from '@/components/question-components/create-question-form';
import { QuestionItem } from '@/components/question-components/question-item';
import { QuestionRoomHeader } from '@/components/question-components/question-room-header';
import type { RoomParams } from './params/room-params';

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.idRoom) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <QuestionRoomHeader idRoom={params.idRoom} />

        <div className="mb-8">
          <CreateQuestionForm idRoom={params.idRoom} />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2xl text-foreground">
              Perguntas & Respostas
            </h2>
          </div>

          <QuestionItem
            question={{
              id: '1',
              question: 'Pergunta 1',
              createdAt: new Date().toISOString(),
            }}
          />
        </div>
      </div>
    </div>
  );
}
