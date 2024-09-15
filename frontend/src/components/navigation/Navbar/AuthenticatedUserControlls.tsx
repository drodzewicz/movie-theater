import UserAvatar from "@/components/common/UserAvatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/service/auth/useLogout";

type AuthenticatedUserControllsProps = {
    username: string;
};

const AuthenticatedUserControlls: React.FC<AuthenticatedUserControllsProps> = ({ username }) => {
    const { mutate: logout } = useLogout();

    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <UserAvatar username={username} />
                </PopoverTrigger>
                <PopoverContent align="end" className="w-40 flex flex-col">
                    <Button variant="ghost">Profile</Button>
                    <Button variant="ghost" onClick={() => logout({})}>
                        Logout
                    </Button>
                    <Button variant="ghost">Settings</Button>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default AuthenticatedUserControlls;
