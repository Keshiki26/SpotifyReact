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
import { Link } from 'react-router-dom';

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
		this.props.onClickVideo([video]);
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={0}>
				<Grid item xs={12} sm={2} md={3} lg={4}></Grid>
				<Grid item xs={12} sm={8} md={6} lg={4}>
					{this.props.videos.map((video, index) => {
						return (
							<Card key={index} className="cardVideo">
								<Link
									to={{
										pathname: '/video',
										search: video.id.videoId,
									}}
								>
									<CardMedia
										className="searchVideos"
										onClick={() => this.videoClicked(video)}
										image={`http://img.youtube.com/vi/${video.id.videoId}/maxresdefault.jpg`}
									/>
								</Link>
								<CardContent className="cardContents">
									<Typography
										variant="body1"
										className="cardContentText"
										component="h5"
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
		);
	}
}
export default withStyles(styles)(Contentbox);
