export default async function UserProfile({ params }) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", params.id)
    .single();
}
