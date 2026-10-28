# Saraaya Glamps pre-launch review — 28 October 2026

## Implemented in the preview
- Shared arrival, Wi-Fi and power wording in the pop-up, winter FAQ/disclaimer and arrival guide. No unconfirmed inclusion or backup promise.
- Preview builds emit noindex/nofollow metadata; Vercel hostnames additionally receive X-Robots-Tag. Production custom-domain builds remain indexable.
- Permanent redirect: /saraaya-winter-landing-page/ → /winter-landing-page/. Canonical and sitemap use the latter.
- Homepage targets glamping near Dharamshala; winter page targets winter stays, with the requested H1. Both have one H1, title <60 characters and description <155.
- Winter introduction is distinct from homepage Why Choose Saraaya. Duplicate winter offers merged; separate group-stay option retained.
- Homepage and winter page use the same ratings component and contact configuration. Rating dates say Checked on; original checking date is retained.
- Visible Dharamshala spelling corrected. Existing external booking-engine slug remains unchanged so bookings still work.
- New /nauhali-kareri-lake/ guide linked from home and winter pages and included in sitemap. It distinguishes staying in Nauhali from a separate Kareri Lake trek.
- Existing LodgingBusiness schema retained on both pages; contact details use shared data.
- Descriptive image alt text replaces Actual/A real wording.
- NDTV attribution narrowed to an NDTV-branded feature reposted by Saraaya's Instagram account. No assertion of publication on NDTV's own Instagram feed. Media page linked from winter page.
- Eight photographic source images/posters converted to WebP, total 31,589,014 → 1,285,294 bytes. Responsive Next.js optimisation remains enabled. Videos still load only after user interaction.

## Owner confirmation required (user chose to leave unconfirmed)
- Approved starting rate in INR, per-night/occupancy basis, dates, meals and taxes. No invented from-price published.
- 4x4 transfer and porter availability, inclusions and charges.
- Whether backup power is installed, load supported (especially heaters/geysers), duration and operational status. Website edits cannot install equipment.
- Authoritative star classification, parking location/cost, breakfast rate-plan rules and route-specific distances for OTA updates.

## Third-party listings — not changed
- Expedia's indexed listing reports property class 3, breakfast surcharge and self-parking surcharge. Address postcode differs from the website.
- Booking.com indexed variants disagree on free versus paid off-site parking; meal inclusion is rate-plan specific. Do not copy an arbitrary variant into a master record.
- Travelocity's exact property record was not verified in available search results. Do not claim a correction there.
- Correct these through the authorised property/extranet accounts after the owner confirms the master facts. No suitable listing-management connector was found. No external handle or booking slug was renamed.

## Sources
- Brand brief (September 2026): https://docs.google.com/document/d/1boeMFms9mHxY21pw1WBARJof78wfM4bHSl3zQ0S0j-Y/edit — no approved current tariff or backup confirmation found.
- Kareri Lake: https://hpkangra.nic.in/tourist-place/kareri-lake/ — altitude, Kareri-village approach and seasonal freezing. No unverified distance from Saraaya asserted.
- Booking.com: https://www.booking.com/hotel/in/saraaya.html and https://www.booking.com/hotel/in/saraaya.en-gb.html — indexed information, not owner-confirmed truth.
- Expedia: https://www.expedia.com/Dharamshala-Hotels-Saraaya-Glamps.h130328812.Hotel-Information
- Media supplied by user: https://www.instagram.com/reel/DenNQj1Tb_5/ — embed shows @saraaya.dharamshala and NDTV branding.

## Before production promotion
- Obtain approval of the preview and the outstanding commercial/operational facts.
- Remove public/winter-mobile-preview.html (test-only harness) from production.
- Verify custom-domain index/follow behaviour and the redirect after deployment.
- Historic immutable preview deployments require separate platform controls if still accessible; new code does not rewrite their HTML.
- Preview PageSpeed SEO will reflect the intentional noindex. Never claim a 100 score across all pages from a homepage-only run.
