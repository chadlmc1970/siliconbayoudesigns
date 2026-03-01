# Silicon Bayou Designs — SEO Strategy

**Version**: 1.0
**Date**: March 2026
**Domain**: siliconbayoudesigns.com

---

## 0. Current State Audit

### What Exists
| Page | URL | Title Tag | Meta Description |
|------|-----|-----------|------------------|
| Home | `/index.html` | Silicon Bayou Designs \| iOS Apps, Web Design & SEO \| Baton Rouge, LA | Silicon Bayou Designs builds iOS apps, designs stunning websites... |
| iOS Dev | `/ios-development.html` | iOS App Development \| Silicon Bayou Designs \| Baton Rouge, LA | Native iOS app development from Silicon Bayou Designs... |
| Web Design | `/web-design.html` | Web Design & Development \| Silicon Bayou Designs \| Baton Rouge, LA | Custom web design and development from Silicon Bayou Designs... |
| SEO | `/seo-growth.html` | SEO & Digital Growth \| Silicon Bayou Designs \| Baton Rouge, LA | Data-driven SEO services from Silicon Bayou Designs... |

### Critical Issues Found
1. **Images are massive PNGs**: logo.png = 2.1 MB, web screenshots 2-4 MB each. Total assets: ~12.7 MB
2. **No XML sitemap** — Google has to crawl-discover every page
3. **No robots.txt** — No crawl directives
4. **No schema markup** — No LocalBusiness, Service, or FAQ structured data
5. **No canonical tags** — Risk of duplicate content issues
6. **No favicon or web manifest** — Signals a thin/unfinished site to browsers
7. **CSS is inlined and duplicated** — ~300 lines repeated in every HTML file, no shared stylesheet
8. **No `<link rel="alternate">` or hreflang** — Minor, but incomplete technical signals
9. **Meta keywords tag present** — Obsolete (harmless but signals outdated SEO knowledge)
10. **Nav doesn't link to service pages** — iOS, Web Design, SEO pages are orphaned from primary nav
11. **`.html` extensions in URLs** — `/web-design.html` instead of clean `/web-design/`
12. **No blog or content hub** — Zero supporting content for keyword clusters
13. **Only one portfolio piece** — AmonHen AI (your own product), no client work shown
14. **No dedicated about or contact page** — Contact is a section on index, about doesn't exist
15. **No Open Graph images** — `og:image` missing from all pages
16. **No alt text standards** — Some images have vague alt text

---

## 1. Positioning Decision

### Primary Lane: **Local-first, Small Business + Startup**

**Target market**: Small businesses and early-stage startups in the Baton Rouge / Greater Louisiana metro area who need custom digital products — not commodity template sites.

**Secondary reach**: National clients who specifically want native iOS development or custom-coded (non-WordPress) websites and find the site through long-tail commercial queries.

**Why this lane**:
- Baton Rouge has low SEO competition for "iOS app development" and "custom web design" — you can own page 1 locally within 3-6 months
- Local intent queries have high conversion rates (the person searching "web designer Baton Rouge" is ready to hire)
- National long-tail queries like "custom website vs template" or "iOS app development cost" have moderate competition but high commercial value
- Your pricing ($2,500-$10,000) fits the small business / funded startup segment perfectly

**Positioning statement for all SEO content**:
> Silicon Bayou Designs is a Baton Rouge-based digital studio that builds custom websites, native iOS apps, and SEO strategies for small businesses and startups. No templates. No page builders. Hand-coded, performance-first.

---

## 2. Intent Mapping & Keyword Architecture

### Tier 1: Commercial Intent (Map to Service Pages)

These are the money queries. Each cluster maps to exactly one URL.

