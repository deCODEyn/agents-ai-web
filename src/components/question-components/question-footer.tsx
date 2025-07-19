import { formatTimeToNow } from '@/utils/format-relative-date';
import type { QuestionItemProps } from '../props/question-item-props';

export function QuestionFooter({ question }: QuestionItemProps) {
  return (
    <div className="flex justify-end">
      <span className="text-muted-foreground text-xs">
        {formatTimeToNow(question.createdAt)}
      </span>
    </div>
  );
}
