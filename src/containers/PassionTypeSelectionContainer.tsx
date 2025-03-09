import { useState, useEffect } from "react";
import { PrincipalNavBar } from "../components/PrincipalNavBar";
import ImageButton from "../components/ImageButton";
import SkeletonCard from "../components/SkeletonCard";
import { passionTypes } from "../data/passionTypes";
import { Grow } from "@mui/material";

const SKELETON_COUNT = 3;

export const PassionTypeSelectionContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

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
          {loading
            ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <SkeletonCard key={index} />
              ))
            : passionTypes.map((item) => (
                <Grow in key={item.id} timeout={500}>
                  <div>
                    <ImageButton
                      key={item.id}
                      imageUrl={item.imageUrl}
                      text={item.text}
                      redirectTo={item.redirectTo}
                    />
                  </div>
                </Grow>
              ))}
        </div>
      </div>
    </div>
  );
};
