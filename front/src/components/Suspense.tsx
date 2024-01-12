import React from "react";
import FallBack from "./FallBack";

const Suspense = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Suspense fallback={<FallBack />}> {children} </React.Suspense>
    );
};

export default Suspense;
