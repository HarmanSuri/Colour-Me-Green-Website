import React, { Component } from "react";
	
	export class Charity extends Component {
		render() {
    return (
      <div className='container'>
        <div
          class='jumbotron jumbotron-fluid rounded px-3 py-3 text-center'
          style={{ backgroundColor: "#049660" }}
        >
          <h3 class='mb-4 font-weight-light'>
            Charity
          </h3>
          <img
            src='https://ichef.bbci.co.uk/news/660/cpsprodpb/11178/production/_99180007_mediaitem99180006.jpg'
            class='img-fluid img-thumbnail rounded'
            alt='Responsive image'
          />
          <h6 class='mt-4 font-weight-light'>
            We Aren't Describing the Apocolypse - We Are Describing A Future
            Where You Don't Take Action.
          </h6>
          <p class='mt-4 font-weight-light'>
            We know we have been a part of the problem, but now it's time to be
            a part of the solution:
          </p>
        </div>
        <div class='container'>
          <div class='row '>
            <div class='col-lg-6'>
              <h3>Lifestyle Changes</h3>
              <img
                src='http://www.enviroalternatives.com/Assets%20Images/LL.jpg'
                class='img-fluid img-thumbnail rounded'
                alt='Responsive image'
              />
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                Changes in your lifestyle, whether small or large, can go on to
                make a big difference. <a href='/'>Learn more</a> about changes
                in your lifestyles that you can make to make a difference.
              </p>
            </div>
            <div class='col-lg-6'>
              <h3>Recycling</h3>
              <img
                src='https://assets.thesca.org/styles/840x480/s3/s3fs-public/field/image/PlasticBottlesRecycle_Pixabay_840x480.png?itok=7VMIl9-l'
                class='img-fluid img-thumbnail rounded'
                alt='Responsive image'
              />
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                Recycling may seem like a menial activity, but every time you
                dispose of an item, you contribute to the environment's health.{" "}
                <a href='/'>Learn more</a> about proactive measures that can
                help you recycle smarter.
              </p>
            </div>
            <div class='col-lg-6 rounded'>
              <h3>Charity</h3>
              <div>
                <img
                  src='https://storage.googleapis.com/planet4-canada-stateless/2018/06/GP0STQSXG.jpg'
                  class='img-fluid img-thumbnail rounded'
                  alt='Responsive image'
                />
              </div>
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                Your change can make a change. <a href='/Charity'>Learn more</a> about
                different charities that can help put your money to work in
                hopes of saving the environment.
              </p>
            </div>
            <div class='col-lg-6 px-3 py-3'>
              <h3>Climate Change Events</h3>
              <img
                src='http://thesthapatigroup.in/images/education/1.jpg'
                class='img-fluid img-thumbnail rounded'
                alt='Responsive image'
              />
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                Engage with your local community about new research regarding
                climate change and community intiatives that you can take.{" "}
                <a href='/'>Learn more</a> about different climate change events
                in your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charity;