| Keyword Cluster | Target URL | Monthly Search Volume (est.) | Difficulty |
|----------------|-----------|------------------------------|------------|
| web design Baton Rouge, web designer Baton Rouge, website design Baton Rouge LA | `/web-design` | 200-400 | Low |
| iOS app developer Baton Rouge, mobile app development Louisiana, app developer near me | `/ios-development` | 50-150 | Low |
| SEO services Baton Rouge, SEO company Baton Rouge, SEO agency Louisiana | `/seo-growth` | 150-300 | Medium |
| custom website development, hand-coded website, custom web development company | `/web-design` | 300-600 | Medium |
| hire iOS developer, iOS app development company, Swift developer for hire | `/ios-development` | 200-400 | Medium |
| website maintenance services, website care plan | `/website-maintenance` (NEW) | 150-300 | Low |
| app maintenance, iOS app support, app update service | `/app-maintenance` (NEW) | 50-100 | Low |

### Tier 2: Comparison Intent (Map to Supporting Articles)

| Keyword Cluster | Target URL | Intent |
|----------------|-----------|-------|
| custom website vs template, custom vs WordPress, hand-coded vs Squarespace | `/blog/custom-website-vs-template` | Comparison → Service |
| native app vs cross-platform, Swift vs React Native, native vs Flutter | `/blog/native-ios-vs-cross-platform` | Comparison → Service |
| SEO vs paid ads, organic vs PPC, SEO worth it for small business | `/blog/seo-vs-paid-ads` | Comparison → Service |
| hire developer vs agency, freelancer vs agency web design | `/blog/freelancer-vs-agency` | Comparison → Service |

### Tier 3: Educational Intent (Map to Pillar Content)

| Keyword Cluster | Target URL | Purpose |
|----------------|-----------|---------|
| how much does iOS app development cost, app development pricing, cost to build an app | `/blog/ios-app-development-cost` | Backlink magnet → iOS service |
| how much does a custom website cost, web design pricing, website cost breakdown | `/blog/custom-website-cost` | Backlink magnet → Web service |
| what is technical SEO, SEO for small business, how long does SEO take | `/blog/seo-for-small-business-guide` | Authority → SEO service |

### Zero Overlap Rule

Every keyword cluster maps to exactly one URL. No two pages compete for the same query. Internal links flow from supporting articles → service pages.

---

## 3. Site Architecture

### Current Structure (Flat)
```
/
├── index.html          (Home)
├── ios-development.html
├── web-design.html
├── seo-growth.html
└── assets/
```

### Target Structure (Siloed)
```
/
├── index.html                              (Home — brand + services overview)
├── ios-development/index.html              (Service pillar)
├── web-design/index.html                   (Service pillar)
├── seo-growth/index.html                   (Service pillar)
├── website-maintenance/index.html          (Service — NEW)
├── app-maintenance/index.html              (Service — NEW)
├── portfolio/index.html                    (Portfolio hub — NEW)
│   ├── amonhen-ai/index.html              (Case study)
│   └── [future-client]/index.html
├── about/index.html                        (About — NEW)
├── contact/index.html                      (Contact — NEW)
├── blog/index.html                         (Blog hub — NEW)
│   ├── ios-app-development-cost/index.html
│   ├── custom-website-vs-template/index.html
│   ├── seo-for-small-business-guide/index.html
│   ├── native-ios-vs-cross-platform/index.html
│   ├── custom-website-cost/index.html
│   └── seo-vs-paid-ads/index.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/
    │   └── main.css                        (Shared stylesheet)
    ├── img/                                (WebP/AVIF images)
    └── fonts/                              (Self-hosted if needed)
```

### Internal Link Flow
```
Blog Articles ──────► Service Pages ──────► Contact / Pricing
     │                      │                      ▲
     └──────────────────────┴──────────────────────┘
                            │
                     Portfolio/Case Studies
```

**Rules**:
- Every blog article links to its parent service page within the first 200 words
- Every service page links to its supporting articles in a "Learn More" section
- Every page links to Contact/Pricing via CTA
- Portfolio case studies link to the service they represent
- Footer includes all service pages + blog

### Clean URL Implementation

If hosting on Netlify, Vercel, or similar — configure `trailingSlash` and `cleanUrls` to serve `/web-design/` instead of `/web-design.html`. If static hosting, use directory-based structure with `index.html` files.

