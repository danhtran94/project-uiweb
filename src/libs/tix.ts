import { newTix } from "styled-tix";
import { extendTailwindMerge } from "tailwind-merge";

export * from "styled-tix";
export type * from "styled-tix/dist/esm/types";

const twMergeConfig = {
  extend: {
    classGroups: {
      "font-family": [
        {
          font: ["inter"],
        },
      ],
      "font-size": [
        {
          text: [
            "head26",
            "head18",
            "head15",
            "head12",
            "note12",
            "body13",
            "body15",
          ],
        },
      ],
      "bg-color": [
        {
          second: ["dirt", "skin", "earth", "leaf", "tree", "honey"],
        },
      ],
    },
  },
};

export const tix = newTix(extendTailwindMerge(twMergeConfig));
// export const tix = newTix(twMerge);
// export const tix = newTix((classes) => classes.join(" "));
// You can use any classes mixer you want.
// here we will use `tailwind-merge` for tailwindcss
