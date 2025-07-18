interface RoomLinkInterface {
  id: string;
  name: string;
  questionsCount: number;
  createdAt: string;
}

export type RoomLinkProps = {
  room: RoomLinkInterface;
};