---

## 4. Technical SEO Baseline

### Priority 1: Immediate Fixes (Week 1)

#### 4.1 Image Optimization
Current total image payload: **~12.7 MB**. Target: **< 500 KB**.

| Image | Current | Target Format | Target Size |
|-------|---------|---------------|-------------|
| logo.png (2.1 MB) | PNG | SVG (preferred) or WebP | < 10 KB |
| ah-web-advisor.png (2.6 MB) | PNG | WebP | < 150 KB |
| ah-web-dashboard.png (4.2 MB) | PNG | WebP | < 200 KB |
| ah-web-docs.png (2.6 MB) | PNG | WebP | < 150 KB |
| ah-chat.png (219 KB) | PNG | WebP | < 50 KB |
| ah-login.png (126 KB) | PNG | WebP | < 30 KB |
| ah-projects.png (220 KB) | PNG | WebP | < 50 KB |

Use `<picture>` element with AVIF fallback to WebP fallback to PNG:
```html
<picture>
  <source srcset="assets/img/ah-web-advisor.avif" type="image/avif">
  <source srcset="assets/img/ah-web-advisor.webp" type="image/webp">
  <img src="assets/img/ah-web-advisor.png" alt="..." loading="lazy" width="1200" height="800">
</picture>
```

Add `width` and `height` attributes to all `<img>` tags to prevent CLS.

#### 4.2 Create robots.txt
```
User-agent: *
Allow: /

Sitemap: https://siliconbayoudesigns.com/sitemap.xml
```

#### 4.3 Create sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://siliconbayoudesigns.com/</loc>
    <lastmod>2026-03-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://siliconbayoudesigns.com/web-design</loc>
    <lastmod>2026-03-01</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://siliconbayoudesigns.com/ios-development</loc>
    <lastmod>2026-03-01</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://siliconbayoudesigns.com/seo-growth</loc>
    <lastmod>2026-03-01</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

#### 4.4 Add Canonical Tags
Every page needs:
```html
<link rel="canonical" href="https://siliconbayoudesigns.com/web-design">
```

#### 4.5 Extract Shared CSS
Move the ~300 lines of duplicated inline CSS to `/assets/css/main.css`. Each page only adds page-specific overrides inline. This:
- Reduces HTML payload by ~8 KB per page
- Enables browser caching of CSS
- Makes maintenance manageable

#### 4.6 Add Favicon + Web Manifest
```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
```

### Priority 2: Structural Fixes (Week 2-3)

#### 4.7 H1/H2 Hierarchy Audit

Current H1s are fine for humans but weak for SEO:
| Page | Current H1 | Recommended H1 |
|------|-----------|----------------|
| Home | "Digital Craftsmanship, Louisiana Made" | "iOS App Development & Custom Web Design — Baton Rouge, LA" |
| iOS | "Apps That Feel Like Magic." | "Native iOS App Development — Swift & SwiftUI" |
| Web | "Websites That Convert." | "Custom Web Design & Development — Baton Rouge" |
| SEO | "Get Found. Get Chosen." | "SEO Services — Search Engine Optimization for Small Business" |

Keep the creative headlines as visual H1 (styled), but make the semantic H1 keyword-rich. Alternatively, make the `hero-label` span the H1 and the big headline a styled `<p>` or decorative element.

#### 4.8 Schema Markup

**LocalBusiness** (on every page, in `<script type="application/ld+json">`):
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Silicon Bayou Designs",
  "description": "Custom web design, native iOS app development, and SEO services for small businesses and startups.",
  "url": "https://siliconbayoudesigns.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Baton Rouge",
    "addressRegion": "LA",
    "postalCode": "XXXXX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.4515,
    "longitude": -91.1871
  },
  "areaServed": [
    { "@type": "City", "name": "Baton Rouge" },
    { "@type": "State", "name": "Louisiana" }
  ],
  "priceRange": "$2,500 - $10,000+",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [],
  "image": "https://siliconbayoudesigns.com/assets/img/logo.webp"
}
```

**Service** schema (one per service page):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design and Development",
  "provider": { "@type": "ProfessionalService", "name": "Silicon Bayou Designs" },
  "areaServed": { "@type": "City", "name": "Baton Rouge" },
  "description": "Custom-designed, hand-coded websites built for speed, SEO, and conversions.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "2500",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "2500",
      "maxPrice": "5000"
    }
  }
}
```

