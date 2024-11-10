import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function MealDetails() {
  const [detail, setDetail] = useState([]);

  const params = useLoaderData();

  const getDetail = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        console.error(response);
        return;
      }

      setDetail(data.meals);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="container px-3 py-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid rounded-4"
            src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <h1>Ayam Percik"</h1>
          <div>
            <strong>Category:</strong> Chicken
          </div>
          <div>
            <strong>Area:</strong> Malaysian
          </div>
          <table className="table table-striped table-dark my-4">
            <tbody>
              <tr>
                <th>Chicken Thighs</th>
                <td>6</td>
              </tr>
              <tr>
                <th>Chicken Thighs</th>
                <td>6</td>
              </tr>
              <tr>
                <th>Chicken Thighs</th>
                <td>6</td>
              </tr>
              <tr>
                <th>Chicken Thighs</th>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tabs">
            <div className="single-tabs tabs-two">
              <ul className="nav nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="active"
                    id="tab-two-one-tab"
                    data-bs-toggle="tab"
                    href="#tab-two-one"
                    role="tab"
                    aria-controls="tab-two-one"
                    aria-selected="true"
                  >
                    TAB 01
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="tab-two-two-tab"
                    data-bs-toggle="tab"
                    href="#tab-two-two"
                    role="tab"
                    aria-controls="tab-two-two"
                    aria-selected="false"
                  >
                    TAB 02
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="tab-two-three-tab"
                    data-bs-toggle="tab"
                    href="#tab-two-three"
                    role="tab"
                    aria-controls="tab-two-three"
                    aria-selected="false"
                  >
                    TAB 03
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="tab-two-four-tab"
                    data-bs-toggle="tab"
                    href="#tab-two-four"
                    role="tab"
                    aria-controls="tab-two-four"
                    aria-selected="false"
                  >
                    TAB 04
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-two-one"
                  role="tabpanel"
                  aria-labelledby="tab-two-one-tab"
                >
                  <div className="tab-text">
                    <p className="text">
                      Raw denim you probably haven’t heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. <br />
                      <br />
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-two-two"
                  role="tabpanel"
                  aria-labelledby="tab-two-two-tab"
                >
                  <div className="tab-text">
                    <p className="text">
                      ge
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-two-three"
                  role="tabpanel"
                  aria-labelledby="tab-two-three-tab"
                >
                  <div className="tab-text">
                    <p className="text">
                      Raw denim you probably haven’t heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. <br />
                      <br />
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-two-four"
                  role="tabpanel"
                  aria-labelledby="tab-two-four-tab"
                >
                  <div className="tab-text">
                    <p className="text">
                      Raw denim you probably haven’t heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. <br />
                      <br />
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
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

export default MealDetails;
