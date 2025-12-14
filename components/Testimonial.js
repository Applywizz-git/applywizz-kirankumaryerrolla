"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">Testimonials & Recommendations</span>
                    <h2>
                      Hear What <span>My Team & Mentors</span> Say
                    </h2>
                    <p>
                      I’ve partnered with data scientists, analysts, and product teams to build scalable lakehouse platforms.
                      Here's what they say about my contributions to data architecture, streaming pipelines, and warehouse modernization.
                    </p>
                  </div>

                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img src="assets/images/testimonials/image2_men.png" alt="Author" class="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “Kiran's automated ingestion pipelines on Databricks improved our daily updates by 90%. His architecture is robust, scalable, and significantly reduced our manual data wrangling efforts.”
                    </div>
                    <div className="testi-des">
                      <h5>Michael R.</h5>
                      <span>Data Architect, Rocket Mortgage</span>
                    </div>
                  </div>

                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img src="assets/images/testimonials/image1_women.png" alt="Author" class="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “The real-time streaming ingestion he built with Kinesis and Spark gave us visibility into pharmacy activity in minutes instead of hours, which was a game-changer for our operations team.”
                    </div>
                    <div className="testi-des">
                      <h5>Anita S.</h5>
                      <span>Analytics Lead, CVS Health</span>
                    </div>
                  </div>

                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img src="assets/images/testimonials/image1_men.png" alt="Author" class="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “Kiran optimized our EMR workflows and reduced query runtimes by 40%. His deep knowledge of Spark internals and AWS infrastructure helped us scale our operational reporting efficiency.”
                    </div>
                    <div className="testi-des">
                      <h5>Raj K.</h5>
                      <span>Senior SDM, Amazon</span>
                    </div>
                  </div>

                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img src="assets/images/testimonials/image2_women.png" alt="Author" class="testimonial-avatar" />
                    </div>
                    <div className="text">
                      “His work on migrating our SQL Server workloads to AWS and automating quality checks saved us countless hours of manual reconciliation and improved report accuracy significantly.”
                    </div>
                    <div className="testi-des">
                      <h5>Lisa M.</h5>
                      <span>Finance Manager, Cholamandalam</span>
                    </div>
                  </div>
                </Slider>

              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    );
  }
}
