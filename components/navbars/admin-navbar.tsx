"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import { Home, Menu, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { data: session }: any = useSession();

  return (
    <header className="flex items-center p-5 border-b h-8 mx-auto max-w-[1350px]">
      <nav className="sm:hidden hidden md:flex w-full justify-between ">
        <Link
          href="/admin"
          className="text-base text-slate-900 font-medium hover:text-slate-600"
        >
          <Home />
        </Link>
        <Link
          className="text-base text-slate-900 font-medium hover:text-slate-600"
          href="/admin/students"
        >
          Estudiantes
        </Link>
        <Link
          className="text-base font-medium text-slate-900 hover:text-slate-600 mr-3"
          href="/admin/student-notes"
        >
          Notas
        </Link>
        <Link
          className="text-base font-medium text-slate-900 hover:text-slate-600"
          href="/admin/teachers"
        >
          Maestros
        </Link>
        <Link
          className="mb-4 text-base font-medium text-slate-900 hover:text-slate-600 mr-3"
          href="/admin/users"
        >
          Usuarios
        </Link>
        <Popover>
          <PopoverTrigger>
            <User className="" />
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
      </nav>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <Menu />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 h-screen w-screen bg-white z-10 p-5 pl-[1.85rem] pt-[0.95rem]">
          <div className="flex flex-col gap-4">
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                <Menu className="" />
              </button>
            </div>
            <Link
              href="/admin"
              className=" mb-4 text-base text-slate-900 font-medium hover:text-slate-600"
            >
              <Home />
            </Link>
            <Link
              className="mb-4 text-base text-slate-900 font-medium hover:text-slate-600"
              href="/admin/students"
            >
              Estudiantes
            </Link>
            <Link
              className="mb-4 text-base font-medium text-slate-900 hover:text-slate-600 mr-3"
              href="/admin/student-notes"
            >
              Notas
            </Link>
            <Link
              className="mb-4 text-base font-medium text-slate-900 hover:text-slate-600"
              href="/admin/teachers"
            >
              Maestros
            </Link>
            <Link
              className="mb-4 text-base font-medium text-slate-900 hover:text-slate-600 mr-3"
              href="/admin/users"
            >
              Usuarios
            </Link>
            <Popover>
              <PopoverTrigger>
                <User />
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
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
