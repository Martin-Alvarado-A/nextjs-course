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
  return {
    props: {
      products: [
        { id: 'p1', title: 'Product 1' },
        { id: 'p2', title: 'Product 2' },
        { id: 'p3', title: 'Product 3' },
      ],
    },
  };
}

type Product = {
  id: string;
  title: string;
};
