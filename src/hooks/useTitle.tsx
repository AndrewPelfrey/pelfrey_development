import { useEffect } from "react";

export default function useTitle(title?: string) {
  useEffect(() => {
    const base = "Pelfrey Development";
    document.title = title && title !== "Home" ? `${title} | ${base}` : base;
  }, [title]);
}
