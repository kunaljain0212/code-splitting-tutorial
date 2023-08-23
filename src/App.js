import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage.js";
import Loading from "./components/loading.js";

const AboutPage = lazy(() => delayForDemo(import("./components/aboutPage.js")));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
