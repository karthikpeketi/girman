import React, { useState } from "react";
import { Location, Phone } from "../assets/Icons";
import DialogBox from "./DialogBox";

const Card = ({user }) => {

	const {id, profileImage, phone, firstName, lastName, address} = user;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="min-w-56 bg-white border-none rounded-[15px] shadow-lg p-4">
      {/* Profile Section */}
      <div className="flex flex-col mb-6">
        <div className="w-16 h-16 border-2 rounded-full border-border-grey p-2">
          <img
            src={`${profileImage}${id}`}
            alt={`${firstName}'s profile`}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{`${firstName} ${lastName}`}</h2>
          <div className="flex items-center text-gray-500 text-sm">
            <Location styles={"mr-2"}/>
            <span className="text-sm font-medium">{address}</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="min-w-[290px] border-t pt-2">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            <div className="flex items-center mb-1">
              <Phone styles={"mr-2"}/>
              <span className=" text-black font-semibold">{phone}</span>
            </div>
            <span className="text-light-grey font-normal">Available on phone</span>
          </div>
          <button
            className="w-30 h-13 bg-black text-white px-3 py-2 rounded-lg"
            onClick={() => setIsDialogOpen(true)}
          >
            Fetch Details
          </button>
		  {isDialogOpen && (
 				<DialogBox user={user} onClose={() => setIsDialogOpen(false)} />
 			)}
        </div>
      </div>
    </div>
  );
};

export default Card;

