import styled from "styled-components";
import TopLeftImage from "../../../assets/Sobre/TopLeftImage.png";
import BottomRightImage from "../../../assets/Sobre/BottomRightImage.png";

export const SobreContainer = styled.div`
	background: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: fit-content;
	max-width: 100%;
	margin: 0 auto;
	position: relative;
	flex-direction: column;
	gap: 80px;
	padding: 128px;
	overflow: hidden;
	@media screen and (max-width: 1366px){
		padding: 64px;
	}
	@media screen and (max-width: 768px){
		padding: 0px;
	}
`;

export const TextTitleBlockSobre = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center	;
	text-align: center;
	height: fit-content;
	gap: 20px;
	@media screen and (max-width: 768px){
		display: none;
	}
`;

export const TopTextTitleSobre = styled.p`
	display: flex;
	font-family: 'Inter', sans-serif;
	font-size: 200%;
	font-weight: 1000;
	margin: 0;
	@media screen and (max-width: 1366px){
		font-size: 170%;	
	}
`;

export const BottomTextTitleSobre = styled.p`
	display: flex;
	font-family: 'Inter', sans-serif;
	font-size: 150%;
	margin: 0;
	@media screen and (max-width: 1366px){
		font-size: 120%;	
	}
`;

export const DivImageSobre = styled.div`
	display: block;
	flex-direction: column;
	width: 100%;
	height: fit-content;
`;

export const ImageBlockSobre = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const ImageBlock1 = styled.div`
	background-image: url(${TopLeftImage});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height:	680px;
	@media screen and (max-width: 1366px){
		height: 500px;	
	}
`;

export const BlockTitleText = styled.div`
	display: flex;
	background-color: #D9D9D9;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height:	680px;
	gap: 5%;
	@media screen and (max-width: 1366px){
		height: 500px;	
	}
`;

export const TitleBlock = styled.p`
	display: flex;
	color: #40136D;
	font-family: 'Inter', sans-serif;
	font-size: 500%;
	flex-wrap: wrap;
	font-weight: 1000;
	width: 100%;
	margin: 0 60px;
	@media screen and (max-width: 1366px){
		font-size: 400%;	
	}
	@media screen and (max-width: 768px){
		font-size: 32px;
		margin: 0 16px;
	}
`;

export const TextBlock = styled.p`
	display: flex;
	margin: 0 60px;

	font-family: 'Inter', sans-serif;
	font-size: 150%;
	color: #7E37DC;
	font-weight: 600;
	@media screen and (max-width: 1366px){
		font-size: 120%;
	}
	@media screen and (max-width: 768px){
		font-size: 16px;
		margin: 0 16px;
	}
`;



export const ImageBlock2 = styled.div`
	background-image: url(${BottomRightImage});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height:	680px;
	@media screen and (max-width: 1366px){
		height: 500px;	
	}
`;

export const ButtonBlockSobre = styled.button`
	display: flex;
	margin: 0 60px;
	justify-content: center;
	align-items: center;
	padding: 3%;
	background: #E9A060;
	border-radius: 12px;
	border: none;
	color: #ffffff;
	font-family: 'Inter', sans-serif;
	font-size: 100%;
	font-weight: 1000;
	@media screen and (max-width: 768px){
		margin: 0 16px;
	};
`;