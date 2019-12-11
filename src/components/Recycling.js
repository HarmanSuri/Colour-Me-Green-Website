import React, { Component } from "react";
	
	export class Recycling extends Component {
		render() {
    return (
      <div className='container'>
        <div
          class='jumbotron jumbotron-fluid rounded px-3 py-3 text-center'
          style={{ backgroundColor: "#4169E1" }}
        >
          <h3 class='mb-4 font-weight-light'>
            Recycling
          </h3>
        </div>
        <div class='container'>
          <div class='row '>
            <div class='col-lg-18'>
              <h3>List of City Waste Mangement Plans in The GTA</h3>
              <p
                class='mt-30 px-3 py-3 rounded'
                fontSize = '30'
                style={{ backgroundColor: "white", color: "#000000", fontSize: "30"}}
              ><ul>
                <li><a link href="https://www.ajax.ca/en/get-involved/garbage-and-recycling.aspx">Ajax</a></li>
				<li><a link href="https://www.brampton.ca/EN/residents/garbage-recycling/Pages/garbage-recycling.aspx">Brampton</a></li>
				<li><a link href="https://www.burlington.ca/en/services-for-you/garbage-and-recycling.asp">Burlington</a></li>
				<li><a link href="https://www.markham.ca/wps/portal/home/neighbourhood-services/recycling-garbage">Markham</a></li>
				<li><a link href="http://www.mississauga.ca/portal/residents/wasteandrecycling">Mississauga</a></li>
				<li><a link href="https://www.newmarket.ca/LivingHere/Pages/Waste,-Recycling-and-Organics.aspx">Newmarket</a></li>
				<li><a link href="https://www.halton.ca/For-Residents/Recycling-Waste/Waste-Recycling-Sorting-Guide">Oakville</a></li>
				<li><a link href="https://www.oshawa.ca/residents/Garbage-Recycling-GreenBin.asp">Oshawa</a></li>
				<li><a link href="https://www.durham.ca/en/living-here/garbage-recycling-green-bin-and-other-collection.aspx">Pickering</a></li>
				<li><a link href="https://www.richmondhill.ca/en/our-services/Garbage-and-Recycling.aspx">Richmond Hill</a></li>
				<li><a link href="https://www.vaughan.ca/services/residential/solid_waste_management/what_goes_where/Pages/default.aspx">Vaughan</a></li>
				<li><a link href="https://www.whitby.ca/en/residents/garbageandrecycling.asp">Whitby</a></li>
				</ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recycling;