const whatsappBase = "https://wa.me/918988334372";
const whatsappLink = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;

export const winterWhatsappCta = whatsappLink(
  "Hello Saraaya Team, I'd like to check availability for a winter stay in your heated tents.\nDates:\nGuests:"
);
export const warmUpWhatsappCta = whatsappLink(
  "Hello Saraaya Team, please share a winter stay quote with meal-plan options, taxes and booking terms.\nDates:\nGuests:"
);
export const takeoverWhatsappCta = whatsappLink(
  "Hello Saraaya Team, we'd like to enquire about reserving all four tents for a winter group stay.\nDates:\nAdults and children:"
);
