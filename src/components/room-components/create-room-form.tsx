import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { FormRoom } from './form-room';

export function CreateRoomForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar Sala</CardTitle>
        <CardDescription>
          Criem uma nova sala para começar a fazer perguntas e receber respostas
          da IA
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormRoom />
      </CardContent>
    </Card>
  );
}
