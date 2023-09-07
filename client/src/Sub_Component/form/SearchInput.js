import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/Search";
import Layout from "../../Main_Component/Layout";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+`/api/v1/product/search/${values.keyword}`
      );

      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Layout title={"Search - BAROQUE"}>
        <form className='d-flex role="search  ' onSubmit={handleSubmit}>
          <input
            className="form-control me-2 rounded-[0px] border-none"
            type="search"
            placeholder="search"
            aria-label="search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
          <button
            className="btn bg-black text-white rounded-[0px] px-5"
            type="submit"
          >
            Search
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default SearchInput;
