import React, { useEffect, useState } from "react";
import logoRubBank from "../../assets/logoRubBank.png";
import { Nav, NavLink, NavMenu, NavImage, NavLogin, NavBars, NavColorBG, MenuBar, NavClose, DivNavClose} from "./navbarElements";
import styled from "styled-components";

const StyledNav = styled(Nav)`
	background-color: ${props => props.color ? "#6f14c9" : "transparent"};
	transition: 0.5s;

`;

const Navbar = () => {

	const [openedMenu, setOpenedMenu] = useState(false);

	const handleMenuClick = () => {
		setOpenedMenu(!openedMenu);
	}
	
	const [color, setColor] = useState(false);
	
	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 80) {
				setColor(true);
			} else {
				setColor(false);
			}
		}
		window.addEventListener('scroll', changeBackground);

		return () => {
			window.removeEventListener('scroll', changeBackground);
		}
	}, []);

	// const homeRef = useRef(null);
	// const paraquemRef = useRef(null);
	// const sobreRef = useRef(null);
	// const clientesRef = useRef(null);
	// const FAQRef = useRef(null);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const homeTop = homeRef.current.offsetTop;
	// 		const paraquemTop = paraquemRef.current.offsetTop;
	// 		const sobreTop = sobreRef.current.offsetTop;
	// 		const clientesTop = clientesRef.current.offsetTop;
	// 		const FAQTop = FAQRef.current.offsetTop;

	// 		const scrollPosition = window.scrollY + 150; // Adicionando uma margem de 150 pixels para melhorar a precisão

	// 		if (scrollPosition >= homeTop && scrollPosition < paraquemTop) {
	// 			setActiveElement("inicio");
	// 		} else if (scrollPosition >= paraquemTop && scrollPosition < sobreTop) {
	// 			setActiveElement("paraquem");
	// 		} else if (scrollPosition >= sobreTop && scrollPosition < clientesTop) {
	// 			setActiveElement("sobre");
	// 		} else if (scrollPosition >= clientesTop && scrollPosition < FAQTop) {
	// 			setActiveElement("clientes");
	// 		} else if (scrollPosition >= FAQTop) {
	// 			setActiveElement("FAQ");
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	// const [activeElement, setActiveElement] = useState("");

	
	
	return (
		<>
			<StyledNav color = {color}>
                <NavImage src={logoRubBank}/>
				<NavMenu>
					<NavLink href="/#inicio" activeStyle>
						Início
					</NavLink>
					<NavLink href="/#paraquem" activeStyle>
						Para quem?
					</NavLink>
					<NavLink href="/#sobre" activeStyle>
						Sobre
					</NavLink>
					<NavLink href="/#clientes" activeStyle>
						Clientes que aprovam
					</NavLink>
                    <NavLink href="/#FAQ" activeStyle>
						FAQ
					</NavLink>
					<NavLink>
						<NavLogin onClick={event =>  window.location.href='https://play.google.com/store/apps'}	>
                                Fazer login
                        </NavLogin>
					</NavLink>
				</NavMenu>
				<NavBars src={openedMenu ? "" : "/"} onClick={handleMenuClick} />
				{openedMenu && (
					<MenuBar>
						<DivNavClose>
							<NavClose onClick={handleMenuClick} />
						</DivNavClose>
						<NavLink href="/#inicio" activeStyle>
							Início
						</NavLink>
						<NavLink href="/#paraquem" activeStyle>
							Para quem?
						</NavLink>
						<NavLink href="/#sobre" activeStyle>
							Sobre
						</NavLink>
						<NavLink href="/#clientes" activeStyle>
							Clientes que aprovam
						</NavLink>
						<NavLink href="/#FAQ" activeStyle>
							FAQ
						</NavLink>
						<NavLink>
							<NavLogin onClick={event =>  window.location.href='https://play.google.com/store/apps'}	>
									Fazer login
							</NavLogin>
						</NavLink>
					</MenuBar>
				)}
			</StyledNav>
		</>
	);
};

export default Navbar;
