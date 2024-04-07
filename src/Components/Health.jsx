import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Health({tip,settips}) {
  // console.log(tip);

  
    return (
    <div className="card-container">
      {tip.map((e, i) => {
        return (
          <Card key={i} className='custom-card'>
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.des}</Card.Text>
              <Card.Img src={e.img} />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
    



}

export default Health