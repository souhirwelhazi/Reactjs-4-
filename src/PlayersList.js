import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {players.slice(0, 2).map((player, index) => (
          <Player
            key={index}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageURL={player.imageURL} 
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {players.slice(2, 4).map((player, index) => (
          <Player
            key={index} 
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageURL={player.imageURL} 
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;

