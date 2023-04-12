"use client";
import store from "../storage/index";
import "./globals.css";
import { Provider } from "react-redux";
export const metadata = {
  title: "Task",
  description: "Author: Mateus Borges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
