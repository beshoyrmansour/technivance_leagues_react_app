import React, { useState, useEffect } from "react";

const PlayerCardComp = props => {
  const [playerBackgroundColor, setPlayerBackgroundColor] = useState("#092F42");
  const [playerTextColor, setPlayerTextColor] = useState("#ffffff");
  useEffect(() => {
    switch (props.palyerData.position) {
      case "Defender":
        setPlayerBackgroundColor("#092F42");
        setPlayerTextColor("#ffffff");
        break;
      case "Goalkeeper":
        setPlayerBackgroundColor("#4382F3");
        setPlayerTextColor("#ffffff");
        break;

      case "Midfielder":
        setPlayerBackgroundColor("#3DDB86");
        setPlayerTextColor("#092F42");
        break;

      case "Attacker":
        setPlayerBackgroundColor("#F96734");
        setPlayerTextColor("#092F42");
        break;

      default:
        setPlayerBackgroundColor("#ffffff");
        setPlayerTextColor("#F96734");
        break;
    }
    return () => {
      //cleanup
    };
  }, []);
  return (
    <div className="card mb-3" style={{ backgroundColor: playerBackgroundColor }}>
      <div className="card-body h-100 d-flex align-items-start justify-content-center flex-column">
        <h2 className="card-title " style={{ color: playerTextColor }}>
          {props.palyerData.name}
        </h2>
        {props.palyerData.role === "PLAYER" ? (
          <h3 className="card-title " style={{ color: playerTextColor }}>
            Position: <strong style={{ color: playerTextColor }}>{props.palyerData.position}</strong>
          </h3>
        ) : (
          <h3 className="card-title " style={{ color: playerTextColor }}>
            ?Role: <strong>{props.palyerData.role}</strong>
          </h3>
        )}
        <h5 className="card-title " style={{ color: playerTextColor }}>
          Nationality:<strong style={{ color: playerTextColor }}> {props.palyerData.nationality}</strong>
        </h5>
      </div>
    </div>
  );
};

export default PlayerCardComp;
