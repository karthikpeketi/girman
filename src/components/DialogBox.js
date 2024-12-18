import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Close } from "../assets/Icons";

const DialogBox = ({ user, onClose }) => {
	const { id, profileImage, phone, firstName, address } = user;

	const { width } = useWindowSize();
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-10">
			<div className="bg-white w-96 rounded-lg shadow-lg relative p-8">
				{/* Close Icon for Desktop */}
				{width < 768 && (
					<button
						onClick={onClose}
						className="absolute max-[320px]:top-5 max-[320px]:right-5 top-11 right-8 text-gray-600 hover:text-gray-900"
					>
						<Close size={15} />
					</button>
				)}

				<div className="flex flex-col text-custom-black mb-4">
					{/* Content */}

					<h2 className="text-3xl text-black font-semibold mb-1">
						Fetch Details
					</h2>
					<p className="text-light-grey font-[#71717A] mb-3">
						Here are the details of following employee.
					</p>
					<p>
						<strong>Name:</strong> {`${user.firstName} ${user.lastName}`}
					</p>
					<p>
						<strong>Location:</strong> {address}
					</p>
					<p>
						<strong>Contact Number:</strong> {phone}
					</p>
					<p>
						<strong>Profile Image:</strong>
						<div className="w-25 h-25 p-2">
							<img
								src={`${profileImage}${id}`}
								alt={`${firstName}'s profile`}
								className="w-full h-full object-cover"
							/>
						</div>
					</p>
					{width >= 768 && (
						<button
							onClick={onClose}
							className="self-end mt-4 px-4 py-2 bg-transparent border rounded-lg border-gray-300 custom-black font-semibold"
						>
							Close
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default DialogBox;
