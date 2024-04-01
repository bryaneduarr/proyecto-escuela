import type { Metadata } from "next";
import { AuthProvider } from "@/lib/login/login-provider";
import { Inter } from "next/font/google";
import AdminNavbar from "@/components/navbars/admin-navbar";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin school",
  description: "Administration school project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.className} mx-auto w-full max-w-[1400px] px-2.5 md:px-20  my-2.5`}
    >
      <AuthProvider>
        <AdminNavbar />
        {children}
      </AuthProvider>
    </div>
  );
}
