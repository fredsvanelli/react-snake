import { useGame } from '../../hooks/Game';

import { HeaderContainer, Logo, LogoCredit, Scores } from './styles';

const Header = () => {
    const { scores } = useGame();

    return (
        <HeaderContainer>
            <Logo>Snake</Logo>
            <LogoCredit>Infinity</LogoCredit>
            <Scores className="d-lg-none">
                <div>
                    <p>
                        <b>Pontos</b>
                        <span>{scores.current}</span>
                    </p>
                </div>
                <div>
                    <p>
                        <b>Melhor</b>
                        <span>{scores.highScore}</span>
                    </p>
                </div>
            </Scores>
        </HeaderContainer>
    );
};

export default Header;
