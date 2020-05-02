import React from 'react'



const ReviewContainer = ({review}) => {
	return (
		<div className="text-black rounded-lg shadow-lg grid grid-cols-1 bg-white w-auto ml-8 mr-8 mb-4">
			<div className="grid grid-cols-1 ml-2 mr-2">
				<div className="text-lg float-left mb-5 mt-2">
					{review.author}
				</div>
				<div className="mb-3">
					{review.content}
				</div>
			</div>
		</div>
	)
}

export default ReviewContainer