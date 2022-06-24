import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@mui/system/styled";
import { Link, useNavigate } from "react-router-dom";
import colors from "../../theme/colors";
import { ERPLY_NEWS, LOGOUT, MAIN, PROFILE } from "../../typeConstants";
import { useDispatch } from "react-redux";
import { resetState } from "../../redux/actions/newsAction";

interface NavBarProps {
  isUserLoggedIn: boolean;
  setuserLoggedIn: () => void;
}

const CustomLink = styled(Link)({
  marginRight: "1rem",
  color: "#fff",
  textDecoration: "none",
});

const NavBar: FC<NavBarProps> = ({ isUserLoggedIn, setuserLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setuserLoggedIn(false);
      dispatch(resetState());
      navigate("/");
    }
  };
  return (
    <Container
      sx={{
        position: "absolute",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: colors.primary,
          color: colors.black,
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth='lg'
          sx={{ width: "100%", padding: "0px!important" }}
        >
          <Toolbar
            sx={{
              color: "#fff",
              padding: "0px",
              "@media (max-width:750px)": {
                padding: "0 0.5rem 0 1rem",
              },
            }}
          >
            <Typography
              variant='h6'
              component='div'
              sx={{ flex: "inline-flex", flexGrow: 1, fontWeight: 900 }}
            >
              <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>{ERPLY_NEWS}</span>
            </Typography>
            {isUserLoggedIn && (
              <>
                <CustomLink to='/main'>{MAIN}</CustomLink>
                <CustomLink to='/profile'>{PROFILE}</CustomLink>
                <Button
                  color='inherit'
                  variant='outlined'
                  onClick={handleLogout}
                  sx={{ textTransform: "none" }}
                >
                  {LOGOUT}
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};

export default NavBar;
