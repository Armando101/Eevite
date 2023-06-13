export const OrderCardList = ({
  totalPrice,
  totalProducts,
}: {
  totalPrice: number;
  totalProducts: number;
}) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01.01.12</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};
