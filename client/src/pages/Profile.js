import React from "react";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { stringAvatar } from "../utils/helpers";

import Avatar from "@material-ui/core/Avatar";
import { Navigate, Link, useParams } from "react-router-dom";

import UserTab from "../components/UserTab";

const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderLeft: "1px solid #000000",
    },
    icon: {
      height: "100px",
      width: "100px",
      margin: theme.spacing(6),
    },
  }));

  const classes = useStyles();

  // const { loading, data, error } = useQuery(QUERY_ME);

  // if (loading) return <div>Loading...</div>;

  // if (error) {
  //     return <Navigate to="/login" />;
  // }

  // const { username, following, createdPlayers} = data?.user || {};

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={10}
          style={{
            display: "flex",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          }}
        >
          <Grid container direction="column" alignContent="center" xs={3}>
            <Avatar
              className={classes.icon}
              {...stringAvatar("Chawnkieasdfasf")}
            />

            <Typography variant="h4" align="center">
              User
            </Typography>
          </Grid>
          <Grid
            container
            xs={9}
            direction="column"
            className={classes.root}
            style={{ height: "100vh" }}
          >
            <UserTab />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;