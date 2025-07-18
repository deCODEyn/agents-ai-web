import { useQuestions } from '../http/use-questions';
import type { QuestionFormProps } from '../props/question-form-props';
import { QuestionItem } from './question-item';

export function QuestionList({ idRoom }: QuestionFormProps) {
  const { data } = useQuestions(idRoom);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((question) => {
        return <QuestionItem key={question.id} question={question} />;
      })}
    </div>
  );
}
