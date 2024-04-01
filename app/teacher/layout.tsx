import type { Metadata } from "next";
import { AuthProvider } from "@/lib/login/login-provider";
import { Inter } from "next/font/google";
import TeacherNavbar from "@/components/navbars/teacher-navbar";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teacher administration",
  description: "Only teacher administration for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <AuthProvider>
        <TeacherNavbar />
        <div className="mx-auto w-full max-w-[1500px] px-2.5 md:px-20  my-2.5">
          {children}
        </div>
      </AuthProvider>
    </div>
  );
}
