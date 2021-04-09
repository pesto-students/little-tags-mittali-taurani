import React, { Component } from 'react';
import './style.scss'

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
    this.menu = React.createRef();
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      if(this.menu && this.menu.current){
        this.menu.current.addEventListener('mouseleave', this.closeMenu);
      }
    });
  }

  closeMenu(event) {
    if (!(event.target.class === 'menuBtn')) {


      this.setState({ showMenu: false }, () => {
        if(this.menu && this.menu.current){
          this.menu.current.removeEventListener('mouseleave', this.closeMenu);
        }
      });

    }
  }

  render() {
    return (
      <div>
        <div className={'menuBtn'} onMouseEnter={this.showMenu}>
          {this.props.title}
        </div>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={this.menu}
              >
                {this.props.children}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}