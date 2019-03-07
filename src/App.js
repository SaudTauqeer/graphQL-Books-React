import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
// https://github.com/apollographql/apollo-client/issues/3069 well
import ApolloClient from 'apollo-boost';
// components
// import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
// apollo client setup
const client = new ApolloClient({
	uri: 'https://graphql-books-server.herokuapp.com/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div id="main">
					<h1>Reading List</h1>
					<BookList />
					<AddBook />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
