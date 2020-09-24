import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="PS5 and PS5 Digital Edition deliver lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games."
            price={499.0}
            rating={5}
            image="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-11-23-50/ps5-exclusive-first-party-confirmed-games-6300-1591915809942.jpg/EG11/thumbnail/750x422/format/jpg/quality/60"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Xbox Series X Console"
            price={499.99}
            rating={4}
            image="https://azcd.harveynorman.com.au/media/catalog/product/x/b/xbox_series_x_2.jpg"
          />
          <Product
            id="23445930"
            title="Rasta Bubble Bong"
            price={98.99}
            rating={5}
            image="https://eurogrow.es/5460-large_default/bong-rasta-20-cm.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
