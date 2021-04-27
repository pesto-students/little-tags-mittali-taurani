import "./style.scss";

import { FiSearch } from "react-icons/fi";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class Search extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
  };

  onChange = (e) => {
    console.log("onChanges");

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (option) =>
        option.brand.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (id) => (e) => {
    this.setState(
      {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: e.currentTarget.innerText,
      },
      () => {
        this.props.history.push(`/product/${id}`);
      }
    );
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {

      this.setState({
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
      },()=>{
        this.props.history.push({
          pathname: "/products/sale",
          search: `?q=${encodeURIComponent(this.state.userInput)}`,
        });
      });
      // console.log("ssss", this.props);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((option, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li
                  className={className}
                  key={option.id}
                  onClick={onClick(option.id)}
                >
                  {option.brand}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    let searchTerm =
      this.props.history.location.search.split("=") &&
      this.props.history.location.search.split("=")[1];
    if (searchTerm === undefined) {
      searchTerm = "";
    }
    return (
      <React.Fragment>
        <div className="flex-column">
          <div className="search">
            <FiSearch />
            <input
              type="text"
              className={"searchInput"}
              onChange={onChange}
              onKeyDown={onKeyDown}
              placeholder={decodeURI(searchTerm)}
              value={userInput}
            />
          </div>
        <div className="search-results">
        {optionList}
        </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Search);
