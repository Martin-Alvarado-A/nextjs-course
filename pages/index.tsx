import path from 'path';
import fs from 'fs/promises';

export default function HomePage(props: any) {
  const { products } = props;

  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>{product.title}</li>
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
};
