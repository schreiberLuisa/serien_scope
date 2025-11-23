
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Watchlist from "./pages/Watchlist.tsx";
import Home from "./pages/Home.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={""} element={<Layout/>}>
                  <Route index element={<Home/> }/>
                  <Route path={"/watchlist"} element={<Watchlist />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
