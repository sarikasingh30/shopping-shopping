import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

const MyState = (props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#B0A695";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#F3EEEA";
    }
  };
  // loading state
  const [loading, setLoading] = useState(false);
  // single product state
  const [product, setProduct] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  // product array
  const [products, setProducts] = useState([]);

  const addProduct = async () => {
    if (
      product.title === null ||
      product.price === null ||
      product.imageUrl === null ||
      product.category === null ||
      product.description === null
    ) {
      toast.error("All fields are required");
    } else {
      setLoading(true);
      try {
        const productRef = collection(fireDB, "products");
        await addDoc(productRef, product);
        toast.success("Product Added Successfully");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 900);
        getProductData(); // to get the instant visibility
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      setLoading(false);
    }
  };
  

  //edit product
  const editProduct = (item) => {
    setProduct(item);
  };
  // update function
  const updateProduct = async () => {
    try {
      setLoading(true);
      await setDoc(doc(fireDB, "products", product.id), product);
      toast.success("Product Updated Successfully");
      getProductData();
      setLoading(false);
      window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
    }
  };

  // delete product
  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted Successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      setLoading(false);
    }
  };

  // order data

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      // console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }
  // Users data

  const [users, setUsers] = useState([]);
    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUsers(usersArray);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')


  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        theme,
        toggleTheme,
        loading,
        setLoading,
        product,
        setProduct,
        products,
        addProduct,
        deleteProduct,
        editProduct,
        updateProduct,order, users, filterPrice, setFilterPrice, filterType, setFilterType, searchkey, setSearchkey
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
