import flames from '../../assets/img/flames.svg';

import * as S from './styles';

export default function Logo() {
    return (
        <S.Logo>
            <img src={flames} alt="Flames from Logo"/>
            <S.LogoText>Kcalculator</S.LogoText>
        </S.Logo>
    )
}