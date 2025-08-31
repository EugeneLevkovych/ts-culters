import productImg from "../assets/produkt.png";
import type { Product } from "../types/productType";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className="flex border-b border-gray13 hover:bg-gray12 transition-colors">
      <div className="p-3">
        <input className="accent-blue2 cursor-pointer" type="checkbox" />
      </div>

      <div className="flex items-center gap-2 p-3">
        <img className="h-10" src={productImg} alt="product" />
        <div>
          <div className="text-xs text-gray7 leading-[1.4]">{product.id}</div>
          <div className="font-semibold text-sm leading-[1.4] text-gray7">
            {product.name}
          </div>
        </div>
      </div>

      <div className="flex justify-center p-3">
        <p className="product-text">${product.price.toFixed(2)}</p>
      </div>

      <div className="flex justify-center p-3">
        <span className="product-text">{product.size.toLocaleString()}</span>
      </div>

      <div className="flex justify-center p-3">
        <div className="px-2 py-1.5 bg-green2 text-green1 font-medium text-xs leading-[1.4] rounded-[10px]">
          {product.status}
        </div>
      </div>

      <div className="flex gap-4 p-3">
        <svg className="size-6 stroke-gray7 fill-transparent">
          <use href="./sprite.svg#icon-eye-open"></use>
        </svg>
        <svg className="size-6 stroke-gray7 fill-transparent">
          <use href="./sprite.svg#icon-edit"></use>
        </svg>
        <svg className="size-6 stroke-gray7 fill-transparent">
          <use href="./sprite.svg#icon-delete"></use>
        </svg>
      </div>
    </div>
  );
};
export default ProductItem;
