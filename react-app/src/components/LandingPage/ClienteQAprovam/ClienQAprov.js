import styled from "styled-components";
import TwitterIMG1 from "../../../assets/ClienQAprov/TwitterIMG1.png";
import TwitterIMG2 from "../../../assets/ClienQAprov/TwitterIMG2.png";
import TwitterIMG3 from "../../../assets/ClienQAprov/TwitterIMG3.png";
import TwitterLogo from "../../../assets/ClienQAprov/TwitterLogo.png";

export const ClienQAprovContainer = styled.div`
	background: linear-gradient(180deg, #FFFFFF 0%, #AB25DA 30%, #6D14C9 60%);
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	max-width: 100%;
	margin: 0 auto;
	position: relative;
	flex-direction: column;
	gap: 80px;
	padding: 80px;
	overflow: hidden;
	@media screen and (max-width: 768px){
		padding: 200px 16px 16px 16px;
		gap: 20px;
	}
`;

export const DivTitleCQA = styled.div`
	display: flex;
`;

export const TitleCQA = styled.p`
	text-align: center;
	font-family: 'Inter', sans-serif;
	font-size: 450%;
	color: #ffffff;
	font-weight: 1000;
	@media screen and (max-width: 768px){
		font-size: 300%;
		margin: 0;
	}
`;

export const DivPubliCQA = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	gap: 1rem;
	flex-wrap: wrap;
	align-items: center;
`;

export const DivPubliTwitterCQA = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${TwitterLogo});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 25px;
	width: 438px;
	height: 431px;
	@media screen and (max-width: 768px){
		height: 20rem;
		width: 100%;
	}
`;

export const TwitterIMG1CQA = styled.img`
	width: 90%;
	height: 55%;
	background-image: url(${TwitterIMG1});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;

export const TwitterIMG2CQA = styled.img`
	width: 90%;
	height: 45%;
	background-image: url(${TwitterIMG2});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;

export const TwitterIMG3CQA = styled.img`
	width: 90%;
	height: 65%;
	background-image: url(${TwitterIMG3});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;