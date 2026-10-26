const whatsappBase = "https://wa.me/918988334372";
export const winterEnquiryMessage =
  "Hello Saraaya Glamps, I would like to enquire about a winter stay. My preferred dates are [dates], and we are [number of adults] adults and [number of children] children. Please share the available packages and prices.";
const whatsappLink = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;
export const winterWhatsappCta = whatsappLink(winterEnquiryMessage);
export const warmUpWhatsappCta = winterWhatsappCta;
export const takeoverWhatsappCta = whatsappLink(
  "Hello Saraaya Glamps, I would like to enquire about a private group stay. My preferred dates are [dates], and we are [number of adults] adults and [number of children] children. Please share availability for multiple Safari suites or a property buyout, packages, prices and inclusions."
);
export const arrivalWhatsappCta = whatsappLink(
  "Hello Saraaya Glamps, please help me with directions, the designated pickup point, 4x4 transfer, luggage assistance and any applicable arrival charges for my stay on [dates]."
);
