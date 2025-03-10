import Footer from "./Footer";
import { PrincipalNavBar } from "./PrincipalNavBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col background-image">
      <PrincipalNavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
