import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from 'client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
// prettier-ignore
root.render(<ApolloProvider client={client}><App /></ApolloProvider>);
