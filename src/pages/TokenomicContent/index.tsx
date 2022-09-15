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
       
                <Spacer height="20px" />
               
                <Spacer height="20px" />
              
                <Spacer height="20px" />
            
                <Spacer height="20px" />
            
                <Spacer height="20px" />
               
                <Spacer height="10px" />
             
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Token Info')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('Token Network: Binance Smart Chain')}</Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('Token Name: Alaska Inu')}</Text>
                <Spacer height="40px" />
                <Text color='#767676'>{t('Token Symbol: ALK')}</Text>
                <Spacer height="40px" />
                <Text color='#767676'>{t('Contract address: 0x0000000000000000000000000000000000000000')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Fees Distribution Phases Details')}</SubTitle>
                <Spacer height="40px" />
                <Row3>
                    <Text3 color={Theme.colors.primary}><b>{t('Holder')}</b>&nbsp;&nbsp;&nbsp;</Text3>
                    <Text color='#767676'>&nbsp;{t('With new smartcontract we will reward holders in BNB using 5% tax sell. No need to do anything just hold $ALK token and you will have BNB to your wallet. Hold more and more BNB rewards.')}</Text>
                </Row3>
                <Spacer height="40px" />
                <Text color='#767676'>{t('2% HOLDER Rewards: Alaska Inu Rewards its community as a Priority.')}</Text>
                <Spacer height="40px" />
                <Spacer height="40px" />
                <Text color='#767676'>{t('3% Marketing: Every Sell Transaction is Distributed to the Alaska Inu Team For Marketing Uses. Essentially, the Team Will Have a Stream of Funds Available to Keep Developing and Growing the Alaska Inu Project to Create More Profits For You and All HOLDER.')}</Text>
                <Spacer height="40px" />
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Burning Mechanisms - “Buyback & Burn”')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('A set of burning mechanisms will be introduced to reward the ALK token holders and liquidity providers by decreasing inflation or lead to deflation depending on the system’s utilization, trading volume, and token price.')}</Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('The burning mechanism will receive a percentage ranging from 2% of the total trading fee.')}<Text color={Theme.colors.primary}>&nbsp;{t('Weekly, ALK tokens will be rebought and burned.')}</Text></Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('The system’s adoption and utilization through transaction volume define the size of the commission fees that will be distributed both to liquidity providers and burned.')}</Text>
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
