import path from 'path';
import fs from 'fs/promises';
import { Fragment } from 'react';

export default function ProductDetailPage(props: any) {
  const loadedProducts: Product = props.loadedProducts;
  return (
    <Fragment>
      <h1>{loadedProducts.title}</h1>
      <p>{loadedProducts.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const productId = params.pid;
  console.log(`🔎 | PID | getStaticProps > params:`, params);
  console.log(`🔎 | PID | getStaticProps > productId:`, productId);
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const product = data.products.find(
    (product: Product) => product.id === productId
  );

  return {
    props: {
      loadedProducts: product,
    },
  };
}

export async function getStaticPaths(context: any) {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false,
  };
}

type Product = {
  id: string;
  title: string;
  description: string;
};
