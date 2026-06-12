import { Link } from "react-router-dom";

const shopLinks = [
  { label: "Power tools", to: "/category/power-tools" },
  { label: "Hand tools", to: "/category/hand-tools" },
  { label: "Measuring tools", to: "/category/measuring-tools" },
  { label: "Safety equipment", to: "/category/safety" },
  { label: "New arrivals", to: "/new-arrivals" },
];

const supportLinks = [
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Returns & refunds", to: "/returns" },
  { label: "Shipping info", to: "/shipping" },
  { label: "FAQ", to: "/faq" },
];

const socialLinks = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z",
  },
  {
    label: "Twitter",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-8 pt-10 pb-6">

      <div className="grid grid-cols-3 gap-10 mb-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-emerald-600 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <span className="text-lg font-medium text-gray-900">ToolVilla</span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs">
            Your one-stop shop for quality hardware tools. Built for professionals and DIY enthusiasts alike.
          </p>

          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-3">Shop</p>
          <ul className="flex flex-col gap-2">
            {shopLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-3">Support</p>
          <ul className="flex flex-col gap-2">
            {supportLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 pt-5 flex items-center justify-between">
        <p className="text-xs text-gray-400">© 2025 ToolVilla. All rights reserved.</p>
        <div className="flex gap-5">
          {["Privacy policy", "Terms of use", "Cookies"].map((t) => (
            <Link key={t} to="/" className="text-xs text-gray-400 hover:text-gray-800 transition-colors">
              {t}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  )
}