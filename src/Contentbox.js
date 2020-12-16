import React, { Component } from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	GridList,
	GridListTile,
	GridListTileBar,
	IconButton,
	ListSubheader,
	Typography,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Redirect, Route } from 'react-router-dom';

const styles = (theme) => ({
	thumbs: {
		display: 'flex',
	},
	videoCard: {
		display: 'flex',
		flexDirection: 'column-reverse',
	},
});

class Contentbox extends Component {
	state = {
		currentVideo: [],
	};

	videoClicked = (video) => {
		this.setState({ currentVideo: [video] });
	};

	render() {
		const { classes } = this.props;
		return (
			this.state.currentVideo.length == 0 && (
				<Grid container>
					<Grid item xs={12} sm={2} md={3} lg={4}></Grid>
					<Grid item xs={12} sm={8} md={6} lg={4}>
						{this.props.videos.map((video, index) => {
							return (
								<Card>
									<CardMedia
										onClick={() => this.videoClicked(video)}
										image={`http://img.youtube.com/vi/${video.id.videoId}/maxresdefault.jpg`}
										style={{ height: '300px', cursor: 'pointer' }}
									/>

									<CardContent>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{video.snippet.title}
										</Typography>
									</CardContent>
								</Card>
							);
						})}
					</Grid>
					<Grid item xs={12} sm={2} md={3} lg={4}></Grid>
				</Grid>
			)
		);
	}
}
export default withStyles(styles)(Contentbox);
