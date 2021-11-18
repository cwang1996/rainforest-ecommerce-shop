import styled from 'styled-components';
import { Facebook, Twitter, Pinterest, Instagram } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #172D52;
    color: #ffffff;
    padding: 70px 20px;
`

const FooterColumns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 590px) {
        flex-direction: column
    }
`

const FooterColumn1 = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 350px;

    @media screen and (max-width: 590px) {
        margin-bottom: 20px;
    }
`

const FooterTitle = styled.h2`
    font-weight: bold;
    margin-bottom: 5px;
`

const List1 = styled.ul`
    list-style-type: none;
    padding: 0px 30px;
`

const ListItem1 = styled.li`
    font-size: 16px;
    padding: 8px 0px;
    cursor: pointer;
    color: #fff;
    &:hover {
        transform: scale(1.1);
    }
`

const FooterColumn2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
`

const List2 = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
`

const Text1 = styled.h3`
    padding: 10px 0px;
    text-align: center;
`

const Text2 = styled.p`
    padding: 10px 0px;
    text-align: center;
`

const Copyright = styled.div`
    max-width: 1200px;
    margin: 30px auto;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 590px) {
        flex-direction: column;
        text-align: center;
        padding: 0;
    }
`

const MyCopyright = styled.ul`
    list-style-type: none;
`

const Copy = styled.span`
    font-size: 16px;
`

const Logo = styled.h1`
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: .01em;
    margin-right: 30px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
    
    @media screen and (max-width: 590px) {
        margin: 10px 0px;
    }
`

const icons = theme => ({
    iconPadding: {
        margin: '20px 15px',
        cursor: 'pointer'
    },
    hover: {
        '&:hover': {
            transform: 'scale(1.1)'
        }
    }
})

const Footer = (props) => {
    
    const { classes } = props;

    return (
        <FooterContainer>
            <FooterColumns>
                <FooterColumn1>
                    <List1>
                        <FooterTitle>Navigate</FooterTitle>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <ListItem1>Home</ListItem1>
                        </Link>
                        <Link to='/about' style={{textDecoration: 'none'}}>
                            <ListItem1>About</ListItem1>
                        </Link>
                        <Link to='/products/furniture' style={{textDecoration: 'none'}}>
                            <ListItem1>Products</ListItem1>
                        </Link>
                        <ListItem1>Contact</ListItem1>
                    </List1>
                    <List1>
                        <FooterTitle>Info</FooterTitle>
                        <ListItem1>Return Policy</ListItem1>
                        <ListItem1>Terms of Service</ListItem1>
                        <ListItem1>Privacy Policy</ListItem1>
                    </List1>
                </FooterColumn1>
                <FooterColumn2>
                    <Text1>Spread the word!</Text1>
                    <Text2>We would appreciate it if you helped spread the word of our products.</Text2>
                    <List2>
                        <Pinterest className = {`${classes.iconPadding} ${classes.hover} `} />
                        <Instagram className = {`${classes.iconPadding} ${classes.hover} `} />
                        <Twitter className = {`${classes.iconPadding} ${classes.hover} `} />
                        <Facebook className = {`${classes.iconPadding} ${classes.hover} `} />
                    </List2>
                </FooterColumn2>
            </FooterColumns>

            <Copyright>
                <MyCopyright>
                    <Copy>&#169; 2021 Calvin Wang</Copy>
                </MyCopyright>
                <Logo>Rainforest</Logo>
            </Copyright>
        </FooterContainer>
    )
}

export default withStyles(icons)(Footer)
