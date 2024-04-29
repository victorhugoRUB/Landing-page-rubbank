import styled from "styled-components";
import CellImage from "../../../assets/Sobre/Cellphone.png";
import RubcubeIMG from "../../../assets/Sobre/Rubcube.png";
import VisaIMG from "../../../assets/Sobre/Visa.png";

export const DivCellTextSB2 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 5%;
	@media screen and (max-width: 768px){
		flex-direction: column;
		align-items: center;
	}
`;

export const DivCellDivSB2 = styled.div`
	display: flex;
	flex-direction: row;
	width: 40%;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px){
		height: 500px;
		width: 100%;
	}
`;

export const CellDivSB2 = styled.div`
	display: flex;
	background-image: url(${CellImage});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	position: relative;
	width: 100%;
	height: 100%;
	margin: 16px;
`;

export const TextDivSB2 = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	height: fit-content;
	align-items: flex-start;
	@media screen and (max-width: 768px){
		width: 100%;
	}
`;

export const TextBlockSB2 = styled.p`
	display: flex;
	background-color: ${props => props.cor};;
	font-family: 'Inter', sans-serif;
	flex-direction: column;
	font-size: 27px;
	font-weight: 900;
	margin: 0;
	padding: 32px;
`;

export const TextBlockTitleSB2 = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 24px;
	font-weight: 900;
	margin: 0;
`;


export const TextBlockTextSB2 = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 20px;
	font-weight: 400;
	margin: 0;
`;

export const DivParceiros = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const ParceirosText = styled.p`
	display: flex;
	justify-content: center;
	font-family: 'Inter', sans-serif;
	font-size: 24px;
	font-weight: 900;
`;

export const DivImgParceiros = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10%;
	width: 100%;
	height: 60px;
`;

export const RubcubeIMGParceiros = styled.img`
	background-image: url(${RubcubeIMG});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: 100%;
	height: 100%;
	margin: 16px;
`;

export const VisaIMGParceiros = styled.img`
	background-image: url(${VisaIMG});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: 100%;
	height: 100%;
	margin: 16px;
`;