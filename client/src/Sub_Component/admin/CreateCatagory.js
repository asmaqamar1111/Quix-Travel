import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "../../Main_Component/Layout";
const { Option } = Select;

const CreateCatagory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hotel, setHotel] = useState("");
  const [holidays, setHolidays] = useState("");

  const [photo, setPhoto] = useState("");
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API + "/api/v1/category/get-category"
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

  //create category function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const categoryData = new FormData();
      categoryData.append("name", name);
      categoryData.append("description", description);
      categoryData.append("hotel", hotel);
      categoryData.append("holidays", holidays);

      categoryData.append("photo", photo);
      // categoryData.append("category", category);
      const { data } = axios.post(
        process.env.REACT_APP_API + "/api/v1/category/create-category",
        categoryData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("category Created Successfully");
        navigate("/dashboard/admin/categorys");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            <Col md={2}>
              <AdminMenu />
            </Col>
            <Col md={10} className="flex justify-center">
              <div className="m-1 w-75">
                <div className="w-75 text-2xl p-4">Create Category</div>

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
                  {photo && (
                    <div className="text-center flex justify-center">
                      <img
                        src={URL.createObjectURL(photo)}
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
                  <input
                    type="text"
                    value={hotel}
                    placeholder="write a hotel name"
                    className="form-control"
                    onChange={(e) => setHotel(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={holidays}
                    placeholder="Number of holidays should be .."
                    className="form-control"
                    onChange={(e) => setHolidays(e.target.value)}
                  />
                </div>
                <div className="mb-3"></div>
                <div className="mb-3">
                  <button className="btn btn-primary" onClick={handleCreate}>
                    CREATE category
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default CreateCatagory;
