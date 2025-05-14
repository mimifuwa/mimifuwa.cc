import { Kaisei_Opti, Patua_One, Source_Code_Pro, UnifrakturMaguntia } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

const kaiseiOpti = Kaisei_Opti({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-kaisei-opti",
});

const unifrakturMaguntia = UnifrakturMaguntia({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-unifraktur-maguntia",
});

const patuaOne = Patua_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-patua-one",
});

export const fonts = [sourceCodePro, kaiseiOpti, unifrakturMaguntia, patuaOne];
