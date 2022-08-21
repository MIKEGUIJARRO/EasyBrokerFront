// Libraries
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Property } from "./pages/Property";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/properties" element={<Home />} />
            <Route path="/properties/:id" element={<Property />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
