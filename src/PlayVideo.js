import { Grid } from '@material-ui/core';
import React from 'react';
import YouTube from 'react-youtube';

const PlayVideo = (props) => {
	return (
		<div className="videoBoxBox">
			<div className="videoBox">
				{props.video.map((video, index) => {
					console.log(video);
					return (
						<div className="videoPlayerBox">
							<YouTube
								className="videoPlayer"
								videoId={video.id.videoId}
								opts={{
									playerVars: {
										autoplay: 1,
									},
								}}
								autoplay={false}
							/>
						</div>
					);
				})}
				<div className="videoInfo">
					{props.video.map((video, index) => {
						return (
							<div className="playerContents">
								<a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
									<h2>{video.snippet.title}</h2>
								</a>
								<p>{video.snippet.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default PlayVideo;
