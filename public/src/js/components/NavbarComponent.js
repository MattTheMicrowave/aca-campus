var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var hidden = 'hidden';
    if (this.props.model.get('is_admin') || this.props.model.get('is_instructor') || this.props.model.get('is_client')) {
      hidden = '';
    }
    return (
      <div className="nav-wrapper white">
        <a href="/" className="brand-logo">
          <img src="/img/aca-logo-header.jpg" style={{width:195}}/>
        </a>
        <a href="#" data-activates="mobile-demo" className="button-collapse">
          <i className="material-icons black-text">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li className={hidden}><a href="#users" className="black-text">Users</a></li>
          <li className={hidden}><a href="#terms" className="black-text">Terms</a></li>
          <li className={hidden}><a href="#courses" className="black-text">Courses</a></li>
          <li className={hidden}><a href="#registration" className="black-text">Registration</a></li>
          <li className={hidden}><a href="#attendance" className="black-text">Attendance</a></li>
          <li>
            <a className="dropdown-button black-text" href="#!" data-activates="nav-user">
              {this.state.model.username} <i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li className={hidden}><a href="#users">Users</a></li>
          <li className={hidden}><a href="#terms">Terms</a></li>
          <li className={hidden}><a href="#courses">Courses</a></li>
          <li className={hidden}><a href="#registration">Registration</a></li>
          <li className={hidden}><a href="#attendance" className="black-text">Attendance</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
        <ul id="nav-user" className="dropdown-content">
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    );
  },

  componentDidMount: function() {
    $(".button-collapse").sideNav({ closeOnClick: true });
    $(".dropdown-button").dropdown();
  }
});
