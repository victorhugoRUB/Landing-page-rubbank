import styled from "styled-components";
import LeftImagePQ from "../../../assets/Paraquem/LeftImage.png";
import WaveImagePQ from "../../../assets/Paraquem/WaveImageParaVoce.png";

export const ParaQuemContainer = styled.div`
	background: #6526B8;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 100vh;
	max-width: 100%;
	margin: 0 auto;
	position: relative;
	flex-direction: row;
	gap: 80px;
	padding: 80px;
	overflow: hidden;
	@media screen and (max-width: 768px){
		padding: 16px;
	}
`;

export const LeftBlockPQ = styled.div`
	display: flex;
	left: 108px;
	z-index: 1;
	@media screen and (max-width: 768px){
		display: none;
	}
`;

export const LeftContentPQ = styled.div`
	background-image: url(${LeftImagePQ});
	height: 751px;
	width: 378px;
	display: block;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	@media screen and (max-width: 1366px){
		height: 552px;
		width: 287px;
	}
`;

export const RightBlockPQ = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	z-index: 1;
	@media screen and (max-width: 768px){

	}
`;

export const RightContentTextPQ = styled.div`
	display: flex;
`;

export const WaveImageParaVoce = styled.div`
	background-image: url(${WaveImagePQ});
	position: absolute;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-size: 90%;
	width: 100%;
	height: 100%;
	left: -5%;
	top: -5%;
	z-index: 0;
	@media screen and (max-width: 1550px){
		background-size: 80%;
		left: -5%;
		top: -22%;
	};	
	@media screen and (max-width: 1366px){
		background-size: 100%;
		left: -25%;
		top: -20%;
	};
	@media screen and (max-width: 768px){
		background-size: 1500px;
		left: 0%;
		top: -20%;
	};
`;

export const RightContentCardsPQ = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 1%;
	@media screen and (max-width: 1366px){
		gap: 1rem;
	}
	@media screen and (max-width: 768px){
		flex-direction: column;
		margin: 300px 0 0 0;
	}
`;

export const RightCard1PQ = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const RightCardIcon1PQ = styled.div`
	display: flex;
	background-color: #7E37DC;
	height: 109px;
	width: 109px;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1800px){
		height: 80px;
		width: 80px;
	}
`;

export const RightCardIcon1ImagePQ = styled.img`
	display: flex;
	height: 50%;
	width: 50%;
`;

export const RightCardTextBlock1PQ = styled.div`
	display: flex;
	width: 330px;
	height: 265px;
	background-color: #7E37DC;
	justify-content: center;
	box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	flex-direction: column;;
	padding: 20px;
	@media screen and (max-width: 1800px){
		height: 201px;
		width: 250px;
	}
`;

export const RightCardText1PQ = styled.p`
	display: flex;
	color: #ffffff;
	font-family: 'Inter' sans-serif;
	font-style: normal;
	margin: 0;
	font-weight: ${props => props.weight};
	font-size: ${props => props.size};
	text-align: center;
	justify-content: center;
	@media screen and (max-width: 1800px){
		font-size: calc(${props => props.size} - 20%);
	}
`;