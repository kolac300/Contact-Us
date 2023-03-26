import styled from "styled-components";

export const ContactInfWrapper = styled.div`
max-height: 647px;
max-width: 491px;
background-color: black;
color: white;
border-radius:10px;

h2{
    margin: 30px 160px 6px 40px;
    font-weight: 600;
    font-size: 28px;
}
p{
    margin: 0px 160px 0px 40px;
    font-weight: 300;
    font-size: 16px;
    color: #C9C9C9;
}

ul{
    list-style: none;
    margin: 111px 114px 0 40px;
    li{
        padding:0;
        margin:  0 0 50px 0;
        display: flex;
        a{    
            text-decoration: none;
            color: white;
        }
        svg{
            padding-right: 25px;
        }
       }
    }

    ol{
        list-style: none;
        margin: 159px 114px 39px 35px;
        display: flex;

        @media screen and (max-width: 1025px) {
            margin: 80px 114px 0 35px;
      }

        li{
            margin-right:24px;
        }
        svg{
            width: 30px;
            height: 30px;
        }
    }
`