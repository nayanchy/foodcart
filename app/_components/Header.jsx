"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { MdShoppingBag } from "react-icons/md";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <header className="py-4 shadow-sm bg-white dark:bg-slate-900">
      <div className="flex justify-between items-center px-6 md:px-20">
        <Link href="/">
          <Image src="/logo.png" alt="FoodCart" width={100} height={100} />
        </Link>
        <div className="hidden md:flex border p-2 w-96 rounded-lg bg-gray-200">
          <input type="text" className="bg-transparent w-full outline-none" />
          <Search />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <ThemeSwitcher />
          </div>
          {isSignedIn ? (
            <div className="flex gap-4 items-center">
              <MdShoppingBag />
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-5">
              <SignInButton mode="modal">
                <Button variant="outline">Login</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
