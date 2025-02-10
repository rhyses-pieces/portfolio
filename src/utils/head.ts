import type { TransitionBeforeSwapEvent } from "astro:transitions/client";

const loadFonts = (document: Document) => {
  if (!("fonts" in document)) { return; }
  if (sessionStorage.fontsLoadedWithClass) { document.documentElement.classList.add("fonts-loaded"); return; }

  if ("fonts" in document) {
    Promise.all([
      document.fonts.load("1rem Xenon"),
      document.fonts.load("1rem Terminal"),
      document.fonts.load("1rem Intel"),
    ]).then(function() {
      document.documentElement.classList.add("fonts-loaded");
      sessionStorage.fontsLoadedWithClass = true;
    });
  }
};
const getPreference = (document: Document) => {
  let theme: string;
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) theme = localStorage.theme; else theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
};
getPreference(document);
loadFonts(document);
document.addEventListener("astro:before-swap", ((e: TransitionBeforeSwapEvent) => {
  getPreference(e.newDocument); 
}) as EventListener);
document.addEventListener("astro:after-swap", () => {
  // do not load webfonts if connection is slow, data saver is on, or if user has prefers reduced motion
  // @ts-expect-error because typescript does yet support typings for Network Information API
  if (navigator.connection && (navigator.connection.effectiveType === "slow-2g" || navigator.connection.effectiveType === "2g")) {}
  // @ts-expect-error
  else if (navigator.connection && navigator.connection.saveData) {}
  else if ("matchMedia" in window && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {} 
  else { loadFonts(document); }
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (e.matches) { 
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-switch")?.setAttribute("aria-pressed", "true");
    document.getElementById("theme-icon")!.innerHTML = `<title id="theme-icon-label">Dark mode</title><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("theme-switch")?.setAttribute("aria-pressed", "false");
    document.getElementById("theme-icon")!.innerHTML = `<title id="theme-icon-label">Light mode</title><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`;
  }
});