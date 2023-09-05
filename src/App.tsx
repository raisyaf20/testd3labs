import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DirectoryProject from "./pages/DirectoryProject";
import { createContext, useState } from "react";

type searchUserContext = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<searchUserContext>({
  search: "",
  setSearch: () => {},
  modal: false,
  setModal: () => {},
});

function App() {
  const [search, setSearch] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ search, setSearch, modal, setModal }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<DirectoryProject />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
