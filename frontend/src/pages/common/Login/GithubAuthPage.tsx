import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Icons";

const GithubAuthPage = () => {
    return (
        <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
            <Spinner className="mr-2 h-4 w-4 animate-spin" />
            Github
        </Button>
    );
};

export default GithubAuthPage;
