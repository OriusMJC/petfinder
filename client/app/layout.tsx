import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import RedirectLogin from "./utils/redirectLogin";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petfinder | Politusk diseños",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Session = await getSession();

  return (
    <html lang="en">
      <UserProvider>
        <body className={manrope.className}>
          <RedirectLogin user={Session} />
          <Navbar user={Session?.user || {}} />
          {children}
          <Footer user={Session?.user} />
        </body>
      </UserProvider>
    </html>
  );
}
