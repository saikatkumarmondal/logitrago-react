import { useState } from "react";
import Loader from "./app/elements/loader";
import RootLayout from "./layouts/root-layout";
import ScrollToTop from "./app/elements/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return (
    <>
      {
        isLoading && <Loader />
      }
      <ScrollToTop />
      <RootLayout />
     
    </>
  );
}
