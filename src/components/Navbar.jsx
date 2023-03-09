import styled from "styled-components";

const Header = styled.header`
background-color: #454545;
position: fixed;
width: 100%;
`
const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1200px;
width: 90%;
margin: auto;
height: 80px;
`

const NavItems = styled.div`
display: flex;
`

const NavItem = styled.li`
margin-left: 10px;
`

const NavIcons = styled.div`
display: none;
position: fixed;
bottom: 20px;
right: 20px;
z-index: 999;
`

const NavIcon = styled.div`
transition: .3s;
font-size: 40px;
cursor: pointer;
color:  #454545;
`
const Navbar = () => {
    return (
        <Header>
            <NavContainer>
                <NavItems>
                    <NavItem>hello</NavItem>
                </NavItems>
            </NavContainer>
        </Header>
    )
}
export default Navbar;