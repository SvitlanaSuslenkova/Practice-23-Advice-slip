import { useState } from "react";
import { Link } from "react-router-dom";
import iconchecked from "../assets/icon-check.svg";
import ChallengeBy from "../components/ChallengeBy";
import Button from "../components/Button";
import InputRange from "../components/InputRange";
import InputCheckbox from "../components/InputCheckbox";

function Home() {
  const [data, setData] = useState(100);
  const [year, setYear] = useState(false);
  const rangeValue = (e) => setData(e.target.value);
  const priceforyear = () => {
    !year ? setYear(true) : setYear(false);
  };
  let ppmFor100kViews = 16;
  console.log(data);
  return (
    <>
      <header>
        <h2>Simple, traffic-based pricing</h2>
        <div>
          <p className="signup">Sign-up for our 30-day trial. </p>
          <p className="signup">No credit card required.</p>
        </div>
      </header>
      <div className="container">
        <form>
          <div className="viewsandpriceDiv">
            <p className="pageviews">
              <span className="views">{data}</span>k pageviews
            </p>
            <div className="inputandviews">
              <InputRange
                type="range"
                min="0"
                max="200"
                defaultValue="100"
                step="1"
                value={data}
                onChange={rangeValue}
              />

              <div className="viewsGot" style={{ width: `${data / 2}%` }}></div>
            </div>
            <h1>
              $
              {year
                ? (((ppmFor100kViews * 12 * 0.75) / 100) * data).toFixed(2)
                : ((ppmFor100kViews / 100) * data).toFixed(2)}
              <span className="monthORyear"> / {year ? "year" : "month"}</span>
            </h1>
          </div>
          <div className="billingDiv">
            <span className="billingSpan">Monthly Billing</span>
            <InputCheckbox
              type="checkbox"
              id="yearon"
              htmlFor="yearon"
              onClick={priceforyear}
            />

            <span className="billingSpan">Yearly Billing</span>
            <span className="discountSpan">
              -25%<span className="discoutWord"> discount</span>
            </span>
          </div>
          <div className="hrline"></div>
          <div className="listandbuttonDiv">
            <ul className="advantagesList">
              <li>
                <img src={iconchecked} className="iconchecked" alt="" />
                Unlimited websites
              </li>
              <li>
                <img src={iconchecked} className="iconchecked" alt="" />
                100% data ownership
              </li>
              <li>
                <img src={iconchecked} className="iconchecked" alt="" />
                Email reports
              </li>
            </ul>
            <Link to="trial">
              <Button
                type="submit"
                text="Start my trial"
                disabled={data == 0 ? true : false}
              />
            </Link>
          </div>
        </form>
      </div>
      <ChallengeBy />
    </>
  );
}

export default Home;
