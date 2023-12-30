import React, { useContext,useEffect } from "react";
import myContext from "../../context/data/MyContext";
import {useDispatch,useSelector} from "react-redux"
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = () => {
  const context = useContext(myContext);
  const { theme, products,searchkey,filterPrice,filterType } = context;
  const cartItems=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  const addCart=(item)=>{
    dispatch(addToCart(item))
    toast.success("Added to the Cart")
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
    
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: theme === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div
            className="h-1 w-20 rounded "
            style={{
              backgroundColor: theme === "dark" ? "#3D0C11" : "#538cfc",
            }}
          ></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {products?.filter((el) => el.title.toLowerCase().includes(searchkey))
                        .filter((el) => el.category.toLowerCase().includes(filterType))
                        .filter((el) => el.price.includes(filterPrice)).slice(0,8).map((el, index) => {
            return (
              <div className="p-4 md:w-1/4  drop-shadow-lg " key={index}>
                <div
                  className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: theme === "dark" ? "#B0A695" : "#F3EEEA",
                    color: theme === "dark" ? "white" : "",
                  }}
                >
                  <div className="flex justify-center cursor-pointer" onClick={()=> window.location.href = `/productinfo/${el.id}`}>
                    <img
                      className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                      src={el.imageUrl}
                      alt="blog"
                    />
                  </div>
                  <div className="p-5 border-t-2">
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{ color: theme === "dark" ? "white" : "" }}
                    >
                      AssortiMart
                    </h2>
                    <h1
                      className="title-font text-lg font-medium text-gray-900 mb-3"
                      style={{ color: theme === "dark" ? "white" : "" }}
                    >
                     {el.title}
                    </h1>
                    
                    <p
                      className="leading-relaxed mb-3"
                      style={{ color: theme === "dark" ? "white" : "" }}
                    >
                      {`₹ ${el.price}`}
                    </p>
                    <div className=" flex justify-center">
                      <button
                        type="button"
                        onClick={()=>addCart(el)}
                        className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full  py-2"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#3D0C11" : "#538cfc",
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ProductCard };
