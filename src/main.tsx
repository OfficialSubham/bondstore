import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { MainLoading } from "./components/loading.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<MainLoading />}>
        <App />
      </Suspense>
    </RecoilRoot>
  </StrictMode>
);
