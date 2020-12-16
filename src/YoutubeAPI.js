import axios from 'axios';

//AIzaSyBiKnJjtRdHvnw6Liq8yycELIT2glYQMqM

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		maxResults: 3,
		key: 'AIzaSyB9lDUmAOwhcxiIj9MrXBlUK8yJzLk-KI4',
		part: 'snippet',
	},
});
