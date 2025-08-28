import { UserSchema } from "@codersubham/bond-store-types";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingState } from "../store/loadingState";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { cartState } from "../store/cart";

const Checkout = () => {
  const BACKENDURL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);
  const [cart, setCart] = useRecoilState(cartState);

  const [userDetails, setUserDetails] = useState({
    customerName: "",
    customerAddress: "",
    customerLandmark: "",
    customerState: "",
    customerPincode: "",
    customerNumber: "",
    customerAltrContact: "",
  });

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails((preD) => {
      return {
        ...preD,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOrder = async () => {
    const { success } = UserSchema.safeParse({
      username: userDetails.customerName,
      userAddress: userDetails.customerAddress,
      userLandmark: userDetails.customerLandmark,
      userContact: userDetails.customerNumber,
      userPincode: userDetails.customerPincode,
      userState: userDetails.customerState,
      userAltrContact: userDetails.customerAltrContact,
    });
    if (!success) return alert("Enter valid details");
    setLoading(true);
    try {
      const res = await axios.post(`${BACKENDURL}/order/createorder`, {
        ...userDetails,
        productPurchased: cart,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("Sorry for the inconvinience please try again later");
    } finally {
      setLoading(false);
      localStorage.removeItem("yourCart");
      setCart([]);
    }
    alert("Order placed successfully");
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 font-toreadore tracking-widest w-100 border border-slate-300/70 p-4 rounded-md shadow-2xl">
        <div>
          <h1>Name : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="customerName"
            onChange={handleOnchange}
            value={userDetails.customerName}
          />
        </div>
        <div>
          <h1>Address : </h1>
          <textarea
            className="w-full bg-slate-300/40 rounded-md h-20 px-2"
            name="customerAddress"
            onChange={handleOnchange}
            value={userDetails.customerAddress}
          />
        </div>
        <div>
          <h1>Landmark : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="customerLandmark"
            onChange={handleOnchange}
            value={userDetails.customerLandmark}
          />
        </div>
        <div>
          <h1>State : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="customerState"
            onChange={handleOnchange}
            value={userDetails.customerState}
          />
        </div>
        <div>
          <h1>Pincode : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="customerPincode"
            onChange={handleOnchange}
            value={userDetails.customerPincode}
          />
        </div>
        <div>
          <h1>Contact : </h1>
          <input
            type="number"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="customerNumber"
            onChange={handleOnchange}
            value={userDetails.customerNumber}
          />
        </div>
        <div>
          <h1>Alternate Contact : </h1>
          <input
            type="number"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="customerAltrContact"
            onChange={handleOnchange}
            value={userDetails.customerAltrContact}
          />
        </div>
        <button
          className="bg-black text-white px-5 py-3 mx-auto w-fit rounded-md mt-2"
          onClick={handleOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
