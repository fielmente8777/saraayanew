import { formatLocalDate } from "@/utils/bookingDates";

export function getDateInputLimits(options: {
  showPast?: boolean;
  showFuture?: boolean;
}) {
  const today = formatLocalDate(new Date());

  let min: string | undefined;
  let max: string | undefined;

  if (options.showPast && !options.showFuture) {
    max = today; // Only allow today or earlier
  } else if (!options.showPast && options.showFuture) {
    min = today; // Only allow today or later
  } else if (!options.showPast && !options.showFuture) {
    // If neither, restrict to today only
    min = max = today;
  }

  return { min, max };
}
