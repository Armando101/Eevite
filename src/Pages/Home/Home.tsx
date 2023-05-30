import { useEffect, useState } from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { API } from "../../constants/endpoints.constant";
import { Product } from "../../interfaces";

export const Home = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${API}/products`);
      const data = await response.json();
      setItems(data);
    };

    getData();
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </div>
    </Layout>
  );
};
