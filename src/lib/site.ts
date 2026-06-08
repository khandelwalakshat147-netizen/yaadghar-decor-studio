export const WHATSAPP_NUMBER = "918619441458";
export const BRAND = "Yaad Ghar";
export const TAGLINE_HI = "यादें जो हमेशा साथ रहें";
export const TAGLINE_EN = "Memories that stay forever";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
