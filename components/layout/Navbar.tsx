"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "@/components/ui/AppImage"
import { usePathname } from "next/navigation"

/* ─────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────── */
type PlainItem   = { label: string; href: string; type?: never }
type SubmenuItem = { label: string; href: string; type: "submenu"; items: PlainItem[] }
type DropdownItem = PlainItem | SubmenuItem

/* ─────────────────────────────────────────────────────────────
   NAVIGATION DATA
   ───────────────────────────────────────────────────────────── */
const SUBSCRIPTION_ITEMS: PlainItem[] = [
  { label: "Interior Premium & Express", href: "/services/interior-detail"          },
  { label: "Exterior Premium & Express", href: "/services/exterior-detail"          },
  { label: "Headlights Restoration",     href: "/services/headlights-restoration"   },
  { label: "Engine Detailing",           href: "/services/engine-detailing"         },
  { label: "Ozone Treatment",            href: "/services/ozone-treatment"          },
  { label: "Industrial Pressure Washing",href: "/services/pressure-washing"         },
  { label: "Solar Panel Cleaning",       href: "/services/solar-panel-cleaning"     },
]

const SERVICES_DROPDOWN: DropdownItem[] = [
  { label: "Paint Correction",   href: "/services/paint-correction"   },
  { label: "Fleet Detailing",    href: "/services/fleet-detailing"    },
  { label: "Ceramic Coating",    href: "/services/ceramic-coating"    },
  { label: "Detailing Packages", href: "/services/detailing-packages" },
  { label: "Aircraft Detailing", href: "/services/aircraft-detailing" },
  { label: "Boat Detailing",     href: "/services/boat-detailing"     },
  { label: "Subscription Plan",  href: "/services/subscription-plan", type: "submenu", items: SUBSCRIPTION_ITEMS },
]

const NAV_LINKS = [
  { label: "Home",     href: "/",        dropdown: null },
  { label: "Services", href: "/services",dropdown: SERVICES_DROPDOWN },
  { label: "About Us", href: "/about",   dropdown: null },
  { label: "Blog",     href: "/blog",    dropdown: null },
  { label: "Contact",  href: "/contact", dropdown: null },
]

const PHONE_DISPLAY = "(559) 569-9415"
const PHONE_HREF    = "tel:+15595699415"

/* ─────────────────────────────────────────────────────────────
   ICONS
   ───────────────────────────────────────────────────────────── */
