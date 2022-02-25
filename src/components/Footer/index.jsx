import { useGame } from '../../hooks/Game';
import Keyboard from '../Keyboard';
import { FooterContainer, Credits, Scores } from './styles';

const Footer = () => {
    const { scores } = useGame();

    return (
        <FooterContainer>
            <Keyboard />
            <Scores className="d-none d-lg-flex">
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
            </Scores>
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
