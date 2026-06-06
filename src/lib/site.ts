export const WHATSAPP_NUMBER = "919999999999"; // Replace with real number
export const BRAND = "Yaad Ghar";
export const TAGLINE_HI = "यादें जो हमेशा साथ रहें";
export const TAGLINE_EN = "Memories that stay forever";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
