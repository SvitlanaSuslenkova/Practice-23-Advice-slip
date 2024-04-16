import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./TrialGot.css";

export default function TrialGot() {
  return (
    <div className="trialGotDiv">
      <p className="signedup">You have signed up for our 30-day trial!</p>
      <p className="wearehappy">We are happy to work with you!</p>
      <Link to="..">
        <Button type="submit" text="Return" />
      </Link>
    </div>
  );
}
