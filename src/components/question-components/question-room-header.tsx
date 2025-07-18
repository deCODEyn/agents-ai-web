import { ArrowLeft, Radio } from 'lucide-react';
import { ButtonLink } from '../button-link';
import type { QuestionFormProps } from '../props/question-form-props';

export function QuestionRoomHeader({ idRoom }: QuestionFormProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <ButtonLink label="Voltar ao Início" to="/" variant="outline">
          <ArrowLeft className="mr-2 size-4" />
        </ButtonLink>
        <ButtonLink
          classButton="flex items-center gap-2"
          label="Gravar Áudio"
          to={`/room/${idRoom}/audio`}
          variant="secondary"
        >
          <Radio className="size-4" />
        </ButtonLink>
      </div>
      <h1 className="mb-2 font-bold text-3xl text-foreground">
        Sala de Perguntas
      </h1>
      <p className="text-muted-foreground">
        Faça perguntas e receba respostas com IA
      </p>
    </div>
  );
}
