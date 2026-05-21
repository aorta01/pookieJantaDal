"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".rv"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("on"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("on");
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
