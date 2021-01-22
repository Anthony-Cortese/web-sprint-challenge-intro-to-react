// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from "axios"
import styled from "styled-components";
import Theme from "./Theme"

const StyledProject = styled.div`
text-align: center;
h1 {
  color: purple;
  font-weight: bold;
  text-align: center;
  }

  &:hover {
    color: red;
    background-color: royalblue;
    transition: all 1.5s ease-in-out;
  }

img {
  &:hover {
    transform: scale(1.2);
    transition: all 3s ease-in-out;
  }
}

`;




export default function Character(props) {
    const { charId, close, info } = props;
    const [details, setDetails] = useState({});

    useEffect(() => {
            axios.get(`https://swapi.dev/api/people/1/`)
              .then(res => { 
                  console.log(res.data);
                  setDetails(res.data) 
                })
              .catch(err => { 
                  console.log(err) 
                })
          }, []);
    
        return (
            <StyledProject info={info} charId={charId} close={close}>
            <div className= "input-group">
                
                    <h3>Name: {props.info.name}</h3>
                    <p>Gender: {props.info.gender}</p>
                    <p>Birth Year: {props.info.birth_year}</p>
                    <p>Skin Color: {props.info.skin_color}</p>
                    <p>Eye Color: {props.info.eye_color}</p>
                    <p>Hair Color: {props.info.hair_color}</p>
    
                    
                <button onClick={props.close}>Close</button>
                
                
            </div>
            </StyledProject>
        )
        }
