import React, { Component } from "react";
import Background_1 from "./static/images/DSC_4853.jpg";

class Parallax extends Component {
  state = {};
  render() {
    return (
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            <div
              className="item-slick1 item1-slick1"
              style={{ backgroundImage: `url(${Background_1})` }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-0 p-b-0">
                <span
                  className="caption1-slide1 tit1 t-center animated visible-false m-b-15"
                  data-appear="fadeInDown"
                >
                  La petite portugaise
                </span>

                <h2
                  className="caption2-slide1 txt1 t-center animated visible-false m-b-37"
                  data-appear="fadeInUp"
                >
                  Book store & Event venue
                </h2>

                <div
                  className="wrap-btn-slide1 animated visible-false"
                  data-appear="zoomIn"
                >
                  <a
                    href="{% url 'contact"
                    className="btn1 flex-c-m size1 txt3 trans-0-4"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>

            {/* <div
              className="item-slick1 item2-slick1"
              style='background-image: url("/home/hugo/Development/la_petite_portugaise/static/images/DSC_4875.jpg");'
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170" />
            </div>

            <div
              className="item-slick1 item3-slick1"
              style='background-image: url("/home/hugo/Development/la_petite_portugaise/static/</section>images/DSC_5034.jpg");'
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170" />
            </div>

            <div
              className="item-slick1 item3-slick1"
              style='background-image: url("/home/hugo/Development/la_petite_portugaise/static/images/DSC_4956.jpg");'
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170" />
            </div>

            <div
              className="item-slick1 item3-slick1"
              style='background-image: url("/home/hugo/Development/la_petite_portugaise/static/images/DSC_4967.jpg");'
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170" />
            </div>

            <div
              className="item-slick1 item3-slick1"
              style='background-image: url("/home/hugo/Development/la_petite_portugaise/static/images/DSC_5015.jpg");'
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170" />
            </div> */}
          </div>

          <div className="wrap-slick1-dots" />
        </div>
      </section>
    );
  }
}

export default Parallax;
