import { useState } from "react";
import Logo from "../assets/img/logo.svg";
import { BackButton } from "./BackButton";
import { LanguageButton } from "./LanguageButton";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";

export const PrincipalNavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto] items-center px-10 lg:px-[200px] py-5">
      <div>
        <img src={Logo} alt="Logo" className="w-[120px] md:w-[150px]" />
      </div>

      <div className="hidden lg:flex flex-row justify-end gap-6">
        <BackButton />
        <LanguageButton />
      </div>

      <div className="flex lg:hidden justify-end">
        <IconButton onClick={() => setMenuOpen(true)}>
          <MenuIcon fontSize="large" className="text-[#18243E]" />
        </IconButton>
      </div>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="w-[200px] p-4 flex flex-col gap-4">
          <div className="flex justify-end">
            <IconButton onClick={() => setMenuOpen(false)}>
              <CloseIcon fontSize="large" className="text-[#18243E]" />
            </IconButton>
          </div>

          <BackButton />
          <LanguageButton />
        </div>
      </Drawer>
    </div>
  );
};
