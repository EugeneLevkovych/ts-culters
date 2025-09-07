interface CellItemStatusTypes {
  status: string;
}

const CellItemStatus = ({ status }: CellItemStatusTypes) => {
  return (
    <div
      className={`inline-block h-7.5 px-2.5 py-1.5 ${
        status === "Out of Stock"
          ? "bg-red2 text-red1"
          : "bg-green2 text-green1"
      } font-medium text-xs leading-[1.4] rounded-[10px]`}
    >
      {status}
    </div>
  );
};
export default CellItemStatus;
