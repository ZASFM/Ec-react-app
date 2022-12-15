import React from 'react';
import storeItems from '../data/items.json';
import {Col,Row} from 'react-bootstrap';
import StoreItem from '../components/StoreItem';

const Store=()=>{
   return (
      <div>
         Store
         <Row md={2} xs={1} lg={3} className="g-3">
            {
               storeItems.map(item=>{
                  return (
                     <Col>
                        <StoreItem
                           key={item.id}
                           {...item}
                        />
                     </Col>
                  )
               })
            }
         </Row>
      </div>
   )
}

export default Store