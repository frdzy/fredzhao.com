var React = require('react');
var classNames = require('classnames');

var LoadState = {
  EMPTY: 0,
  SOURCE_CHANGED: 1,
  LOADING: 2,
  LOADED_FAST_DONE: 3,
  LOADED_SLOW_TRANSITIONING: 4,
  LOADED_SLOW_DONE: 5,
};

var ImageLoader = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    artificialLatency: React.PropTypes.number,
  },

  getInitialState: function() {
    return {
      loadState: LoadState.EMPTY,
      isTesting: false,
      loadedSources: {},
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.src === nextProps.src) {
      return;
    }

    if (this.state.loadedSources[nextProps.src]) {
      this.setState({
        loadState: LoadState.LOADED_FAST_DONE,
      });
      return;
    }
    this.createLoader();
    this.setState({
      loadState: LoadState.SOURCE_CHANGED,
    });
  },

  componentDidMount: function() {
    this.createLoader();
  },

  createLoader: function() {
    this.imageLoader = new Image();
    this.imageLoader.onload = this.onLoad;
    this.imageLoader.onerror = this.onError;
    this.imageLoadStart = Date.now();

    if (this.props.artificialLatency) {
      setTimeout(
        this.load,
        this.props.artificialLatency
      );
    } else {
      this.load();
    }
  },

  load: function() {
    this.imageLoader.src = this.props.src;
    this.setState({
      loadState: LoadState.LOADING,
    });
  },

  componentDidUnmount: function() {
    this.imageLoader = null;
  },

  onLoad: function() {
    var loadedSource = this.props.src;
    var loadedSources = this.state.loadedSources;
    loadedSources[loadedSource] = true;

    this.imageLoader = null;
    var imageLoadFinish = Date.now();

    var loadedFast = imageLoadFinish - this.imageLoadStart < 20;
    if (loadedFast) {
      this.setState({
        loadState: LoadState.LOADED_FAST_DONE,
        loadedSources: loadedSources,
      });
    } else {
      setTimeout(
        this.onSlowLoad,
        50
      );
      this.setState({
        loadState: LoadState.LOADED_SLOW_TRANSITIONING,
        loadedSources: loadedSources,
      });
    }
  },

  onSlowLoad: function() {
    this.setState({
      loadState: LoadState.LOADED_SLOW_DONE,
    });
  },

  onError: function() {
    this.imageLoader = null;
  },

  onClick: function(evt) {
    if (evt.shiftKey) {
      this.setState({
        isTesting: !this.state.isTesting,
      });
      return;
    }

    if (evt.type === 'contextmenu') {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  },

  render: function() {
    var commonStyle = {
      boxSizing: 'border-box',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#bbb',
    };
    if (
      this.state.loadState === LoadState.EMPTY ||
      this.state.loadState === LoadState.SOURCE_CHANGED ||
      this.state.loadState === LoadState.LOADING ||
      this.state.isTesting
    ) {
      var style = Object.assign(
        {
          height: 'auto',
        },
        commonStyle
      );
      return (
        <img
          onClick={this.onClick}
          onContextMenu={this.onClick}
          style={style}
          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2048 1536'%2F%3E" width="2048" height="1536"
        />
      );
    } else if (this.state.loadState === LoadState.LOADED_FAST_DONE) {
      return (
        <img
          style={commonStyle}
          {...this.props}
          src={this.props.src}
          onClick={this.onClick}
          onContextMenu={this.onClick}
        />
      );
    } else if (this.state.loadState === LoadState.LOADED_SLOW_TRANSITIONING) {
      var classes = classNames({
        newlyLoaded: true,
      });
      return (
        <img
          className={classes}
          style={commonStyle}
          {...this.props}
          src={this.props.src}
          onClick={this.onClick}
          onContextMenu={this.onClick}
        />
      );
    } else if (this.state.loadState === LoadState.LOADED_SLOW_DONE) {
      var classes = classNames({
        fadeIn: true,
      });
      return (
        <img
          className={classes}
          style={commonStyle}
          {...this.props}
          src={this.props.src}
          onClick={this.onClick}
          onContextMenu={this.onClick}
        />
      );
    } else {
      return (
        <div>
          Got unexpected load state: {this.state.loadState}
        </div>
      );
    }
  },
});

module.exports = ImageLoader;
