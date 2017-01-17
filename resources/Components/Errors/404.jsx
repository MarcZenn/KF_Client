// import React
import React, {Component} from 'react';

class PageNotFound extends Component {
  render() {
    return (
      <section className="fallout-wrapper">
        <div className="terminal-overlay"></div>
        <div className="terminal-scanline"></div>
        <div className="text-center flexbox-aligner copy-404">
          <h1 className="flexbox-aligner-item">Oops.. <br /><span>404</span> <br /> you requested a page that does not exist. SYSADMIN has been notified.</h1>
        </div>
      </section>
    )
  }
}


PageNotFound.propTypes = {
  // propTypes
}

export default PageNotFound
