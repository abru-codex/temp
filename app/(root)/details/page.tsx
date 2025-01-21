import ViewProduct from "../../_pages/ViewProduct/ViewProduct";

const ProductDetails = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const productResponse = await fetch(
    `https://banglaspareparts.abrutech.online/api/SparePart/${searchParams.id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const product = await productResponse.json();

  return <ViewProduct product={product} />;
};

export default ProductDetails;
