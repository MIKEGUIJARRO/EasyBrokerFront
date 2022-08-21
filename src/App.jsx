import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
