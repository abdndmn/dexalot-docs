import { navbar } from "vuepress-theme-hope";
import { commonNavbarEntries } from "./common"

export const esNavbarConfig = navbar(
  [
    {
      text: "Intercambio",
      link: "https://app.dexalot.com/",
      icon: "exchange"
    },
    ...commonNavbarEntries
  ]
);
