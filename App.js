import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Details from './Details';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import AnonymousForm from './AnonymousForm';
import InputLabel from '@material-ui/core/InputLabel';

const countryOptions = [
  { value: 'India', label: 'India' },
  { value: 'USA', label: 'USA' },
  { value: 'Australia', label: 'Australia' },
  { value: 'South Africa', label: 'South Africa' },
]

const colourStyles = {
  container: styles => ({ ...styles, width: '180px', border: '0px' }),
  control: styles => ({ ...styles, backgroundColor: 'white' })
}
const styles = theme => ({
  root: {
    margin: '0 auto',
    width: '50%',
  },
  data: {
    backgroundColor: '#c2d3da',
    paddingLeft: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 14px #3c505080',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300,
  },
  multiline: {
    maxHeight: '55px',
  },
  textField1: {
    root: {
      position: 'relative',
      height: '100px',
    },
  },
  ul: {
    margin: '0px',
    paddingLeft: '30px',
  },
  buttonStyle: {
    paddingTop: '15px',
    paddingRight: '20px',
    paddingBottom: '10px',
  },
  reviewButton: {
    paddingTop: '15px',
    paddingRight: '20px',
    paddingBottom: '10px',
    textAlign: 'center',
  }
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      incidentDetails: '',
      country: '',
      state: '',
      city: '',
      place: '',
      missingPlace: '',
      anonymousChecked: 'yes',
      addAnotherPerson: false,
      removePerson: false,
      numOfPersons: 1
    }
  }

  handleChange = (e) => {
    if(e && e.target && e.target.name === 'checked') {
      this.setState({
        [e.target.name]: !this.state.checked
      })
    } else{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  }
  handleAddPerson = (e) => {
    this.setState({
      numOfPersons: this.state.numOfPersons + 1
    });
  }
  handleRemovePerson = (e) => {
    this.setState({
      numOfPersons: this.state.numOfPersons - 1
    });
  }
  render() {
    console.log('State', this.state);
    const { classes } = this.props;
    const persons = [];
      for (var i = 0; i < this.state.numOfPersons; i += 1) {
        persons.push(<Details key={i} number={i} handleRemovePerson={this.handleRemovePerson} />);
      };
    return (
      <div className={classes.root}>
        <div className={classes.data}>
          <p style={{ height: '25px' }}>this website shouldnot be used for emergency fsdgdfgdfg dfgdfgdfgdfgdfg dfgdfgdfgertdfg dfgdfgdfgdfgedrterter dfgdfg</p>
          <FormControlLabel
            name={'checked'}
            control={<Checkbox name={'checked'} checked={this.state.checked} onChange={this.handleChange} />}
            label="I Understand*"
            // classes={{ root: classes.CheckboxLabelA }}
          />
        </div>
        {this.state.checked ? 
        <div>
        <h1>What Happened?</h1>
        <p style={{ height: '25px' }}>Please provide following information regarding your concern</p>
        <ul className={classes.ul}>
          <li>Date/Time of the situation</li>
          <li>Name of the associate involved</li>
          <li>Location where the incident occured</li>
        </ul>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          name={'incidentDetails'}
          placeholder="Incident Details"
          fullWidth
          margin="normal"
          multiline={true}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          classes={classes.multiline}
          onChange={this.handleChange}
        />
        <h1>Where did it happen?</h1>
        <p style={{ height: '10px' }}>Select location from menu options</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Country</InputLabel>
        <Select
          value={this.state.country}
          onChange={this.handleChange}
          displayEmpty
          name="country"
          
        >
          {countryOptions.map((item, index) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-helper">State</InputLabel>
        <Select
          value={this.state.state}
          onChange={this.handleChange}
          displayEmpty
          name="state"
          
        >
          {countryOptions.map((item, index) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-helper">City</InputLabel>
        <Select
          value={this.state.city}
          onChange={this.handleChange}
          displayEmpty
          name="city"
          
        >
          {countryOptions.map((item, index) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>
          })}
        </Select>
      </FormControl>
        </div>
        <div style={{ paddingTop: '20px' }} >
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Location</InputLabel>
        <Select
          value={this.state.place}
          onChange={this.handleChange}
          displayEmpty
          name="place"
        >
          {countryOptions.map((item, index) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>
          })}
        </Select>
      </FormControl>
        </div>
        <div style={{ paddingTop: '20px' }} >
          <TextField
            id="filled-full-width"
            name={'missingPlace'}
            style={{ margin: 8 }}
            placeholder="If location not found above, enter here"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
          />
        </div>
        <h1>Who was involved?</h1>
        <p style={{ height: '10px' }}>Please provide the names of others involved in the incident</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: '20px', paddingBottom: '20px', margin: '10px' }}>
        {persons}
        </div>
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleAddPerson} >
            Add another person
        </Button>
        </div>
        <h1>Contact Information</h1>
        <p style={{ height: '10px' }}>Do you wish to remain anonymous?</p>
        <RadioGroup
          aria-label="position"
          name="anonymousChecked"
          className={classes.group}
          value={this.state.anonymousChecked}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary" />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio color="primary" />}
            label="No"
          />
        </RadioGroup>
        {this.state.anonymousChecked == 'no' ? <AnonymousForm /> : '' }
        <p style={{ height: '10px' }}>How did you become aware of this confidential reporting service?</p>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Select Option</InputLabel>
        <Select
          value={this.state.data}
          onChange={this.handleChange}
          displayEmpty
          name="data"
        >
          {countryOptions.map((item, index) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>
          })}
        </Select>
      </FormControl>
        <div className={classes.reviewButton}>
          <Button variant="contained" color="primary" className={classes.button}>
            Review Form
        </Button>
        </div> 
        </div> : ''}
      </div>
    )
  }
}
export default withStyles(styles)(App);
