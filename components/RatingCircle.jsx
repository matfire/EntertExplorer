import React, { useRef, useEffect } from 'react'

const RatingCircle = ({rating}) => {
	const canvasRef = useRef()

	useEffect(() => {
		const context = canvasRef.current.getContext("2d")
		const x = context.canvas.width / 2
		const y = context.canvas.height / 2
		context.beginPath()
		context.arc(x, y, context.canvas.width / 2 - 20, 0, 2 * Math.PI, false)
		context.strokeStyle = "#e7f2ba"
		context.fillStyle = "transparent"
		context.lineWidth = 10
		context.fill()
		context.stroke()
	}, [])
	return (
		<div className="h-full w-full flex justify-center items-center bg-black rounded-full">
					<span className="text-center text-white break-words " >{rating * 10}</span>
					<canvas ref={canvasRef} className="bg-green h-full w-full absolute z-10" />
		</div>
	)
}

export default RatingCircle