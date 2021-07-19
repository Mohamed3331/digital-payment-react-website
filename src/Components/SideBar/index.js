import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

export default function Sidebar(props) {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={props.toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={props.toggle}>Services</SidebarLink>
                    <SidebarLink to="sigup" onClick={props.toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

