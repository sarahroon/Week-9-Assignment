import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default async function RootLayout({ children }) {
  const user = await currentUser();

  return (
    <html>
      <body>
        <div>
          <SignInButton />
          <SignUpButton />
          <UserButton />
        </div>
        {children}
      </body>
    </html>
  );
}
