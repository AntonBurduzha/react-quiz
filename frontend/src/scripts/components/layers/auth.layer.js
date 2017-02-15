import {Grid, Row, Col} from 'react-bootstrap'
import React from 'react'

const AuthLayer = (props) => {
  return (
    <Grid>
      <Row className="article-home-cols">
        <Col mdOffset={3} md={6} className="article-home">
          {props.children}
        </Col>
      </Row>
    </Grid>
  );
};

export {
  AuthLayer
}