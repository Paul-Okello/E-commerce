import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="54321"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41+e3refnZL.jpg"
            rating={4}
          />
          <Product
            id="93145"
            title="
            Amazon Echo Dot (3rd Generation) - Heather Gray"
            price={56.99}
            image="https://target.scene7.com/is/image/Target/GUEST_818dbba2-32e3-4592-976a-07b02ab5b7f8?wid=488&hei=488&fmt=pjpeg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="23605"
            title="
            Amazon Echo Dot (3rd Generation) - Heather Gray"
            price={56.99}
            image="https://target.scene7.com/is/image/Target/GUEST_818dbba2-32e3-4592-976a-07b02ab5b7f8?wid=488&hei=488&fmt=pjpeg"
            rating={5}
          />
          <Product
            id="23105"
            title="
            Amazon Echo Dot (3rd Generation) - Heather Gray"
            price={56.99}
            image="https://target.scene7.com/is/image/Target/GUEST_818dbba2-32e3-4592-976a-07b02ab5b7f8?wid=488&hei=488&fmt=pjpeg"
            rating={2}
          />
          <Product
            id="28145"
            title="
            Amazon Echo Dot (3rd Generation) - Heather Gray"
            price={56.99}
            image="https://target.scene7.com/is/image/Target/GUEST_818dbba2-32e3-4592-976a-07b02ab5b7f8?wid=488&hei=488&fmt=pjpeg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="63845"
            title="
            Samsung UA65RU7300KXKE - 65 - Curved 4K UHD Smart"
            price={56.99}
            image="https://images.yaoota.com/lPK-8zLahgaUrTqkQEfHo11cqpo=/trim/yaootaweb-production-ke/media/crawledproductimages/c8910abf33ff1f47b8eee7a0e7a119647eb03daa.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
