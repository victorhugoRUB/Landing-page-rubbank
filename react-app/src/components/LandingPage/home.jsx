import React from "react";
import { CollapsibleFAQ } from "./Dropdownlist";
import {FaArrowDown} from "react-icons/fa";
import { DivLeftText, DivLeftTitle, HomeContainer, InicioContainer, LeftBlock, LeftContent, LeftText, MiddleContent, Noaexiste, RightBlock, LeftButton, LeftTextButton, DivLeftTexts} from "./Inicio/homeElements";
import { ParaQuemContainer, LeftBlockPQ, RightBlockPQ, LeftContentPQ, RightContentTextPQ, RightContentCardsPQ, RightCard1PQ, RightCardIcon1PQ, RightCardText1PQ, RightCardTextBlock1PQ, RightCardIcon1ImagePQ, WaveImageParaVoce} from "./Paraquem/paraquemElements";
import coracaoImg from "../../assets/Paraquem/Icons/Coracao.png"
import cadeadoImg from "../../assets/Paraquem/Icons/Cadeado.png"
import lampadaImg from "../../assets/Paraquem/Icons/Lampada.png"
import { Block1, BlockTitleText, BottomImageBlockSobre, BottomLeftBlock, BottomLeftTextBlock, BottomLeftTitleBlock, BottomRightImageBlock, BottomTextTitleSobre, ButtonBlockSobre, DivImageSobre, ImageBlock, ImageBlock1, ImageBlock2, ImageBlockSobre, SobreContainer, TextBlock, TextBlock1, TextTitleBlockSobre, TitleBlock, TopImageBlockSobre, TopLeftImageBlock, TopRightBlock, TopRightTextBlock, TopRightTitleBlock, TopTextTitleSobre } from "./Sobre/sobre";
import { CellDivSB2, DivCellDivSB2, DivCellTextSB2, DivImgParceiros, DivParceiros, ParceirosText, RubcubeIMG, RubcubeIMGParceiros, TextBlockSB2, TextBlockTextSB2, TextBlockTitleSB2, TextDivSB2, VisaIMG, VisaIMGParceiros } from "./Sobre-p2/sobre-p2";
import { ClienQAprovContainer, DivPubliCQA, DivPubliTwitterCQA, DivTitleCQA, TitleCQA, TwitterIMG1CQA, TwitterIMG2CQA, TwitterIMG3CQA } from "./ClienteQAprovam/ClienQAprov";
import { DivPerguntasFAQ, FAQContainer, FaqContainer, PerguntaFAQ, TitleFAQ } from "./FAQ/FAQ";
import { BottomItensFooter, DivImgFooter, DivLastInfoFooter, FooterContainer, IMG1BottomFooter, IMG2BottomFooter, LastInfoFooter, TitlesFooter, TopItemBaixaAppFooter, TopItemBaixaAppIMG1, TopItemBaixaAppIMG2, TopItemEmpresaFooter, TopItemEmpresaTextF, TopItemNumeroFooter, TopItemTextF, TopItensFooter } from "./Footer/footer";
import { MenuBar } from "../Navbar/navbarElements";

