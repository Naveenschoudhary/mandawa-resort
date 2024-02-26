import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const BackgroundVideo = ({ videoSrc, thumbnailSrc }) => {
	const [isVideoReady, setIsVideoReady] = useState(false);
	const [isVideoVisible, setIsVideoVisible] = useState(true);
	const [videoProgress, setVideoProgress] = useState(0);
	const [hasLoopRestarted, setHasLoopRestarted] = useState(false);
	useEffect(() => {
		if (hasLoopRestarted) {
			setIsVideoVisible(false);
			setTimeout(() => {
				setIsVideoVisible(true);
				setHasLoopRestarted(false);
			}, 500); // Adjust the duration as per your transition effect timing
		}
	}, [hasLoopRestarted]);

	const handleVideoReady = () => {
		setIsVideoReady(true);
	};

	const handleVideoProgress = (progress) => {
		if (progress.played === 1) {
			setHasLoopRestarted(true);
		}
	};

	return (
		<div className="w-escape h-[50vh] md:h-[60vh] lg:h-[90vh] relative">
			{!isVideoReady && (
				<div className="absolute inset-0 flex items-center justify-center">
					<Image
						src={thumbnailSrc}
						alt="Thumbnail"
						className="w-full h-full object-cover"
						fill
						sizes="100vw"
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
			)}
			<div className="videoBg">
				{isVideoVisible && (
					<ReactPlayer
						url={videoSrc}
						width="100%"
						height="100%"
						playing={isVideoReady}
						loop
						muted
						playsinline
						controls={false} // Hide the video controls
						onReady={handleVideoReady}
						onProgress={handleVideoProgress}
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "100%",
							opacity: isVideoVisible ? 1 : 0.1, // Apply opacity based on visibility state
							transition: "opacity 2s ease-in-out", // Customize the transition effect
						}}
					/>
				)}
			</div>

			<div className="h-[300px] md:h-[400px] lg:h-[600px] absolute inset-0 flex justify-center items-center z-5 bg-gradient-to-b from-black/60 to-transparent"></div>
		</div>
	);
};

export default BackgroundVideo;