**FAQ** schema (on service pages with FAQ sections — add FAQ sections):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a custom website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our custom websites start at $2,500 for a 5-page responsive site. Professional packages with SEO start at $5,000."
      }
    }
  ]
}
```

#### 4.9 Open Graph Images
Create 1200x630px OG images for each page. Add:
```html
<meta property="og:image" content="https://siliconbayoudesigns.com/assets/img/og-web-design.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

#### 4.10 Performance Targets

| Metric | Target | Current (est.) |
|--------|--------|----------------|
| LCP | < 2.0s | 5-8s (massive images) |
| FID | < 100ms | OK (minimal JS) |
| CLS | < 0.1 | Unknown (no img dimensions) |
| Total Page Weight | < 500 KB | 3-5 MB |
| TTFB | < 200ms | Depends on host |

The single biggest win is image compression. Going from 12.7 MB to ~400 KB of WebP will move LCP from "fail" to "pass" immediately.

---

## 5. Content Strategy

### Pillar Assets (Create in months 1-2)

These are the backlink magnets and authority builders. Each is 2,000-3,000 words, deeply structured, and internally links to its parent service page.

#### Pillar 1: "How Much Does iOS App Development Cost in 2026?"
**Target URL**: `/blog/ios-app-development-cost`
**Target keywords**: ios app development cost, how much to build an app, app development pricing
**Structure**:
1. TL;DR pricing table (immediately useful — earns featured snippet)
2. Factors that affect cost (complexity, features, design, backend)
3. Cost breakdown by app type (utility: $5-15K, marketplace: $25-75K, enterprise: $50-150K+)
4. Our pricing and what's included
5. How to reduce cost without sacrificing quality
6. FAQ section (schema-marked)
**Internal links**: → `/ios-development` (service page), → `/portfolio/amonhen-ai` (case study)

#### Pillar 2: "Custom Website vs Template: What Actually Matters"
**Target URL**: `/blog/custom-website-vs-template`
**Target keywords**: custom website vs template, custom vs WordPress, should I use a template
**Structure**:
1. The honest answer (when templates are fine, when custom is necessary)
2. Performance comparison (load times, Core Web Vitals)
3. SEO implications (bloat, speed, structured data)
4. Total cost of ownership (template + plugins + maintenance vs custom)
5. Real comparison table with data
6. When to choose custom (our recommendation)
7. FAQ section
**Internal links**: → `/web-design` (service page)

#### Pillar 3: "The Complete Guide to SEO for Small Business"
**Target URL**: `/blog/seo-for-small-business-guide`
**Target keywords**: SEO for small business, small business SEO guide, how to do SEO
**Structure**:
1. What SEO actually is (no jargon)
2. The three pillars: technical, content, authority
3. Local SEO essentials (GBP, citations, reviews)
4. What to expect month by month
5. DIY vs hiring an agency
6. How to evaluate SEO results (what to measure)
7. FAQ section
**Internal links**: → `/seo-growth` (service page)

### Supporting Articles (Create in months 2-4)

| Article | Target URL | Parent Service |
|---------|-----------|----------------|
| Native iOS vs Cross-Platform: A Developer's Honest Take | `/blog/native-ios-vs-cross-platform` | iOS |
| How Much Does a Custom Website Cost? (Full Breakdown) | `/blog/custom-website-cost` | Web Design |
| SEO vs Paid Ads: Where Should Small Businesses Invest? | `/blog/seo-vs-paid-ads` | SEO |
| Freelancer vs Agency: Who Should Build Your Website? | `/blog/freelancer-vs-agency` | Web Design |
| What Does Website Maintenance Actually Include? | `/blog/website-maintenance-guide` | Website Maintenance |
| How to Prepare for an iOS App Development Project | `/blog/prepare-for-app-development` | iOS |

