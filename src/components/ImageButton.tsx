import { useNavigate } from "react-router-dom";
import { ImageButtonProps } from "../interfaces/ImageButton";

const ImageButton: React.FC<ImageButtonProps> = ({
  imageUrl,
  text,
  redirectTo,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(redirectTo)}
      className="relative w-full md:max-w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg focus:outline-none transition-transform duration-300 hover:scale-102"
    >
      <img src={imageUrl} alt={text} className="w-full h-full object-cover" />

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#18243E] to-[#18243E]/0 p-4">
        <h3 className="text-white text-[33px] md:text-[28px] lg:text-[40px] font-[900] font-montserrat text-start pl-3 pr-5">
          {text}
        </h3>
      </div>
    </button>
  );
};

export default ImageButton;
