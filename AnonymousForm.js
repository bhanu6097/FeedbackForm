import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    container: styles => ({ ...styles, border: '0px', width: '40%', paddingTop: '20px', paddingLeft: '10px', paddingBottom: '20px' }),
    control: styles => ({ ...styles, backgroundColor: 'white' })
}
const styles = theme => ({
    root: {
        // width: '50%',
        // height: '325px',
        // boxShadow: '0 0 14px #3c505080',
        // margin: 0 auto;
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
    textBox: {
        width: '90%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 300,
      },
    buttonStyle: {
        paddingTop: '15px',
        paddingRight: '20px',
        paddingBottom: '10px',
    }
})
class AnonymousForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: '',
            firstName: '',
            lastname: '',
            phone: '',
            email: '',
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
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        name="firstName"
                        placeholder="First Name*"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.textBox}
                    />
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        name="lastName"
                        placeholder="Last Name*"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.textBox}
                    />
                </div>
                <FormControl className={classes.formControl}>
                    <InputLabel>Job Title</InputLabel>
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
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        name="phone"
                        placeholder="Phone Number"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.textBox}
                    />
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        name="email"
                        placeholder="Email Address"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.textBox}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AnonymousForm);