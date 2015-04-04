var Canvas = React.createClass({
  getInitialState: function() {
    return {
      currentPhotoIndex: 0,
    };
  },

  _getImageDuration: function(photo) {
    var photoData = this.props.photoData;

    // Handle last photo as edge case
    var currentIndex = this.props.photoIndices[photo.id];
    if (currentIndex === photoData.length - 1) {
      return 5000;
    }

    var nextPhoto = photoData[currentIndex + 1];
    var timeTilNext = nextPhoto.timestamp - photo.timestamp;

    return timeTilNext / 1000000;
  },

  _getNextIndex: function() {
    var nextIndex = this.state.currentPhotoIndex + 1;
    return nextIndex % this.props.photoData.length;
  },

  _advanceImage: function() {
    this.setState({
      currentPhotoIndex: this._getNextIndex(),
    });
  },

  _renderImage: function(photo) {
    var src = photo.path;
    var captions = []
    photo.caption.split('\n').forEach(function(line) {
      captions.push(line);
      captions.push(<br />);
    });

    var timeLabelStyle = {
      position: 'absolute',
      backgroundColor: 'aliceblue',
      borderRadius: 2,
      opacity: 0.5,
      paddingLeft: 5,
      paddingRight: 5,
    };
    return (
      <div>
        <div style={timeLabelStyle}>
          {photo.timestamp.toDateString()}
          {' '}
          ({this.state.currentPhotoIndex + 1} / {this.props.photoData.length})
        </div>
        <img src={src} onClick={this._advanceImage} />
        <blockquote>
          {captions}
        </blockquote>
      </div>
    );
  },

  render: function() {
    var photo = this.props.photoData[this.state.currentPhotoIndex];

    return (
      <div>
        {this._renderImage(photo)}
      </div>
    );
  },
});

function processAndRender(photoData) {
  photoData = photoData.map(function(photo) {
    return {
      id: photo.id,
      caption: photo.caption,
      path: photo.path,
      timestamp: new Date(photo.timestamp)
    };
  }).sort(function(photoA, photoB) {
    // Sort by ascending (oldest first)
    return photoA.timestamp - photoB.timestamp;
  });

  var photoIndices = {};
  var photoIndex = 0;
  photoData.forEach(function(photo) {
    photoIndices[photo.id] = photoIndex++;
  });

  React.render(
    <Canvas
      photoData={photoData}
      photoIndices={photoIndices}
    />,
    document.getElementById('build20-canvas')
  );
}

var checkDataLoaded = setInterval(
  function() {
    if (window.photoData) {
      clearInterval(checkDataLoaded);
      processAndRender(window.photoData);
    }
  },
  100
);