import { useParam } from "@blitzjs/next";
// reusable hook to read a URL parameter
export const useStringParam = (name: string) => {
  return useParam(name, "string");
};
