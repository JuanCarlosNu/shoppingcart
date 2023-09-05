import React from 'react';
import AddItems from './AddItems';
import List from './List';

export default class App extends React.Component {
    
	render() {
		return (
			<div>
				<h1 className='App-header'>Available Products</h1>

                {/*ListItem.js is enclosed*/}

				<List />

                {/*AddItem.js is enclosed*/}

                <AddItems />

			</div>
		);
	}
}
