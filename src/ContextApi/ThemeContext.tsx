import { createContext } from "react";
import type { valueProps } from "./Api.tsx";

export const ThemeContext = createContext<valueProps | null>(null);
