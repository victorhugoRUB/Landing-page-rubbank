import styled from "styled-components";
import Ggplay from "../../../assets/Footer/GooglePlayButton.png"
import QRcode from "../../../assets/Footer/QRcode.png"
import rubcube from "../../../assets/Footer/LogoRubCube.png"
import rubbank from "../../../assets/Footer/LogoRubBank.png"

export const FooterContainer = styled.div`
	background-color: #16191C;
	display: flex;
	align-items: center;
	max-width: 100%;
	margin: 0 auto;
	position: relative;
	flex-direction: column;
	gap: 80px;
	padding: 80px;
	overflow: hidden;
	@media screen and (max-width: 800px){
		padding: 16px;
		gap: 20px;
	}
`;

export const TopItensFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	text-align: start;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 800px){
		flex-direction: column;
	}
`;

export const TopItemBaixaAppFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const TopItemBaixaAppIMG1 = styled.div`
	background-image: url(${Ggplay});
	height: 30%;
	width: 50%;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	@media screen and (max-width: 800px){
		height: 70px;
		width: 100%;
	}
`;

export const TopItemBaixaAppIMG2 = styled.div`
	background-image: url(${QRcode});
	height: 70%;
	width: 70%;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	@media screen and (max-width: 800px){
		height: 150px;
		width: 100%;
	}
`;

export const TopItemEmpresaFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: wrap;
	align-content: center;
	width: 100%;
`;

export const TopItemTextF = styled.a`
	color: #ffffff;
	font-family: 'Inter', sans-serif;
	font-size: 100%;
	font-weight: 500;
	width: 50%;
`;

export const TopItemNumeroFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: wrap;
	align-content: center;
	width: 100%;
	height: fit-content;
`;

export const TopItemNumeroTextF = styled.p`
	color: #ffffff;
	font-family: 'Inter', sans-serif;
	font-size: 100%;
`;

export const TitlesFooter = styled.p`
	color: #ffffff;
	font-family: 'Inter', sans-serif;
	text-decoration: underline;
	font-size: 150%;
	font-weight: 900;
`;

export const BottomItensFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const DivImgFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
`;

export const IMG1BottomFooter = styled.div`
	background-image: url(${rubcube});
	height: 36px;
	width: 185px;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	@media screen and (max-width: 800px){
		height: 25px;
		width: 100%;
	}
`;

export const IMG2BottomFooter = styled.div`
	background-image: url(${rubbank});
	height: 36px;
	width: 185px;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	@media screen and (max-width: 800px){
		height: 25px;
		width: 100%;
	}
`;

export const DivLastInfoFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LastInfoFooter = styled.p`
	color: #ffffff;
	font-size: 80%;
	text-align: center;
`;