import { Component } from "react";

import "./styles.scss";

const BOUNDS = [[0, 20], [0, 20]];
const SCALE = 100;

const POINTS = {
  a: { x: 0.24, y: 0.37 },
  b: { x: 0.74, y: 0.28 },
  c: { x: 0.29, y: 0.37 },
  d: { x: 0.36, y: 0.92 },
  e: { x: 0.02, y: 0.64 },
  f: { x: 0.82, y: 0.88 }
};

const ROUTES = [
  ["a", "d"],
  ["a", "c"],
  ["a", "f"],
  ["b", "c"],
  ["b", "e"],
  ["c", "a"],
  ["c", "f"],
  ["d", "f"],
  ["d", "b"],
  ["e", "b"],
  ["f", "e"],
  ["f", "c"]
];

const getPercent = x => `${x * 100}%`;

class Map extends Component {
  state = {
    zoom: 1,
    center: [0, 0]
  };

  constructor(props) {
    super(props);
    this.renderPoint = this.renderPoint.bind(this);
    this.renderRoute = this.renderRoute.bind(this);
    // this.getMapStyle = this.getMapStyle.bind(this);
  }

  renderPoint(key) {
    const { x, y } = POINTS[key];

    return (
      <div
        key={key}
        className="point"
        style={{ top: getPercent(y), left: getPercent(x) }}
      >
        {/* stuff */}
      </div>
    );
  }

  renderRoute([startKey, endKey]) {
    const { x: startX, y: startY } = POINTS[startKey];
    const { x: endX, y: endY } = POINTS[endKey];

    const dy = endY - startY;
    const dx = endX - startX;

    const length = Math.sqrt(dx ** 2 + dy ** 2);

    let theta;
    if (startX <= endX) {
      if (startY <= endY) {
        // first quadrant
        theta = (Math.asin(dy / dx) * 180) / Math.PI;
      } else {
        // second quadrant
        theta = 90 - (Math.asin(-dy / dx) * 180) / Math.PI;
      }
    } else {
      if (startY > endY) {
        // third quadrant
        theta = 90 + (Math.asin(-dy / -dx) * 180) / Math.PI;
      } else {
        // fourth quadrant
        theta = 180 + (Math.asin(dy / -dx) * 180) / Math.PI;
      }
    }

    console.log({ startX, endX, startY, endY, dx, dy, theta });

    return (
      <div
        key={[startKey, endKey].join("-")}
        className="route"
        style={{
          top: getPercent(startY),
          left: getPercent(startX),
          width: getPercent(length),
          transform: `rotate(${theta}deg)`
        }}
      />
    );
  }

  renderXAxisMarkers() {
    const markers = [];
    const bounds = BOUNDS[0];
    // const length = bounds[1] - bounds[0];

    for (let x = bounds[0]; x <= bounds[1]; x++) {
      if (x === 0) continue;

      markers.push(
        <div className="x-marker" style={{ left: x * SCALE }}>
          <div className="x-marker-line" />
          <div className="x-marker-label">{x}</div>
        </div>
      );
    }

    return markers;
  }

  renderYAxisMarkers() {
    const markers = [];
    const bounds = BOUNDS[0];
    // const length = bounds[1] - bounds[0];

    for (let y = bounds[0]; y <= bounds[1]; y++) {
      if (y === 0) continue;

      markers.push(
        <div className="y-marker" style={{ top: y * SCALE }}>
          <div className="y-marker-line" />
          <div className="y-marker-label">{y}</div>
        </div>
      );
    }

    return markers;
  }

  getMapStyle() {
    return {
      transform: `scale(${this.state.zoom}) translate(-50%, -50%)`
    };
  }

  render() {
    return (
      <div id="container">
        <div id="map" style={this.getMapStyle()}>
          {/* <div id="x-axis">{this.renderXAxisMarkers()}</div>
          <div id="y-axis">{this.renderYAxisMarkers()}</div> */}
          {Object.keys(POINTS).map(this.renderPoint)}
          {ROUTES.map(this.renderRoute)}
        </div>
      </div>
    );
  }
}

export default Map;
