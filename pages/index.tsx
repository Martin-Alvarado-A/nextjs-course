import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';
export default function HomePage(props: any) {
  const { products } = props;

  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context: any) {
  console.log(`🔎 | Index | getStaticProps > Re-Generating...`);
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

type Product = {
  id: string;
  title: string;
  description: string;
};
