import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    console.log("hii")
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
console.log('event.target',event.target.id, this.dropdownMenu);
    if (!(event.target.id === 'menuBtn')) {

      console.log("close the menu");
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <div id={'menuBtn'} onClick={this.showMenu}>
          {this.props.title}
        </div>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
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