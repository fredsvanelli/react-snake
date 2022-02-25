/* eslint-disable react/no-array-index-key */
import { useMemo } from 'react';
import { useGame } from '../../hooks/Game';
import { StageContainer, StageBox } from './styles';

const Stage = ({ children }) => {
    const { stageHeight } = useGame();

    const stageStyle = useMemo(
        () => (stageHeight ? { width: stageHeight, height: stageHeight } : {}),
        [stageHeight]
    );

    return (
        <StageContainer>
            <StageBox style={stageStyle} id="stage-box">
                {children}
            </StageBox>
        </StageContainer>
    );
};

export default Stage;
