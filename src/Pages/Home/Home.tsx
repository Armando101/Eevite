import { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";

export const Home = () => {
  const { filteredItems, items, searchByTitle, setSearchByTitle } =
    useContext(ShoppingCartContext);
  const itemsToRender =
    filteredItems.length > 0 && searchByTitle ? filteredItems : items;
  const notFoundProducts = filteredItems.length === 0 && searchByTitle;

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-5">
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input
        className="rounded-lg p-2 border w-80 border-black mb-3"
        type="text"
        onChange={(event) => setSearchByTitle(event.target.value)}
        placeholder="Search product"
      />
      {notFoundProducts ? (
        <h2>Product not found</h2>
      ) : (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {itemsToRender?.map((item) => (
            <Card key={item.id} data={item}></Card>
          ))}
        </div>
      )}
      <ProductDetail />
    </Layout>
  );
};
