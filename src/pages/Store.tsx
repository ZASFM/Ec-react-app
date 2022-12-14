import React from 'react';
import storeItems from '../data/items.json';
import {Col,Row} from 'react-bootstrap';
const Store=()=>{
   return (
      <div>
         Store
         <Row>
            {
               storeItems.map(item=>{
                  return (
                     <Col>
                        {JSON.stringify(item)}
                     </Col>
                  )
               })
            }
         </Row>
      </div>
   )
}

export default Store