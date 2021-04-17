import React from "react";
import './style.scss';

function HomePage() {
  return (
    <div>

      <div>Get ready for the festive season</div>
      <div style={{display: "flex", justifyContent:'center'}}>
        <img className="card-image-landing-page"
             src="http://assets.myntassets.com/v1/assets/images/7024471/2018/9/22/57673c9e-5888-4d9c-9fa5-8ba0b8d890401537617384510-Rohit-Bal-Limited-Men-Black-Solid-Kurta-with-Churidar-1221537617384402-1.jpg "
             alt="product img"/>
        <img className="card-image-landing-page"
             src="http://assets.myntassets.com/v1/assets/images/productimage/2019/7/19/8cc6e36f-ee87-45ad-ae99-7fd5045b63fe1563537411193-1.jpg"
             alt="product img"/>
      </div>


      <div style={{display: "flex", justifyContent:'center'}}>
        <img className="card-image-landing-page"
             src="http://assets.myntassets.com/v1/assets/images/2529852/2018/3/12/11520832694042-SKD-4691520832693916-1.jpg "
             alt="product img"/>
        <img className="card-image-landing-page"
             src="http://assets.myntassets.com/v1/assets/images/7572945/2018/10/17/2c89d921-a63a-43a3-aed3-84bae7cacc0b1539775072128-Vishudh-Women-Kurta-Sets-411539775070230-1.jpg "
             alt="product img"/>
      </div>


      <div style={{display: "flex", justifyContent:'center'}}>
        <img className="card-image-landing-page"
             src="http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/9e668546-91c1-4b77-9752-8ece4f9f8d4f1552583929386-1.jpg "
             alt="product img"/>
        <img className="card-image-landing-page"
             src="http://assets.myntassets.com/v1/assets/images/2348505/2017/12/16/11513424716664-AJ-Dezines-Kids-Kurta-Pyjama-Waistcoat-Set-for-Baby-Boys-3611513424716465-1.jpg "
             alt="product img"/>
      </div>
    </div>
  );
}

export default HomePage;
