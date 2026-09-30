/* @ds-bundle: {"format":4,"namespace":"GABIDesignSystem_3bffbc","components":[],"sourceHashes":{"assets/background-grid.js":"0ace81a17c9e","ui_kits/gabi-site/components.jsx":"022c494526d1","ui_kits/gabi-site/icons.jsx":"c683c65b3be3","ui_kits/gabi-site/pages.jsx":"2de8ceef80a2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GABIDesignSystem_3bffbc = window.GABIDesignSystem_3bffbc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/background-grid.js
try { (() => {
/**
 * GABI Background Grid — interactive cursor-tracking effect.
 *
 * Two layered grids:
 *   1. A static base grid (faint 14×24 lines).
 *   2. A colored grid (blue/purple/pink/orange tinted lines) that is
 *      masked, so it only appears in a soft halo around the cursor
 *      plus a fading trail of recent positions.
 *
 * Lifted in spirit from alexandernacho/gabi-site components/background-grid.tsx
 * with a leaner implementation (no React, no requestAnimationFrame loop —
 * the cursor halo follows via CSS custom properties; the trail re-renders
 * the mask at ~30fps).
 *
 * Usage:
 *   <div class="gabi-grid" data-gabi-grid></div>
 *   <script src="background-grid.js"></script>
 *
 * Or call gabiGridAttach(el) manually if you create the host dynamically.
 */
