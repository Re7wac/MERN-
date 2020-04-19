import React from "react";

const Slider = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row ">
        <div className="col-md-12 col-lg-12 post-container">
          <div className="m-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner  size">
                <div className="carousel-caption d-none d-md-block">
                  <p>Do you want to be a tandem partner?</p>
                  <button className="btn btn-success">Register</button>
                </div>
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://newevolutiondesigns.com/images/freebies/nature-hd-background-12.jpg"
                    alt="First"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                    alt="Second slide"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://wallpapertag.com/wallpaper/full/c/6/7/392342-3d-background-1920x1080-for-pc.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
