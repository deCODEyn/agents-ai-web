import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeToNow } from '@/utils/format-relative-date';
import type { RoomLinkProps } from '../props/room-link-props';
import { Badge } from '../ui/badge';

export function RoomLink(data: RoomLinkProps) {
  const room = data.room;

  return (
    <Link
      className="flex items-center justify-between rounded-lg border p-2 hover:bg-accent/50"
      to={`/room/${room.id}`}
    >
      <div className="flex-1">
        <h3 className="font-medium">{room.name}</h3>

        <div className="flex items-center gap-2">
          <Badge className="text-xs" variant="secondary">
            {formatTimeToNow(room.createdAt)}
          </Badge>
          <Badge className="text-xs" variant="secondary">
            {room.questionsCount} perguntas
          </Badge>
        </div>
      </div>
      <span className="flex items-center gap-1 text-sm">
        Entrar
        <ArrowRight className="size-3" />
      </span>
    </Link>
  );
}
