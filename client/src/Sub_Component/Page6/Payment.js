import React, { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Author";
import { useNavigate } from "react-router-dom";
import Layout from "../../Main_Component/Layout";

const Payment = () => {
  const [cart, setCart] = useCart();
  const [auth] = useAuth();
  const navigate = useNavigate();

  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API+"/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      await axios.post(
        process.env.REACT_APP_API+"/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout title={"Payment - BAROQUE"}>
      <div className="">
        <div className="p-3 md:p-4 mt-32">
          <div className="w-full max-w-md bg-white m-auto flex  text-center flex-col p-4">
            <h1 className="text-center text-2xl font-bold">
              Choose your payment mathod :
            </h1>
            {auth?.user?.address ? (
              <>
                <div className="mb-3 z-0">
                  <p>Current Address</p>
                  <p>{auth?.user?.address}</p>
                  <button
                    className="btn bg-dark text-white"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-3 z-0">
                  {auth?.token ? (
                    <button
                      className="bg-dark text-white"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn bg-dark text-white"
                      onClick={() =>
                        navigate("/login", {
                          state: "/payment",
                        })
                      }
                    >
                      Please Login to CheckOut
                    </button>
                  )}
                </div>
              </>
            )}
            <div className="mt-2 z-0">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />

                  <button
                    className="btn btn-primary z-0"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
            {/* <button onClick={()=>navigate("")}>Payment</button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
