import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";
import { Modal } from "../../components/modal/Modal";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { deleteFromCart } from "../../redux/cartSlice";

const Cart = () => {
  const context = useContext(MyContext);
  const { theme } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from Cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotal(temp);
  }, [cartItems]);

  const shipping = parseInt(100);

  const grandTotal = shipping + total;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // buy now function
  const buyNow = async () => {
    // validation
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // address object
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    // console.log(addressInfo);

    // razorpay functionality
    var options = {
      key: "rzp_test_3EV0YNbXTj9buA",
      key_secret: "vYjtVdO0dEHROmNcVQooykx6",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "AssortiMart",
      description: "for testing purpose",
      //handler function for payment
      handler: function (response) {
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;
        // store in firebase
        // orderInfo object
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };
        try {
          //  make one collection for order information
          const result = addDoc(collection(fireDB, "orders"), orderInfo);
          localStorage.removeItem("cart");

          setTimeout(() => {
            window.location.href = "/";
          }, 900);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: theme === "dark" ? "#3D0C11" : "#538cfc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Layout>
      <div className="pt-5 " style={{ color: theme === "dark" ? "white" : "" }}>
        <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
        {cartItems?.length === 0 ? (
          <div className="mx-auto max-w-5xl justify-center px-2 md:flex md:space-x-6 xl:px-0 mb-5">
            <div className="m-auto w-80">
              <img
                src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                alt="Empty Cart"
              />
            </div>
            <div className="p-5 flex-col align-center justify-center">
              <h2 className="mb-10 text-center text-4xl font-bold">
                No Items In The Cart
              </h2>
              <button
                type="button"
                onClick={() => (window.location.href = "/allproducts")}
                className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full py-2 mb-5"
                style={{
                  backgroundColor: theme === "dark" ? "#3D0C11" : "#538cfc",
                }}
              >
                Please Add Items
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-5xl justify-between px-6 md:flex md:space-x-6 xl:px-0 ">
            <div className="rounded-lg md:w-2/3 flex flex-col">
              {cartItems?.map((el, index) => {
                return (
                  <div
                    className="justify-between mb-6 rounded-lg border shadow-md drop-shadow-xl p-6  sm:flex  sm:justify-start"
                    key={index}
                    style={{
                      backgroundColor: theme === "dark" ? "#EBE3D5" : "",
                      color: theme === "dark" ? "black" : "black",
                    }}
                  >
                    <img
                      src={el.imageUrl}
                      alt="product-img"
                      className="w-full rounded-lg sm:w-20"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-black">
                          {el.title}
                        </h2>
                        <h2 className="text-sm  text-black">
                          {el.description}
                        </h2>
                        <p className="mt-1 text-xs font-semibold text-black">{`₹ ${el.price}`}</p>
                      </div>
                      <div
                        className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                        onClick={() => deleteCart(el)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3"
              style={{
                backgroundColor: theme === "dark" ? "#EBE3D5" : "",
                color: theme === "dark" ? "black" : "black",
              }}
            >
              <div className="mb-2 flex justify-between">
                <p className="text-black">Subtotal</p>
                <p className="text-black">{`₹ ${total}`}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-black">Shipping</p>
                <p className="text-black">₹ 100</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className="text-lg font-bold  text-black">Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold text-black">{`₹ ${grandTotal}`}</p>
                </div>
              </div>
              <Modal
                name={name}
                address={address}
                pincode={pincode}
                phoneNumber={phoneNumber}
                setName={setName}
                setAddress={setAddress}
                setPincode={setPincode}
                setPhoneNumber={setPhoneNumber}
                buyNow={buyNow}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