const Home = () => {
	return (
		<HomeContainer>
			<InicioContainer id="inicio">
				<LeftBlock>
						<LeftContent>
							<DivLeftTexts>
								<DivLeftTitle>
									<Noaexiste cor="#1D1C3E">RUB</Noaexiste><Noaexiste cor="white">BANK</Noaexiste>
								</DivLeftTitle>
								<DivLeftText>
									<LeftText>Seu banco, como você precisa.</LeftText>
								</DivLeftText>
							</DivLeftTexts>
							<LeftButton><LeftTextButton onClick={event =>  window.location.href='https://play.google.com/store/apps'}>Abra sua conta</LeftTextButton></LeftButton>
						</LeftContent>
				</LeftBlock>
				<MiddleContent></MiddleContent>
				<RightBlock></RightBlock>
			</InicioContainer>
			<ParaQuemContainer id="paraquem">
				<WaveImageParaVoce/>
				<LeftBlockPQ>
					<LeftContentPQ/>
				</LeftBlockPQ>
				<RightBlockPQ>
					<RightContentCardsPQ>
						<RightCard1PQ>
							<RightCardIcon1PQ>
								<RightCardIcon1ImagePQ src={coracaoImg} alt="icone"/>
							</RightCardIcon1PQ>
							<RightCardTextBlock1PQ>
								<RightCardText1PQ weight="900" size="27px">Personalização para sua Vida</RightCardText1PQ><br/><RightCardText1PQ weight="400" size="22px">Rubbank adapta-se a você, oferecendo personalização completa para sua experiência bancária.</RightCardText1PQ>
							</RightCardTextBlock1PQ>
						</RightCard1PQ>
						<RightCard1PQ>
							<RightCardIcon1PQ>
								<RightCardIcon1ImagePQ src={cadeadoImg} alt="icone"/>
							</RightCardIcon1PQ>
							<RightCardTextBlock1PQ>
								<RightCardText1PQ weight="900" size="27px">Segurança em primeiro lugar</RightCardText1PQ><br/><RightCardText1PQ weight="400" size="22px">Suas informações financeiras estão sempre protegidas. Garantimos segurança total com protocolos avançados e monitoramento contínuo..</RightCardText1PQ>
							</RightCardTextBlock1PQ>
						</RightCard1PQ>
						<RightCard1PQ>
							<RightCardIcon1PQ>
								<RightCardIcon1ImagePQ src={lampadaImg} alt="icone"/>
							</RightCardIcon1PQ>
							<RightCardTextBlock1PQ>
								<RightCardText1PQ weight="900" size="27px">Inovação Constante</RightCardText1PQ><br/><RightCardText1PQ weight="400" size="22px">Esteja sempre à frente na revolução digital financeira, aproveitando as últimas tecnologias para simplificar suas finanças e ser pioneiro em novos recursos.</RightCardText1PQ>
							</RightCardTextBlock1PQ>
						</RightCard1PQ>
					</RightContentCardsPQ>
				</RightBlockPQ>
			</ParaQuemContainer>
			<SobreContainer id="sobre">
				<TextTitleBlockSobre>
					<TopTextTitleSobre>
						MELHORE SUA SITUAÇÃO FINANCEIRA COM APENAS ALGUNS CLIQUES.
					</TopTextTitleSobre>
					<BottomTextTitleSobre>
					O RUBBANK PROPORCIONA UMA ESPERIÊNCIA ABRANGENTE, OFERECENDO SOLUÇÕES FINANCEIRAS PARA SIMPLIFICAR SUA ROTINA.
					</BottomTextTitleSobre>
				</TextTitleBlockSobre>
				<DivImageSobre>
					<ImageBlockSobre>
						<ImageBlock1 />
						<BlockTitleText>
							<TitleBlock>
								CONTA<br />DIGITAL
							</TitleBlock>
							<TextBlock>
								No Rubbank, tenha acesso a uma conta digital completa com Pix, transferências e depósitos, tudo sem cobrança de taxas ou custos de manutenção.
							</TextBlock>
							<ButtonBlockSobre onClick={event =>  window.location.href='https://play.google.com/store/apps'}>ABRIR MINHA CONTA</ButtonBlockSobre>
						</BlockTitleText>
					</ImageBlockSobre>
					<ImageBlockSobre>
						<BlockTitleText>
							<TitleBlock>
								FACILIDADE<br />SEM IGUAL
							</TitleBlock>
							<TextBlock>
								No Rubbank, tenha acesso a uma conta digital completa com Pix, transferências e depósitos, tudo sem cobrança de taxas ou custos de manutenção.
							</TextBlock>
							<ButtonBlockSobre onClick={event =>  window.location.href='https://play.google.com/store/apps'}>ABRIR MINHA CONTA</ButtonBlockSobre>
						</BlockTitleText>
						<ImageBlock2 />
					</ImageBlockSobre>
				</DivImageSobre>
				<DivCellTextSB2>
					<DivCellDivSB2>
						<CellDivSB2 />
					</DivCellDivSB2>
					<TextDivSB2>
						<TextBlockSB2 cor="#E9A060">
							<TextBlockTitleSB2>Flexibilidade Digital</TextBlockTitleSB2>
							<TextBlockTextSB2>Acesse seus serviços bancários a qualquer hora, em qualquer lugar. Sem agências físicas, oferecemos uma experiência ágil e adaptável.</TextBlockTextSB2>
						</TextBlockSB2>
						<TextBlockSB2 cor="#FFFFFF">
							<TextBlockTitleSB2>Eficiência Inigualável</TextBlockTitleSB2>
							<TextBlockTextSB2>Simplificamos sua vida financeira. Processos automatizados eliminam burocracia, proporcionando transações rápidas e eficientes.</TextBlockTextSB2>
						</TextBlockSB2>
						<TextBlockSB2 cor="#E9A060">
							<TextBlockTitleSB2>Compromisso ambiental</TextBlockTitleSB2>
							<TextBlockTextSB2>Priorizamos a sustentabilidade. Sem agências físicas, reduzimos nosso impacto ambiental, oferecendo um banco comprometido com o meio ambiente.</TextBlockTextSB2>
						</TextBlockSB2>
						<TextBlockSB2 cor="#FFFFFF">
							<TextBlockTitleSB2>Benefícios para Todos</TextBlockTitleSB2>
							<TextBlockTextSB2>Junte-se a nós e compartilhe os benefícios. Ao usar e indicar o Rubbank, você e seus amigos ganham mais.</TextBlockTextSB2>
						</TextBlockSB2>
					</TextDivSB2>
				</DivCellTextSB2>
				<DivParceiros>
					<ParceirosText>PARCEIROS:</ParceirosText>
					<DivImgParceiros>
						<RubcubeIMGParceiros /><VisaIMGParceiros />
					</DivImgParceiros>
				</DivParceiros>
			</SobreContainer>
			<ClienQAprovContainer id="clientes">
				<DivTitleCQA>
					<TitleCQA>CLIENTES QUE AMARAM A RUBBANK</TitleCQA>
				</DivTitleCQA>
				<DivPubliCQA>
					<DivPubliTwitterCQA><TwitterIMG1CQA /></DivPubliTwitterCQA>
					<DivPubliTwitterCQA><TwitterIMG2CQA /></DivPubliTwitterCQA>
					<DivPubliTwitterCQA><TwitterIMG3CQA /></DivPubliTwitterCQA>
				</DivPubliCQA>
			</ClienQAprovContainer>
			<FAQContainer id="FAQ">
				<TitleFAQ>PERGUNTAS FREQUENTES</TitleFAQ>
				<DivPerguntasFAQ>
					<CollapsibleFAQ summary="1. Quais são os serviços oferecidos pelo Rubbank?">
						<p>Os serviços oferecidos pelo Rubbank incluem:</p>
						<ul>
							<li>Conta digital com Pix, transferências e depósitos</li>
							<li>Atendimento ao cliente 24/7</li>
						</ul>
					</CollapsibleFAQ>
					<CollapsibleFAQ summary="2. O Rubbank cobra alguma taxa de manutenção de conta">
						<p>Não, o Rubbank não cobra taxas de manutenção de conta.</p>
					</CollapsibleFAQ>
					<CollapsibleFAQ summary="3. O Rubbank oferece cartões de débito ou crédito?">
						<p>Ainda não é possível disponibilizar cartões de débito e crédito, mas será possível em breve.</p>
					</CollapsibleFAQ>
					<CollapsibleFAQ summary="4. Como posso entrar em contato com o suporte ao cliente do Rubbank em caso de dúvidas ou problemas?">
						<p>Você pode entrar em contato com o suporte ao cliente do Rubbank através do telefone (18) 3222-6805.</p>
					</CollapsibleFAQ>
				</DivPerguntasFAQ>
			</FAQContainer>
			<FooterContainer>
				<TopItensFooter>
					<TopItemBaixaAppFooter>
						<TitlesFooter>Baixe nosso app</TitlesFooter>
						<TopItemBaixaAppIMG1 onClick={event =>  window.location.href='https://play.google.com/store/apps'} />
						<TopItemBaixaAppIMG2 />
					</TopItemBaixaAppFooter>
					<TopItemEmpresaFooter>
						<TitlesFooter>Empresa</TitlesFooter>
						<TopItemTextF href="https://www.rubcube.com/">Sobre a RUBCUBE</TopItemTextF>
						<TopItemTextF>Sobre a RUBBANK</TopItemTextF>
						<TopItemTextF>Perguntas frequentes</TopItemTextF>
						<TopItemTextF>Contato</TopItemTextF>
					</TopItemEmpresaFooter>
					<TopItemNumeroFooter>
						<TitlesFooter>Nossos números</TitlesFooter>
						<TopItemTextF>Presidente Prudente</TopItemTextF>
						<TopItemTextF>(18) 3222-6805</TopItemTextF>
						<TopItemTextF>Também não solicitamos dados pessoais, senha da conta, código de transação por telefone. Estes números são apenas para você fazer ligações para o Inter.</TopItemTextF>
					</TopItemNumeroFooter>
				</TopItensFooter>
				<BottomItensFooter>
					<DivImgFooter>
						<IMG1BottomFooter />
						<IMG2BottomFooter />
					</DivImgFooter>
						<LastInfoFooter>
							© 2021 RUBBANK. Todos os direitos reservados. <br />
							CNPJ: 31.872.495/0001-72 <br />
							R. Dr. João Gonçalves Foz, 1147 - Sala 01 - Jardim Marupiara, Pres. Prudente - SP, 19060-050
						</LastInfoFooter>
				</BottomItensFooter>
			</FooterContainer>
		</HomeContainer>
		
	);
};

export default Home;
