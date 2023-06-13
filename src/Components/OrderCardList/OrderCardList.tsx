export const OrderCardList = ({
  totalPrice,
  totalProducts,
}: {
  totalPrice: number;
  totalProducts: number;
}) => {
  return (
    <div className="flex flex-col justify-between items-center mb-3 border rounded-lg p-3">
      <p>
        <span>Total products:</span>
        <span className="font-semibold"> {totalProducts}</span>
      </p>
      <p>
        <span>Total price:</span>
        <span className="font-semibold"> ${totalPrice}</span>
      </p>
    </div>
  );
};
