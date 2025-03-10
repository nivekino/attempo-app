import { useShopServiceStore } from "../store/useShopServiceStore";
import { cn } from "../utils/cn";
import { ClientTypeCard } from "../interfaces/ClientTypeCard";

export const CardSelectionButton: React.FC<ClientTypeCard> = ({
  type,
  imageUrl,
  label,
}) => {
  const { selectedClientType, setSelectedClientType } = useShopServiceStore();
  const isSelected = selectedClientType === type;

  return (
    <>
      <button
        onClick={() => setSelectedClientType(type)}
        className={cn(
          "relative w-[250px] h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all duration-100 focus:outline-none",
          isSelected ? "border-2 border-[#1BAFB1]" : "border-none"
        )}
        tabIndex={0}
      >
        <img
          src={imageUrl}
          alt={label}
          className="w-full h-full object-cover"
        />

        <div
          className={cn(
            "absolute top-3 right-3 w-6 h-6 rounded-full transition-all",
            isSelected ? "bg-[#1BAFB1]" : "bg-white"
          )}
        >
          <div
            className={cn(
              "absolute top-[2px] right-[2px] w-5 h-5 border-2 border-white rounded-full transition-all",
              isSelected ? "bg-[#1BAFB1]" : "bg-white"
            )}
          />
        </div>
      </button>
      <p className="text-start text-[20px] font-[500] font-inter text-[#18243E] mt-2">
        {label}
      </p>
    </>
  );
};
