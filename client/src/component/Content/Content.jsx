import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div classNameName="col-10">
      <div className="m-5">
        <h5 className="font-weight-bold">Study in Germany?</h5>
        <p className="text-dark mt-3 mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          mollitia possimus ipsa quidem laboriosam delectus debitis! Quidem
          tenetur sed iure placeat.
        </p>
        <Link to="" className="d-block mb-4">
          Read More . . .
        </Link>
        <iframe
          title="s"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/njaWHhZOAfA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="m-5">
        <h5 className="font-weight-bold">Learn German</h5>
        <p className="text-dark mt-3 mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          mollitia possimus ipsa quidem laboriosam delectus debitis! Quidem
          tenetur sed iure placeat.
        </p>
        <Link to="" className="d-block mb-4">
          Read More . . .
        </Link>
        <iframe
          title="s"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/r9os9Q6t6Xc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="m-5">
        <h5 className="font-weight-bold">Life in Germany</h5>
        <p className="text-dark mt-3 mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          mollitia possimus ipsa quidem laboriosam delectus debitis! Quidem
          tenetur sed iure placeat.
        </p>
        <Link to="" className="d-block mb-4">
          Read More . . .
        </Link>
        <iframe
          title="s"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y57vU7UPAmM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Content;
