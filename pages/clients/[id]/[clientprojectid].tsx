import { useRouter } from 'next/router';
export default function SelectedProjectClientPage() {
  const Router = useRouter();
  console.log(`🔎 | SelectedProjectClientPage | query:`, Router.query);

  return (
    <div>
      <h1>The project page for a specific project for a specific client </h1>
    </div>
  );
}
