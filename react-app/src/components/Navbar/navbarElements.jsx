import { NavLink as Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #6f14c9{ /* #6f14c9 */};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
    align-items: center;
	height: 5rem;
	max-width: 100%;
	width: 100%;
	position: fixed;
	z-index: 12;
	overflow: hidden;
	@media screen and (max-width: 1366px){
		height: 6rem;
	}
	@media screen and (max-width: 768px){
		flex-direction: row;
		
	}
`;

export const NavLink = styled.a`
	color: #ffffff;
	display: flex;
	align-items: center;
	font-size: 140%;
	font-weight: 1000;
	text-decoration: none;
	margin: 1rem;
	cursor: pointer;
	&.active {
		color: #FFC700;
	}
	@media screen and (max-width: 1366px){
		font-size: 120%;
	}
`;

export const NavLogin = styled.button`
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 100%;
	font-weight: 1000;
	padding: 15px 50px;
	width: 102%;
	background: linear-gradient(90deg, rgba(171, 37, 218, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
	border: 4px solid #AB25DA;
	border-radius: 15px;
	@media screen and (max-width: 1366px){
		padding: 10px 40px;
	}
`;

export const NavImage = styled.img`
    display: flex;
    height: 60%;
	padding: 0 1rem;
	@media screen and (max-width: 1366px){
		height: 3rem;
	}
	@media screen and (max-width: 768px){
		height: 30%;
	}
`;

export const NavBars = styled(FaBars)`
	display: none;
	color: #ffffff;
	background: none;
	border: none;
	@media screen and (max-width: 900px) {
		display: flex;
		font-size: 1.8rem;
		cursor: pointer;
		margin: 0 2rem;
		font-size: 2rem;
	}
`;

export const NavClose = styled(FaRegWindowClose)`
	display: none;
	color: #ffffff;
	@media screen and (max-width: 900px) {
		display: flex;
		cursor: pointer;
		font-size: 2rem;
		margin: 24px;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export const MenuBar = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 70%;

	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
`;

export const DivNavClose = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;