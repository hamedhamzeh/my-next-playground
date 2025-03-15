"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    const { status, data: session } = useSession();

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
                {status === "unauthenticated" && (
                    <Link href="/api/auth/signin" className="btn btn-ghost normal-case text-xl">
                        Login
                    </Link>
                )}
                {status === "authenticated" && <div>{session.user!.name}</div>}
            </div>
        </div>
    );
};

export default NavBar;
