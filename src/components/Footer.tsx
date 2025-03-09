const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-8 text-[16px] font-[400] font-inter text-[#3A558D]">
      Todos los derechos reservados, {year}®
    </footer>
  );
};

export default Footer;
