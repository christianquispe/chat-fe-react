import React from 'react';
import Header from '../../components/header';
import Aside from '../../components/aside';
import Chat from '../../components/chat';
import { Row, Container, Col } from 'react-grid';
import useWindowDimensions from '../../hooks/windowsDimension';





function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Header>
         Zoxed - width: {width} ~ height: {height}
      </Header>
      <Container fluid>
        <Row >
          <Col sm={2} style={{padding:'0', height: height}}>
            <Aside />
          </Col>
          <Col sm={10} style={{height: height, padding:'0'}}>
            <Chat height={height} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
