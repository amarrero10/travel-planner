import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Landing() {
  return (
    <>
      <div>
        <div>IMAGE</div>
        <div>
          <h1>Plan your next trip</h1>
          <p>Organize your trip with ease and customize it to your liking!</p>
          <div>
            <Link to="/login">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
