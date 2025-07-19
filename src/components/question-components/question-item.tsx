import { Card, CardContent } from '@/components/ui/card';
import type { QuestionItemProps } from '../props/question-item-props';
import { QuestionAnswer } from './question-answer';
import { QuestionFooter } from './question-footer';
import { QuestionView } from './question-view';

export function QuestionItem({ question }: QuestionItemProps) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          <QuestionView question={question} />

          {(question.answer || question.isGeneratingAnswer) && (
            <QuestionAnswer question={question} />
          )}

          <QuestionFooter question={question} />
        </div>
      </CardContent>
    </Card>
  );
}
