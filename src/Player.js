import React from "react";
import Card from "react-bootstrap/Card";



const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
 
  return (
    <Card style={{ backgroundColor: 'beige',overflow:'hidden', borderRadius:'10px', transition: 'transform 0.3s ease-in-out', margin:'20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transform:'inherit'}}>
      <Card.Img variant="top" src={imageURL}  style={{ width: '300px', height: '400px' }} />
      <Card.Body>
        <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: 'red' }}>{name}</Card.Title>
        <Card.Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
        <span style={{fontWeight:'bold',color:'#333'}}>Team:</span> <span style={{color:'#666',fontStyle:'italic'}}>{team}</span><br />
        <span style={{fontWeight:'bold',color:'#333'}}> Nationality: </span> <span style={{color:'#666',fontStyle:'italic'}}>{nationality}</span><br />
        <span style={{fontWeight:'bold',color:'#333'}}>Jersey Number: </span><span style={{color:'#666',fontStyle:'italic'}}> {jerseyNumber}</span><br />
        <span style={{fontWeight:'bold',color:'#333'}}> Age: </span> <span style={{color:'#666',fontStyle:'italic'}}>{age}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
