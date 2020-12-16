import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import Contentbox from './Contentbox';
import { Route } from 'react-router-dom';
import axios from './YoutubeAPI';

const useStyles = makeStyles({
	root: {
		margin: 0,
	},
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
		};
	}

	onSearchSubmit = async (term) => {
		const response = await axios.get(
			'https://www.googleapis.com/youtube/v3/search',
			{
				params: {
					q: term,
				},
			}
		);
		this.setState({ videos: response.data.items });
	};

	componentDidMount() {}

	render() {
		return (
			<Grid containter="true">
				<Grid item xs={12}>
					<Route
						path="/"
						render={() => <SearchBar onSearchSubmit={this.onSearchSubmit} />}
					></Route>
				</Grid>
				<Grid item xs={12}>
					<Route
						exact
						path="/"
						render={() => <Contentbox videos={this.state.videos} />}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default App;
