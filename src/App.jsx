import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Sidebar from "./components/Sidebar"; // Nome corrigido

function App() {
  return (
      <div className="flex">
        <Sidebar /> {/* Nome corrigido */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </div>
  );
}

export default App;
