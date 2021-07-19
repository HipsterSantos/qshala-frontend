import React, {useState,useEffect} from 'react';
import './App.css';
import {default as useFetch} from './services/useFetch';
import styled from 'styled-components'; 
import {MainPage} from './pages/Main';
const Container = styled.div `
display:flex; 
flex-direction: column;
text-align: center;
width:100%;
`;
function App() {
  return (
    <Container>
      <MainPage/>
    </Container>
  );
}

export default App;
