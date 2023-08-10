import React, { useState } from "react";
import CartItem from "./CartItem";
import Product from "./Product";

function ShopCart() {
  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      productName: "Cola",
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },

    {
      id: 3,
      productName: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      productName: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      productName: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 6,
      productName: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 7,
      productName: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 8,
      productName: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 9,
      productName: "Bisiklet",
      price: 1000,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },
    {
      id: 10,
      productName: "Lüx Kol Saati",
      price: 25000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.TjpFxL4ElrM-aqDB1n4xJAHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 11,
      productName: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 12,
      productName: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 13,
      productName: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 14,
      productName: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 15,
      productName: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 16,
      productName: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 17,
      productName: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 18,
      productName: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 22,
      productName: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      id: 23,
      productName: "Bitcoin",
      price: 60000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
    {
      id: 19,
      productName: "Messi Tshirt",
      price: 250,
      image:
        "https://cdna.lystit.com/photos/macys/15c3d696/adidas-WhiteLightBlue-Lionel-Messi-Argentina-National-Team-Player-T-shirt.jpeg",
    },
  ]);

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItem.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartItem([...cartItem]);
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };
  const [isCartItemOpen, setIsCartItemOpen] = useState(false);
  const closeItem = () => {
    setIsCartItemOpen(false);
  };
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = dataProduct.map((e) =>
        e.id === itemId ? { ...e, quantity: newQuantity } : e
      );
      dataProduct(editQuantity);
    }
  };
  return (
    <div className="container">
      <div className="row ">
        {dataProduct.map((element, index) => (
          <div key={index} className="col-lg-3  mb-5">
            <Product elementProduct={element} addToCart={addToCart} />
          </div>
        ))}
      </div>

      <section className="box-3">
        <div className="container">
          <div className="product-hunt"></div>
        </div>
        <button>Add to cart: {cartItem.length}</button>
        {isCartItemOpen && (
          <CartItem
            closeItem={closeItem}
            dataProduct={cartItem}
            updateQuantity={updateQuantity}
          />
        )}
      </section>
    </div>
  );
}

export default ShopCart;
