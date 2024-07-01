import { GetUserResponse } from "@/lib/db/queries/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type ProfileCardProps = {
  user: GetUserResponse;
};

export default function ProfileCard(props: ProfileCardProps): React.JSX.Element {
  return (
    <div className="flex items-center gap-2 transition-all cursor-pointer">
      <Avatar className="cursor-pointer">
        {props.user?.picture && <AvatarImage src={props.user?.picture} alt={props.user.username} />}
        {props.user?.username && <AvatarFallback>{props.user.username[0].toUpperCase()}</AvatarFallback>}
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm">{props.user?.username}</span>
        <span className="text-xs text-muted-foreground">{props.user?.email}</span>
      </div>
    </div>
  );
}