### Content Standards
- Every article has exactly one H1 containing the primary keyword
- H2s map to major sections and contain secondary keywords naturally
- Every article links to its parent service page in the introduction
- Every article has a CTA section at the end linking to contact
- Every article has FAQ schema markup
- No fluff paragraphs. Every section earns its place
- Include original data, comparison tables, or frameworks where possible

### Pages to Create (Non-Blog)

| Page | Purpose | Priority |
|------|---------|----------|
| `/about` | Trust, story, credentials, differentiators | High |
| `/contact` | Dedicated contact page with form, phone, address | High |
| `/portfolio` | Portfolio index with case studies | High |
| `/website-maintenance` | Recurring revenue service page | Medium |
| `/app-maintenance` | Recurring revenue service page | Medium |

---

## 6. Backlink Strategy

### Tier 1: Local Citations (Month 1)

Claim and optimize profiles on these platforms. NAP (Name, Address, Phone) must be identical across all.

**Essential** (do these first):
- Google Business Profile (fully optimized with photos, services, posts)
- Yelp
- Apple Maps
- Bing Places
- Facebook Business Page
- LinkedIn Company Page
- BBB (Better Business Bureau)

**Louisiana-specific**:
- Baton Rouge Area Chamber of Commerce
- Louisiana Small Business Development Center
- Louisiana Economic Development directory
- Baton Rouge Business Report / 225 Magazine listings
- NOLA.com business directory
- Greater Baton Rouge Industry Alliance

**Tech / Industry directories**:
- Clutch.co
- DesignRush
- GoodFirms
- UpCity
- Expertise.com (Baton Rouge web designers)

### Tier 2: Developer/Design Community (Months 2-4)

