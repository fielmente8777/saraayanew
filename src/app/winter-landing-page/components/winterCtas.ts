const whatsappBase = "https://wa.me/918988334372";
const whatsappLink = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;

export const winterWhatsappCta = whatsappLink(
  "Hello Saraaya Team, I'd like to check availability for a winter stay in your private safari suites.\nDates:\nGuests:"
);
export const warmUpWhatsappCta = whatsappLink(
  "Hello Saraaya Team, please share your winter packages, with prices, meal inclusions, occupancy limits, taxes, additional charges and booking terms.\nDates:\nGuests:"
);
export const takeoverWhatsappCta = whatsappLink(
  "Hello Saraaya Team, we'd like to enquire about reserving all four safari suites for a winter group stay.\nDates:\nAdults and children:"
);
