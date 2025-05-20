import { useState } from "react";
import { ekMalzemeler } from "../data/EkMalzemeler";
import EkMalzemelerCheckBox from "./EkMalzemelerCheckBox";
import BreadCrumb from "./BreadCrumb";
import "./order.css";
import { useNavigate } from "react-router-dom";


export default function Order() {
  const [secimler, setSecimler] = useState(ekMalzemeler);
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [not, setNot] = useState("");
  const [adet, setAdet] = useState(1);
  const navigate = useNavigate();
  const {zorunlu} = "*";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const toggleCheckbox = (id) => {
    setSecimler((prev) => {
      const seciliSayisi = prev.filter((m) => m.isChecked).length;
      const tıklanan = prev.find((m) => m.id === id);
  
      // Seçili olanı kapatmaya çalışıyorsa: izin ver
      if (tıklanan.isChecked) {
        return prev.map((item) =>
          item.id === id ? { ...item, isChecked: false } : item
        );
      }
  
      // 10'dan fazla seçilmesine izin verme
      if (seciliSayisi >= 10) {
        alert("En fazla 10 malzeme seçebilirsiniz.");
        return prev;
      }
  
      // Normal seçim
      return prev.map((item) =>
        item.id === id ? { ...item, isChecked: true } : item
      );
    });
  };

  const seciliSayisi = secimler.filter((m) => m.isChecked).length;
  const ekstraFiyat = seciliSayisi * 5;
  const anaFiyat = 85.5;
  const toplam = (anaFiyat + ekstraFiyat) * adet;

  return(
    <div className="order-container">
      
      <div className="order-banner">
        <img className="banner-logo" src="/images/iteration-1-images/logo.svg" alt="banner-logo" />
        <BreadCrumb />
      </div>

      <form className="order-form">
      
        <div className="order-info">
          <h1 className="order-name">Position Absolute Acı Pizza</h1>

          <div className="price-score-group">
            <p className="order-price">85.50₺</p>
            <p className="order-score">4.9 (200)</p>
          </div>

        </div>

        <div className="bottom-form">

          <div className="radio-group">
            <p className="order-text">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
            <div className="size-border-choice">
              <div className="size-choice">
                <p>Boyut Seç</p>
                  {["Küçük", "Orta", "Büyük"].map((b) => (
                    <label key={b}>
                     <input
                        type="radio"
                        name="boyut"
                        value={b}
                        checked={boyut === b}
                        onChange={(e) => setBoyut(e.target.value)}
                    />
                    {b}
                    </label>
                  ))}
              </div>
              <div className="border-choice">
                  <label>
                  Hamur Seç:
                  <select value={hamur} onChange={(e) => setHamur(e.target.value)}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                  </select>
                </label>
              </div>

            </div>
            <div className="add-item">
              
              <div className="extra-items">
                <h3>Ek Malzemeler</h3>
                {secimler.map((malzeme) => (
                <EkMalzemelerCheckBox key={malzeme.id} {...malzeme} toggle={toggleCheckbox} />
                ))}
              </div>
              <div className="order-note">
                <label>
                Sipariş Notu:
                  <input
                    type="text"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    value={not}
                    onChange={(e) => setNot(e.target.value)}
                  />
                </label>
              </div>
            </div>  
                    

            <div className="adet-kontrol">
              <button type="button" onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
              <span>{adet}</span>
              <button type="button" onClick={() => setAdet(adet + 1)}>+</button>
            </div>

            <div className="fiyat-alani">
              <p>Seçimler: {ekstraFiyat.toFixed(2)}₺</p>
              <p>Toplam: {toplam.toFixed(2)}₺</p>
            </div>

            <button type="submit" className="submit-btn">SİPARİŞ VER</button>
          </div>
        </div>

      </form>

    </div>              
        
  );
}
