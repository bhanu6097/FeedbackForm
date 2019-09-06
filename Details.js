import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'Australia', label: 'Australia' },
    { value: 'South Africa', label: 'South Africa' },
]

const colourStyles = {
    container: styles => ({ ...styles, border: '0px', width: '90%', paddingTop: '20px', paddingLeft: '10px' }),
    control: styles => ({ ...styles, backgroundColor: 'white' })
}
const styles = theme => ({
    header: {
        paddingTop: '10px',
        width: '48%',

    },
    root: {
        boxShadow: '0 0 14px #3c505080',
        height: '340px',
        // margin: 0 auto;
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        maxWidth: 300,
      },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
    textBox: {
        width: '90%',
    },
    buttonStyle: {
        paddingTop: '15px',
        paddingRight: '20px',
        paddingBottom: '10px',
    }
})
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: '',
            roleInIncident: '',
            firstName: '',
            lastname: '',
        }
    }
    handleChange = (e) => {
        if (e && e.target && e.target.name === 'checked') {
            this.setState({
                [e.target.name]: !this.state.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    handleRemovePerson = () => {
        this.props.handleRemovePerson();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <div className={classes.root}>
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        name="firstName"
                        placeholder="First Name"
                        fullWidth
                        margin="normal"
                        variant="filled"
                        className={classes.textBox}
                    />
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        name="lastName"
                        placeholder="Last Name"
                        fullWidth
                        margin="normal"
                        variant="filled"
                        className={classes.textBox}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel>Job title</InputLabel>
                        <Select
                            value={this.state.jobTitle}
                            onChange={this.handleChange}
                            displayEmpty
                            name="jobTitle"
                        >
                            {countryOptions.map((item, index) => {
                                return <MenuItem value={item.value}>{item.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Role In Incident</InputLabel>
                        <Select
                            value={this.state.roleInIncident}
                            onChange={this.handleChange}
                            displayEmpty
                            name="roleInIncident"

                        >
                            {countryOptions.map((item, index) => {
                                return <MenuItem value={item.value}>{item.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    {this.props.number > 0 ?
                        <div className={classes.buttonStyle}>
                            <Button variant="outlined" className={classes.button} onClick={this.handleRemovePerson}>
                                Remove
                        </Button>
                        </div> : ''}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Details);