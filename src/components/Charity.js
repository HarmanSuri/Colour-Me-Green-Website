import React, { Component } from "react";
	
	export class Charity extends Component {
		render() {
    return (
      <div className='container'>
        <div
          class='jumbotron jumbotron-fluid rounded px-3 py-3 text-center'
          style={{ backgroundColor: "#F51B00" }}
        >
          <h2 class='mb-40 font-weight-light'>
            Charity
          </h2>
        </div>
        <div class='container'>
          <div class='row '>
            <div class='col-lg-6'>
              <h3>Greenpeace</h3>
              <img
                src='http://eskipaper.com/images/greenpeace-4.jpg'
                class='img-fluid img-thumbnail rounded'
                alt='Responsive image'
              />
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
               Greenpeace is a fully independent environmental organization that was founded in 1971 in Vancouver.
              The organization’s main mission is to "ensure the ability of the Earth to nurture life in all its 
              diversity" and they participate in debates regarding climate changes, overfishing, deforestation 
              and many other worldly issues. Learn more at <a link href='https://www.greenpeace.org/canada/en/'>https://www.greenpeace.org/canada/en/</a>
              </p>
            </div>
            <div class='col-lg-6'>
              <h3>Team Trees</h3>
              <img
                src='https://discoverystudios.com/wp-content/uploads/2019/10/Simple-Website-TeamTrees.png'
                class='img-fluid img-thumbnail rounded'
                alt='Responsive image'
              />
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                The following charity is a popular organization that originated from the idea of YouTubers MrBeast 
                and Mark Robers. The organization plans on planting 20 million trees by the end of this year. The organization has
                 attracted many people, including $100,000 donations from many celebrities. Learn
                more at <a link href='https://teamtrees.org/ '>https://teamtrees.org/ </a>
              </p>
            </div>
            <div class='col-lg-6 rounded'>
              <h3>World Wide Fund for Nature</h3>
              <div>
                <img
                  src='http://fcb.co.nz/wp-content/uploads/2018/11/WWF-1920X1080.jpg'
                  class='img-fluid img-thumbnail rounded'
                  alt='Responsive image'
                />
              </div>
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                The World Wide Fund for Nature organization was formally named the World Wildlife Fund and works in the field of wildlife
                 preservation. The company was founded in 1961 and has expanded exponentially since then and is now international. Learn
                more at <a link href='https://www.worldwildlife.org/'>https://www.worldwildlife.org/ </a>
              </p>
            </div>
            <div class='col-lg-6 px-3 py-3'>
              <h3>Nature Canada</h3>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Nature_Canada_logo.svg/1200px-Nature_Canada_logo.svg.png'
                class='img-fluid img-thumbnail rounded'
                alt='Responsive image'
              />
              <p
                class='mt-3 px-3 py-3 rounded'
                style={{ backgroundColor: "white", color: "#228b22" }}
              >
                This organization can be useful if you’re looking to donate to an organization to help out your Canada. 
                Just like the WWF, the organization focuses on helping wild animals and prevent the cutting down of their
                 habitats, which means the organization also supports the conservation of the environment, which is what 
                 humanity needs as of now. Learn more about this organization at <a link href='https://naturecanada.ca/'>https://naturecanada.ca/ </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charity;
