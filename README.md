# 1Fi Marketplace — SDE Intern Assignment

A responsive web implementation of the **1Fi Marketplace** section within the existing 1Fi Shop page, built as part of the SDE Intern assignment. This project focuses on adding the Marketplace tab — product browsing, product details, and EMI plan selection — while keeping the Top Brands and Nearby Stores tabs as placeholders per the assignment scope.

> **📱 Best viewed at mobile screen size.** This is a mobile-first design that faithfully replicates the existing 1Fi app's UI. Please view it in your browser's mobile device emulation mode (~390–420px width) or on an actual phone for the intended experience. It remains responsive on tablet and desktop, but the core experience is designed for mobile.

---

## Live Links

- **Live App**: https://1fi-assignment-git-main-hilals-projects-a68d263e.vercel.app/shop
- **GitHub Repository**: https://github.com/mdhilal9153/1Fi_Assignment
- **Mock API**: https://my-json-server.typicode.com/mdhilal9153/1Fi_Assignment/products

---

## Assignment Scope

Per the assignment brief, the Shop page has three sections:

| Section | Status |
|---|---|
| Top Brands | Left blank — not required per assignment scope |
| Nearby Stores | Left blank — not required per assignment scope |
| **1Fi Marketplace** | **Fully implemented** — this is the core deliverable |

---

## Features

- **Product Listing** — 2-column responsive grid of products with image, name, price (with MRP strikethrough), star rating, and a "No-cost EMI" badge
- **Product Detail Page** — full product view with:
  - Image, name, and price
  - Variant selection (e.g. storage, color) with live price recalculation based on selected variant
  - Key specifications table
  - EMI plan selection (multiple tenures) with dynamically calculated monthly amounts
  - Sticky "Proceed with this plan" call-to-action
- **Dynamic, non-hardcoded data** — all product, variant, and EMI data is fetched from a live mock API at runtime; nothing is hardcoded into the UI components
- **Loading states** — skeleton/shimmer placeholder cards shown while data is being fetched
- **Error states** — a clear error message with a "Retry" button if the API call fails
- **Mobile-first, responsive design** — built primarily for mobile screen sizes, with graceful scaling on tablet and desktop (see note below)
- **Smooth animations** — CSS-based transitions for tab switching, content fade-ins, and button interactions, since the visual design itself follows the existing 1Fi app's fixed color/typography system

---

## Tech Stack

- **React** (functional components, hooks only — no class components)
- **Vite** as the build tool
- **Tailwind CSS v3** for styling
- **React Router** for navigation between the bottom nav tabs and the product detail route
- **Plain CSS transitions** for animation (no animation libraries) to keep the implementation simple and readable
- **my-json-server** (a free service built on `json-server`) as the mock backend, serving product data directly from `db.json` in this repository

No state management library (Redux/Context/Zustand) is used — component-level `useState`/`useEffect` was sufficient for this scope and keeps the codebase simple and easy to follow.

---

## Data & API

Product data is served from `db.json` in this repository via **my-json-server**, which turns a GitHub-hosted JSON file into a live REST API:

```
GET https://my-json-server.typicode.com/mdhilal9153/1Fi_Assignment/products
GET https://my-json-server.typicode.com/mdhilal9153/1Fi_Assignment/products/:id
```

This satisfies the assignment's requirement to avoid hardcoding product/EMI data — all values are fetched dynamically and computed at render time.

### Data shape

Each product includes:
- Base price and MRP
- Variants (e.g. storage, color) with a `priceDelta` per option, so the final price is calculated as `basePrice + sum of selected priceDeltas`
- A `specs` object for key product details
- `emiPlans`, each with a tenure (months) and interest rate — the actual monthly EMI amount is **not stored**, it's calculated on the frontend (see below)

---

## EMI Calculation Logic

The EMI amount is computed using a standalone, reusable utility function (`utils/emiCalculator.js`) rather than being hardcoded or precomputed in the data:

```javascript
function calculateEMI(principal, months, annualInterestRate = 0) {
  if (annualInterestRate === 0) {
    return Math.round(principal / months);
  }
  const r = annualInterestRate / 12 / 100;
  return Math.round(
    (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  );
}
```

- For **no-cost EMI** (0% interest, which all current products use — matching 1Fi's actual "no-cost EMI" model), the monthly amount is simply the total price divided by the number of months.
- For interest-bearing EMI (supported but not currently used in the sample data), the standard reducing-balance EMI formula is applied.

This function is called fresh every time a variant or EMI plan is selected, so the displayed monthly amount always reflects the current selected price and tenure — nothing is precomputed or hardcoded.

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/mdhilal9153/1Fi_Assignment.git
cd 1Fi_Assignment

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will fetch product data directly from the live mock API (`my-json-server`), so no local backend setup is required — just run the frontend and it works out of the box.

---

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components (ProductCard, BottomNav, TabSwitcher, etc.)
│   ├── pages/           # Page-level components (Shop, ProductDetail, etc.)
│   ├── hooks/            # Custom hooks (useProducts, useProduct)
│   ├── utils/            # Utility functions (emiCalculator.js)
│   └── assets/
├── db.json              # Mock product data (served live via my-json-server)
├── tailwind.config.js
└── vite.config.js
```

---

## Design & Scope Notes

- **Why a web app instead of a native mobile app**: Given the assignment timeline, this was built as a responsive web application styled to match the 1Fi mobile app's viewport and design system, rather than a native React Native build. The component structure, state logic, and EMI calculation would map directly to a React Native implementation if needed — the core engineering decisions are the same regardless of rendering target.
- **Why cards instead of rows for Marketplace**: Top Brands and Nearby Stores use a row-based layout because they're navigational lists (picking a brand/store by name). Marketplace is a product-discovery surface, so a 2-column card grid was used instead — consistent with standard e-commerce UX patterns, while still using the same color palette, typography, and component styling as the rest of the app.
- **Responsiveness approach**: The app is mobile-first. On tablets, the layout scales up to use more of the available width. On desktop, since 1Fi has no existing desktop product to stay consistent with, the mobile layout is centered in the viewport rather than a newly invented desktop layout — this avoids introducing an information architecture that has no precedent in the actual app.
- **AI tools**: Some AI-assisted tooling was used during development (for scaffolding and design exploration), consistent with how most developers work today. All resulting code and design decisions were reviewed and understood before inclusion.

---

## Evaluation Checklist (from assignment brief)

- [x] Product listing with image, name, pricing, variants
- [x] EMI options/plans with selection
- [x] Relevant product details
- [x] CTA to proceed with selected plan
- [x] Data retrieved dynamically, not hardcoded
- [x] Loading and error states
- [x] Responsive implementation
- [x] UI consistent with existing 1Fi app (layout, typography, spacing, components)
- [x] Top Brands and Nearby Stores left unimplemented per scope
