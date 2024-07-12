import { Heart, HeartPulse, Soup } from "lucide-react";

function RecipeCard() {
  return (
    <div>
      <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
        <a href="#" className="relative h-32">
          <img
            src="/1.jpg"
            alt="imagem"
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
            <Soup size={16} /> Serve 4 pessoas
          </div>
          <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
            <Heart
              size={20}
              className="hover:fill-red-500 houver:text-red-500"
            />
          </div>
        </a>

        <div className="flex mt-1">
          <p className="font-bold tracking-wide">Frango Assado</p>
        </div>
        <p className="my-2">Frango Turco</p>
        <div className="flex gap-2 mt-auto">
          <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              Sem Gluten
            </span>
          </div>
          <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              Coração Saudável
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
