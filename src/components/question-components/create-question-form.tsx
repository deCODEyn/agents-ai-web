import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { QuestionFormProps } from '../props/question-form-props';
import { FormQuestion } from './form-question';

export function CreateQuestionForm({ idRoom }: QuestionFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fazer uma Pergunta</CardTitle>
        <CardDescription>
          Digite sua pergunta abaixo para receber uma resposta gerada por I.A.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormQuestion idRoom={idRoom} />
      </CardContent>
    </Card>
  );
}
