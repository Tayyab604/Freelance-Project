
import styled from 'styled-components';
import { IoMdArrowDropdown } from "react-icons/io";
import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SelectCatagory() {
const [isseleect,setisseleect] =useState()
console.log(isseleect)
  return (
    <Container>
      <Main>
        <Up>
          <img src="./Images/Logo.png" alt="logo" />
        </Up>
        <Down>
          <Bottom>
            <Text fontSize="30px" color="#85368B" fontWeight="bold" >Please Select Your Catagory</Text>
            <div className='select-container' >
              <select onChange={(e)=>setisseleect(e.target.value)}  className='select-box' name="categories" id="categories">
                <option >Select</option>
                <option className='option' value="GraphicsDesign">Graphics & Designer</option>
                <option value="ProgrammingTech">Programming & Techg</option>
                <option value="DigitalMarketing">Digital Marketing</option>
                <option value="VideoAnimation">Video & Animationr</option>
                <option value="WritingTranslation">Writing & Translation</option>
                <option value="Data">Data</option>
                <option value="OT">AI Services</option>
              </select>
              <div className="icon-container">
                <IoMdArrowDropdown className="icon" />
              </div>
            </div>
            <div className='btn'>
              {
                isseleect &&
                
               <Link to="/welcome" >  <Button className='button '>Continue</Button></Link>
              }
            </div>
          </Bottom>
        </Down>
      </Main>
    </Container>
  )
}

export default SelectCatagory

const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const Up = styled.div`
margin-bottom: 5vh;
  img{
    height: 83px;
    width: 123px;
    background: transparent;
    margin-top: 70px;
    margin-left: 80px;
  }
`
const Down = styled.div`
  display: flex;
  gap: 15vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Bottom = styled.div`
  width: 792px;
  height: 450px;
  background-color: white;
  box-shadow: 0px 0px 30px 2px black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 0px;
  font-family: "Poppins", sans-serif;
 
  h1{
    margin: 0px;
    margin-top: 2vh;
  }
  .select-container{
    display: flex;
    justify-content: center;
    position: relative;
    min-width: 550px;
    margin-top: 4vh;
    height: 50px;
  }
  .select-box{
    border: none;
    appearance: none;
    border-radius: 12px;
    padding: 12px;
    width: 100%;
    color: black;
    background-color: #dcdcdc;
    font-size: 20px;
    /* font-family: "Poppins"; */

  }
 
  .select-container .icon-container{
    width: 50px;
    height: 100%;
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-container .icon{
    font-size: 50px;
    color: #FDB581;
  }
  .btn{
    margin-top: 36vh;
    margin-left: 92vh;
  }
  .btn button{
    box-shadow: 0px 0px 14px 0px grey;
    background-color: #85368B;
    color: white;
    border: none;
    border-radius: 13px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    padding: 8px 15px;
    font-size: 15px;
    cursor: pointer;
  }
  
`
const Container = styled.div`

    margin: 0;
    height:  100vh;
    background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
.poppins-thin {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
  }
  
  .poppins-thin-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: italic;
  }
  
  .poppins-extralight {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
  }
  
  .poppins-extralight-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: italic;
  }
  
  .poppins-light {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
  }
  
  .poppins-light-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: italic;
  }
  
  .poppins-regular {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  .poppins-regular-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: italic;
  }
  
  .poppins-medium {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  
  .poppins-medium-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: italic;
  }
  
  .poppins-semibold {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
  }
  
  .poppins-semibold-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: italic;
  }
  
  .poppins-bold {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  
  .poppins-bold-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: italic;
  }
  
  .poppins-extrabold {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
  }
  
  .poppins-extrabold-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: italic;
  }
  
  .poppins-black {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-style: normal;
  }
  
  .poppins-black-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-style: italic;
  }

`
