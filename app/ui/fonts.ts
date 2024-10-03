// Import Inter font
import { Inter, Roboto, Lusitana } from "next/font/google";

// Configure Inter and Roboto fonts
export const inter = Inter({
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

export const lusitana = Lusitana({ weight: "400", subsets: ["latin"] });
