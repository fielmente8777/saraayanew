# Winter landing measurement and release notes

- `winter_landing_view`: once per landing mount; normal GA page_view remains configured.
- `winter_package_click`: package intent, with button_text, section, page_path and link_url.
- `whatsapp_click`: enquiry intent, including header, page CTAs and floating WhatsApp.
- `generate_lead`: existing form event only after the CRM endpoint returns success.
- No click event means a qualified lead, confirmed reservation or revenue.

These dataLayer events require matching GTM/GA4 tags and testing in the connected analytics account before Ads optimisation. This repository contains the page and CRM submission client, not the backend or booking provider's webhooks. Qualified lead events must come from an actual CRM qualification transition. Purchase/bookings must come from an authoritative booking/payment confirmation, using transaction_id, value and currency; deduplicate by transaction_id. Do not fabricate these events on the landing page, WhatsApp clicks or thank-you views.

Release inputs still required: property-approved package rates, effective dates, per-couple/occupancy basis, meals, included activities, additional guest/bed charges, taxes and cancellation terms. Package cards describe enquiries rather than claiming confirmed fixed-price bundles.

Google score 5.0/5 (55 reviews) was observed on the matching live Google Travel profile on 26 October 2026. Airbnb score 5.0/5 (6 listing reviews) was re-fetched on that date. Booking.com profile identity is verified but a current score/count could not be confirmed; the page links to the live platform without copying a cached number. Refresh rating snapshots before production release. No unverified guest photographs, heater close-ups or pickup-point photographs were added.
