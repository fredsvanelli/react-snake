import { useGame } from '../../hooks/Game';
import { FooterContainer, Credits } from './styles';

const Footer = () => {
    const { scores } = useGame();

    return (
        <FooterContainer>
            <div>
                <div>
                    <p>
                        <b>Pontos</b>
                    </p>
                    <span>{scores.current}</span>
                </div>
                <div>
                    <p>
                        <b>Melhor</b>
                    </p>
                    <span>{scores.highScore}</span>
                </div>
            </div>
            <Credits>
                Criado por{' '}
                <a
                    href="https://github.com/fredsvanelli/react-snake"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fred Vanelli
                </a>
            </Credits>
        </FooterContainer>
    );
};

export default Footer;
