import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo } from "react";

type UserAvatarProps = {
    username: string;
    avatarURL?: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ username, avatarURL }) => {
    const usernameInitials = useMemo(() => {
        const uppercaseLetters = username.split("").filter((it) => it.toUpperCase() === it);
        return uppercaseLetters.splice(0, 2).join("") || uppercaseLetters[0]?.toUpperCase();
    }, [username]);

    return (
        <Avatar>
            <AvatarImage src={avatarURL} />
            <AvatarFallback className="bg-lime-600">{usernameInitials}</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
