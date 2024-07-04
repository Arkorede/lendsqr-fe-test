export const isRouteActive = (itemLink: string, currentPath: string) => {
  if (itemLink === "/dashboard") {
    return currentPath === "/dashboard";
  }
  return currentPath.startsWith(itemLink) && currentPath !== "/dashboard";
};
