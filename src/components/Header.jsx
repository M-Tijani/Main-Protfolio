// Components
import Navbar_Mobile from "./Navbar_Mobile";
import Navbar_Pc from "./Navbar_Pc";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="lg:hidden flex flex-col w-full ">
          <Navbar_Mobile />
        </div>
        <div className="hidden lg:flex">
          <Navbar_Pc />
        </div>
      </div>
    </>
  );
}
