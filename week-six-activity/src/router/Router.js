import CreatePokemon from "../pages/Create";
import UpdatePokemon from "../pages/Update";
import Base from "../pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Base />}>
    <Route path="/crear" element={<CreatePokemon />} />
    <Route path="/actualizar" element={<UpdatePokemon />} />
    </Route>
  </Routes>
  </BrowserRouter>);
}
export default Router;
