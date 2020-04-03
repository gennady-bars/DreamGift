import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import { changeModal, addHeshtegs } from '../../redux/actions';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heshtegs: ['спорт', 'техника', 'косметика', 'настольные игры', 'музыка', 'готовка'],
      other: ''
    };
  }

  saveHeshtegs = async (event) => {
    console.log(event.target.previousElementSibling.firstChild.children);
    const activeHeshtegs = event.target.previousElementSibling.firstChild.children;
    const other = this.state.other.split(/\s/);
    const hesh = this.state.other.length ? [...other] : [];
    for (let i = 0; i < activeHeshtegs.length; i++) {
      if (activeHeshtegs[i].className === 'active') {
        hesh.push(activeHeshtegs[i].value);
      }
    }
    this.props.addHeshtegs(hesh);
    this.props.changeModal(false);
    await fetch('/savetegs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset = utf-8' },
      body: JSON.stringify({
        heshtegs: hesh, login: this.props.login
      })
    });
  };

  changeStatus = (event) => {
    if (event.target.className === 'noActive') {
      event.target.className = 'active';
    } else {
      event.target.className = 'noActive';
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div id="modalWindow">
        <span>interests</span>
        <div>
          <div>
            {this.state.heshtegs.map((item) => (
              <button className="noActive" onClick={this.changeStatus} value={item}>
                {item}
              </button>
            ))}
          </div>
          <input type="text" onChange={this.handleChange} placeholder="other" name="other" />
        </div>
        <button onClick={this.saveHeshtegs}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeModal: (payload) => dispatch(changeModal(payload)),
    addHeshtegs: (payload) => dispatch(addHeshtegs(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
