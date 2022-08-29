import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Theme } from 'constants/theme'
import Spacer from 'components/Spacer'

const Container = styled.div`
    width: 100%;
    padding: 150px 15% 100px;
    background-color: white;
    @media screen and (max-width: 768px) {
        padding: 150px 20px 200px;
    }
    @media screen and (max-width: 390px) {
        padding: 150px 20px 300px;
    }
`

const SafelistContent = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Title color={Theme.colors.primary}>{t('Pug Inu Finance Safelisting')}</Title>
            <Spacer height="80px" />
            <TopDiv>
                <SubTitle color={Theme.colors.bgscondary}>{t('What Exactly is The Safelist?')}</SubTitle>
                <Spacer height="40px" />
                <Text color={Theme.colors.primary}>{t('Security vulnerabilities are undoubtedly the biggest challenge for the DeFI ecosystem, with losses of hundreds of millions of dollars just for 2021.')}</Text>
                <Spacer height="20px" />
                <Text color={Theme.colors.primary}>{t('Pug Inu Finance intends to offer the highest level of security to its users, and for this purpose, we have established the Safelist with the best security standards.')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('How to Safelist a Token on Pug Inu Finance?')}</SubTitle>
                <Spacer height="40px" />
                <Text color={Theme.colors.primary}>{t('For project representatives and community members who wish to have their project token safelisted by Pug Inu Finance, please follow the steps below:')}</Text>
                <Spacer height="40px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('The ContractCheck Security Department should have audited the token.')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('Burn 40% PUG tokens by sending them to the')}&nbsp;&nbsp;<a href="https://bscscan.com/address/0x000000000000000000000000000000000000dead" target="_blank" rel="noreferrer" style={{color: 'blue'}}>{t('"Burn address"')}.</a></Text>
                </Row>
            </TopDiv>
            <Spacer height="40px" />
            <BottomDiv>
                <div>
                    <Text color={Theme.colors.primary}>{t('')}</Text>
                    <Spacer height="40px" />
                    <Row2>
                        <Circle />
                        
                    </Row2>
                    <Spacer height="20px" />
                    <Row2>
                        <Circle />
                       
                    </Row2>
                    <Spacer height="20px" />
                    <Row2>
                        <Circle />
                        
                    </Row2>
                </div>
                <Div>
                    <Text color={Theme.colors.primary}>{t('Send us the following information to')}<Text2 color={Theme.colors.bgscondary}><b>&nbsp;{t('Pen@Puginu.Finance.')}</b></Text2></Text>
                    <Spacer height="40px" />
                    <Row2>
                        <Circle />
                        
                    </Row2>
                    <Spacer height="20px" />
                    <Row2>
                        <Circle />
                        
                    </Row2>
                    <Spacer height="20px" />
                    <Row2>
                        <Circle />
                        
                    </Row2>
                </Div>
            </BottomDiv>
            <Spacer height="60px" />
            <Text color={Theme.colors.primary}>{t('Tip: Mentioning your interest in Pug Inu Finance on your social media is always appreciated.')}</Text>
            <Spacer height="100px" />
        </Container>
    )
}

const Title = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 73.5px;
    line-height: 88.2px;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 1102px) {
        font-size: 50px;
    }
    @media screen and (max-width: 768px ) {
        font-size: 50px;
        line-height: 60px;
    }
    @media screen and (max-width: 573px ) {
        font-size: 40px;
        line-height: 60px;
    }
`
const TopDiv = styled.div`
    width: 70%;
    @media screen and (max-width: 1461px){
        width: 100%;
    }
`
const Div = styled.div`
    @media screen and (max-width: 1062px){
        margin-top: 50px;
    }
`
const SubTitle = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 5%;
    @media screen and (max-width: 768px ) {
    }
`
const Text = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    @media screen and (max-width: 768px ) {
    }
`
const Text2 = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    white-space: pre-line;
    word-break: break-all;
    display: inline;
    @media screen and (max-width: 1428px ) {
        
    }
    @media screen and (max-width: 768px ) {
    }
`
const Row = styled.div`
    display: flex;
    padding-left: 50px;
    align-items: center;
    width: 70%;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 20px;
    }
`
const Row2 = styled.div`
    display: flex;
    padding-left: 50px;
    align-items: center;
    @media screen and (max-width: 768px) {
        padding-left: 20px;
    }
`
const Circle = styled.div`
    min-width: 18px;
    min-height: 18px;
    border-radius: 9px;
    background-color: ${Theme.colors.bgscondary};
    margin-right: 50px;
`
const BottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1062px) {
        flex-direction: column;
        width: 100%;
    }
`
export default SafelistContent;
