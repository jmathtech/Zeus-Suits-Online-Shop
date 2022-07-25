import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Image from "../../img/product_01.jpg";
import Image2 from "../../img/product_02.jpg";
import Image3 from "../../img/product_03.jpg";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div class="row">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={Image} alt="" />
              <span class="card-title"> Classic Gingham Navy Shirt </span>
            </div>
            <div class="card-content">
              <p>
                Add the Classic Gingham Navy Non-Iron Dress Shirt to your
                wardrobe today. In classic navy, this non-iron gingham dress
                shirt can easily transition from work to weekend wear.
              </p>
            </div>
            <div class="card-action">
              <Link to="#">ADD TO CART</Link>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={Image2} alt="" />
              <span class="card-title"> 1905 Collection Slim Fit </span>
            </div>
            <div class="card-content">
              <p>
                Suit separates let you choose jacket, pants, and vest sizes
                separately for an ideal fit. Create your own tailored look with
                these pieces from the Travel Tech Collection.
              </p>
            </div>
            <div class="card-action">
              <Link to="#">ADD TO CART</Link>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={Image3} alt="" />
              <span class="card-title">Reserve Collection Dotted Tie</span>
            </div>
            <div class="card-content">
              <p>
                Brighten the day with the color and pattern of this fine silk
                tie by the Reserve Collection. Regular length. 3-1/8 inches
                wide. 100% silk. Dry clean only. Imported.
              </p>
            </div>
            <div class="card-action">
              <Link to="#">ADD TO CART</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
