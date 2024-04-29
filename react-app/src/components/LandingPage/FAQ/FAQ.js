import styled from "styled-components";

export const FAQContainer = styled.div`
	background-color: #6D14C9;
	display: flex;
	justify-content: start;
	align-items: flex-start;
	min-height: 60vh;
	height: 100%;
	margin: 0 auto;
	position: relative;
	flex-direction: column;
	gap: 80px;
	padding: 80px;
	overflow: hidden;
	@media screen and (max-width: 768px){
		padding: 16px;
		gap: 20px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const TitleFAQ = styled.p`
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

export const DivPerguntasFAQ = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px){
		font-size: 80%;
	}
`;
