import { useRooms } from '../http/use-rooms.ts.ts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card.tsx';
import { RoomLink } from './room-link.tsx';

export function RoomList() {
  const { data, isLoading } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}
        {data?.map((room) => {
          return <RoomLink key={room.id} room={room} />;
        })}
      </CardContent>
    </Card>
  );
}