**Guest articles** (pitch, don't spam):
- Dev.to — publish versions of pillar content with canonical back to site
- Hashnode — same approach
- Medium — only for republishing with canonical
- CSS-Tricks / Smashing Magazine — if you can produce genuinely good technical content
- IndieHackers — startup audience, case study format

**Technical contributions**:
- Open source a small tool or template (even a minimal SwiftUI component library)
- Share process insights on Twitter/X and LinkedIn consistently
- Answer questions on Stack Overflow related to Swift/SwiftUI/web performance

### Tier 3: Co-Marketing Backlinks (Ongoing)

For every client project completed:
1. Write a case study on your site featuring the client's business
2. Ask the client to link to the case study from their site ("Built by Silicon Bayou Designs")
3. Both parties share on social media

This creates natural, relevant backlinks from real businesses in your service area.

### Tier 4: Digital PR (Month 4+)

- Submit to HARO (Help A Reporter Out) or Connectively for tech/business queries
- Pitch local Baton Rouge media about interesting projects (LSU tie-in, local business transformation)
- Create a "State of Small Business Websites in Louisiana" report with original data — local media will link to it

### Backlink Quality Rules
- Domain Authority 20+ minimum
- Relevant to tech, design, business, or local Louisiana
- No PBNs, link farms, or paid link schemes
- 1 quality backlink > 50 garbage links
- Track with Ahrefs or Semrush monthly

---

## 7. Conversion Alignment

Every service page must follow this structure. This is not optional — it's the framework that turns traffic into leads.

### Service Page Template

```
1. Hero
   - H1 with primary keyword
   - 1-2 sentence value prop
   - Primary CTA button
   - Secondary "See Process" button

2. What We Build (3 cards)
   - Show scope and variety
   - Each card = a sub-service or use case

3. Why Custom / Why Us (Comparison)
   - Differentiation section
   - Table or visual comparison vs alternatives
   - This is where you win the "should I hire them" decision

4. What's Included (Feature List)
   - Exhaustive list of deliverables
   - Removes "what do I actually get" friction

5. Process (4 Steps)
   - Transparency builds trust
   - Shows professionalism
   - Reduces "what happens after I pay" anxiety

6. Pricing (Anchored)
   - Starting price clearly visible
   - Package comparison if applicable
   - "50% deposit" removes sticker shock
   - CTA with dollar amount ("Get Started — $1,250")

7. Portfolio / Case Study
   - Proof of work
   - Visual screenshots
   - Results if available

8. FAQ Section (NEW — add to all pages)
   - 4-6 common questions
   - Schema-marked for rich snippets
   - Addresses objections ("How long does it take?", "Do I own the code?")

9. Final CTA
   - Restate value prop
   - Strong CTA with urgency
   - Alternative CTA for comparison shoppers
```

### FAQ Sections to Add

**Web Design FAQs**:
- How long does it take to build a custom website?
- Do I own the code and design?
- What's the difference between your sites and WordPress?
- Can I update the site myself after launch?
- What if I need changes after the site is live?

**iOS Development FAQs**:
- How long does iOS app development take?
- How much does an iOS app cost?
- Do I need a developer account?
- Can you update my existing app?
- What about Android?

**SEO FAQs**:
- How long does SEO take to work?
- Do you guarantee rankings?
- What's included in the monthly report?
- Can I do SEO myself?
- What's the difference between SEO and paid ads?

---

## 8. Measurement Framework

### KPIs (Not Vanity Metrics)

| Metric | Tool | Frequency | Target (6-month) |
|--------|------|-----------|-------------------|
| Organic impressions | Google Search Console | Weekly | 5,000/month |
| Organic clicks | Google Search Console | Weekly | 500/month |
| Keyword rankings (core commercial terms) | Ahrefs / Semrush | Bi-weekly | Top 10 for 5+ terms |
| Organic leads (form submissions from organic) | GA4 + form tracking | Weekly | 5-10/month |
| Page-level conversion rate | GA4 | Monthly | 3-5% on service pages |
| Core Web Vitals (LCP, CLS, FID) | PageSpeed Insights / CrUX | Monthly | All green |
| Referring domains | Ahrefs | Monthly | 20+ quality domains |
| Local pack visibility | Local Falcon or BrightLocal | Monthly | Top 3 for core terms |

### What NOT to Track
- Total pageviews (meaningless without intent)
- Bounce rate (unreliable metric)
- Social media followers (not SEO)
- Domain Authority score (proxy metric, not a goal)

### Reporting Cadence
- **Weekly**: Check Search Console for indexing issues, new impressions
- **Bi-weekly**: Keyword ranking movements for core commercial terms
- **Monthly**: Full report — traffic, rankings, leads, CWV, backlink growth
- **Quarterly**: Strategy review — what's working, what to double down on, what to cut

### Tools Required
| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Indexing, impressions, clicks | Free |
| Google Analytics 4 | Traffic, conversions, behavior | Free |
| Ahrefs Lite or Semrush | Keyword tracking, backlinks, competitor analysis | ~$100/month |
| PageSpeed Insights | Core Web Vitals monitoring | Free |
| Google Business Profile | Local SEO management | Free |
| Screaming Frog (free tier) | Technical crawl audits | Free |

---

## 9. Timeline

### Month 0-1: Foundation

- [ ] Compress all images to WebP (90%+ size reduction)
- [ ] Add width/height to all img tags
- [ ] Extract CSS to shared stylesheet
- [ ] Create robots.txt
- [ ] Create sitemap.xml and submit to Search Console
- [ ] Add canonical tags to all pages
- [ ] Add LocalBusiness + Service schema to all pages
- [ ] Add favicon and web manifest
- [ ] Create dedicated `/contact` page
- [ ] Create dedicated `/about` page
- [ ] Add FAQ sections to all 3 service pages
- [ ] Add FAQ schema markup
- [ ] Fix nav to include all service page links
- [ ] Add Open Graph images to all pages
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console and verify domain
- [ ] Claim Google Business Profile
- [ ] Claim top 10 local citations (Yelp, BBB, Apple Maps, etc.)

### Month 1-2: Content Launch

- [ ] Publish Pillar 1: "iOS App Development Cost"
- [ ] Publish Pillar 2: "Custom Website vs Template"
- [ ] Create `/portfolio` page with AmonHen case study
- [ ] Create `/website-maintenance` service page
- [ ] Optimize H1 tags for keyword targeting across all pages
- [ ] Submit updated sitemap
- [ ] Begin Google Business Profile optimization (photos, posts, services)

### Month 2-3: Authority Building

- [ ] Publish Pillar 3: "SEO for Small Business Guide"
- [ ] Publish 2 supporting articles
- [ ] Publish first guest article on Dev.to
- [ ] Create `/app-maintenance` service page
- [ ] Complete local citation building (all Louisiana-specific directories)
- [ ] Submit to Clutch.co and DesignRush
- [ ] Begin LinkedIn content cadence (1-2 posts/week)

### Month 3-6: Scale

- [ ] Publish 1 article per month (supporting content)
- [ ] Build 2-3 quality backlinks per month
- [ ] Optimize based on Search Console data (which queries are close to page 1)
- [ ] A/B test service page CTAs
- [ ] Add client case studies as projects complete
- [ ] Pursue local PR opportunity (1 pitch per month)

### Month 6-12: Compound

- [ ] Refresh pillar content with updated data/pricing
- [ ] Expand to second-tier keywords based on ranking data
- [ ] Evaluate adding video content (YouTube → embed)
- [ ] Consider adding a "Tools" or "Resources" section for link bait
- [ ] Quarterly strategy review and adjustment

---

## 10. Implementation Priority Matrix

If you can only do 5 things this week, do these:

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Compress images to WebP | Massive (fixes LCP, cuts load 80%) | 1 hour |
| 2 | Create robots.txt + sitemap.xml | High (enables proper indexing) | 15 min |
| 3 | Add LocalBusiness schema | High (enables rich local results) | 30 min |
| 4 | Claim Google Business Profile | High (local pack visibility) | 30 min |
| 5 | Add canonical tags + OG images | Medium (prevents issues, enables social sharing) | 30 min |

Total: ~3 hours for the highest-impact technical SEO improvements.

---

## Appendix: Title Tag & Meta Description Templates

### Service Pages
**Format**: `[Service] | Silicon Bayou Designs | Baton Rouge, LA`
**Meta**: Action-oriented, includes differentiator, 150-160 chars

### Blog Posts
**Format**: `[Primary Keyword] — Silicon Bayou Designs`
**Meta**: Includes the answer/value prop in first 160 chars, ends with a reason to click

### Examples
| Page | Title | Meta Description |
|------|-------|------------------|
| Home | `Silicon Bayou Designs — Custom Web Design, iOS Apps & SEO \| Baton Rouge, LA` | `Hand-coded websites, native iOS apps, and data-driven SEO for small businesses. No templates. Built in Baton Rouge, delivered everywhere. Get a free quote.` |
| Web | `Custom Web Design & Development \| Silicon Bayou Designs \| Baton Rouge` | `Hand-coded, responsive websites that load in under 2 seconds. Custom design, on-page SEO, and 30-day support included. Starting at $2,500.` |
| iOS | `iOS App Development — Swift & SwiftUI \| Silicon Bayou Designs \| Baton Rouge` | `Native iOS apps built in Swift and SwiftUI. From concept to App Store — UX design, development, testing, and 90-day support. Starting at $10,000.` |
| SEO | `SEO Services for Small Business \| Silicon Bayou Designs \| Baton Rouge, LA` | `Data-driven SEO that gets your business to page 1. Technical audits, content strategy, local SEO, and monthly reporting. Get a free audit.` |
| Blog: Cost | `How Much Does iOS App Development Cost in 2026? (Full Breakdown)` | `iOS app costs range from $5,000 to $150,000+. We break down exactly what drives the price — features, design, backend, and timeline.` |
