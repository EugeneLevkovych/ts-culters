import { useState } from "react";
import productImg from "../assets/produkt.png";
import type { Product } from "../types/productType";

interface ProductProps {
  product: Product;
}

const ProductItem2 = ({ product }: ProductProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray13">
      {/* Desktop Layout */}
      <div className="hidden xl:grid xl:grid-cols-[auto_1fr_100px_100px_80px_130px_130px_110px_auto] 2xl:grid-cols-[auto_1fr_120px_120px_100px_150px_130px_130px_auto] gap-0 items-center">
        <div className="p-3">
          <input className="accent-blue2 cursor-pointer" type="checkbox" />
        </div>

        <div className="p-3">
          <div className="flex items-center gap-2">
            <img className="h-10" src={productImg} alt="product" />
            <div>
              <div className="text-xs leading-[1.4] text-blue2">
                {product.id}
              </div>
              <div className="text-sm leading-[1.5] text-gray7">
                {product.name}
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="product-text">${product.price.toFixed(2)}</p>
        </div>

        <div className="p-3">
          <p className="product-text">{product.size}</p>
        </div>

        <div className="p-3">
          <p className="product-text">{product.qty}</p>
        </div>

        <div className="p-3">
          <p className="product-text">{product.date}</p>
        </div>

        <div className="p-3">
          <div
            className={`inline-block h-7.5 px-2.5 py-1.5 ${
              product.status === "Out of Stock"
                ? "bg-red2 text-red1"
                : "bg-green2 text-green1"
            } font-medium text-xs leading-[1.4] rounded-[10px]`}
          >
            {product.status}
          </div>
        </div>

        <div className="p-3 flex gap-4 justify-center">
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

      {/* Mobile Layout */}
      <div className="flex justify-between xl:hidden">
        <div className="flex p-4">
          <div className="mr-3">
            <input className="accent-blue2 cursor-pointer" type="checkbox" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img className="h-10" src={productImg} alt="product" />
              <div>
                <div className="text-xs leading-[1.4] text-blue2">
                  {product.id}
                </div>
                <div className="text-sm leading-[1.5] text-gray7">
                  {product.name}
                </div>
              </div>
            </div>

            <div
              className={`text-sm leading-[1.5] transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } space-y-3`}
            >
              <div className="flex gap-4 pt-3">
                <p className="w-15 text-gray2">Price</p>
                <p className="text-gray1">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-15 text-gray2">QTY</p>
                <p className="text-gray1">{product.qty}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-15 text-gray2">Date</p>
                <p className="text-gray1">{product.date}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-15 text-gray2">Status</p>
                <div
                  className={`h-7.5 px-2.5 py-1.5 ${
                    product.status === "Out of Stock"
                      ? "bg-red2 text-red1"
                      : "bg-green2 text-green1"
                  } font-medium text-xs leading-[1.4] rounded-[10px]`}
                >
                  {product.status}
                </div>
              </div>
              <div className="flex gap-4">
                <p className="w-15 text-gray2">Action</p>
                <div className="flex gap-4">
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
            </div>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-7 flex justify-center items-center bg-gray13 rounded-lg m-4 cursor-pointer"
        >
          {!isOpen ? (
            <svg className="size-5 stroke-gray7 fill-transparent">
              <use href="./sprite.svg#icon-arrow-down-simple"></use>
            </svg>
          ) : (
            <svg className="size-5 stroke-gray7 fill-transparent">
              <use href="./sprite.svg#icon-arrow-up-simple"></use>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem2;
