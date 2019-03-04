import React, { Component } from 'react';
import {Container} from 'reactstrap';

import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <Container className="text-muted">
                Find the code for this page and my other projects on my  <a href="https://github.com/ncgeary" rel="noopener noreferrer" className="icon" target="_blank"><i className="fab fa-github-square"></i>Github</a>
            </Container>
        </div>      
    )
  }
}

export default Footer;