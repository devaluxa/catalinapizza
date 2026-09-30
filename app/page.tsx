import Image from "next/image";
import Script from "next/script";
import ContactForm from "../components/ContactForm";
import OrderButton from "../components/OrderButton";
import {
  burgers,
  business,
  galleryImages,
  orderConfig,
  pickupSpecials,
  pizzaRows,
  reviews,
  sides,
} from "../lib/site";

function MenuTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="menu-title">{children}</h3>;
}

function ExternalLink({ href, children, className = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a className={className} href={href} rel="noreferrer" target="_blank" {...props}>{children}</a>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    url: business.siteUrl,
    image: `${business.siteUrl}/images/social/catalina-social.png`,
    email: business.email,
    telephone: business.phone,
    priceRange: "$",
    servesCuisine: ["Pizza", "Fried chicken", "Donair", "Pasta"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 7, 5147 20 Ave SE",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2B 0B1",
      addressCountry: "CA",
    },
    openingHours: business.hours.map((entry) => entry.schema),
    sameAs: [business.facebookUrl],
  };

  return (
    <>
      <Script async src={orderConfig.scriptUrl} strategy="afterInteractive" />
      <Script id="catalina-analytics" strategy="afterInteractive">
        {`if (window.location.hostname === "catalinapizzaandchicken.com" || window.location.hostname === "www.catalinapizzaandchicken.com") {
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag("js", new Date());
          gtag("config", "G-NVZQJ5EV17");
          var analyticsScript = document.createElement("script");
          analyticsScript.async = true;
          analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-NVZQJ5EV17";
          document.head.appendChild(analyticsScript);
        }`}
      </Script>
      <Script async src="https://cdn.superreviewwidget.com/embed.js" strategy="lazyOnload" />
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" />

      <div className="announcement">ENJOY PICKUP AND DELIVERY WITH OUR NEW ONLINE ORDERING WEBSITE</div>
      <header className="site-header">
        <div className="header-inner">
          <a aria-label="Catalina Pizza & Chicken home" href="#home">
            <Image className="brand-logo" alt="Catalina Pizza & Chicken" height={201} priority src="/images/branding/catalina-logo.png" width={252} />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#menu">Menu</a>
            <a href="#specials">Specials</a>
            <a href="#location">Location</a>
          </nav>
          <OrderButton>See menu &amp; order</OrderButton>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Catalina Pizza and Chicken</h1>
            <h2>PIZZA. PASTA. DONAIR. WINGS.</h2>
            <p>Catalina Pizza &amp; Chicken has delicious pizza, pasta, donairs and more that are just a phone call away! Order online or call us today!</p>
            <OrderButton><span>Order Online<strong>Best Prices</strong></span></OrderButton>
          </div>
        </section>

        <section className="delivery-section">
          <div className="narrow-section">
            <h2 className="red-ribbon">Catalina Pizza Delivery</h2>
            <p className="delivery-copy">Visit us in store for pickup specials or enjoy free delivery within 5km!</p>
            <Image className="feature-pizza" alt="Fresh Catalina pizza topped with prosciutto, figs, and arugula" height={933} loading="eager" sizes="(max-width: 760px) 100vw, 760px" src="/images/food/feature-pizza.webp" width={1400} />
            <div className="order-callout">
              <h2>Your order will be confirmed in real-time</h2>
              <span className="down-arrow" aria-hidden="true" />
              <OrderButton>Order now</OrderButton>
              <p>Support local and order online<br />through our website for takeout or delivery</p>
              <ExternalLink className="direct-menu-link" href={orderConfig.directUrl}>Open the ordering menu in a new tab</ExternalLink>
            </div>
          </div>
        </section>

        <section className="menu-band" id="menu">
          <h2>Pizza Pizza Menu</h2>
          <p><strong>Dine in</strong><strong>Take out</strong><strong>Delivery</strong></p>
        </section>

        <section className="menu-section" aria-label="Restaurant menu">
          <div className="page-width menu-columns">
            <div>
              <MenuTitle>Speciality Pizza</MenuTitle>
              <div aria-label="Speciality pizza prices. Scroll horizontally if needed." className="table-scroll" tabIndex={0}>
                <table className="price-table pizza-table">
                  <thead><tr><th><span className="sr-only">Number</span></th><th>Pizza</th><th>10&quot;</th><th>12&quot;</th><th>14&quot;</th><th>16&quot;</th></tr></thead>
                  <tbody>{pizzaRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>

              <MenuTitle>Three Pizza Specials</MenuTitle>
              <ExternalLink className="menu-link" href={orderConfig.directUrl}>See Menu Online For Current Specials &amp; Pricing</ExternalLink>

              <MenuTitle>Burgers</MenuTitle>
              <div className="menu-list">
                {burgers.map(([name, price]) => (
                  <div className="menu-list-row" key={name}>
                    <div><strong>{name}</strong><p>Served with Lettuce, Onions, Tomato &amp; Fries. Ketchup, Mustard and Relish comes on the side.</p></div>
                    <span>{price}</span>
                  </div>
                ))}
              </div>

              <MenuTitle>Fried Chicken</MenuTitle>
              <div aria-label="Fried chicken prices. Scroll horizontally if needed." className="table-scroll" tabIndex={0}>
                <table className="price-table chicken-table">
                  <thead><tr><th>Special</th><th>5 pcs</th><th>10 pcs</th><th>15 pcs</th><th>20 pcs</th></tr></thead>
                  <tbody><tr><td><strong>Fried Chicken Specials</strong><small>Served with Fries and Gravy</small></td><td>$24.99</td><td>$34.99</td><td>$39.99</td><td>$46.99</td></tr></tbody>
                </table>
              </div>
            </div>

            <div>
              <MenuTitle>One Pizza Specials</MenuTitle>
              <p>See Menu Online For Special Pricing</p>
              <MenuTitle>Two Pizza Specials</MenuTitle>
              <p>See Menu Online For Special Pricing</p>

              <MenuTitle>Beef Donair</MenuTitle>
              <div aria-label="Beef donair prices. Scroll horizontally if needed." className="table-scroll" tabIndex={0}>
                <table className="price-table donair-table">
                  <thead><tr><th>Item</th><th>S</th><th>L</th><th>XL</th></tr></thead>
                  <tbody><tr><td><strong>Beef Donair</strong><small>Served with Lettuce, Tomatoes, Onions &amp; Sweet Sauce</small></td><td>$10.99</td><td>$12.99</td><td>$14.99</td></tr></tbody>
                </table>
              </div>

              <MenuTitle>Side Orders</MenuTitle>
              <div aria-label="Side order prices. Scroll horizontally if needed." className="table-scroll" tabIndex={0}>
                <table className="price-table sides-table">
                  <thead><tr><th>Item</th><th>Small</th><th>Medium</th><th>Large</th></tr></thead>
                  <tbody>{sides.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <p className="price-note">*prices online subject to change.</p>
            </div>
          </div>
        </section>

        <section className="specials-section" id="specials">
          <div className="page-width specials-grid">
            <Image alt="Catalina Pizza & Chicken takeout meal with pizza, wings, fries, salad, and gravy" className="specials-image" height={1467} sizes="(max-width: 800px) 100vw, 50vw" src="/images/food/takeout-feast.webp" width={2200} />
            <div className="specials-copy">
              <h2>Pickup Specials</h2>
              <dl>{pickupSpecials.map(([name, price]) => <div key={name}><dt>{name}</dt><dd>{price}</dd></div>)}</dl>
              <p><strong>At Catalina Pizza &amp; Chicken</strong> our customers know they will get more pizza and value for less. We offer exceptional quality ingredients with handmade, in-house dough and fine organic ingredients.</p>
              <p>Stay tuned each week on our website for current specials or promotions. Follow us on social media to stay informed and up to date.</p>
            </div>
          </div>
        </section>

        <section className="takeout-section">
          <div className="section-heading">
            <p>Pick-up / Takeout</p>
            <h2>Save time on your next pickup.</h2>
            <p>Order online and save. Lowest prices guaranteed.</p>
            <div className="takeout-actions">
              <OrderButton>See menu &amp; order</OrderButton>
              <ExternalLink className="facebook-link" href={business.facebookUrl} aria-label="Catalina Pizza & Chicken on Facebook">Facebook</ExternalLink>
            </div>
          </div>
          <div className="gallery-grid page-width">
            {galleryImages.map((image) => (
              <div className="gallery-image" key={image.src}>
                <Image alt={image.alt} fill sizes="(max-width: 640px) 50vw, 25vw" src={image.src} />
              </div>
            ))}
          </div>
        </section>

        <section className="location-section" id="location">
          <div className="page-width">
            <h2>Our Location</h2>
            <div className="location-grid">
              <div className="location-card">
                <p className="location-kicker">Open late</p>
                <h3>{business.address}</h3>
                <a className="phone-link" href={business.phoneHref}>{business.phone}</a>
                <h4>Hours</h4>
                <dl className="hours-list">{business.hours.map((entry) => <div key={entry.days}><dt>{entry.days}</dt><dd>{entry.display}</dd></div>)}</dl>
                <ExternalLink className="light-button" href={business.directionsUrl}>Get directions</ExternalLink>
              </div>
              <iframe aria-label={`Map showing ${business.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Unit%207%2C%205147%2020%20Ave%20SE%2C%20Calgary%2C%20AB%20T2B%200B1&t=m&z=15&output=embed&iwloc=near" title={`Map of ${business.address}`} />
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="page-width">
            <div className="section-heading dark-heading"><p>Our Reviews</p><h2>A few kind words from our customers.</h2></div>
            <div className="reviews-grid">
              {reviews.map((review) => <figure className="review-card" key={review.name}><span aria-hidden="true">“</span><blockquote>{review.quote}</blockquote><figcaption>{review.name}<small>Google review excerpt</small></figcaption></figure>)}
            </div>
            <div className="google-reviews-widget" data-widget-id="e811e871-b3a2-4aed-bc95-bdf225fd82bb" />
          </div>
        </section>

        <section className="contact-section">
          <div className="page-width contact-grid">
            <div className="contact-art">
              <Image alt="Catalina Pizza & Chicken logo" height={201} src="/images/branding/catalina-logo.png" width={252} />
              <h2>Pizza made for Calgary since 1990.</h2>
              <p>For orders, use the online menu or call us directly.</p>
              <a href={business.phoneHref}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
            <div>
              <h2>Subscribe To Catalina Pizza</h2>
              <p>Sign up today for the latest offers and best deals delivered right to your inbox.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><p>© {new Date().getFullYear()} Catalina Pizza &amp; Chicken</p><p>Powered By <ExternalLink href="https://theorderguys.com/">The Order Guys</ExternalLink></p></footer>
    </>
  );
}
