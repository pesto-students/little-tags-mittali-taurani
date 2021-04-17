import React, { useEffect, useState } from "react";
import { getAllProducts, getBoysProducts, getMensProducts, getWomensProducts, getGirlsProducts } from "../../../helper/backendAPI";
import Card from "../../DesignComponents/Card";

import './style.scss';

function SearchPage(props) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    getDefaultData();
    
  }, [props.match.params.id]);


  const getDefaultData = ()=>{
    switch (props.match.params.id) {
      case 'mens':
        getMensProducts().then(res => {
          setData(res.data);
        });
        break;

      case 'womens':
        getWomensProducts().then(res => {
          setData(res.data);
        });
        break;

      case 'kids':
        getGirlsProducts().then(res => {
          setData(res.data);
        });
        break;

      default:
        getAllProducts().then(res => {
          setData(res.data);
        });
        break;
    }
  }


  const sortData = (event) => {

    const dataClone = JSON.parse(JSON.stringify(data));
    switch (event.target.value) {
      case 'recommended':
        getDefaultData();
        break;
      case 'lowestPrice':
        dataClone.sort((a, b) => parseFloat(a['Unnamed: 17']) - parseFloat(b['Unnamed: 17']));
        setData(dataClone);
        break;
      case 'highestPrice':
        dataClone.sort((a, b) => parseFloat(b['Unnamed: 17']) - parseFloat(a['Unnamed: 17']));
        setData(dataClone);
        break;
      default:
        getAllProducts().then(res => {
          setData(res.data);
        });

    }
  }

  const productCards = data.map((data) => {
    return <Card key={data.id} data={data} />;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ width: "150vw", height: '100vh' }}>
        Filters
      </div>
      <div className="searchBody">
        <div className={'xlBtn'}>VIEW ALL</div>
        <div className={'filterBar'}>
          <div className={'select constFilterPadding'}>
            <label className={'searchLabel lBtn'} htmlFor="sortBy">SORT BY:</label>
            <select onChange={sortData} name="SORT BY" id="sortBy">
              <option value="recommended">Recommended</option>
              {/*<option value="newest">Newest</option>*/}
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestPrice">Highest Price</option>
            </select>
          </div>

          <div className={'select constFilterPadding'}>
            <label className={'searchLabel lBtn'} htmlFor="size">SIZE:</label>
            <select name="SIZE" id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div style={{ flexGrow: 2 }} />
          <div className={'constFilterPadding lBtn'}>
            {data.length} items
          </div>

          {/*<div className={'constFilterPadding btn xlBtn' }>*/}
          {/*  CLEAR FILTER*/}
          {/*</div>*/}
        </div>
        <div className={'result-list'}>
          {productCards}
        </div>

      </div>
    </div>

  );
}

export default SearchPage;
