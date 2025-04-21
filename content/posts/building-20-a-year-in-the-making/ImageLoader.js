import React from 'react';

var LoadState = {
  EMPTY: 0,
  SOURCE_CHANGED: 1,
  LOADING: 2,
  LOADED_FAST_DONE: 3,
  LOADED_SLOW_TRANSITIONING: 4,
  LOADED_SLOW_DONE: 5,
};

export default class ImageLoader extends React.Component {
  state = {
    loadState: LoadState.EMPTY,
    isTesting: false,
    loadedSources: {},
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.nextSrcs.some(
        (src) => !this.state.loadedSources.hasOwnProperty(src)
      )
    ) {
      this.prefetchNextImage();
    }

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
  }

  componentDidMount() {
    this.createLoader();
  }

  createLoader() {
    this.imageLoader = new Image();
    this.imageLoader.onload = this.onLoad;
    this.imageLoader.onerror = this.onError;
    this.imageLoadStart = Date.now();

    if (this.props.artificialLatency) {
      setTimeout(this.load, this.props.artificialLatency);
    } else {
      this.load();
    }
  }

  load() {
    this.imageLoader.src = this.props.src;
    this.setState({
      loadState: LoadState.LOADING,
    });
  }

  componentWillUnmount() {
    this.imageLoader = null;
  }

  onLoad = () => {
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
      setTimeout(this.onSlowLoad, 50);
      this.setState({
        loadState: LoadState.LOADED_SLOW_TRANSITIONING,
        loadedSources: loadedSources,
      });
    }
  };

  onSlowLoad = () => {
    this.setState({
      loadState: LoadState.LOADED_SLOW_DONE,
    });
  };

  onError = () => {
    this.imageLoader = null;
  };

  onClick = (evt) => {
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
  };

  prefetchNextImage() {
    if (this.props.nextSrcs) {
      this.props.nextSrcs.forEach((src) => {
        if (!this.state.loadedSources[src]) {
          const nextImageLoader = new Image();
          nextImageLoader.onload = () => {
            this.setState((prevState) => ({
              loadedSources: {
                ...prevState.loadedSources,
                [src]: true,
              },
            }));
          };
          nextImageLoader.src = src;
        }
      });
    }
  }

  render() {
    const { artificialLatency, ...restProps } = this.props;

    var commonStyle = {
      boxSizing: 'border-box',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#bbb',
      maxWidth: '100%',
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
        <div
          onClick={this.onClick}
          onKeyDown={(e) => e.key === 'Enter' && this.onClick(e)}
          role="button"
          tabIndex={0}
        >
          <img
            style={style}
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2048 1536'%2F%3E"
            width="2048"
            height="1536"
            alt=""
          />
        </div>
      );
    } else if (this.state.loadState === LoadState.LOADED_FAST_DONE) {
      return (
        <button
          onClick={this.onClick}
          onContextMenu={this.onClick}
          onKeyDown={(e) => e.key === 'Enter' && this.onClick(e)}
          style={{
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            alt={this.props.alt || ''}
            style={commonStyle}
            {...restProps}
            src={this.props.src}
          />
        </button>
      );
    } else if (this.state.loadState === LoadState.LOADED_SLOW_TRANSITIONING) {
      return (
        <button
          onClick={this.onClick}
          onContextMenu={this.onClick}
          onKeyDown={(e) => e.key === 'Enter' && this.onClick(e)}
          style={{
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            alt={this.props.alt || ''}
            style={commonStyle}
            {...restProps}
            src={this.props.src}
          />
        </button>
      );
    } else if (this.state.loadState === LoadState.LOADED_SLOW_DONE) {
      return (
        <button
          onClick={this.onClick}
          onContextMenu={this.onClick}
          onKeyDown={(e) => e.key === 'Enter' && this.onClick(e)}
          style={{
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            alt={this.props.alt || ''}
            style={commonStyle}
            {...restProps}
            src={this.props.src}
          />
        </button>
      );
    } else {
      return <div>Got unexpected load state: {this.state.loadState}</div>;
    }
  }
}
