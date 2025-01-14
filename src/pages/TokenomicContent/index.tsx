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

const TokenomicContent = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Title color={Theme.colors.primary}>{t('Alaska Inu Tokenomics')}</Title>
            <Spacer height="80px" />
            <TopDiv>
                <SubTitle color={Theme.colors.bgscondary}>{t('')}</SubTitle>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('')}<Text2 color={Theme.colors.primary}><b>&nbsp;{t('')}</b></Text2></SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('✅ Tax fees')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('4% on Buy')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('4% on Sell')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('✅ Fees Distribution Phases Details')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('2% to Marketing wallet')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('1% to Dev wallet')}</Text>
                </Row>
                <Spacer height="20px" />
                 <Row>
                    <Circle />
                    <Text color='#767676'>{t('1% Reward for holder')}</Text>
                </Row>
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('')}</b><Text2 color='#767676'>&nbsp;{t('')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('')}</b><Text2 color='#767676'>&nbsp;{t('')}</Text2></Text>
                </Row2>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('')}</SubTitle>
                <Spacer height="40px" />
                <Row3>
                    <Text3 color={Theme.colors.primary}><b>{t('')}</b>&nbsp;&nbsp;&nbsp;</Text3>
                    <Text color='#767676'>&nbsp;{t('')}</Text>
                </Row3>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('')}<Text color={Theme.colors.primary}>&nbsp;{t('')}</Text></Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('')}<StyledLi href="" target="_blank" color='#615EFF'>&nbsp;{t('')}</StyledLi></Text>
                <Spacer height="20px" />
            </TopDiv>
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
    width: 100%;
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
const Text3 = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    white-space: nowrap;
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
const StyledLi = styled.a<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    white-space: pre-line;
    word-break: break-all;
    display: inline;
`
const Row = styled.div`
    display: flex;
    padding-left: 50px;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 20px;
    }
`
const Row3 = styled.div`
    display: flex;
    width: 100%;
`
const Row2 = styled.div`
    padding-left: 118px;
    @media screen and (max-width: 768px) {
        padding-left: 58px;
    }
`
const Circle = styled.div`
    min-width: 18px;
    min-height: 18px;
    border-radius: 9px;
    background-color: ${Theme.colors.bgscondary};
    margin-right: 50px;
`
export default TokenomicContent;
