import React from "react";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
    title: 'Next Js Notes',
    description: 'a crud app that deals with note taking.'
}