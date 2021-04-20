import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  getBoysProducts,
  getMensProducts,
  getWomensProducts,
  getGirlsProducts,
} from "../../../helper/backendAPI";
import Card from "../../DesignComponents/Card";

import "./style.scss";
const PAGE_SIZE = 12;

function SearchPage(props) {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const getDefaultData = () => {
    switch (props.match.params.id) {
      case "mens":
        getMensProducts().then((res) => {
          setData(res.data);
        });
        break;

      case "womens":
        getWomensProducts().then((res) => {
          setData(res.data);
        });
        break;

      case "kids":
        getBoysProducts();
        getGirlsProducts().then((res) => {
          setData(res.data);
        });
        break;

      default:
        getAllProducts().then((res) => {
          setData(res.data);
        });
        break;
    }
  };

  useEffect(getDefaultData, [props.match.params.id]);

  const sortData = (event) => {
    const dataClone = JSON.parse(JSON.stringify(data));
    switch (event.target.value) {
      case "recommended":
        getDefaultData();
        break;
      case "lowestPrice":
        dataClone.sort(
          (a, b) => parseFloat(a["Unnamed: 17"]) - parseFloat(b["Unnamed: 17"])
        );
        setData(dataClone);
        break;
      case "highestPrice":
        dataClone.sort(
          (a, b) => parseFloat(b["Unnamed: 17"]) - parseFloat(a["Unnamed: 17"])
        );
        setData(dataClone);
        break;
      default:
        getAllProducts().then((res) => {
          setData(res.data);
        });
    }
  };

  const productCards = data
    .slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE)
    .map((data) => {
      return <Card key={data.id} data={data} />;
    });

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="sortBy">SORT BY:</label>
          <select onChange={sortData} name="SORT BY" id="sortBy">
            <option value="recommended">Recommended</option>
            {/*<option value="newest">Newest</option>*/}
            <option value="lowestPrice">Lowest Price</option>
            <option value="highestPrice">Highest Price</option>
          </select>
        </div>

        <div style={{ flexGrow: 2 }} />
        <div>{data.length} items</div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="searchBody">
          <div className={"result-list"}>{productCards}</div>
          <div className="pagination">
            {pageNumber !== 1 && (
              <button className="button-class" onClick={prevPage}>
                previous
              </button>
            )}
            <div style={{padding: "30px", fontSize:20}}>
            {pageNumber} of {totalPages}
            </div>
            
            {pageNumber !== totalPages && (
              <button className="button-class" onClick={nextPage}>
                next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
