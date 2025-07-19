interface QuestionInterface {
  id: string;
  question: string;
  answer?: string | null;
  createdAt: string;
  isGeneratingAnswer?: boolean;
}

export type QuestionItemProps = {
  question: QuestionInterface;
};
