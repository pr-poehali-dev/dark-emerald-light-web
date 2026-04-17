import { useRef } from "react";
import Icon from "@/components/ui/icon";

const CAT_IMG = "https://cdn.poehali.dev/projects/bbe9deb8-cc89-4876-8843-b4dc96c93e72/files/a2469e40-c136-43d7-afc5-951ae9371fbc.jpg";
const JOURNAL_IMG = "https://cdn.poehali.dev/projects/bbe9deb8-cc89-4876-8843-b4dc96c93e72/files/8354f1a8-54f0-4806-8a56-79b9842f731f.jpg";
const COLLECTION_IMG = "https://cdn.poehali.dev/projects/bbe9deb8-cc89-4876-8843-b4dc96c93e72/files/993f54c1-e23d-4124-8bba-29fe9c4902a1.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  symbol: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "Ежедневник «Карьера»", category: "Карьера", price: 2490, symbol: "♜", description: "Для тех, кто строит путь к вершинам. Страницы для целей, стратегий и побед.", image: JOURNAL_IMG },
  { id: 2, name: "Ежедневник «Любовь»", category: "Любовь", price: 2290, symbol: "♥", description: "Сохраните воспоминания и намерения. Путеводитель по миру чувств.", image: COLLECTION_IMG },
  { id: 3, name: "Ежедневник «Здоровье»", category: "Здоровье", price: 2190, symbol: "✦", description: "Трекер привычек, питания и медитаций для гармонии тела и духа.", image: JOURNAL_IMG },
  { id: 4, name: "Ежедневник «Творчество»", category: "Творчество", price: 2590, symbol: "✴", description: "Пространство для идей, набросков и вдохновения без границ.", image: COLLECTION_IMG },
  { id: 5, name: "Ежедневник «Финансы»", category: "Финансы", price: 2390, symbol: "◈", description: "Система учёта, целей и инвестиционных намерений.", image: JOURNAL_IMG },
  { id: 6, name: "Лимитированный набор", category: "Коллекция", price: 6990, symbol: "☾", description: "Все пять ежедневников в подарочной коробке с подвеской-кошкой.", image: COLLECTION_IMG },
];

const BLOG_POSTS = [
  { title: "Магия ведения дневника", date: "12 апреля", excerpt: "Как ежедневные записи меняют восприятие реальности и открывают скрытые желания...", symbol: "☽" },
  { title: "Настройка ежедневника к новолунию", date: "5 апреля", excerpt: "Ритуал начала нового лунного цикла с использованием тематических страниц...", symbol: "✦" },
  { title: "Контраст тьмы и света", date: "28 марта", excerpt: "Философия бренда: почему именно этот баланс помогает достигать целей...", symbol: "◈" },
];

const COMMUNITY_IMGS = [JOURNAL_IMG, COLLECTION_IMG, JOURNAL_IMG, COLLECTION_IMG, JOURNAL_IMG, COLLECTION_IMG];

interface MainSectionsProps {
  scrollY: number;
  addToCart: (product: Product) => void;
  scrollToSection: (id: string) => void;
}

