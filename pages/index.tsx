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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
  };
}

type Product = {
  id: string;
  title: string;
};
