import { Bot, Loader2 } from 'lucide-react';
import type { QuestionItemProps } from '../props/question-item-props';

export function QuestionAnswer({ question }: QuestionItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
          <Bot className="size-4 text-secondary-foreground" />
        </div>
      </div>
      <div className="flex-1">
        <p className="mb-1 font-medium text-foreground">Resposta da IA</p>
        <div className="text-muted-foreground">
          {question.isGeneratingAnswer ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="size-4 animate-spin text-primary" />
              <span className="text-primary text-sm italic">
                Gerando resposta...
              </span>
            </div>
          ) : (
            <p className="whitespace-pre-line text-sm leading-relaxed">
              {question.answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
