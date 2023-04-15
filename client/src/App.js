import "./App.css";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import NewRecipe from "./pages/NewRecipe";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";
import NewUser from "./pages/NewUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-user" element={<NewUser />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/my-recipes" element={
            <ProtectedRoute>
              <MyRecipes />
            </ProtectedRoute>
          }></Route>
          <Route path="/new-recipe" element={
            // <ProtectedRoute> // removed for testing
              <NewRecipe />
            // </ProtectedRoute>
          }></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
