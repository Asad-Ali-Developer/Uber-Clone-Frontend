// src/interfaces.ts

import { ComponentType } from "react";

export interface RouteConfig {
  path: string;
  component: ComponentType<any>;
  wrapper?: ComponentType<any>; // Optional wrapper component
  // chidlren?: RouteConfig[]; // Optional and for the Chidlren components
}

export type RoutesConfig = RouteConfig[]; // Array of RouteConfig
