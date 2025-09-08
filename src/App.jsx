// define the route for our app

// Radix UI → Accessible, unstyled UI components.
// React Toast → Pop-up toast notifications.
// CVA → Manages Tailwind class variants (button size, colours and states).
// Lucide React → Icon set for React.
// React Router DOM → Routing/navigation for React.

import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/Notfound";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
