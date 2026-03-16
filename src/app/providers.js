"use client";

import { AuthProvider } from "../context/AuthContext";
import { ReactLenis } from "lenis/react";

export function Providers({ children }) {
  return (
    <ReactLenis root>
      <AuthProvider>{children}</AuthProvider>
    </ReactLenis>
  );
}
