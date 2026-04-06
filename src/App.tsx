import React, { useState } from "react";

/*
VER 3.0
Theme: Green restaurant
Rounded font
Image menu
Nice UI
*/

type MenuItem = {
  id: number;
  name: Record<string, string>;
  price: number;
  img: string;
};

export default function App() {
  const [lang, setLang] = useState("th");
  const [showLang, setShowLang] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState("");

  const text: any = {
    th: {
      title: "Test Shop",
      order: "สั่งอาหาร",
      name: "ชื่อ",
      table: "โต๊ะ",
      note: "เพิ่มเติม",
      selectTable: "เลือกโต๊ะ",
      cart: "รายการ",
      total: "รวม",
      submit: "ส่งออเดอร์",
      add: "เพิ่ม",
      language: "Language",
      success: "ส่งออเดอร์แล้ว",
      alertName: "กรุณาใส่ชื่อ",
      alertTable: "กรุณาเลือกโต๊ะ",
      alertMenu: "กรุณาเลือกเมนู",
    },

    en: {
      title: "Test Shop",
      order: "Order",
      name: "Name",
      table: "Table",
      note: "Note",
      selectTable: "Select table",
      cart: "Cart",
      total: "Total",
      submit: "Submit",
      add: "Add",
      language: "Language",
      success: "Order sent",
      alertName: "Enter name",
      alertTable: "Select table",
      alertMenu: "Select menu",
    },

    zh: {
      title: "测试商店",
      order: "点餐",
      name: "姓名",
      table: "桌号",
      note: "备注",
      selectTable: "选择桌号",
      cart: "订单",
      total: "总计",
      submit: "提交",
      add: "添加",
      language: "语言",
      success: "订单已发送",
      alertName: "请输入姓名",
      alertTable: "请选择桌号",
      alertMenu: "请选择菜品",
    },

    jp: {
      title: "テストショップ",
      order: "注文",
      name: "名前",
      table: "テーブル",
      note: "メモ",
      selectTable: "テーブル選択",
      cart: "注文",
      total: "合計",
      submit: "送信",
      add: "追加",
      language: "言語",
      success: "注文完了",
      alertName: "名前入力",
      alertTable: "テーブル選択",
      alertMenu: "料理選択",
    },

    es: {
      title: "Tienda",
      order: "Pedido",
      name: "Nombre",
      table: "Mesa",
      note: "Nota",
      selectTable: "Elegir mesa",
      cart: "Pedido",
      total: "Total",
      submit: "Enviar",
      add: "Agregar",
      language: "Idioma",
      success: "Pedido enviado",
      alertName: "Ingrese nombre",
      alertTable: "Seleccione mesa",
      alertMenu: "Seleccione comida",
    },

    fr: {
      title: "Boutique",
      order: "Commande",
      name: "Nom",
      table: "Table",
      note: "Note",
      selectTable: "Choisir table",
      cart: "Commande",
      total: "Total",
      submit: "Envoyer",
      add: "Ajouter",
      language: "Langue",
      success: "Commande envoyée",
      alertName: "Entrez nom",
      alertTable: "Choisir table",
      alertMenu: "Choisir plat",
    },

    de: {
      title: "Test Shop",
      order: "Bestellen",
      name: "Name",
      table: "Tisch",
      note: "Notiz",
      selectTable: "Tisch wählen",
      cart: "Bestellung",
      total: "Summe",
      submit: "Bestellen",
      add: "Hinzufügen",
      language: "Sprache",
      success: "Gesendet",
      alertName: "Name eingeben",
      alertTable: "Tisch wählen",
      alertMenu: "Essen wählen",
    },

    ru: {
      title: "Тест",
      order: "Заказ",
      name: "Имя",
      table: "Стол",
      note: "Комментарий",
      selectTable: "Выберите стол",
      cart: "Корзина",
      total: "Итого",
      submit: "Отправить",
      add: "Добавить",
      language: "Язык",
      success: "Отправлено",
      alertName: "Введите имя",
      alertTable: "Выберите стол",
      alertMenu: "Выберите блюдо",
    },

    ar: {
      title: "متجر",
      order: "طلب",
      name: "الاسم",
      table: "الطاولة",
      note: "ملاحظة",
      selectTable: "اختر الطاولة",
      cart: "السلة",
      total: "المجموع",
      submit: "ارسال",
      add: "اضافة",
      language: "اللغة",
      success: "تم الارسال",
      alertName: "ادخل الاسم",
      alertTable: "اختر الطاولة",
      alertMenu: "اختر طعام",
    },
  };

  const menuData: MenuItem[] = [
    {
      id: 1,
      name: {
        th: "สเต็กเนื้อ",
        en: "Steak Beef",
        zh: "牛排牛肉",
        jp: "ステーキ用牛肉",
        es: "Carne de res",
        fr: "Boeuf de steak",
        de: "Rindersteak",
        ru: "Говяжий стейк",
        arb: "لحم بقر شرائح",
      },
      price: 100,
      img: "https://img2.pic.in.th/2151888655.jpg",
    },

    {
      id: 2,
      name: {
        th: "ข้าวผัด",
        en: "Fried Rice",
        zh: "炒饭",
        jp: "チャーハン",
        es: "Arroz frito",
        fr: "Riz frit",
        de: "Gebratener Reis",
        ru: "Жареный рис",
        ar: "أرز مقلي",
      },
      price: 70,
      img: "https://img1.pic.in.th/images/26577.jpg",
    },

    {
      id: 3,
      name: {
        th: "แกงเขียวหวาน",
        en: "Green Curry",
        zh: "绿咖喱",
        jp: "グリーンカレー",
        es: "Curry verde",
        fr: "Curry vert",
        de: "Grünes Curry",
        ru: "Зелёное карри",
        ar: "كاري اخضر",
      },
      price: 120,
      img: "https://img2.pic.in.th/21366.jpg",
    },
  ];

  const [cart, setCart] = useState<any[]>([]);
  const [table, setTable] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const add = (item: MenuItem) => {
    setCart((prev) => {
      const f = prev.find((p) => p.id === item.id);
      if (f)
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const minus = (id: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const changeQty = (id: number, val: number) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: val } : p)));
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const error = (msg: string) => {
    setPopup(msg);
    setTimeout(() => setPopup(""), 2000);
  };

  const submit = async () => {
    if (sending) return;

    if (!name) return error(text[lang].alertName);
    if (!table) return error(text[lang].alertTable);
    if (cart.length === 0) return error(text[lang].alertMenu);

    setSending(true);

    const order = cart.map((i) => `${i.name.th} x ${i.qty}`).join(", ");

    await fetch(
      "https://script.google.com/macros/s/AKfycbzNhKDcwRM9cU-GDHOlm1z982IbmZ5CJvLnIKWHSVa2tF2AKZmO8Ou7XSbgTkOubBM9oQ/exec",
      {
        method: "POST",
        body: JSON.stringify({
          time: new Date().toLocaleString(),
          name,
          table,
          order,
          note,
          total,
        }),
      }
    );

    setSubmitted(true);
  };

  if (submitted)
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
          fontFamily: "Nunito, Noto Sans, sans-serif",
        }}
      >
        <h1>{text[lang].success}</h1>
      </div>
    );

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "auto",
        padding: 20,
        fontFamily: "Nunito, Noto Sans, sans-serif",
        background: "#f3fbf6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="https://img1.pic.in.th/images/Green-and-Yellow-Illustrative-Catering-Food-Logo-3.png"
            width="100"
          />
          <h2 style={{ color: "#1b5e20" }}>Burrell Restaurant & Cafe</h2>
        </div>

        <button
          onClick={() => setShowLang(!showLang)}
          style={{
            background: "#4caf50",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: 8,
          }}
        >
          {text[lang].language}
        </button>
      </div>

      {showLang && (
        <div
          style={{
            background: "white",
            padding: 10,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          {Object.keys(text).map((l) => (
            <div
              key={l}
              style={{ padding: 5, cursor: "pointer" }}
              onClick={() => {
                setLang(l);
                setShowLang(false);
              }}
            >
              {l}
            </div>
          ))}
        </div>
      )}

      <input
        placeholder={text[lang].name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 15,
          borderRadius: 10,
          border: "1px solid #c8e6c9",
        }}
      />

      <select
        value={table}
        onChange={(e) => setTable(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 10,
          borderRadius: 10,
          border: "1px solid #c8e6c9",
        }}
      >
        <option value="">{text[lang].selectTable}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <textarea
        placeholder={text[lang].note}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 10,
          borderRadius: 10,
          border: "1px solid #c8e6c9",
        }}
      />

      <h3 style={{ color: "#2e7d32" }}>{text[lang].order}</h3>

      {menuData.map((m) => (
        <div
          key={m.id}
          style={{
            background: "white",
            marginBottom: 15,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={m.img}
            style={{ width: "100%", height: 150, objectFit: "cover" }}
          />

          <div style={{ padding: 10 }}>
            <b>{m.name[lang]}</b>

            <div>{m.price} ฿</div>

            <button
              onClick={() => add(m)}
              style={{
                marginTop: 5,
                background: "#66bb6a",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              {text[lang].add}
            </button>
          </div>
        </div>
      ))}

      <h3 style={{ color: "#2e7d32" }}>{text[lang].cart}</h3>

      {cart.map((i) => (
        <div
          key={i.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            background: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          {i.name[lang]}

          <div>
            <button onClick={() => minus(i.id)}>-</button>

            <input
              type="number"
              value={i.qty}
              onChange={(e) => changeQty(i.id, Number(e.target.value))}
              style={{ width: 40, textAlign: "center" }}
            />

            <button onClick={() => add(i)}>+</button>
          </div>
        </div>
      ))}

      <h2 style={{ color: "#1b5e20" }}>
        {text[lang].total} {total} ฿
      </h2>

      <button
        onClick={submit}
        disabled={sending}
        style={{
          width: "100%",
          padding: 15,
          fontSize: 18,
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: 12,
        }}
      >
        {text[lang].submit}
      </button>

      {popup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: 30,
              borderRadius: 12,
              fontSize: 18,
            }}
          >
            {popup}
          </div>
        </div>
      )}
    </div>
  );
}