export default function MainSections({ scrollY, addToCart, scrollToSection }: MainSectionsProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ─── HERO ─── */}
      <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.4}px)`, willChange: "transform" }}
        >
          <img
            src={CAT_IMG}
            alt="Чёрная кошка в туманном лесу"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.6) saturate(0.85)" }}
          />
        </div>

        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(22,43,39,0.3) 0%, rgba(22,43,39,0.05) 40%, rgba(22,43,39,0.75) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(80,200,120,0.04) 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div
            className="text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in"
            style={{ color: "#50C878" }}
          >
            ✦ &nbsp; Тёмная элегантность &nbsp; ✦
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 animate-fade-in"
            style={{ color: "#e8f5ee", textShadow: "0 0 80px rgba(80,200,120,0.12)", animationDelay: "0.2s" }}
          >
            Организуйте жизнь<br />
            <em style={{ color: "#50C878", fontStyle: "italic" }}>с магией</em>
          </h1>

          <p
            className="text-base md:text-lg mb-10 animate-fade-in max-w-xl mx-auto"
            style={{ color: "rgba(232,245,238,0.6)", fontFamily: "'Golos Text', sans-serif", animationDelay: "0.4s", lineHeight: "1.85" }}
          >
            Премиальные тематические ежедневники для тех, кто видит красоту в контрасте тьмы и света
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => scrollToSection("catalog")}
              className="btn-emerald px-8 py-4 text-sm tracking-widest uppercase"
            >
              <span className="relative z-10">Ознакомиться с коллекцией</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="btn-outline-emerald px-8 py-4 text-sm tracking-widest uppercase"
            >
              Наша история
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(80,200,120,0.35)" }}>Прокрутите</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: "rgba(80,200,120,0.12)" }}>
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: "40%",
                background: "linear-gradient(to bottom, transparent, #50C878)",
                animation: "scrollLine 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── CATALOG ─── */}
      <section id="catalog" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 scroll-reveal">
            <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#50C878" }}>✦ &nbsp; Коллекция &nbsp; ✦</div>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-4" style={{ color: "#e8f5ee" }}>Выберите свой путь</h2>
            <div className="magic-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <div
                key={product.id}
                className="product-card rounded-sm overflow-hidden group scroll-reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.7) saturate(0.9)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,43,39,0.92) 0%, transparent 60%)" }} />
                  <div
                    className="absolute top-4 right-4 text-2xl font-display"
                    style={{ color: "#50C878", textShadow: "0 0 20px rgba(80,200,120,0.8)" }}
                  >
                    {product.symbol}
                  </div>
                  <div
                    className="absolute top-4 left-4 text-xs tracking-widest uppercase px-2 py-1"
                    style={{ background: "rgba(22,43,39,0.85)", color: "#50C878", border: "1px solid rgba(80,200,120,0.3)" }}
                  >
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-medium mb-2" style={{ color: "#e8f5ee" }}>{product.name}</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(232,245,238,0.5)", lineHeight: "1.65" }}>{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl" style={{ color: "#50C878" }}>
                      {product.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <button onClick={() => addToCart(product)} className="btn-emerald px-4 py-2 text-xs tracking-widest uppercase">
                      <span className="relative z-10">В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(ellipse at 25% 50%, rgba(80,200,120,0.12) 0%, transparent 60%)" }} />
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-reveal">
              <div className="absolute -inset-3 rounded-sm opacity-20" style={{ background: "linear-gradient(135deg, #50C878, transparent)" }} />
              <img
                src={CAT_IMG}
                alt="Талисман бренда"
                className="relative w-full aspect-square object-cover rounded-sm"
                style={{ filter: "brightness(0.6) saturate(0.8)" }}
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-4"
                style={{ background: "rgba(22,43,39,0.92)", border: "1px solid rgba(80,200,120,0.2)" }}
              >
                <div className="font-display text-sm italic" style={{ color: "#50C878" }}>
                  «Тьма — это не отсутствие света, а его обрамление»
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#50C878" }}>✦ &nbsp; О бренде &nbsp; ✦</div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-5 leading-tight" style={{ color: "#e8f5ee" }}>
                Рождённые из контраста тьмы и света
              </h2>
              <div className="mb-6" style={{ width: 60, height: 1, background: "linear-gradient(90deg, #50C878, transparent)" }} />
              <p className="mb-4 leading-relaxed" style={{ color: "rgba(232,245,238,0.62)", lineHeight: "1.9" }}>
                Dark Emerald Light — это больше, чем бренд ежедневников. Это философия жизни, основанная на принятии своей двойственности: тёмного и светлого, хаоса и порядка, мечты и реальности.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "rgba(232,245,238,0.62)", lineHeight: "1.9" }}>
                Наши ежедневники созданы как инструменты трансформации. Каждая страница — пространство для вашей внутренней магии. Талисман бренда, чёрная кошка с изумрудными глазами, наблюдает и оберегает каждый ваш шаг.
              </p>
              <button className="btn-outline-emerald px-6 py-3 text-sm tracking-widest uppercase" onClick={() => scrollToSection("catalog")}>
                Смотреть коллекцию →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section id="blog" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 scroll-reveal">
            <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#50C878" }}>✦ &nbsp; Блог &nbsp; ✦</div>
            <h2 className="font-display text-4xl md:text-6xl font-light" style={{ color: "#e8f5ee" }}>Мистические знания</h2>
            <div className="magic-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={i}
                className="product-card rounded-sm p-6 cursor-pointer group scroll-reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="text-3xl font-display mb-4" style={{ color: "#50C878", textShadow: "0 0 20px rgba(80,200,120,0.4)" }}>
                  {post.symbol}
                </div>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(80,200,120,0.45)" }}>{post.date}</div>
                <h3 className="font-display text-xl font-medium mb-3 transition-colors group-hover:text-emerald-400" style={{ color: "#e8f5ee" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(232,245,238,0.48)" }}>{post.excerpt}</p>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#50C878" }}>Читать далее →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section id="community" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 scroll-reveal">
            <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#50C878" }}>✦ &nbsp; Сообщество &nbsp; ✦</div>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-4" style={{ color: "#e8f5ee" }}>Ковен хранителей дневников</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(232,245,238,0.48)", lineHeight: "1.8" }}>
              Присоединитесь к тысячам людей, которые организуют жизнь с магией Dark Emerald Light
            </p>
            <div className="magic-divider mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {COMMUNITY_IMGS.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-sm group scroll-reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <img
                  src={img}
                  alt="Фото из сообщества"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "brightness(0.6) saturate(0.8)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(13,31,29,0.45)" }}
                >
                  <span style={{ color: "#50C878", fontSize: "1.75rem" }}>✦</span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center p-10 rounded-sm scroll-reveal"
            style={{ background: "rgba(80,200,120,0.04)", border: "1px solid rgba(80,200,120,0.18)" }}
          >
            <div className="text-3xl mb-4">🐈‍⬛</div>
            <h3 className="font-display text-2xl md:text-3xl mb-3" style={{ color: "#e8f5ee" }}>Конкурс «Мой магический ежедневник»</h3>
            <p className="mb-6 max-w-lg mx-auto" style={{ color: "rgba(232,245,238,0.52)", lineHeight: "1.8" }}>
              Поделитесь фото вашего ежедневника с хэштегом <span style={{ color: "#50C878" }}>#DarkEmeraldLight</span> и выиграйте лимитированный набор
            </p>
            <button className="btn-emerald px-8 py-3 text-sm tracking-widest uppercase">
              <span className="relative z-10">Участвовать в конкурсе</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-6" style={{ borderTop: "1px solid rgba(80,200,120,0.1)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🐈‍⬛</span>
                <span className="font-display text-lg" style={{ color: "#50C878" }}>Dark Emerald Light</span>
              </div>
              <p className="text-sm mb-6" style={{ color: "rgba(232,245,238,0.38)", lineHeight: "1.8" }}>
                Премиальные тематические ежедневники для тех, кто верит в силу намерения и магию ежедневного ритуала.
              </p>
              <div className="flex gap-3">
                {["Instagram", "MessageCircle", "Send"].map((iconName, i) => (
                  <button
                    key={i}
                    className="p-2 rounded-sm transition-all duration-300"
                    style={{ color: "rgba(80,200,120,0.45)", border: "1px solid rgba(80,200,120,0.12)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#50C878")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(80,200,120,0.45)")}
                  >
                    <Icon name={iconName} size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "#50C878" }}>Навигация</h4>
              <ul className="space-y-2">
                {[
                  { id: "catalog", label: "Каталог" },
                  { id: "about", label: "О нас" },
                  { id: "blog", label: "Блог" },
                  { id: "community", label: "Сообщество" },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(232,245,238,0.38)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#50C878")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,245,238,0.38)")}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "#50C878" }}>Рассылка</h4>
              <p className="text-sm mb-4" style={{ color: "rgba(232,245,238,0.38)" }}>Лунные ритуалы и новинки коллекции</p>
              <div className="flex gap-2">
                <input type="email" placeholder="ваш@email.ru" className="dark-input flex-1 px-3 py-2 text-sm rounded-sm" />
                <button className="btn-emerald px-4 py-2 text-xs"><span className="relative z-10">→</span></button>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(80,200,120,0.07)" }}>
            <p className="text-xs" style={{ color: "rgba(232,245,238,0.18)" }}>© 2024 Dark Emerald Light. Все права защищены.</p>
            <p className="text-xs" style={{ color: "rgba(80,200,120,0.28)" }}>✦ Магия в каждой странице ✦</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </>
  );
}
