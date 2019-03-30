import React from 'react';
import { Segment, Dimmer } from 'semantic-ui-react';

class ImagesComponent extends React.Component {
  state = {
    activeDimmer: false,
    itemID: ''
  }

  handleOpen = (e) => {
    let itemID = e.target.getAttribute("src");
    console.log(itemID);
    this.setState({ activeDimmer: true, itemID });
  }

  handleClose = () => this.setState({ activeDimmer: false });

  render() {
    return (
      <div>
        {this.props.moreThanZeroImages
          ? this.props.images.map(item => (
              <img key={item.id} src={item.img_src} alt={item.id} onClick={this.handleOpen} />
          ))
          : <p>Sorry, there's no photos from that day or type of camera. Please check another ones.</p>}

        <Dimmer active={this.state.activeDimmer} onClick={this.handleClose} page>
          <Segment inverted>
            <img src={this.state.itemID} alt={this.state.itemID} />
          </Segment>
        </Dimmer>
      </div>
    );
  }
}

export default ImagesComponent;