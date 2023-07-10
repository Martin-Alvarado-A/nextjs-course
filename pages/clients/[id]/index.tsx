import { useRouter } from 'next/router';
export default function CliensProjectPage() {
  const Router = useRouter();
  console.log(`🔎 | CliensProjectPage | query:`, Router.query);
  return (
    <div>
      <h1>The projects of a given client</h1>
    </div>
  );
}
