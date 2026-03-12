import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div>
      <SignInButton />
      <SignUpButton />
      <UserButton />
    </div>
  );
}

import { currentUser } from "@clerk/nextjs/server";

export async function createProfile() {
  const user = await currentUser();

  await supabase.from("users").insert({
    clerk_id: user.id,
    username: user.username,
    bio: "",
  });
}

const { data: posts } = await supabase
  .from("posts")
  .select("*")
  .eq("user_id", user.id);

  {posts.map((post) => (
  <div key={post.id}>
    {post.content}
  </div>
))}

<form action={createPost}>
  <textarea name="content" />
  <button type="submit">Post</button>
</form>

export async function createPost(formData) {
  const content = formData.get("content");

  await supabase.from("posts").insert({
    content,
    user_id: user.id
  });
}

const { data } = await supabase
  .from("posts")
  .select("*")
  .order("created_at", { ascending: false });
