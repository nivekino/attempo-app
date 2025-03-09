import { PrincipalNavBar } from "../components/PrincipalNavBar";
import ImageButton from "../components/ImageButton";
import { passionTypes } from "../data/passionTypes";

export const PassionTypeSelecctionContainer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PrincipalNavBar />

      <div className="mx-auto mt-[100px] px-9">
        <h3 className="text-[24px] md:text-[36px] font-[700] font-montserrat text-[#18243E]">
          ¿Cuál es tu pasión?
        </h3>
        <p className="text-[14px] md:text-[16px] font-[400] font-inter text-[#888FA8]">
          Antes de iniciar a crear una cuenta, selecciona qué tipo de usuario
          eres para poder completar la información que te solicitamos.
        </p>
      </div>

      <div className="flex justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-auto">
          {passionTypes.map((item) => (
            <ImageButton
              key={item.id}
              imageUrl={item.imageUrl}
              text={item.text}
              redirectTo={item.redirectTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
