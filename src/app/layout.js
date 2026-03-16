import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "IDEALAB - Madan Mohan Malaviya University of Technology",
  description: "A state-of-the-art facility for rapid prototyping and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-inter bg-slate-50 text-slate-800 antialiased selection:bg-blue-500/20">
        <Providers>
          <div className="flex min-h-screen flex-col relative overflow-hidden">
            {/* Light Mode Background elements */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-slate-50 to-white"></div>
            <div className="fixed top-0 left-0 right-0 h-[500px] -z-10 bg-gradient-to-b from-blue-200/30 to-transparent blur-3xl"></div>
            <div className="fixed bottom-0 right-0 w-[800px] h-[800px] -z-10 bg-gradient-to-tl from-cyan-200/20 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
