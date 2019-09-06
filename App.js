import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import Details from './Details';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import AnonymousForm from './AnonymousForm';

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
  multiline: {
    maxHeight: '55px',
  },
  textField1: {
    root: {
      position: 'relative',
      height: '100px',
    },
  },
  CheckboxLabelA: {
    width: '650px',
    backgroundColor: 'yellow',
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
      anonymousChecked: 'yes',
      addAnotherPerson: false,
      removePerson: false,
      numOfPersons: 1
    }
  }

  handleCheckChange = (e) => {
    this.setState({ checked: !this.state.checked })
  }

  handleChange = (e) => {
    this.setState({
      anonymousChecked: e.target.value
    })
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
            control={<Checkbox checked={this.state.checked} onChange={this.handleCheckChange} />}
            label="I Understand*"
            classes={{ label1: classes.CheckboxLabelA }}
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
          placeholder="Incident Details"
          fullWidth
          margin="normal"
          multiline={true}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          classes={classes.multiline}
        />
        <h1>Where did it happen?</h1>
        <p style={{ height: '10px' }}>Select location from menu options</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Select
            placeholder="Country*"
            options={countryOptions}
            styles={colourStyles}
          />
          <Select
            placeholder="State"
            options={countryOptions}
            styles={colourStyles}
          />
          <Select
            placeholder="City"
            options={countryOptions}
            styles={colourStyles}
          />
        </div>
        <div style={{ paddingTop: '20px' }} >
          <Select
            placeholder="City"
            options={countryOptions}
            styles={colourStyles}
          />
        </div>
        <div style={{ paddingTop: '20px' }} >
          <TextField
            id="filled-full-width"
            style={{ margin: 8 }}
            placeholder="If location not found above, enter here"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            classes={classes.multiline}
          />
        </div>
        <h1>Who was involved?</h1>
        <p style={{ height: '10px' }}>Please provide the names of others involved in the incident</p>
        {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Details />
        {this.state.addAnotherPerson ? 
        <Details /> : '' }
        </div> */}
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
          name="position"
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
        <Select
          placeholder="Select Option"
          options={countryOptions}
          styles={colourStyles}
        />
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
