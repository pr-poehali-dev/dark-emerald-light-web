import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollY: number;
  totalItems: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const NAV_LINKS = [
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О нас" },
  { id: "blog", label: "Блог" },
  { id: "community", label: "Сообщество" },
];

export default function Header({
  scrollY,
  totalItems,
  mobileMenuOpen,
  setMobileMenuOpen,
  setCartOpen,
  scrollToSection,
}: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrollY > 60 ? "rgba(22,43,39,0.95)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(80,200,120,0.12)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3">
          <span className="text-2xl cat-glow-anim inline-block">🐈‍⬛</span>
          <div>
            <div className="font-display text-lg font-semibold tracking-wider" style={{ color: "#50C878" }}>
              Dark Emerald Light
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(80,200,120,0.5)" }}>
              магические ежедневники
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm tracking-widest uppercase transition-all duration-300"
              style={{ color: "rgba(232,245,238,0.6)", fontFamily: "'Golos Text', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#50C878")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,245,238,0.6)")}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 transition-all duration-300"
            style={{ color: "rgba(232,245,238,0.7)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#50C878")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,245,238,0.7)")}
          >
            <Icon name="ShoppingBag" size={22} />
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                style={{ background: "#00FF7F", color: "#162B27" }}
              >
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2"
            style={{ color: "#50C878" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left text-sm tracking-widest uppercase py-2"
              style={{ color: "rgba(232,245,238,0.7)", borderBottom: "1px solid rgba(80,200,120,0.08)" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
