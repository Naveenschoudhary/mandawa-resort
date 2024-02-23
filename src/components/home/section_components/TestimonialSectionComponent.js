// Testimonials.js
import React from "react";
import Carousel from "nuka-carousel";
import { SectionHeading } from "./SectionHeading";

// Sample data for testimonials
const testimonials = [
	{
		heading: "Staff is very friendly",
		feedback:
			"Staff is amazingly service oriented. From front desk to restaurant everyone wants to make sure guests are happy and comfortable every moment of their stay!",
		name: "Rajesh Kumar",
		rating: 5,
	},
	{
		heading: "Great location and amenities",
		feedback:
			"The hotel is located near the airport and has a free shuttle service. The rooms are spacious and clean, and the breakfast buffet is delicious. The pool and spa are also very relaxing.",
		name: "Priya Singh",
		rating: 4,
	},
	{
		heading: "Best hotel ever",
		feedback:
			"I have stayed at many hotels in my life, but this one is by far the best. The staff is so attentive and helpful, the room is cozy and comfortable, and the food is amazing. I felt like royalty here.",
		name: "Anil Sharma",
		rating: 5,
	},
];

// FeedbackCard component to render each testimonial
const FeedbackCard = ({ heading, feedback, name, rating }) => {
	return (
		<div className="bg-gray-100 p-6 rounded-lg border border-gray-300 shadow-lg">
			<div className="flex flex-col mb-4">
				<div className="flex">
					<div className="text-4xl text-yellow-400 mr-2">“</div>
					<h3 className="text-lg font-bold text-gray-700">
						{heading}
					</h3>
				</div>
				<div className="flex mr-2">
					{[...Array(rating)].map((_, i) => (
						<svg
							key={i}
							className="w-4 h-4 fill-current text-yellow-400"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
						</svg>
					))}
				</div>
			</div>
			<p className="text-gray-600 mb-4">{feedback}</p>
			<div className="flex items-center">
				<span className="text-gray-700 font-medium">{name}</span>
			</div>
		</div>
	);
};

// Testimonials component to render the carousel of testimonials
const Testimonials = () => {
	return (
		<div className="container mx-auto py-12 px-4">
			<SectionHeading
				mainHeading={"Testimonials"}
				subHeading={"Guest Feedback"}
			/>
			<Carousel
				slidesToShow={3}
				cellSpacing={20}
				wrapAround={true}
				renderBottomLeftControls={({ previousSlide }) => (
					<button
						className="bg-gray-200 p-2 rounded-full shadow-lg my-4 mx-2"
						onClick={previousSlide}
					>
						<svg
							className="w-6 h-6 fill-current text-gray-800"
							viewBox="0 0 24 24"
						>
							<path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z" />
						</svg>
					</button>
				)}
				renderBottomRightControls={({ nextSlide }) => (
					<button
						className="bg-gray-200 p-2 rounded-full shadow-lg my-4 mx-2"
						onClick={nextSlide}
					>
						<svg
							className="w-6 h-6 fill-current text-gray-800"
							viewBox="0 0 24 24"
						>
							<path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
						</svg>
					</button>
				)}
			>
				{testimonials.map((testimonial, i) => (
					<FeedbackCard key={i} {...testimonial} />
				))}
			</Carousel>
		</div>
	);
};

export default Testimonials;
