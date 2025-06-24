import React from "react";

function RightSection({
  imageUrl,
  topic,
  description,

  learnmore,
}) {
  return (
    <div className="container  ml-5 " style={{ color: "#424242" }}>
      <div className="row mt-5 pt-5  ">
        <div className="col-1"></div>
        <div
          className="col-4 p-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              className="mt-3"
              style={{ fontSize: "2rem", lineHeight: "1.5" }}
            >
              {topic}
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              {description}
            </p>
            <div className="link_one p-2 mb-3">
              <a href={learnmore} style={{ textDecoration: "none" }}>
                Learn More
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
        <div className="col-5">
          <img src={imageUrl} style={{ width: "100%" }} />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
