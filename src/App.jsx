import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Routes';

const App = () => (
  <RouterProvider router={router} />
);

export default App;
