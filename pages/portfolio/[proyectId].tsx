import { useRouter } from 'next/router';

export default function PortfolioProyectPage() {
  const router = useRouter();

  console.log(`🔎 | PortfolioProyectPage | pathName:`, router.pathname);
  console.log(`🔎 | PortfolioProyectPage | query:`, router.query);

  return (
    <div>
      <h1>The portfolio Proyect Page</h1>
    </div>
  );
}