(function () {
  const MAX_TRAIL = 14;
  const POINT_DIST = 50;
  const INACTIVE_MS = 7000;
  function attach(host) {
    if (host.__gabiAttached) return;
    host.__gabiAttached = true;

    // Build structure
    host.innerHTML = `
      <div class="gabi-grid__base"></div>
      <div class="gabi-grid__masked" data-mask></div>
      <div class="gabi-grid__radial"></div>
    `;
    const maskLayer = host.querySelector('[data-mask]');
    if (!maskLayer) return;
    const isCoarse = matchMedia('(pointer: coarse)').matches;
    const trail = [];
    let lastActive = 0;
    let rafId = null;
    let visible = false;
    function setMask() {
      const cx = host.__cx ?? -200;
      const cy = host.__cy ?? -200;
      const cursorGrad = `radial-gradient(circle at ${cx}px ${cy}px, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 90px, transparent 150px)`;
      const trailGrads = trail.map((p, i) => {
        const age = (trail.length - 1 - i) / trail.length;
        const alpha = (0.65 * (1 - age * 0.5)).toFixed(2);
        const size = (150 - age * 50).toFixed(0);
        return `radial-gradient(circle at ${p.x}px ${p.y}px, rgba(255,255,255,${alpha}) 0%, transparent ${size}px)`;
      });
      const mask = trailGrads.length ? `${cursorGrad}, ${trailGrads.join(', ')}` : cursorGrad;
      maskLayer.style.maskImage = mask;
      maskLayer.style.webkitMaskImage = mask;
      maskLayer.style.opacity = visible ? '1' : '0';
    }
    function onMove(e) {
      const rect = host.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      host.__cx = x;
      host.__cy = y;
      maskLayer.style.setProperty('--cx', x + 'px');
      maskLayer.style.setProperty('--cy', y + 'px');
      lastActive = Date.now();
      if (!visible) {
        visible = true;
        setMask();
      } else {
        setMask();
      } // re-render cursor halo

      // add to trail if moved enough
      const last = trail[trail.length - 1];
      const dx = last ? last.x - x : Infinity;
      const dy = last ? last.y - y : Infinity;
      if (Math.hypot(dx, dy) > POINT_DIST) {
        if (trail.length >= MAX_TRAIL) trail.shift();
        trail.push({
          x,
          y
        });
        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            rafId = null;
            setMask();
          });
        }
      }
    }
    if (!isCoarse) {
      window.addEventListener('mousemove', onMove, {
        passive: true
      });
      // Inactivity timeout: fade out after 7s of no motion
      setInterval(() => {
        if (visible && Date.now() - lastActive > INACTIVE_MS) {
          visible = false;
          setMask();
          setTimeout(() => {
            trail.length = 0;
            setMask();
          }, 500);
        }
      }, 1000);
    } else {
      // Mobile: a few stable reveal spots so the grid texture isn't dead
      const r = host.getBoundingClientRect();
      trail.push({
        x: r.width * 0.2,
        y: r.height * 0.75
      });
      trail.push({
        x: r.width * 0.8,
        y: r.height * 0.85
      });
      trail.push({
        x: r.width * 0.15,
        y: r.height * 0.4
      });
      trail.push({
        x: r.width * 0.85,
        y: r.height * 0.35
      });
      visible = true;
      setMask();
    }
  }
  function init() {
    document.querySelectorAll('[data-gabi-grid]').forEach(attach);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.gabiGridAttach = attach;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/background-grid.js", error: String((e && e.message) || e) }); }

// ui_kits/gabi-site/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared primitives, chrome, and landing components for the GABI UI kit.
// Loaded after icons.jsx.

const {
  useState,
  useEffect,
  useRef
} = React;

// =================================================================
// LiquidGlassCard — the signature card primitive (frosted + ringed + glowed)
// =================================================================
function LiquidGlassCard({
  children,
  className = "",
  glow = false,
  radius = 24,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lg-card ${glow ? "glow" : ""} ${className}`,
    style: {
      borderRadius: `${radius}px`,
      ...style
    }
  }, rest), children);
}

// =================================================================
// AnimatedButton — rounded-pill with gradient underline accent
// =================================================================
function AnimatedButton({
  children,
  filled = false,
  size = "md",
  onClick,
  href,
  className = ""
}) {
  const cls = `btn-animated ${filled ? "filled" : ""} ${size === "lg" ? "lg" : ""} ${className}`;
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      className: cls,
      onClick: e => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick
  }, children);
}

// =================================================================
// Eyebrow + Pill
// =================================================================
const Eyebrow = ({
  children,
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  className: "eyebrow",
  style: style
}, children);
const Pill = ({
  icon,
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: "pill"
}, icon, children);

// =================================================================
// Header — sticky nav with brand wordmark, links, theme toggle, CTA
// =================================================================
function Header({
  route,
  setRoute,
  theme,
  setTheme
}) {
  const links = [{
    id: "home",
    label: "Home"
  }, {
    id: "bootcamp",
    label: "Services"
  }, {
    id: "services",
    label: "Build"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand-link",
    onClick: () => setRoute("home")
  }, "GABI"), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: `nav-link ${route === l.id ? "active" : ""}`,
    onClick: () => setRoute(l.id)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle",
    onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  }, theme === "dark" ? /*#__PURE__*/React.createElement(Sun, {
    size: 16
  }) : /*#__PURE__*/React.createElement(Moon, {
    size: 16
  })), /*#__PURE__*/React.createElement(AnimatedButton, {
    onClick: () => setRoute("contact")
  }, "Book a Consultation"))));
}

// =================================================================
// Footer — three columns: brand, links, contact
// =================================================================
function Footer({
  setRoute
}) {
  const year = new Date().getFullYear();
  const links = [["Home", "home"], ["Services", "bootcamp"], ["Build", "services"], ["About", "about"], ["Contact", "contact"]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Gabi"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-3)",
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0
    }
  }, "We help companies cut through the AI noise and build solutions that actually work.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Quick Links"), /*#__PURE__*/React.createElement("ul", null, links.map(([l, id]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute(id),
    style: {
      cursor: "pointer"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement(Mail, {
    size: 16
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:alexander@gabi.xyz"
  }, "alexander@gabi.xyz")), /*#__PURE__*/React.createElement("li", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement(Phone, {
    size: 16
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+32467033449"
  }, "+32 467 033 449")), /*#__PURE__*/React.createElement("li", {
    className: "contact-item"
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Brussels, Belgium"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Gabi. All rights reserved."))));
}

// =================================================================
// HeroRotator — "We educate ↔ build [cycling target]"
// =================================================================
const ROTATOR_DATA = {
  educate: ["decision makers", "employees", "policy makers", "executives", "your team"],
  build: ["smart agents", "RAG databases", "AI chatbots", "automations", "AI roadmaps", "custom tools"]
};
function HeroRotator() {
  const [action, setAction] = useState("educate");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx(p => (p + 1) % ROTATOR_DATA[action].length), 2200);
    return () => clearInterval(i);
  }, [action]);
  const choose = a => {
    if (a !== action) {
      setAction(a);
      setIdx(0);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rotator"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rotator-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rotator-we"
  }, "We"), /*#__PURE__*/React.createElement("span", {
    className: "rotator-actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rotator-stack",
    style: {
      transform: `translateY(${action === "educate" ? "0" : "-50%"})`
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `rotator-btn ${action === "educate" ? "active" : ""}`,
    "data-action": "educate",
    onClick: () => choose("educate")
  }, "educate", /*#__PURE__*/React.createElement("span", {
    className: "underline"
  })), /*#__PURE__*/React.createElement("button", {
    className: `rotator-btn ${action === "build" ? "active" : ""}`,
    "data-action": "build",
    onClick: () => choose("build")
  }, "build", /*#__PURE__*/React.createElement("span", {
    className: "underline"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "rotator-target"
  }, ROTATOR_DATA[action][idx])));
}

// =================================================================
// PathCards — Educate / Build dual cards
// =================================================================
function PathCards({
  setRoute
}) {
  const paths = [{
    id: "bootcamp",
    title: "Educate Track",
    subtitle: "Learn & Activate",
    desc: "Workshops and training to upskill your team and become the AI champion in your company",
    cta: "Explore Training"
  }, {
    id: "services",
    title: "Build Track",
    subtitle: "Design & Implement",
    desc: "Custom AI solutions and automation built for your specific business needs",
    cta: "Explore Services"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(32px, 4.5vw, 48px)",
      lineHeight: 1.1,
      margin: 0,
      letterSpacing: "-0.015em"
    }
  }, "How Can We Help?")), /*#__PURE__*/React.createElement("div", {
    className: "path-grid"
  }, paths.map(p => /*#__PURE__*/React.createElement(LiquidGlassCard, {
    key: p.id,
    className: "path-card",
    radius: 24,
    onClick: () => setRoute(p.id)
  }, /*#__PURE__*/React.createElement(Eyebrow, null, p.title), /*#__PURE__*/React.createElement("h3", null, p.subtitle), /*#__PURE__*/React.createElement("p", null, p.desc), /*#__PURE__*/React.createElement("span", {
    className: "path-cta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient-cta"
  }, p.cta), /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  })))))));
}

// =================================================================
// TestimonialSlider — quote + avatar + author-pill picker
// =================================================================
const TESTIMONIALS = [{
  id: "g",
  img: "../../assets/testimonial-gernot.avif",
  quote: "With their expertise, Gabi offered clear, practical explanations on the potential of LLMs, empowering us to make more informed decisions and make our strategic roadmap future-proof.",
  author: "Gernot Schwendtner",
  role: "Founder"
}, {
  id: "a",
  img: "../../assets/testimonial-ambre.avif",
  quote: "Gabi's leadership in product management and AI operations helped us navigate a fast-evolving industry, ensuring we stayed competitive and became a leader in our industry.",
  author: "Ambre Soubiran",
  role: "CEO"
}, {
  id: "u",
  img: "../../assets/testimonial-guy.avif",
  quote: "Gabi's ability to break down complex technological concepts into practical insights was invaluable, providing the knowledge and confidence needed to take the leap with AI technology.",
  author: "Guy Schiepers",
  role: "Founder"
}];
function TestimonialSlider() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI(p => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, [auto]);
  const t = TESTIMONIALS[i];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3.5vw, 40px)",
      margin: 0
    }
  }, "Kind Words from Our Clients")), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    className: "testimonial-avatar",
    src: t.img,
    alt: t.author,
    key: t.id
  }), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-quote"
  }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-pickers"
  }, TESTIMONIALS.map((tt, ii) => /*#__PURE__*/React.createElement("button", {
    key: tt.id,
    className: i === ii ? "active" : "",
    onClick: () => {
      setI(ii);
      setAuto(false);
    }
  }, tt.author, " ", /*#__PURE__*/React.createElement("span", {
    className: "dash"
  }, "-"), " ", tt.role))))));
}

// =================================================================
// CTASection
// =================================================================
function CTASection({
  headline,
  text,
  ctaText = "Book a Discovery Call",
  onCta,
  glass = true
}) {
  const inner = /*#__PURE__*/React.createElement("div", {
    className: "cta-card"
  }, /*#__PURE__*/React.createElement("h2", null, headline), text && /*#__PURE__*/React.createElement("p", null, text), /*#__PURE__*/React.createElement(AnimatedButton, {
    size: "lg",
    onClick: onCta
  }, ctaText, " ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16,
    className: "arrow"
  })));
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, glass ? /*#__PURE__*/React.createElement(LiquidGlassCard, {
    glow: true,
    radius: 32
  }, inner) : inner));
}

// =================================================================
// ServiceCard, ValueCard
// =================================================================
function ServiceCard({
  icon: Icon,
  title,
  description,
  bestFor
}) {
  return /*#__PURE__*/React.createElement(LiquidGlassCard, {
    className: "svc-card",
    radius: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 48
  })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, description), bestFor && /*#__PURE__*/React.createElement("p", {
    className: "best-for"
  }, /*#__PURE__*/React.createElement("b", null, "Best for:"), " ", bestFor));
}
function ValueCard({
  icon: Icon,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement(LiquidGlassCard, {
    className: "val-card",
    radius: 20
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 20
  })), /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("p", null, description));
}

// expose globals
Object.assign(window, {
  LiquidGlassCard,
  AnimatedButton,
  Eyebrow,
  Pill,
  Header,
  Footer,
  HeroRotator,
  PathCards,
  TestimonialSlider,
  CTASection,
  ServiceCard,
  ValueCard,
  TESTIMONIALS,
  ROTATOR_DATA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gabi-site/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gabi-site/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide-style icons used across the GABI site.
// Stroke-based, 24×24 viewBox, inherits currentColor.
// Match: lucide-react @ 0.436.0

const I = ({
  children,
  size = 24,
  ...p
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), children);
const Rocket = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
}));
const GraduationCap = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 10v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
}));
const Wrench = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
}));
const BrainCircuit = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13a4.5 4.5 0 0 0 3-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.477 10.896a4 4 0 0 1 .585-.396"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 18a4 4 0 0 1-1.967-.516"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 13h4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 18h6a2 2 0 0 1 2 2v1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 8h8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 8V5a2 2 0 0 1 2-2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "13",
  r: ".5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "3",
  r: ".5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "20",
  cy: "21",
  r: ".5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "20",
  cy: "8",
  r: ".5"
}));
const Bot = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 8V4H8"
}), /*#__PURE__*/React.createElement("rect", {
  width: "16",
  height: "12",
  x: "4",
  y: "8",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 14h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 14h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 13v2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v2"
}));
const Workflow = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  width: "8",
  height: "8",
  x: "3",
  y: "3",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11v4a2 2 0 0 0 2 2h4"
}), /*#__PURE__*/React.createElement("rect", {
  width: "8",
  height: "8",
  x: "13",
  y: "13",
  rx: "2"
}));
const LineChart = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "m19 9-5 5-4-4-3 3"
}));
const Lightbulb = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 18h6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 22h4"
}));
const Shield = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}));
const Target = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}));
const Sparkles = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
}));
const ArrowRight = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13 5 7 7-7 7"
}));
const Calendar = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 2v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h18"
}));
const Users = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}));
const Mail = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}));
const Phone = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));
const MapPin = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const Sun = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 20v2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m4.93 4.93 1.41 1.41"
}), /*#__PURE__*/React.createElement("path", {
  d: "m17.66 17.66 1.41 1.41"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 12h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6.34 17.66-1.41 1.41"
}), /*#__PURE__*/React.createElement("path", {
  d: "m19.07 4.93-1.41 1.41"
}));
const Moon = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));
const Menu = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "6",
  x2: "20",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "12",
  x2: "20",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "18",
  x2: "20",
  y2: "18"
}));
Object.assign(window, {
  Rocket,
  GraduationCap,
  Wrench,
  BrainCircuit,
  Bot,
  Workflow,
  LineChart,
  Lightbulb,
  Shield,
  Target,
  Sparkles,
  ArrowRight,
  Calendar,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Sun,
  Moon,
  Menu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gabi-site/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gabi-site/pages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Page-level compositions for the GABI marketing site.
// Loaded after icons.jsx and components.jsx.

// =================================================================
// HomePage
// =================================================================
function HomePage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 Home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "og-hero",
    src: "../../assets/og-image.png",
    alt: "GABI"
  }), /*#__PURE__*/React.createElement(HeroRotator, null), /*#__PURE__*/React.createElement("p", {
    className: "hero-subhead"
  }, "We provide strategic consulting and implementation services that transform your business with practical AI solutions."), /*#__PURE__*/React.createElement(AnimatedButton, {
    size: "lg",
    onClick: () => setRoute("contact")
  }, "Book a Consultation ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16,
    className: "arrow"
  }))), /*#__PURE__*/React.createElement(PathCards, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(TestimonialSlider, null), /*#__PURE__*/React.createElement(CTASection, {
    headline: "Ready to Transform Your Business with AI?",
    text: "Book a consultation to discuss your specific needs and how we can help you implement practical AI solutions.",
    onCta: () => setRoute("contact")
  }));
}

// =================================================================
// AboutPage
// =================================================================
function AboutPage({
  setRoute
}) {
  const values = [{
    icon: Lightbulb,
    title: "Practical Innovation",
    description: "Solutions that deliver real-world value, not just technical impressiveness."
  }, {
    icon: GraduationCap,
    title: "Knowledge Transfer",
    description: "We don't just implement—we teach your team to own and grow your AI capabilities."
  }, {
    icon: Shield,
    title: "Compliance Built-In",
    description: "Privacy, governance, and ethical AI are non-negotiable."
  }, {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your outcomes, not our billable hours."
  }];
  const approach = [["Practical over theoretical", "We focus on what works today, not what might work someday."], ["Compliance-first", "GDPR and the EU AI Act aren't afterthoughts—they're built into everything we do."], ["Employee activation", "Tools are useless if your team won't use them. We turn skeptics into champions."], ["Immediate implementation", "You walk away with working solutions, not slide decks."]];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "02 About"
  }, /*#__PURE__*/React.createElement("section", {
    className: "about-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Pill, {
    icon: /*#__PURE__*/React.createElement(Sparkles, {
      size: 14
    })
  }, "About Gabi"), /*#__PURE__*/React.createElement("h1", null, "Cutting through the ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "AI noise")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "We help companies build AI solutions that actually work\u2014no fluff, no hype, just practical results."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center-header"
  }, /*#__PURE__*/React.createElement(Pill, null, "Who we are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18
    }
  }, "Meet the founder")), /*#__PURE__*/React.createElement(LiquidGlassCard, {
    className: "founder-card",
    glow: true,
    radius: 32
  }, /*#__PURE__*/React.createElement("div", {
    className: "founder-card-inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "founder-photo",
    src: "../../assets/founder-portrait.jpeg",
    alt: "Alexander Coenegrachts"
  }), /*#__PURE__*/React.createElement("div", {
    className: "founder-text"
  }, /*#__PURE__*/React.createElement("h3", null, "Alexander Coenegrachts"), /*#__PURE__*/React.createElement("p", {
    className: "role"
  }, "Founder"), /*#__PURE__*/React.createElement("p", {
    className: "bio"
  }, "8 years building products at the intersection of big data, finance, and AI. Former Global Head of Operations at Kaiko. Now helping companies get practical results from AI\u2014no fluff, no hype. Based in Belgium."), /*#__PURE__*/React.createElement("div", {
    className: "founder-quote"
  }, /*#__PURE__*/React.createElement("p", null, "\"The best AI implementation is the one your team actually uses every day.\""))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center-header"
  }, /*#__PURE__*/React.createElement(Pill, null, "Our mission"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18
    }
  }, "Why we built Gabi"), /*#__PURE__*/React.createElement("p", null, "The AI hype is deafening. Every day there's a new tool, a new announcement, a new \"revolution.\" For most business leaders, it's overwhelming."), /*#__PURE__*/React.createElement("p", null, "We started Gabi because we saw a gap: plenty of companies selling AI technology, but very few helping real businesses actually implement it.")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center-header"
  }, /*#__PURE__*/React.createElement(Pill, null, "Our approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18
    }
  }, "What makes us different")), /*#__PURE__*/React.createElement("div", {
    className: "approach-grid"
  }, approach.map(([t, d]) => /*#__PURE__*/React.createElement(LiquidGlassCard, {
    key: t,
    className: "approach-card",
    radius: 20
  }, /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center-header"
  }, /*#__PURE__*/React.createElement(Pill, null, "Our values"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18
    }
  }, "How we work")), /*#__PURE__*/React.createElement("div", {
    className: "values-grid"
  }, values.map(v => /*#__PURE__*/React.createElement(ValueCard, _extends({
    key: v.title
  }, v)))))), /*#__PURE__*/React.createElement(CTASection, {
    headline: "Ready to work together?",
    text: "Let's explore how AI can drive growth in your organization.",
    onCta: () => setRoute("contact")
  }));
}

// =================================================================
// BootcampPage — "AI Acceleration Program"
// =================================================================
function BootcampPage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "03 Bootcamp"
  }, /*#__PURE__*/React.createElement("section", {
    className: "bootcamp-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: "block",
      marginBottom: 24
    }
  }, "In-House Training Program"), /*#__PURE__*/React.createElement("h1", null, "AI Acceleration ", /*#__PURE__*/React.createElement("span", {
    className: "accent-word"
  }, "Program")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, /*#__PURE__*/React.createElement("b", null, "Our transformational 2-day training"), " where you'll learn to activate AI in your business.", /*#__PURE__*/React.createElement("br", null), "It's practical, it's customized, it's impactful."), /*#__PURE__*/React.createElement("div", {
    className: "bootcamp-chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "feature-chip"
  }, /*#__PURE__*/React.createElement(Users, {
    size: 16
  }), " In-Person"), /*#__PURE__*/React.createElement("span", {
    className: "plus-sep"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "feature-chip"
  }, /*#__PURE__*/React.createElement(Calendar, {
    size: 16
  }), " 6\u20138 Week Experimentation Phase"), /*#__PURE__*/React.createElement("span", {
    className: "plus-sep"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "feature-chip"
  }, /*#__PURE__*/React.createElement(Rocket, {
    size: 16
  }), " Design Thinking Workshop")), /*#__PURE__*/React.createElement(LiquidGlassCard, {
    glow: true,
    radius: 16,
    style: {
      marginTop: 32,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-label"
  }, "Duration"), /*#__PURE__*/React.createElement("div", {
    className: "info-value"
  }, "2 Days")), /*#__PURE__*/React.createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-label"
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    className: "info-value"
  }, "At Your Office")), /*#__PURE__*/React.createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-label"
  }, "Team Size"), /*#__PURE__*/React.createElement("div", {
    className: "info-value"
  }, "4\u201316 participants")), /*#__PURE__*/React.createElement("div", {
    className: "info-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-label"
  }, "Deliverables"), /*#__PURE__*/React.createElement("div", {
    className: "info-value"
  }, "2\u20134 Prototypes")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AnimatedButton, {
    filled: true,
    size: "lg",
    onClick: () => setRoute("contact")
  }, "Book a Discovery Call"), /*#__PURE__*/React.createElement(AnimatedButton, {
    size: "lg",
    onClick: () => setRoute("contact")
  }, "Learn More")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center-header"
  }, /*#__PURE__*/React.createElement(Pill, null, "What we cover"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18
    }
  }, "From skeptics to champions"), /*#__PURE__*/React.createElement("p", null, "Over two intensive days, your team builds real, working AI prototypes\u2014then takes them home.")), /*#__PURE__*/React.createElement("div", {
    className: "path-grid",
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(ValueCard, {
    icon: Sparkles,
    title: "Day 1 \xB7 Foundations",
    description: "The current state of AI, why models matter less than workflows, and where to find the highest-ROI use cases inside your company."
  }), /*#__PURE__*/React.createElement(ValueCard, {
    icon: Rocket,
    title: "Day 2 \xB7 Build",
    description: "Design Thinking sprint. Your team ships 2\u20134 functional prototypes by the end of day two. You leave with working tools, not slide decks."
  })))), /*#__PURE__*/React.createElement(CTASection, {
    headline: "Bring AI into your office in 2 days.",
    text: "2 days. 2\u20134 working prototypes. Knowledge that stays with your team.",
    ctaText: "Book a Discovery Call",
    onCta: () => setRoute("contact")
  }));
}

// =================================================================
// ServicesPage — "Build" track
// =================================================================
function ServicesPage({
  setRoute
}) {
  const services = [{
    icon: BrainCircuit,
    title: "AI Strategy & Roadmap",
    description: "Develop a clear AI strategy aligned with your business goals. We identify high-impact opportunities and create a practical implementation roadmap.",
    bestFor: "Companies at the start of their AI journey"
  }, {
    icon: Bot,
    title: "Custom AI Development",
    description: "Expert implementation of AI solutions—from custom GPTs to full automation workflows. We build, you own.",
    bestFor: "Companies with specific AI projects in mind"
  }, {
    icon: Workflow,
    title: "Process Automation",
    description: "Identify and automate repetitive tasks. Free your team to focus on work that matters.",
    bestFor: "Companies drowning in manual processes"
  }, {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights. Build the foundation for AI-powered decision making.",
    bestFor: "Companies with data but no insights"
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "04 Services"
  }, /*#__PURE__*/React.createElement("section", {
    className: "about-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(48px, 7vw, 96px)"
    }
  }, "AI Solutions Built for Your Business"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "From strategy to implementation, we design and build AI solutions that solve real problems."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center-header"
  }, /*#__PURE__*/React.createElement("h2", null, "Why Gabi?"), /*#__PURE__*/React.createElement("p", null, "We don't just build and leave. Every solution includes knowledge transfer so your team understands what we built and can maintain it. Compliance and governance are built in from day one.")))), /*#__PURE__*/React.createElement(CTASection, {
    headline: "Have a Project in Mind?",
    text: "Let's talk about what you're trying to achieve. We'll give you an honest assessment of whether we're the right fit.",
    ctaText: "Book a Discovery Call",
    onCta: () => setRoute("contact")
  }));
}

// =================================================================
// ContactPage
// =================================================================
function ContactPage({
  setRoute
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "05 Contact"
  }, /*#__PURE__*/React.createElement("section", {
    className: "about-hero",
    style: {
      paddingTop: 64,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Pill, {
    icon: /*#__PURE__*/React.createElement(Mail, {
      size: 14
    })
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px, 6vw, 72px)"
    }
  }, "Let's talk about your project"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Tell us what you're trying to achieve. We'll get back to you with an honest assessment of whether we're the right fit."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(LiquidGlassCard, {
    glow: true,
    radius: 24,
    style: {
      padding: 40
    }
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 32
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      marginTop: 16
    }
  }, "Got it. We'll be in touch."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--fg-3)",
      marginTop: 12
    }
  }, "Expect a reply from Alexander within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(AnimatedButton, {
    onClick: () => setRoute("home")
  }, "Back to home"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "fld",
    placeholder: "Your name",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Work email"), /*#__PURE__*/React.createElement("input", {
    className: "fld",
    type: "email",
    placeholder: "you@company.com",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "What are you trying to achieve?"), /*#__PURE__*/React.createElement("textarea", {
    className: "fld",
    rows: 5,
    placeholder: "Tell us about your project...",
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(AnimatedButton, {
    filled: true,
    size: "lg"
  }, "Send message ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16,
    className: "arrow"
  }))))))));
}
Object.assign(window, {
  HomePage,
  AboutPage,
  BootcampPage,
  ServicesPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gabi-site/pages.jsx", error: String((e && e.message) || e) }); }

})();
