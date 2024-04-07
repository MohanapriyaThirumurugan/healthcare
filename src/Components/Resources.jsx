import React from 'react';
import Card from 'react-bootstrap/Card';

function Resources({ tip, settips }) {
  return (
    <div className='resource-container'>
      <h3>Here to refer how to be healthy in your life</h3>
      {tip.map((e, i) => (
        <div className='resource' key={i}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Link href={e.src}>Reference</Card.Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Resources;
