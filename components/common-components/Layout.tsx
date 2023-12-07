'use client'
import Head from 'next/head';
import { NextUIProvider } from "@nextui-org/react";

// @ts-ignore
export default function Layout({ children }) {
    return (
        <div>
            <Head>
            </Head>
            <header>
            </header>
            <main>
                <NextUIProvider className="bg-white text-black">
                    {children}
                </NextUIProvider>
            </main>
        </div>
    );
}
