import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface CheckoutModalProps {
  cart: CartItem[];
  totalPrice: number;
  orderDone: boolean;
  form: { name: string; email: string; phone: string; address: string };
  setForm: (form: { name: string; email: string; phone: string; address: string }) => void;
  setCheckoutOpen: (open: boolean) => void;
  handleOrder: (e: React.FormEvent) => void;
}

export default function CheckoutModal({
  cart,
  totalPrice,
  orderDone,
  form,
  setForm,
  setCheckoutOpen,
  handleOrder,
}: CheckoutModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)" }}
        onClick={() => !orderDone && setCheckoutOpen(false)}
      />
      <div
        className="relative w-full max-w-lg rounded-sm animate-fade-in"
        style={{ background: "#162B27", border: "1px solid rgba(80,200,120,0.25)", maxHeight: "90vh", overflowY: "auto" }}
      >
        {orderDone ? (
          <div className="text-center py-16 px-8">
            <div className="text-6xl mb-6">✨</div>
            <h3 className="font-display text-3xl mb-3" style={{ color: "#50C878" }}>Заказ оформлен!</h3>
            <p style={{ color: "rgba(232,245,238,0.58)" }}>Мы свяжемся с вами в ближайшее время. Магия уже в пути 🐈‍⬛</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(80,200,120,0.12)" }}>
              <div>
                <h2 className="font-display text-2xl" style={{ color: "#e8f5ee" }}>Оформление заказа</h2>
                <p className="text-xs" style={{ color: "rgba(80,200,120,0.45)" }}>Заполните данные для доставки</p>
              </div>
              <button onClick={() => setCheckoutOpen(false)} style={{ color: "rgba(232,245,238,0.4)" }}>
                <Icon name="X" size={20} />
              </button>
            </div>

            <form onSubmit={handleOrder} className="px-6 py-6 space-y-4">
              <div
                className="p-4 rounded-sm"
                style={{ background: "rgba(80,200,120,0.04)", border: "1px solid rgba(80,200,120,0.1)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(80,200,120,0.45)" }}>Ваш заказ</p>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm py-1">
                    <span style={{ color: "rgba(232,245,238,0.6)" }}>{item.name} × {item.qty}</span>
                    <span style={{ color: "#50C878" }}>{(item.price * item.qty).toLocaleString("ru-RU")} ₽</span>
                  </div>
                ))}
                <div className="flex justify-between pt-3 mt-2" style={{ borderTop: "1px solid rgba(80,200,120,0.1)" }}>
                  <span className="font-medium text-sm" style={{ color: "#e8f5ee" }}>Итого</span>
                  <span className="font-display text-xl" style={{ color: "#50C878" }}>{totalPrice.toLocaleString("ru-RU")} ₽</span>
                </div>
              </div>

              {[
                { key: "name", label: "Имя", type: "text", placeholder: "Ваше имя" },
                { key: "email", label: "Email", type: "email", placeholder: "ваш@email.ru" },
                { key: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
                { key: "address", label: "Адрес доставки", type: "text", placeholder: "Город, улица, дом, квартира" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(80,200,120,0.45)" }}>{label}</label>
                  <input
                    required
                    type={type}
                    className="dark-input w-full px-4 py-3 rounded-sm"
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}

              <button type="submit" className="btn-emerald w-full py-4 text-sm tracking-widest uppercase mt-2">
                <span className="relative z-10">Подтвердить заказ ✦</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
