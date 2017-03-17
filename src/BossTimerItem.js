import React from 'react';
import './BossTimerItem.css';
import moment from 'moment';

class BossTimerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      killTime: null,
      resetTime: null,
      refreshTime: props.data.refresh,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => ({
      killTime: moment().format('HH:mm'),
      resetTime: moment().add(this.state.refreshTime, 'minutes').format('HH:mm'),
    }));
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState(prevState => ({
      refreshTime: value,
    }));
  }

  render() {
    return (
      <li className="col-xs-6 col-sm-4 col-md-2">
        <div className="thumbnail">
          <img src={this.props.data.avatar} alt={this.props.data.name} />
          <div className="caption">
            <div>{this.props.data.name}</div>
            <div>剩余<input className="input-ctrl" maxLength="3" size="5" type="number" value={this.state.refreshTime} onChange={this.handleChange} />分钟</div>
            <div>击杀时间：{this.state.killTime}</div>
            <div>刷新时间：{this.state.resetTime}</div>
            <div><button onClick={this.handleClick} className="btn btn-primary btn-block btn-xs"> 计时</button></div>
          </div>
        </div>
      </li>
    );
  }
}

export default BossTimerItem;
