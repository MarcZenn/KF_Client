// import React
import React, {Component} from 'react';



class Spinner extends Component {
  render() {
    return (
      <section>
        <div className="text-center flexbox-aligner">
          <Row>
            <Col xs={12}>
              <h1 className="flexbox-aligner-item">Accessing Device Terminal...</h1>
            </Col>
            <Col xs={12}>
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}


Spinner.propTypes = {
  // propTypes
}

export default Spinner
