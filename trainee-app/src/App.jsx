// define the route for our app

// Radix UI → Accessible, unstyled UI components.
// React Toast → Pop-up toast notifications.
// CVA → Manages Tailwind class variants (button size, colours and states).
// Lucide React → Icon set for React.
// React Router DOM → Routing/navigation for React.

import { BrowserRouter, Route } from "react-router-dom";

function App() {
// make route for main landing page and a route for if the page is not found
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
