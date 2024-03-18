import { createContext, useState } from "react";

export const DarkmodeContext = createContext(true);

const DarkmodeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkmodeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};
export default DarkmodeProvider;
