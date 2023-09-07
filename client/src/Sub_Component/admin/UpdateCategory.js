import React, { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import { Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Main_Component/Layout";

const UpdateCategory = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");

  //get single Cateory
  const getSingleCategory = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+`/api/v1/category/single-category/${params.slug}`
      );

      setName(data.category.name);
      setId(data.category._id);
      setDescription(data.category.description);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleCategory();
    //eslint-disable-next-line
  }, []);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function (Update)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const categoryData = new FormData();
      categoryData.append("name", name);
      categoryData.append("description", description);
      photo && categoryData.append("photo", photo);
      const { data } = axios.put(
        process.env.REACT_APP_API+`/api/v1/category/update-category/${id}`,
        categoryData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Category Updated Successfully");
        navigate("/dashboard/admin/categorys");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        process.env.REACT_APP_API+`/api/v1/category/delete-category/${id}`
      );
      toast.success("category DEleted Succfully");
      navigate("/dashboard/admin/categorys");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Layout title={"Dashboard - Update Category"}>
        <div className="mt-20">
          <Container fluid className="m-3 p-3">
            <Row>
              <Col md={2}>
                <AdminMenu />
              </Col>
              <Col md={8} className="flex justify-center">
                <div className="m-1 w-75">
                  <h1 className="text-2xl">Update Category</h1>

                  <div className="mb-3">
                    <label className="btn btn-outline-secondary col-md-12">
                      {photo ? photo.name : "Upload Photo"}
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    {photo ? (
                      <div className="text-center flex justify-center">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt="product_photo"
                          width={"300px"}
                          height={"400px"}
                          className="img img-responsive"
                        />
                      </div>
                    ) : (
                      <div className="text-center flex justify-center">
                        <img
                          src={process.env.REACT_APP_API+`/api/v1/category/category-photo/${id}`}
                          alt="product_photo"
                          width={"300px"}
                          height={"400px"}
                          className="img img-responsive"
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={name}
                      placeholder="write a name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      value={description}
                      placeholder="write a description"
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleUpdate}>
                      UPDATE Category
                    </button>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-danger" onClick={handleDelete}>
                      DELETE Category
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default UpdateCategory;
