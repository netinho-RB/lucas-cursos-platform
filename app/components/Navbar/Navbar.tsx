"use client";

import { useEffect, useRef, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Navbar.css";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
];

interface NavbarProps {
  mobileOpen: boolean;
  onMobileOpen: () => void;
  onMobileClose: () => void;
}

export default function Navbar({ mobileOpen, onMobileOpen, onMobileClose }: NavbarProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) onMobileClose();
    },
    [mobileOpen, onMobileClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    onMobileClose();
  };

  return (
    <>
      {/* ===== TOP NAV BAR ===== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="navbar"
      >
        <div className="navbar-container">
          {/* Brand */}
          <div className="navbar-brand">Dr. Lucas</div>

          {/* Desktop links */}
          <nav className="navbar-links" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            className="nav-cta h-11 px-8 rounded-full bg-[#C5A059] text-white text-sm font-semibold hover:bg-[#B08D4C] transition-all shadow-md shadow-[#C5A059]/20 hover:scale-105 active:scale-95"
          >
            Agendar Consulta
          </button>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={onMobileOpen}
          >
            {/* Simple hamburger icon — no external dependency needed */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${mobileOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Header */}
        <div className="mobile-menu-header">
          <div>
            <div className="mobile-menu-brand">Dr. Lucas</div>
            <div className="mobile-menu-tagline">Cirurgia Facial · Docência</div>
          </div>
          <button
            className="mobile-close-btn"
            aria-label="Fechar menu"
            onClick={onMobileClose}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mobile-menu-links" aria-label="Menu mobile">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-item"
              onClick={handleLinkClick}
            >
              <span className="mobile-nav-number">0{i + 1}</span>
              <span className="mobile-nav-label">{item.label}</span>
              <ChevronRight
                className="mobile-nav-arrow"
                size={20}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="mobile-menu-footer">
          <button className="mobile-cta-btn" onClick={onMobileClose}>
            Agendar Consulta
          </button>
        </div>
      </div>
    </>
  );
}
