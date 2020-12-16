import React, { Component } from 'react';
import {
	AppBar,
	Button,
	FormControl,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const styles = {
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
};
class SearchBar extends Component {
	state = {
		term: '',
	};
	onSearchChange = (e) => {
		this.setState({ term: e.target.value });
	};
	onSubmitChange = (e) => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		const { classes } = this.props;

		return (
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
					<form onSubmit={this.onSubmitChange}>
						<InputBase
							placeholder="Search…"
							value={this.state.term}
							onChange={this.onSearchChange}
							fullWidth
						/>
					</form>
				</Toolbar>
			</AppBar>
		);
	}
}
export default withStyles(styles)(SearchBar);
// <Toolbar>
//     <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Material-UI
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Toolbar>
