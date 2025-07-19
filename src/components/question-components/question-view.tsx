import { MessageSquare } from 'lucide-react';
import type { QuestionItemProps } from '../props/question-item-props';

export function QuestionView({ question }: QuestionItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
          <MessageSquare className="size-4 text-primary" />
        </div>
      </div>
      <div className="flex-1">
        <p className="mb-1 font-medium text-foreground">Pergunta</p>
        <p className="whitespace-pre-line text-muted-foreground text-sm leading-relaxed">
          {question.question}
        </p>
      </div>
    </div>
  );
}
