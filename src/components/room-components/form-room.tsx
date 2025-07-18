import type { CreateRoomRequest } from '../http/types/create-room-request';
import { useCreateRoom } from '../http/use-create-room';
import { useCreateRoomForm } from '../http/use-create-room-form';
import { Button } from '../ui/button';
import { Form, FormField } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { FormItemField } from './form-item-field';

export function FormRoom() {
  const createRoomForm = useCreateRoomForm();
  const { mutateAsync: createRoom } = useCreateRoom();

  async function handlerCreateRoom({ name, description }: CreateRoomRequest) {
    await createRoom({ name, description });
    createRoomForm.reset();
  }

  return (
    <Form {...createRoomForm}>
      <form
        className="flex flex-col gap-4"
        onSubmit={createRoomForm.handleSubmit(handlerCreateRoom)}
      >
        <FormField
          control={createRoomForm.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItemField label="Nome da Sala">
                <Input {...field} placeholder="Digite o nome da sala..." />
              </FormItemField>
            );
          }}
        />
        <FormField
          control={createRoomForm.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItemField label="Descrição">
                <Textarea {...field} />
              </FormItemField>
            );
          }}
        />
        <Button className="w-full" type="submit">
          Criar Sala
        </Button>
      </form>
    </Form>
  );
}
