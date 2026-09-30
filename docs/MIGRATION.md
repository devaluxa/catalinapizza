# WordPress migration notes

Source audited: `https://catalinapizzaandchicken.com/` on 2026-09-29.

## Section and integration inventory

| WordPress source | Static replacement |
| --- | --- |
| Announcement bar and logo header | Static accessible header with local logo and menu anchors |
| Hero on `IMG_6653-scaled.jpg` | Local hero image, matching dark overlay, original copy, GloriaFood CTA |
| Delivery introduction and pizza image | Local `feature-pizza.jpg`, original heading and delivery copy |
| Real-time order callout | GloriaFood CTA plus verified direct-menu fallback |
| Pizza/burger/chicken/donair/sides tables | Semantic static HTML generated from `lib/site.ts` |
| Pickup specials and restaurant copy | Static content and local takeout photograph |
| Social gallery | Four original WordPress media files stored locally |
| Location and hours | Verified Calgary phone, address, hours, directions link, and map embed |
| Review excerpts | Three source excerpts plus existing SuperReviewWidget public widget ID |
| Elementor contact/subscription form | Same fields and layout; local-review no-op until a Catalina-specific endpoint is approved |
| Rank Math metadata | Equivalent title, description, canonical, social metadata, verification tag, and Restaurant JSON-LD |
| Google Analytics | Existing GA4 ID retained, but loaded only on the production hostname so localhost QA is not counted |
| Footer attribution | Preserved The Order Guys link |

## Ordering configuration

- Script: `https://www.fbgcdn.com/embedder/js/ewm2.js` (loaded once).
- Company ID: `3a150fbf-eeda-4938-977f-76923d2702fb`.
- Restaurant ID: `dbe26fc3-bef9-4883-83a6-a3a77ef4bd04`.
- Direct fallback: `https://www.ordermenu.ca/ordering/restaurant/menu?restaurant_uid=dbe26fc3-bef9-4883-83a6-a3a77ef4bd04&client_is_mobile=true`.

No order or payment was submitted during migration testing.

## Original asset mapping

| Original WordPress media | Local file |
| --- | --- |
| `Catalina-Logo-2023-1-2.png` | `public/images/branding/catalina-logo.png` |
| `Catalina-Logo-2023-8.png` | `public/images/social/catalina-social.png` |
| `IMG_6653-scaled.jpg` | `public/images/food/hero-feast.jpg` |
| `DSC0963-2-1.jpg` | `public/images/food/feature-pizza.jpg` |
| `Catalina-Posts-1.png` | `public/images/food/pickup-special.png` |
| `IMG_6414.jpg` | `public/images/food/pizza-closeup.jpg` |
| `Polished-Collective-Stories-4.png` | `public/images/food/story-pizza.png` |
| `IMG_6512-scaled-e1699303392893.jpg` | `public/images/food/pizza-box.jpg` |
| `IMG_6601.jpg` | `public/images/food/ingredients.jpg` |
| `IMG_6443.jpg` | `public/images/food/takeout-feast.jpg` |
| `Catalina-Posts-6/7/4.png`, `Catalina-Posts-65.png` | `public/images/gallery/` |

No live WordPress images are hotlinked by the static export.
The rendered site uses optimized WebP derivatives for the hero, feature,
takeout, and gallery images; the source downloads remain in the repository for
future content work.

## Source inconsistencies resolved or held

- The source location phone button used Edmonton number `780-456-8128`, while
  the page schema and current business listings use Calgary number
  `(403) 452-3300`. The replacement uses the Calgary number.
- The source map/schema used postal code `T2A 0V8`, while the visible source
  copy, property records, and Alberta business/inspection records use
  `T2B 0B1`. The replacement uses `T2B 0B1` and records Unit 7.
- The source Instagram icon incorrectly linked to Facebook, while its “Follow
  On Instagram” button linked to The Order Guys account. No Catalina-owned
  Instagram URL could be verified, so the replacement exposes only the
  verified Catalina Facebook URL.
- The visible heading “PIZZA PIZZA MENU” is preserved from the source rather
  than silently rewritten.
- The old form submits through Elementor Pro and WordPress `admin-ajax.php`.
  That dependency cannot remain after WordPress retirement. The local version
  validates fields, prevents transmission, and states the blocker. A verified
  Catalina-owned OnBooking submission endpoint or another approved static-form
  destination is required before launch.

## Verification record

- `npm run typecheck`: passed.
- `npm run build`: passed; the home route and not-found route were statically exported.
- `npm run verify:export`: passed; required export files exist and no WordPress media is hotlinked.
- `npm audit --omit=dev`: passed with zero known production dependency vulnerabilities after updating to Next.js 15.5.26.
- Responsive browser QA: passed at 320, 390, 768, 1024, 1366, and 1440 CSS pixels with no document-level horizontal overflow.
- Image QA: no broken local images were detected at the tested viewports.
- Ordering QA: the production GloriaFood/OrderMenu menu opened and rendered Catalina's menu on desktop and mobile; no order or payment was submitted.
- Link/data QA: the phone, Facebook, directions, direct-order fallback, restaurant/company IDs, metadata, and JSON-LD are present in the production export.
- Form QA: the local-only form remains a deliberate no-op and transmits no visitor data.
- Console QA: no application errors. The third-party review widget emitted only a Google Maps asynchronous-loading performance warning.
