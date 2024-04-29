import styled from "styled-components";
import RightImageInicio from "../../../assets/Inicio/RightImageInicio.png"; 
import LeftImageInicio from "../../../assets/Inicio/LeftImageInicio.png"; 
import MiddleImageInicio from "../../../assets/Inicio/MiddleImageInicio.png";

export const HomeContainer = styled.div`
	background: #6f14c9;
	height: 100vh;
	max-width: 100%;
	position: relative;
`;

export const InicioContainer = styled.div`
	background: #6f14c9;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	max-width: 100%;
	margin: 0 auto;
`;

export const LeftBlock = styled.div`
	background-image: url(${LeftImageInicio});
	padding: 0 80px;
	height: 100vh;
	width: 50%;
	display: block;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	flex-direction: column;
	@media screen and (max-width: 768px){
		display: flex;
		padding: 0 5%;
	}

`;

export const RightBlock = styled.div`
	background-image: url(${RightImageInicio});
	padding: 0 80px;
	height: 100vh;
	width: 50%;
	display: block;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	@media screen and (max-width: 768px){
		display: flex;
		padding: 0 5%;
	}

`;

export const LeftContent = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	gap: 48px;
	@media screen and (max-width: 768px){
		display: flex;
		gap: 24px;
		justify-content: space-around;
	} 
`;

export const DivLeftTitle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Noaexiste = styled.h1`
	color: ${props => props.cor};
	font-size: 116px;
	font-weight: 1000;
	display: flex;
	margin: 0;
	font-family: 'Inter', sans-serif;
	line-height: 80%;
	@media screen and (max-width: 1366px){
		font-size: 85px;
	}
	@media screen and (max-width: 768px){
		display: flex;
		font-size: 50px;
		line-height: 60%;
	}
`;

export const DivLeftText = styled.div`
	color: #ffffff;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-left: solid 3px white;
	padding-left: 20px;
	height: auto;
	@media screen and (max-width: 768px){
		display: flex;
		font-size: 1px;
	}
`;

export const DivLeftTexts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
	@media screen and (max-width: 768px){
		display: flex;
		gap: 24px;

	}
`;

export const MiddleContent = styled.div`
	background-image: url(${MiddleImageInicio});
	display: flex;
	height: 640px;
	width: 662px;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 15%;
	right: 35%;
	left: 35%;
	@media screen and (max-width: 1366px){
		height: 483px;
		width: 500px;
		top: calc(15% + 10%);
	}
	@media screen and (max-width: 768px){
		display: flex;
		height: 318px;
		width: 330px;
		position: absolute;
	}
`;

export const LeftText = styled.p`
	display: flex;
	font-size: 43px;
	font-weight: 700;
	line-height: 52px;
	@media screen and (max-width: 768px){
		display: flex;
		font-size: 25px;
		line-height: 31px;
	}
`;

export const LeftButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 0 10%;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	border: 0;
	@media screen and (max-width: 768px){
		display: flex;
		position: relative;
		width: 250px;
		margin-left: calc(50% - 100px);
		left: 50%;
		top: 85px;
		background: rgba(0, 0, 0, 0.5);
	}
`;

export const LeftTextButton = styled.p`
	display: flex;
	font-family: 'Inter', sans-serif;
	font-weight: 500;
	font-size: 42px;
	background: linear-gradient(90deg, #FFC700 21.24%, #AB25DA 70.57%);
	-webkit-text-fill-color: transparent;
	background-clip: text;
	@media screen and (max-width: 768px){
		display: flex;
		font-size: 21px;
	}
`;