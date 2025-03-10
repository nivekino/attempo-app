import { CardSelectionButton } from "../components/CardSelectionButton";
import { useState, useEffect } from "react";
import SkeletonCard from "../components/SkeletonCard";
import { clientTypes } from "../data/clientTypes";
import { Grow } from "@mui/material";

const SKELETON_COUNT = 2;

export const HunterTalentProcessContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mx-auto mt-[0px] md:mt-[70px] px-9">
        <h3 className="text-[24px] md:text-[32px] font-[700] font-montserrat text-[#18243E]">
          Selecciona el tipo de cliente que eres
        </h3>
        <p className="text-[14px] md:text-[16px] font-[400] font-inter text-[#888FA8]">
          Para brindarte servicios idoneos para ti
        </p>
      </div>

      <div className="flex justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-6 mt-10 mx-auto justify-items-center">
          {loading
            ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <SkeletonCard key={index} />
              ))
            : clientTypes.map((item) => (
                <Grow in key={item.id} timeout={500}>
                  <div>
                    <CardSelectionButton
                      key={item.id}
                      type={item.type}
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                  </div>
                </Grow>
              ))}
        </div>
      </div>
    </div>
  );
};
