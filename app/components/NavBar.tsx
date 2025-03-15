import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <div className="navbar bg-base-300 ">
            <div className="flex-1 pl-5">
                <Link href="/" className="mr-5">
                    Logo
                </Link>
                <Link href="/users" className="btn btn-ghost normal-case text-xl">
                    Users
                </Link>
                <Link href="/upload" className="btn btn-ghost normal-case text-xl">
                    Upload
                </Link>
                <Link href="/api/auth/signin" className="btn btn-ghost normal-case text-xl">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
