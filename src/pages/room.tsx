import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
  idRoom: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.idRoom) {
    return <Navigate replace to="/" />;
  }

  return <div>Room Details {JSON.stringify(params)}</div>;
}
