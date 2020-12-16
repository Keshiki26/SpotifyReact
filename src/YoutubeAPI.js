import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		maxResults: 3,
		key: 'AIzaSyBiKnJjtRdHvnw6Liq8yycELIT2glYQMqM',
		part: 'snippet',
	},
});
