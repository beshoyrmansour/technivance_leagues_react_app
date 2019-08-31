import React from "react";

const LeagueCardCompPlaceholder = props => {
  let blockes = [];
  for (let i = 0; i < props.times; i++) {
    blockes.push({ id: i, blockContent: () =>
        <div className="card mb-3">
      <div className="d-flex flex-column flex-md-row ">
        <div className="app-card-img mw-100 animated_background">
        </div>
        <div className="w-100">
          <div className="card-body">
            <h5 className="card-title animated_background"  style={{width:"180px", height:"40px"}}></h5>
            <p className="card-text d-block animated_background"  style={{width:"100%", height:"80px" }}>
            </p>
            <p className="card-text animated_background"  style={{width:"140px", height:"40px"}}>
            </p>
          </div>
        </div>
      </div>
    </div>
       });
  }

  return (
    <div>
      {blockes.map(block => (
        <block.blockContent key={block.id} />
      ))}
    </div>
  );
};

export default LeagueCardCompPlaceholder;
