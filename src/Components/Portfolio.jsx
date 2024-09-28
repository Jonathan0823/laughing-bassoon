/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AnimeList using next js",
    description:
      "Created website for showing any information about anime, using next js, it also have authoritation with github and this website also can connect to the database",
    url: "https://github.com/Jonathan0823/animeweb-using-next",
  },
  {
    title: "Weather App",
    description:
      "I also Created weather app that fetch API in order to get any information, made using python programming language",
    url: "https://github.com/Jonathan0823/Weather-Using-API",
  },
  {
    title: "Simple Movie Web",
    description:
      "Created using React, this website also fetches API to the web to show any information about movies",
    url: "https://github.com/Jonathan0823/First-React",
  },
  {
    title: "Calculator web",
    description:
      "I tried a bit of stying with this project, and some simple javascript to make the computation work in the web.",
    url: "https://github.com/Jonathan0823/Calculator-Web",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
