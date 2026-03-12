// app/layout.js
import { ClerkProvider } from "@clerk/nextjs/app-beta"; // use app-beta for App Router

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
