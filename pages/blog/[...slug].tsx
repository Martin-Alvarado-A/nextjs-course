import { useRouter } from 'next/router';
export default function BlogPostsPage() {
  const router = useRouter();
  console.log(`🔎 | BlogPostsPage | query:`, router.query);

  return (
    <div>
      <h1>Blog posts page</h1>
    </div>
  );
}
