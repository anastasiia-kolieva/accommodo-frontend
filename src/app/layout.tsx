import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Accommodo",
    description: "Hotel management system",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen">
                    <Sidebar />
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <Navbar />
                        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                            {children}
                        </main>
                    </div>
                    <footer />
                </div>
            </body>
        </html>
    );
}
