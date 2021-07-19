import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1,Column2, TextWrapper,ImgWrap, Img, TopLine, Heading, Subtitle, BtnWrap} from './InfoElements'
import {Button} from '../ButtonElement'

const InfoSection = (props) => {
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    smooth={true} 
                                    exact="true"  
                                    offset={-80} 
                                    primary={props.primary ? 1 : 0} 
                                    dark={props.dark ? 1 : 0} 
                                    dark2={props.dark2 ? 1 : 0} 
                                    duration={500} 
                                    spy={true} 
                                    to="home">
                                        {props.buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>                        
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>                       
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection 
