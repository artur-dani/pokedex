import { baseImageUrl } from "../api/baseUrls";
const PokemonCard = () => {
  return (
    <div className="w-full mx-auto overflow-hidden transition-all duration-200 ease-in-out transform rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2">
      <div className="flex items-center justify-center w-full py-8 mx-auto">
        <div className="w-64">
          <img src={`${baseImageUrl}/001.png`} className="w-full h-full" />
        </div>
      </div>

      <div className="w-full pt-5 pb-8 text-center bg-white">
        <h1 className="mb-2 text-3xl font-semibold capitalize">pokemon name</h1>
        <div className="flex flex-wrap justify-center mx-auto">
          <p className="text-sm font-bold uppercase">type</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
