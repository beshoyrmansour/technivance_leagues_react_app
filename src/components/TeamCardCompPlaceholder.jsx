import React from "react";

const TeamCardCompPlaceholder = props => {
  let blockes = [];
  for (let i = 0; i < props.times; i++) {
    blockes.push({
      id: i,
      blockContent: () => (
        <div className="col-12 col-md-4">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4 app-card-img animated_background" style={{ width: "120px", height: "120px" }}></div>
              <div className="col-md-8">
                <div className="card-body h-100 d-flex align-items-center">
                  <h4 className="card-title animated_background" style={{ width: "180px", height: "40px" }}></h4>
                </div>
              </div>
            </div>
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

export default TeamCardCompPlaceholder;
