import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import BasicAuthPage from "@/pages/common/Login/BasicAuthPage";
import GithubAuthPage from "@/pages/common/Login/GithubAuthPage";

const LoginPage = () => {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <div className={cn("grid gap-6")}>
                    <BasicAuthPage />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <GithubAuthPage />
                </div>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link to="/register" className="hover:text-brand underline underline-offset-4">
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
