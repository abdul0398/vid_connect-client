import Navbar from "@/components/navbar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<p>Loading....</p>}>{children}</Suspense>
    </main>
  );
}
