import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col background-image">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
