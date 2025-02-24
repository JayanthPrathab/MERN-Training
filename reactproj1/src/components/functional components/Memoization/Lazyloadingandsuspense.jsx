import { Suspense, lazy } from "react";
const LazyComp = lazy(() => {
  import("../SignUp.jsx");
});
const Lazyloadingandsuspense = () => {
  return (
    <div>
      <Suspense>
        <h1>This is lazy component</h1>
        <LazyComp />
      </Suspense>
    </div>
  );
};
export default Lazyloadingandsuspense;
