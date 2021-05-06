import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  getAllProducts,
  getBoysProducts,
  getMensProducts,
  getWomensProducts,
  getGirlsProducts,
} from "../../../helper/backendAPI";
import Card from "../../DesignComponents/Card";
import {getRelevantProducts } from "../../../helper/relevancy";

import "./style.scss";
const PAGE_SIZE = 12;

function SearchPage(props) {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const history = useHistory();
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  // console.log("getRelevantProducts",getRelevantProducts(data, "Mustard yellow printed layered A-line kurta, has a round neck, long sleeves, straight hem, tie-up detail on the side"))
  // setData(getRelevantProducts(data, "Mustard yellow printed layered A-line kurta, has a round neck, long sleeves, straight hem, tie-up detail on the side"));
  
  const getDefaultData = () => {
    // const searchTerm = decodeURI(history.location.search.split("=") && history.location.search.split("=")[1]);
    let searchTerm = history.location.search.split("=") && history.location.search.split("=")[1];
    console.log("decodeURI(searchTerm)",typeof(searchTerm));
    if(searchTerm === undefined){
      searchTerm= "";
    }
    searchTerm = decodeURI(searchTerm);
    console.log("history.location.search",searchTerm);
    switch (props.match.params.id) {
      case "mens":
        getMensProducts().then((res) => {
          setData(getRelevantProducts(res.data, searchTerm).filter((data)=>{
            if(searchTerm){
              return data.score > 0.0 ? true: false;
            }else{
              return true;
            }
          }));
        });
        break;

      case "womens":
        getWomensProducts().then((res) => {
          setData(getRelevantProducts(res.data, searchTerm));
        });
        break;

      case "kids":
        getGirlsProducts().then((res) => {
          getBoysProducts().then(boys=>{
            setData(getRelevantProducts(res.data.concat(boys.data), searchTerm));
          })
          
        });
        // setData(getRelevantProducts(data, "Mustard yellow printed layered men kurta"));
        break;

      default:
        getAllProducts().then((res) => {
          setData(getRelevantProducts(res.data, searchTerm).filter((data)=>{
            if(searchTerm){
              return data.score > 0.0 ? true: false;
            }else{
              return true;
            }
          }));
        });
        break;
    }

    // setData(getRelevantProducts(data, "Mustard yellow printed layered men kurta"));
  };

  useEffect(getDefaultData, [props.match.params.id, history.location.search]);
  

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
      // if (data.score > 0.1) {
        return <Card key={data.id} data={data} />;
      // }
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
        <div className={"flex-row sort-by-padding"}>
          <label htmlFor="sortBy">SORT BY: </label>
          <select onChange={sortData} name="SORT BY" id="sortBy">
            <option value="recommended">Recommended</option>
            {/*<option value="newest">Newest</option>*/}
            <option value="lowestPrice">Lowest Price</option>
            <option value="highestPrice">Highest Price</option>
          </select>
          <div style={{flex:"1"}}></div>
          <div>{data.length} items</div>
        </div>
        <div/>
        
      </div>
      
        <div className="searchBody">
          <div className={"result-list"}>{productCards}</div>
          <div className="pagination">
            {pageNumber !== 1 && (
              <button className="button-class" onClick={prevPage}>
                previous
              </button>
            )}
            <div className="pagination-text">
            {pageNumber}/{totalPages}
            </div>
            
            {pageNumber !== totalPages && (
              <button className="button-class" onClick={nextPage}>
                next
              </button>
            )}
          </div>
      </div>
    </div>
  );
}

export default SearchPage;
