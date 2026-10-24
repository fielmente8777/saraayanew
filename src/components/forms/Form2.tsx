"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import useBookingForm from "@/hooks/useBookingForm";
import { formatLocalDate, parseLocalDate } from "@/utils/bookingDates";
import { CalendarIcon, CallIcon, MailIcon, UserIcon } from "@/utils/formIcons";
import { ArrowUpIcons } from "@/utils/icons";
import { useId, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { countries } from "../../utils/constent";

interface Props {
  gridView?: boolean;
  submitLabel?: string;
}
const Form2 = ({ gridView, submitLabel = "Enquire Now" }: Props) => {
  const formId = useId();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
    },
  });
  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const handleDateChange = ([start, end]: [Date | null, Date | null]) => {
    setStartDate(start);
    setEndDate(end);
    // Keep the guest's local calendar date; UTC conversion can subtract a day.
    // Clear the previous checkout when a guest starts choosing a new range.
    setFieldValue("checkIn", start ? formatLocalDate(start) : "");
    setFieldValue("checkOut", end ? formatLocalDate(end) : "");
  };

  const formFields = [
    {
      name: "name",
      label: "Full name",
      type: "text",
      autoComplete: "name",
      value: formData.name,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Phone number",
      type: "tel",
      autoComplete: "tel-national",
      value: formData.phone,
      icon: <CallIcon />,
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      autoComplete: "email",
      value: formData.email,
      icon: <MailIcon />,
    },
    {
      name: "checkIn",
      label: "Check-in and check-out",
      type: "date",
      autoComplete: "off",
      value: formData.checkIn || "",
      icon: <CalendarIcon />,
    },
  ];

  return (
    <form
      aria-label="Stay enquiry"
      noValidate
      onSubmit={handleSubmit}
      className={
        gridView
          ? "flex flex-col gap-4 px-4"
          : "grid grid-cols-1 items-start gap-4 px-4 lg:grid-cols-5"
      }
    >
      {formFields.map((field) => {
        const inputId = formId + "-" + field.name;
        const error =
          errors[field.name] ||
          (field.type === "date" ? errors.checkOut : undefined);
        const errorId = inputId + "-error";
        return (
          <div key={field.name} className="min-w-0">
            <div className="flex min-h-12 items-center gap-2.5 border-b border-white/30 py-2">
              <span className="shrink-0 text-secondary" aria-hidden="true">
                {field.icon}
              </span>
              <label className="sr-only" htmlFor={inputId}>
                {field.label}
              </label>
              {field.type === "date" ? (
                <DatePicker
                  id={inputId}
                  name="stayDates"
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  minDate={min ? parseLocalDate(min) : undefined}
                  maxDate={max ? parseLocalDate(max) : undefined}
                  dateFormat="dd MMM yyyy"
                  placeholderText="Check-in & out"
                  ariaRequired="true"
                  ariaInvalid={error ? "true" : "false"}
                  ariaDescribedBy={error ? errorId : undefined}
                  calendarClassName="!z-[99999]"
                  popperClassName="!z-[99999]"
                  className="min-w-0 w-full bg-transparent text-base text-white placeholder:text-white/90 focus:outline-none"
                  wrapperClassName="w-full min-w-0"
                />
              ) : (
                <>
                  {field.type === "tel" && (
                    <select
                      className="w-16 shrink-0 bg-transparent text-white focus:outline-none"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFieldValue("countryCode", e.target.value)
                      }
                      aria-label="Country calling code"
                    >
                      {countries.map((country) => (
                        <option
                          key={country.name}
                          value={country.code}
                          className="bg-primary text-white"
                        >
                          {country.code} {country.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <input
                    id={inputId}
                    type={field.type}
                    name={field.name}
                    autoComplete={field.autoComplete}
                    placeholder={field.label}
                    required
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? errorId : undefined}
                    className="min-w-0 w-full bg-transparent text-white placeholder:text-white/90 focus:outline-none"
                    value={field.value}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            {error && (
              <p
                id={errorId}
                role="alert"
                className="mt-1 text-sm! text-red-200"
              >
                {error}
              </p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="min-h-12 rounded-full bg-secondary px-3 py-3 text-base text-white disabled:cursor-wait disabled:opacity-60"
      >
        <span className="flex items-center justify-center gap-2.5">
          {isSubmitting ? "Sending enquiry..." : submitLabel}
          {!isSubmitting && (
            <span aria-hidden="true">
              <ArrowUpIcons />
            </span>
          )}
        </span>
      </button>
    </form>
  );
};

export default Form2;
