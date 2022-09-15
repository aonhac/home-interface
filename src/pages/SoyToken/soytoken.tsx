import React from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { useTranslation } from 'contexts/Localization';

const desc = `The token of Alaska Inu is denoted by $ALK, it gives the opportunity to participate in the governance system of Alaska Inu Finance. Next month will be Staking, Farming with high APY.\n💠$ALK Details:`
const desc2 = `♻️Total Supply: 1,000,000,000,000,000 ALK.\n♻️Sybol: ALK.\n♻️Decimals: 9.\n♻️Presale + Liquidity: 450,000,000,000,000,000 ALK.\n♻️Staking/Farming Reward: 75,000,000,000,000 ALK.\n♻️CEX Listing: 75,000,000,000,000 ALK.\n♻️Airdrop/Bounty: 5,000,000,000,000 ALK.\n♻️Burning: THE REST.`

const SoyToken = () => {
    const { t } = useTranslation()
    return (
        <Container id="soytoken">
            <Wrapper >
                <SpaceRow>
                    <Title color={Theme.colors.primary}>
                        <Title color="#AEDD00">{t('Alaska Inu')}&nbsp;</Title>{t('Token')}
                    </Title>
                </SpaceRow>
                <Spacer height="50px" />
                <Text>
                    {t(desc)}
                </Text>
                <Spacer height="30px" />
                <Text>
                    {t(desc2)}
                </Text>
                <Spacer height="50px" />
                
                <StyledVideo autoPlay muted loop id="main">
                    <source src="Soy.webm" type="video/mp4"/>
                </StyledVideo>
                
                <StyledVideoMob autoPlay muted loop id="main">
                    <source src="Soymob.webm" type="video/mp4"/>
                </StyledVideoMob>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding: 100px 0 0;
    background-color: #FFFFFF;
    @media screen and (max-width: 768px) {
    }
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9;
`
const SpaceRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    font-family: ${Theme.fonts.text};
    font-size: 21px;
    line-height: 30px;
    color: #767676;
    text-align: center;
    width: 60%;
    white-space: pre-line;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        width: calc(100% - 40px);
    }
`;
const Title = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 73.5px;
    line-height: 88.2pd;
    letter-spacing: 5%;
    text-align: center;
    display: flex;
    @media screen and (max-width: 768px ) {
        font-size: 50px;
    }
`;
const StyledVideo = styled.video`
    width: 100%;
    padding: 0 12%;
    @media screen and (max-width: 768px) {
        padding: 0 0px;
        display: none;
    }
`;
const StyledVideoMob = styled.video`
    width: 100%;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        padding: 0 20px;
    }
`;
export default SoyToken;
