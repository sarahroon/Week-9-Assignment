import { ClerkProvider } from "@clerk/nextjs"; // <-- use this, NOT app-beta

export const metadata = {
  title: "Social Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
