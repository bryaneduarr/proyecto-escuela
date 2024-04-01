"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import { Home, User } from "lucide-react";
import Link from "next/link";

const TeacherNavbar = () => {
  const { data: session }: any = useSession();

  return (
    <header className="flex items-center justify-center border-b h-16  mx-auto max-w-[1350px]">
      <Link href="/teacher" className="mr-6">
        <Home />
      </Link>
      <Popover>
        <PopoverTrigger>
          <User className="ml-6" />
        </PopoverTrigger>
        <PopoverContent>
          {!session ? (
            <div>
              <span>{`Not signed in`}</span>
            </div>
          ) : (
            <div>
              <span>{session.user?.user}</span>

              <div>
                <button
                  onClick={() => {
                    signOut();
                  }}
                >
                  <span className="text-red-500">Salir</span>
                </button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default TeacherNavbar;
