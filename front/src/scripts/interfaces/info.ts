import { MantineColor } from "@mantine/core";
import { ressource } from "./ressource";
import { ressourceItem } from "./ressourceItem";
import { ressourceType } from "./ressourceType";
import { buildingType } from "./buildingType";

export type info =
    | {
          name: buildingType;
          theme: MantineColor;
          icon: string;
          label: string;
          type: "building";
          category: string;
          score: number;
          multiplier: number;
          info: {
              inputs: ressourceItem[];
              outputs: ressourceItem[];
              cost: ressource;
          };
      }
    | {
          name: ressourceType;
          theme: MantineColor;
          icon: string;
          label: string;
          type: "ressource";
          category: string;
          score: number;
          multiplier: number;
          info: {
              inputs: ressourceItem[];
              outputs: ressourceItem[];
              cost: ressource;
          };
      };
