import { useState } from "react";
import productImg from "../assets/produkt.png";
import type { Product } from "../types/productType";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import CellItemAction from "./CellItemAction";
import CellItemStatus from "./CellItemStatus";
import Checkbox from "./Checkbox";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray13 text-sm leading-[1.5] text-gray7 dark:text-gray13">
      {/* Desktop */}
      <div className="hidden xl:grid xl:grid-cols-[auto_1fr_100px_100px_80px_130px_130px_110px_auto] 2xl:grid-cols-[auto_1fr_120px_120px_100px_150px_130px_130px_auto] gap-0 items-center [&>*]:p-3">
        <div>
          <Checkbox />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img className="h-10" src={productImg} alt="product" />
            <div>
              <div className="text-xs leading-[1.4] text-blue2">
                {product.id}
              </div>
              <div className="text-sm leading-[1.5]">{product.name}</div>
            </div>
          </div>
        </div>

        <div>
          <p>${product.price.toFixed(2)}</p>
        </div>

        <div>
          <p>{product.size}</p>
        </div>

        <div>
          <p>{product.qty}</p>
        </div>

        <div>
          <p>{product.date}</p>
        </div>

        <div>
          <CellItemStatus status={product.status} />
        </div>

        <CellItemAction />
      </div>

      {/* Mobile */}
      <div className="flex justify-between xl:hidden">
        <div className="flex p-4">
          <div className="mr-3">
            <Checkbox />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img className="h-10" src={productImg} alt="product" />
              <div>
                <div className="text-xs leading-[1.4] text-blue2">
                  {product.id}
                </div>
                <div className="text-sm leading-[1.5]">{product.name}</div>
              </div>
            </div>

            <div
              className={`text-sm leading-[1.5] transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } space-y-3`}
            >
              <div className="flex gap-4 pt-3">
                <p className="w-15">Price</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-15">QTY</p>
                <p>{product.qty}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-15">Date</p>
                <p>{product.date}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-15">Status</p>
                <CellItemStatus status={product.status} />
              </div>
              <div className="flex gap-4">
                <p className="w-15">Action</p>
                <CellItemAction />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-7 flex justify-center items-center bg-gray13 dark:bg-gray11 rounded-lg m-4 cursor-pointer"
        >
          {!isOpen ? (
            <ArrowDown width="20px" height="20px" />
          ) : (
            <ArrowUp width="20px" height="20px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
