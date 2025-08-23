import ShowAll from "./ShowAll";
import mapImg from "../assets/map.png";

const Map = () => {
  return (
    <div className="p-5 bg-white rounded-3xl">
      <div className="flex justify-between items-start mb-5">
        <h5 className="heading">Customer Growth 3 Province</h5>
        <ShowAll />
      </div>
      <div className="flex gap-3 text-xs leading-[1.4] text-gray2 mb-7">
        <div className="flex items-center gap-1">
          <div className="size-3.5 bg-lime-green rounded-full"></div>
          <p>
            East Java <span className="font-bold text-gray7">(50%)</span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-3.5 bg-blue2 rounded-full"></div>
          <p>
            Kalimantan <span className="font-bold text-gray7">(50%)</span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-3.5 bg-blue3 rounded-full"></div>
          <p>
            Bali <span className="font-bold text-gray7">(65%)</span>
          </p>
        </div>
      </div>
      <img className="w-92" src={mapImg} alt="map" />
    </div>
  );
};
export default Map;