function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
    </svg>
  )
}
function ChevronDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen,          setMenuOpen]          = useState(false)
  const [scrolled,          setScrolled]          = useState(false)
  const [dropdownOpen,      setDropdownOpen]       = useState(false)
  const [subMenuOpen,       setSubMenuOpen]        = useState(false)
  const [mobileServices,    setMobileServices]     = useState(false)
  const [mobileSubscription,setMobileSubscription] = useState(false)

  const closeTimer    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const subCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    return () => {
      if (closeTimer.current)    clearTimeout(closeTimer.current)
      if (subCloseTimer.current) clearTimeout(subCloseTimer.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  /* helpers */
  const openDropdown  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropdownOpen(true) }
  const closeDropdown = () => { closeTimer.current = setTimeout(() => { setDropdownOpen(false); setSubMenuOpen(false) }, 150) }
  const openSub       = () => { if (subCloseTimer.current) clearTimeout(subCloseTimer.current); if (closeTimer.current) clearTimeout(closeTimer.current); setSubMenuOpen(true) }
  const closeSub      = () => { subCloseTimer.current = setTimeout(() => setSubMenuOpen(false), 150) }

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: scrolled ? "#0D0D0D" : "transparent",
        borderBottom: scrolled ? "1px solid #2A2A2A" : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
      }}>
        <div className="site-container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", height: "70px",
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
            onClick={() => { if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Image src="/images/logo/Logotipo.png" alt="Elias Car Detailing — Fresno, CA"
              width={160} height={48}
              style={{ objectFit: "contain", height: "52px", width: "auto" }} priority />
          </Link>

          {/* ── DESKTOP NAV ───────────────────────────────── */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "30px" }}>
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} style={{ position: "relative" }}
                  onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>

                  <Link href={link.href} style={{
                    display: "flex", alignItems: "center", gap: "5px",
                    fontSize: "14px", fontWeight: 500,
                    fontFamily: "inherit", letterSpacing: "0.01em",
                    textDecoration: "none",
                    color: pathname.startsWith("/services") ? "#C9A84C" : "#FFFFFF",
                  }}>
                    {link.label} <ChevronDown />
                  </Link>

                  {/* ── LEVEL 1 DROPDOWN ──────────────────── */}
                  {dropdownOpen && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 14px)",
                      left: "50%", transform: "translateX(-50%)",
                      backgroundColor: "#111111",
                      border: "1px solid #2A2A2A", borderTop: "2px solid #C9A84C",
                      borderRadius: "0 0 4px 4px",
                      padding: "6px 0", minWidth: "230px", zIndex: 100,
                    }}>
                      {link.dropdown.map((item) => {
                        /* Subscription Plan — flyout trigger */
                        if (item.type === "submenu") return (
                          <div key={item.label} style={{ position: "relative" }}
                            onMouseEnter={openSub} onMouseLeave={closeSub}>

                            <div style={{
                              display: "flex", alignItems: "center",
                              justifyContent: "space-between",
                              padding: "10px 20px", cursor: "pointer",
                              color: subMenuOpen ? "#C9A84C" : "#CCCCCC",
                              fontSize: "13px", fontWeight: 600,
                              letterSpacing: "0.02em",
                              backgroundColor: subMenuOpen ? "rgba(201,168,76,0.06)" : "transparent",
                              transition: "color 0.15s, background 0.15s",
                            }}>
                              {item.label}
                              <span style={{ color: "#C9A84C", opacity: 0.8 }}><ChevronRight /></span>
                            </div>

                            {/* ── LEVEL 2 SUBMENU (flyout) ──── */}
                            {subMenuOpen && (
                              <div style={{
                                position: "absolute", top: "-7px",
                                left: "100%", marginLeft: "1px",
                                backgroundColor: "#111111",
                                border: "1px solid #2A2A2A", borderTop: "2px solid #C9A84C",
                                borderRadius: "0 0 4px 4px",
                                padding: "6px 0", minWidth: "240px", zIndex: 101,
                              }}>
                                {item.items.map((sub) => (
                                  <Link key={sub.label} href={sub.href}
                                    style={{
                                      display: "block", padding: "10px 20px",
                                      fontSize: "13px", fontWeight: 500,
                                      color: pathname === sub.href ? "#C9A84C" : "#CCCCCC",
                                      textDecoration: "none", letterSpacing: "0.02em",
                                      transition: "color 0.15s, background 0.15s",
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.color = "#C9A84C"
                                      e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.06)"
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = pathname === sub.href ? "#C9A84C" : "#CCCCCC"
                                      e.currentTarget.style.backgroundColor = "transparent"
                                    }}>
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )

                        /* Regular dropdown item */
                        return (
                          <Link key={item.label} href={item.href}
                            style={{
                              display: "block", padding: "10px 20px",
                              fontSize: "13px", fontWeight: 500,
                              color: pathname === item.href ? "#C9A84C" : "#CCCCCC",
                              textDecoration: "none", letterSpacing: "0.02em",
                              transition: "color 0.15s, background 0.15s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#C9A84C"
                              e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.06)"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = pathname === item.href ? "#C9A84C" : "#CCCCCC"
                              e.currentTarget.style.backgroundColor = "transparent"
                            }}>
                            {item.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href}
                  style={{
                    fontSize: "14px", fontWeight: 500, letterSpacing: "0.01em",
                    color: pathname === link.href ? "#C9A84C" : "#FFFFFF",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onClick={() => { if (pathname === link.href) window.scrollTo({ top: 0, behavior: "smooth" }) }}
                  onMouseEnter={(e) => { if (pathname !== link.href) e.currentTarget.style.color = "#C9A84C" }}
                  onMouseLeave={(e) => { if (pathname !== link.href) e.currentTarget.style.color = "#FFFFFF" }}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a href={PHONE_HREF} className="btn-gold hidden md:inline-flex"
            style={{ fontSize: "13px", padding: "10px 20px", gap: "7px" }}>
            <PhoneIcon size={14} /> {PHONE_DISPLAY}
          </a>

          {/* Hamburger */}
          <button className="flex md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu"
            style={{
              alignItems: "center", justifyContent: "center",
              width: "48px", height: "48px", backgroundColor: "#C9A84C",
              borderRadius: "10px", border: "none", cursor: "pointer",
              color: "#0D0D0D", flexShrink: 0,
            }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ────────────────────────────── */}
      <div style={{
        position: "fixed", inset: 0, backgroundColor: "#000000",
        zIndex: 2000, display: "flex", flexDirection: "column",
        padding: "24px 24px 32px",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        overflowY: "auto",
      }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "44px" }}>
          <Link href="/" onClick={() => { setMenuOpen(false); if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Image src="/images/logo/Logotipo.png" alt="Elias Car Detailing"
              width={140} height={42} style={{ objectFit: "contain", height: "44px", width: "auto" }} />
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "48px", height: "48px", backgroundColor: "#C9A84C",
              borderRadius: "10px", border: "none", cursor: "pointer", color: "#0D0D0D", flexShrink: 0,
            }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                {/* Services row: link navega + chevron expande accordion */}
                <div style={{
                  display: "flex", alignItems: "center",
                  borderBottom: "0.5px solid #1A1A1A",
                }}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    style={{
                      flex: 1, textDecoration: "none",
                      padding: "18px 0", fontSize: "22px", fontWeight: 700,
                      color: pathname.startsWith("/services") ? "#C9A84C" : "#FFFFFF",
                      textTransform: "uppercase", letterSpacing: "0.04em",
                    }}>
                    {link.label}
                  </Link>
                  <button onClick={() => setMobileServices((v) => !v)}
                    aria-label="Expand services menu"
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "18px 0 18px 16px",
                    }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: "28px", height: "28px", border: "1px solid #C9A84C",
                      borderRadius: "20px", color: "#C9A84C",
                      transform: mobileServices ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}><ChevronDown /></span>
                  </button>
                </div>

                {mobileServices && (
                  <div style={{ borderBottom: "0.5px solid #1A1A1A" }}>
                    {link.dropdown.map((item) => {
                      /* Subscription Plan — accordion */
                      if (item.type === "submenu") return (
                        <div key={item.label}>
                          <button onClick={() => setMobileSubscription((v) => !v)}
                            style={{
                              width: "100%", background: "none", border: "none",
                              borderTop: "0.5px solid #222222", cursor: "pointer",
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                              padding: "15px 24px", fontFamily: "inherit",
                              fontSize: "15px", fontWeight: 600,
                              color: "#C9A84C", letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}>
                            {item.label}
                            <span style={{
                              display: "inline-flex", alignItems: "center", justifyContent: "center",
                              width: "24px", height: "24px", border: "1px solid #C9A84C",
                              borderRadius: "20px", color: "#C9A84C",
                              transform: mobileSubscription ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.25s ease",
                              flexShrink: 0,
                            }}><ChevronDown /></span>
                          </button>

                          {mobileSubscription && (
                            <div style={{ backgroundColor: "#0D0D0D" }}>
                              {item.items.map((sub) => (
                                <Link key={sub.label} href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  style={{
                                    display: "block", padding: "13px 32px",
                                    fontSize: "14px", fontWeight: 500,
                                    color: pathname === sub.href ? "#C9A84C" : "#AAAAAA",
                                    textDecoration: "none",
                                    borderTop: "0.5px solid #1A1A1A",
                                    letterSpacing: "0.01em",
                                  }}>
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )

                      /* Regular service item */
                      return (
                        <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                          style={{
                            display: "block", padding: "15px 24px",
                            fontSize: "15px", fontWeight: 500,
                            color: pathname === item.href ? "#C9A84C" : "#CCCCCC",
                            textDecoration: "none",
                            borderTop: "0.5px solid #222222",
                            letterSpacing: "0.02em",
                          }}>
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={link.href}
                onClick={() => { setMenuOpen(false); if (pathname === link.href) window.scrollTo({ top: 0, behavior: "smooth" }) }}
                style={{
                  display: "block", fontSize: "22px", fontWeight: 700,
                  color: pathname === link.href ? "#C9A84C" : "#FFFFFF",
                  textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "0.04em", padding: "18px 0",
                  borderBottom: "0.5px solid #1A1A1A",
                }}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom CTA */}
        <a href={PHONE_HREF} className="btn-gold" onClick={() => setMenuOpen(false)}
          style={{ width: "100%", justifyContent: "center", marginTop: "36px", fontSize: "15px", padding: "14px", gap: "9px" }}>
          <PhoneIcon size={16} /> {PHONE_DISPLAY}
        </a>
      </div>
    </>
  )
}
