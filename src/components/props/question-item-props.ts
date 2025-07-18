interface QuestionInterface {
  id: string;
  question: string;
  answer?: string | null;
  createdAt: string;
}

export type QuestionItemProps = {
  question: QuestionInterface;
};
