import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;