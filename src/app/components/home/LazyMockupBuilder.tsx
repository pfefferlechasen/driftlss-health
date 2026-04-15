"use client";

import dynamic from "next/dynamic";

const MockupBuilder = dynamic(() => import("../MockupBuilder"), {
  ssr: false,
});

export default function LazyMockupBuilder() {
  return <MockupBuilder />;
}
