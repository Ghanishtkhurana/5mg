import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

export const Filter = () => {
  const [price, setPrice] = useState("");

  const [cat, setCat] = useState("");
  const [data1, setData1] = useState("");

  const handlesort = (e) => {
    setPrice(e.target.value);
  };

  // console.log(price)

  const Handlecategory = (value) => {
    setCat(value);
  };

  //  console.log(cat.length,price.length)

  useEffect(() => {
    if (cat.length == 0) {
      axios
        .get("http://localhost:4001/cereal")
        .then((res) => setData1(res.data))
        .catch((err) => console.log(err));
    } else if (cat.length > 0 && price.length > 0) {
      axios
        .get(`http://localhost:4001/${cat}/${price}`)
        .then((res) => {
          setData1(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:4001/${cat}`)
        .then((res) => setData1(res.data))
        .catch((err) => console.log(err));
    }
  }, [cat.length, price.length]);

  return (
    <Filtercomp>
      <FilterWrapper>
        <Filterchild>
          <h2>CATEGORIES</h2>
          <h3 style={{ color: "#ff6f61" }}>{cat.toUpperCase()}</h3>
          <hr />
          <div onClick={() => Handlecategory("cereal")}>
            <h3>cereals</h3>
          </div>
          <hr />
          <div onClick={() => Handlecategory("plant")}>
            <h3>Plant Based</h3>
          </div>
          <hr />
          <div onClick={() => Handlecategory("comboDeals")}>
            <h3>Combodeals</h3>
          </div>
          <hr />
          <div onClick={() => Handlecategory("trending")}>
            <h3>Trendings</h3>
          </div>
        </Filterchild>

        <Filterchild>
          <h2>Filter</h2>

          <div>
            <h2>Sort By Price </h2>
            <input type="checkbox" value="high" onChange={handlesort} />
            <label>Price Greater then 550</label>
            <br />
            <br />
            <input type="checkbox" value="low" onChange={handlesort} />
            <label>Price Less then 550 </label>
          </div>
        </Filterchild>
      </FilterWrapper>

      <ResultWrapper>
        {data1.length > 0 &&
          data1.map((item) => {
            return (
              <div
                style={{
                  height: "450px",
                  width: "300px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.image}
                  style={{ height: "150px", width: "30%" }}
                />
                <h4>Product: {item.title}</h4>
                <h4>About : {item.description}</h4>
                <div
                  style={{
                    backgroundColor: "#1aab2a",
                    width: "20%",
                    marginLeft: "20px",
                  }}
                >
                  {" "}
                  <h3 style={{ color: "white" }}>{item.rating}✰</h3>{" "}
                </div>
                <h4>MRP₹ {item.price}</h4>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "transparent",
                    color: "red",
                  }}
                >
                  ADD
                </button>
              </div>
            );
          })}
      </ResultWrapper>
    </Filtercomp>
  );
};

const Filtercomp = styled.div`
  // border :1px solid black;
  display: flex;
  margin: auto;
  gap: 10px;
`;

const FilterWrapper = styled.div`
  // border :1px solid;
  width: 15%;
  height: 700px;
  margin-top: 10px;
  margin-left: 15px;
`;

const Filterchild = styled.div`
  border: 1px solid grey;
  height: 55%;
  border-radius: 4px;
  @media all and (min-width: 320px) and (max-width: 767px) {
    width: 100px;
  }
`;
const ResultWrapper = styled.div`
  // border :1px solid;
  // height : 1300px;
  color: #9597a0;
  width: 80%;
  textalign: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 550px);
  gap: 10px;
  margin: auto;
  margin-top: 10px;

  @media all and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 500px);
    gap: 10px;
  }
  @media all and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto, 500px);
  }
`;
