import {
  Button,
  FormControl,
  Input,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

import { useState } from "react";

const PlayerForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    position: "",
    dominantFoot: "",
    team: "",
    country: "",
    age: "",
    skills: "",
  });

  //   const [addPlayer, { error, data }] = useMutation(ADD_PLAYER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // try {
    //   const { data } = await addPlayer({
    // variables: { ...formState },
    //   });
    //   console.log(data);
    setFormState({
      firstName: "",
      lastName: "",
      position: "",
      dominantFoot: "",
      team: "",
      country: "",
      skills: "",
    });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const useStyles = makeStyles((_theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      marginTop: "75px",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "65%",
    },

    form: {
      width: "40%",
      marginBottom: "75px",
    },
    button: {
      width: "10%",
      height: "45px",
      marginTop: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            name="firstName"
            value={formState.firstName}
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            name="lastName"
            value={formState.lastName}
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
      </div>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="position">Position</InputLabel>
          <Select
            name="position"
            value={formState.position}
            onChange={(event) => handleChange(event)}
          >
            <MenuItem value="Goalkeeper">Goalkeeper</MenuItem>
            <MenuItem value="Right Fullback">Right Fullback</MenuItem>
            <MenuItem value="Left Fullback">Left Fullback</MenuItem>
            <MenuItem value="Center Back">Center Back</MenuItem>
            <MenuItem value="Defensive Midfielder">
              Defensive Midfielder
            </MenuItem>
            <MenuItem value="Left Midfielder">Left Midfielder</MenuItem>
            <MenuItem value="Central Midfielder">Central Midfielder</MenuItem>
            <MenuItem value="Right Midfielder">Right Midfielder</MenuItem>
            <MenuItem value="Attacking Midfielder">
              Attacking Midfielder
            </MenuItem>
            <MenuItem value="Right Winger">Right Winger</MenuItem>
            <MenuItem value="Left Winger">Left Winger</MenuItem>
            <MenuItem value="Striker">Striker</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="dominantFoot">Dominant Foot</InputLabel>
          <Select
            name="dominantFoot"
            value={formState.dominantFoot}
            onChange={(event) => handleChange(event)}
          >
            <MenuItem value="Right">Right</MenuItem>
            <MenuItem value="Left">Left</MenuItem>
            <MenuItem value="Both">Both</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="team">Team</InputLabel>
          <Input
            name="team"
            value={formState.team}
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            name="country"
            value={formState.country}
            onChange={(event) => handleChange(event)}
          >
            <MenuItem value="Argentina">Argentina</MenuItem>
            <MenuItem value="Brazil">Brazil</MenuItem>
            <MenuItem value="England">England</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.container}>
        <FormControl style={{ width: "70%" }}>
          <TextField
            name="skills"
            label="Notable Skills"
            multiline
            value={formState.skills}
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
        <FormControl style={{ width: "15%" }}>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input
            name="age"
            type="number"
            value={formState.age}
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(event) => handleSubmit(event)}
      >
        Create
      </Button>
    </div>
  );
};

export default PlayerForm;