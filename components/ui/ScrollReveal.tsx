"use client"
import { useEffect } from "react"

const CSS = `
  .sr-hidden {
    opacity: 0 !important;
    transform: translateY(30px) !important;
  }
  .sr-ready {
    transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) !important;
  }
`

export default function ScrollReveal() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = CSS
    document.head.appendChild(style)

    const mainEl = document.querySelector("main")
    if (!mainEl) return

    const sections = Array.from(mainEl.children).filter(
      (el) =>
        (el.tagName === "SECTION" || el.tagName === "DIV") &&
        !el.hasAttribute("data-scroll-reveal-skip")
    ) as HTMLElement[]

    // Aplica sr-hidden a todas las secciones excepto Hero, sin transición aún
    const toAnimate = sections.slice(1) as HTMLElement[]
    toAnimate.forEach(el => el.classList.add("sr-hidden"))
    toAnimate.forEach(el => void el.offsetHeight) // fuerza reflow
    toAnimate.forEach(el => el.classList.add("sr-ready"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("sr-hidden")
          } else {
            entry.target.classList.add("sr-hidden")
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    )

    toAnimate.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
      style.remove()
    }
  }, [])

  return null
}
