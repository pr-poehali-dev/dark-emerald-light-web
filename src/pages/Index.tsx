import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MainSections, { Product, PRODUCTS } from "@/components/MainSections";
import CartSidebar from "@/components/CartSidebar";
import CheckoutModal from "@/components/CheckoutModal";

interface CartItem extends Product {
  qty: number;
}

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            (entry.target as HTMLElement).style.transition = "opacity 0.7s ease, transform 0.7s ease";
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderDone(true);
    setTimeout(() => {
      setOrderDone(false);
      setCheckoutOpen(false);
      setCart([]);
      setCartOpen(false);
      setForm({ name: "", email: "", phone: "", address: "" });
    }, 3500);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#162B27", color: "#e8f5ee" }}>
      <div className="noise-overlay" />

      <Header
        scrollY={scrollY}
        totalItems={totalItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setCartOpen={setCartOpen}
        scrollToSection={scrollToSection}
      />

      <MainSections
        scrollY={scrollY}
        addToCart={addToCart}
        scrollToSection={scrollToSection}
      />

      {cartOpen && (
        <CartSidebar
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          setCartOpen={setCartOpen}
          setCheckoutOpen={setCheckoutOpen}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
        />
      )}

      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          totalPrice={totalPrice}
          orderDone={orderDone}
          form={form}
          setForm={setForm}
          setCheckoutOpen={setCheckoutOpen}
          handleOrder={handleOrder}
        />
      )}
    </div>
  );
}
