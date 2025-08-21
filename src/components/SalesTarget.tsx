const SalesTarget = () => {
  return (
    <div className="max-w-139.5 w-full h-[155px] bg-white rounded-3xl p-5">
      <label className="heading mb-4" htmlFor="sales-target">
        Sales Target
      </label>
      <div className="flex justify-between">
        <div>
          <p className="par-1">In Progress</p>
          <p className="par-2">$231.132.444</p>
        </div>
        <div>
          <p className="par-1">Sales Target</p>
          <p className="par-2">$500.000.00</p>
        </div>
      </div>
      <input className="w-full" type="range" id="sales-target" />
    </div>
  );
};
export default SalesTarget;
