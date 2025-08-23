import { UserSchema } from "@codersubham/bond-store-types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../store/loadingState";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);
  const [userDetails, setUserDetails] = useState({
    username: "",
    userAddress: "",
    userLandmark: "",
    userState: "",
    userPincode: "",
    userContact: "",
    userAltrContact: "",
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
    const { success } = UserSchema.safeParse(userDetails);
    if (!success) return alert("Enter valid details");
    setLoading(true);
    await new Promise((res) => setTimeout(res, 10000));
    setLoading(false);
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
            name="username"
            onChange={handleOnchange}
            value={userDetails.username}
          />
        </div>
        <div>
          <h1>Address : </h1>
          <textarea
            className="w-full bg-slate-300/40 rounded-md h-20 px-2"
            name="userAddress"
            onChange={handleOnchange}
            value={userDetails.userAddress}
          />
        </div>
        <div>
          <h1>Landmark : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="userLandmark"
            onChange={handleOnchange}
            value={userDetails.userLandmark}
          />
        </div>
        <div>
          <h1>State : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="userState"
            onChange={handleOnchange}
            value={userDetails.userState}
          />
        </div>
        <div>
          <h1>Pincode : </h1>
          <input
            type="text"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="userPincode"
            onChange={handleOnchange}
            value={userDetails.userPincode}
          />
        </div>
        <div>
          <h1>Contact : </h1>
          <input
            type="number"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="userContact"
            onChange={handleOnchange}
            value={userDetails.userContact}
          />
        </div>
        <div>
          <h1>Alternate Contact : </h1>
          <input
            type="number"
            className="w-full bg-slate-300/40 rounded-md h-10 px-2"
            name="userAltrContact"
            onChange={handleOnchange}
            value={userDetails.userAltrContact}
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
