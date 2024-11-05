export const preloadPokemonSite = () => {
  // Create preload link for the main document
  const preloadLink = document.createElement("link");
  preloadLink.rel = "preload";
  preloadLink.as = "document";
  preloadLink.href = "https://pokemon-bryanc004.web.app";
  preloadLink.crossOrigin = "anonymous";
  document.head.appendChild(preloadLink);

  // Optionally prefetch the URL
  const prefetchLink = document.createElement("link");
  prefetchLink.rel = "prefetch";
  prefetchLink.href = "https://pokemon-bryanc004.web.app";
  document.head.appendChild(prefetchLink);
};
