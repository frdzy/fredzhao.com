import React from 'react';
import ImageLoader from './ImageLoader';

export default class Building20 extends React.Component {
  state = {
    currentPhotoIndex: 0,
    artificialLatency: 0,
  };

  _getNextIndex = () => {
    var nextIndex = this.state.currentPhotoIndex + 1;
    return nextIndex % this.props.photoData.length;
  };

  _advanceImage = () => {
    this.setState({
      currentPhotoIndex: this._getNextIndex(),
    });
  };

  _renderImage = (photo) => {
    var src = photo.path;
    var captions = [];
    photo.caption.split('\n').forEach(function (line, index) {
      captions.push(<span key={'span.' + index}>{line}</span>);
      captions.push(<br key={'br.' + index} />);
    });

    const viewerStyle = {
      maxWidth: 720,
    };
    const timeLabelStyle = {
      position: 'absolute',
      backgroundColor: 'aliceblue',
      borderRadius: 2,
      opacity: 0.5,
      margin: 1,
      paddingLeft: 5,
      paddingRight: 5,
    };
    return (
      <div style={viewerStyle}>
        <div style={timeLabelStyle}>
          {photo.timestamp.toDateString()} ({this.state.currentPhotoIndex + 1} /{' '}
          {this.props.photoData.length})
        </div>
        <ImageLoader
          src={src}
          onClick={this._advanceImage}
          artificialLatency={this.state.artificialLatency}
        />
        <blockquote>{captions}</blockquote>
      </div>
    );
  };

  onLatencyChange = (evt) => {
    this.setState({
      artificialLatency: +evt.target.value,
    });
  };

  render() {
    var photo = this.props.photoData[this.state.currentPhotoIndex];

    return <div>{this._renderImage(photo)}</div>;
  }
}
