// define the route for our app

// Radix UI → Accessible, unstyled UI components.
// React Toast → Pop-up toast notifications.
// CVA → Manages Tailwind class variants (button size, colours and states).
// Lucide React → Icon set for React.
// React Router DOM → Routing/navigation for React.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

function App() {
// make route for main landing page and a route for if the page is not found
/* index: sends client to what our default route is, aka landing page */
// /* path="*": match to any route that hasnt been defined   */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
