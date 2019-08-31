import React from "react";

const PlayerCardCompPlaceholder = props => {
  let blockes = [];
  for (let i = 0; i < props.times; i++) {
    blockes.push({
      id: i,
      blockContent: () => (
        <div className="card mb-3">
          <div className="card-body h-100 d-flex align-items-start justify-content-center flex-column">
            <h4 className="card-title animated_background" style={{ width: "180px", height: "40px" }}></h4>
            <h4 className="card-title animated_background" style={{ width: "120px", height: "40px" }}></h4>
            <h4 className="card-title animated_background" style={{ width: "120px", height: "40px" }}></h4>
          </div>
        </div>
      )
    });
  }

  return (
    <React.Fragment>
      {blockes.map(block => (
        <block.blockContent key={block.id} />
      ))}
    </React.Fragment>
  );
};

export default PlayerCardCompPlaceholder;
