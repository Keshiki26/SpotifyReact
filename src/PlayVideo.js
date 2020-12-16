import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class PlayVideo extends Component {
	render() {
		return (
			<div>
				{this.props.videos.map((video, index) => {
					console.log(video);
					return (
						<Grid item xs={12} direction="column">
							<YouTube
								videoId={video.id.videoId}
								opts={{
									height: '390',
									width: '640',
									playerVars: {
										autoplay: 1,
									},
								}}
								autoplay={false}
							/>
							{/* <iframe
                            key={index}
                            src={`https://www.youtube.com/embed/${}`}
                            frameborder="0"
                            type="text/html"
                        /> */}
						</Grid>
					);
				})}
			</div>
		);
	}
}
