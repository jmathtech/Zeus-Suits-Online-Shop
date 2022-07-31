import React from "react";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <div class="midtier">
      <div class="container">
        <h1 class="text-center">NEW ARRIVAL ACCESSORIES</h1>
        <div class="box-header">
          <div class="container">
            <div class="row">
              <div class="col s12 m4">
                <div class="card large">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="../../img/suits/001/suits_001.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Suit 01<i class="material-icons right">more_vert</i>
                    </span>
                    <p>Price: $6799.99</p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      Suit 01<i class="material-icons right">close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                    <p>Price: $6799.99</p>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="card large">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="../../img/suits/001/suits_002.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Suit 02<i class="material-icons right">more_vert</i>
                    </span>
                    <p>Price: $8999.99</p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      Suit 02<i class="material-icons right">close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                    <p>Price: $8999.99</p>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="card large">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="../../img/suits/001/suits_003.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Suit 03<i class="material-icons right">more_vert</i>
                    </span>
                    <p>Price: $10699.99</p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      Suit 03<i class="material-icons right">close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                    <p>Price: $10699.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
