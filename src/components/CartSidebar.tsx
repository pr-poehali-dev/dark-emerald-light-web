import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  symbol: string;
  description: string;
  image: string;
  qty: number;
}

interface CartSidebarProps {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  setCartOpen: (open: boolean) => void;
  setCheckoutOpen: (open: boolean) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
}

export default function CartSidebar({
  cart,
  totalItems,
  totalPrice,
  setCartOpen,
  setCheckoutOpen,
  removeFromCart,
  updateQty,
}: CartSidebarProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
        onClick={() => setCartOpen(false)}
      />
      <div
        className="relative cart-sidebar w-full max-w-md flex flex-col animate-slide-in-right"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 sticky top-0"
          style={{ background: "#162B27", borderBottom: "1px solid rgba(80,200,120,0.12)" }}
        >
          <div>
            <h2 className="font-display text-2xl" style={{ color: "#e8f5ee" }}>Корзина</h2>
            <p className="text-xs" style={{ color: "rgba(80,200,120,0.45)" }}>
              {totalItems} {totalItems === 1 ? "товар" : totalItems < 5 ? "товара" : "товаров"}
            </p>
          </div>
          <button onClick={() => setCartOpen(false)} style={{ color: "rgba(232,245,238,0.4)" }}>
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="flex-1 px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🐈‍⬛</div>
              <p style={{ color: "rgba(232,245,238,0.38)" }}>Корзина пуста</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(80,200,120,0.08)" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
                  style={{ filter: "brightness(0.7)" }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm mb-1" style={{ color: "#e8f5ee" }}>{item.name}</h4>
                  <p className="text-xs mb-3" style={{ color: "rgba(80,200,120,0.5)" }}>{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-sm text-xs"
                        style={{ border: "1px solid rgba(80,200,120,0.25)", color: "#50C878" }}
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center" style={{ color: "#e8f5ee" }}>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-sm text-xs"
                        style={{ border: "1px solid rgba(80,200,120,0.25)", color: "#50C878" }}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm" style={{ color: "#50C878" }}>
                        {(item.price * item.qty).toLocaleString("ru-RU")} ₽
                      </span>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: "rgba(232,245,238,0.25)" }}>
                        <Icon name="Trash2" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div
            className="px-6 py-5 sticky bottom-0"
            style={{ background: "#162B27", borderTop: "1px solid rgba(80,200,120,0.12)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <span style={{ color: "rgba(232,245,238,0.55)" }}>Итого:</span>
              <span className="font-display text-2xl" style={{ color: "#50C878" }}>
                {totalPrice.toLocaleString("ru-RU")} ₽
              </span>
            </div>
            <button
              onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}
              className="btn-emerald w-full py-4 text-sm tracking-widest uppercase"
            >
              <span className="relative z-10">Оформить заказ</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
