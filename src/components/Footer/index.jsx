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
                        <b>Score</b>
                    </p>
                    <span>{scores.current}</span>
                </div>
                <div>
                    <p>
                        <b>Best</b>
                    </p>
                    <span>{scores.highScore}</span>
                </div>
            </Scores>
            <Credits>
                Created by{' '}
                <a
                    href="https://fredvanelli.dev"
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
