import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const PasswordPage = () => {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"></div>
            <Link to="/login">
                <ChevronLeft /> Back
            </Link>
        </div>
    );
};

export default PasswordPage;
