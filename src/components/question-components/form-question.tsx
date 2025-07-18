import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormItemField } from '../form-item-field';
import { createQuestionSchema } from '../http/schemas/create-question-schema';
import type { CreateQuestionRequest } from '../http/types/create-question-request';
import type { QuestionFormProps } from '../props/question-form-props';
import { Button } from '../ui/button';
import { Form, FormField } from '../ui/form';
import { Textarea } from '../ui/textarea';

export function FormQuestion(idRoom: QuestionFormProps) {
  const form = useForm<CreateQuestionRequest>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      question: '',
    },
  });

  function handleCreateQuestion(data: CreateQuestionRequest) {
    // biome-ignore lint/suspicious/noConsole: dev
    console.log(data, idRoom);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItemField label="Sua Pergunta">
              <Textarea
                className="min-h-[100px]"
                placeholder="O que você gostaria de saber?"
                {...field}
              />
            </FormItemField>
          )}
        />
        <Button type="submit">Enviar pergunta</Button>
      </form>
    </Form>
  );
}
