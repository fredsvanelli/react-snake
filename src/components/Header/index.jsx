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
                        <b>Score</b>
                        <span>{scores.current}</span>
                    </p>
                </div>
                <div>
                    <p>
                        <b>Best</b>
                        <span>{scores.highScore}</span>
                    </p>
                </div>
            </Scores>
        </HeaderContainer>
    );
};

export default Header;
