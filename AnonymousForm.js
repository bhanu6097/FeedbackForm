import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import Button from '@material-ui/core/Button';

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
    buttonStyle: {
        paddingTop: '15px',
        paddingRight: '20px',
        paddingBottom: '10px',
    }
})
class AnonymousForm extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id="filled-full-width"
                    style={{ margin: 8 }}
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
                    placeholder="Last Name*"
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.textBox}
                />
                </div>
                <Select
                    placeholder="Job Title"
                    options={countryOptions}
                    styles={colourStyles}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    id="filled-full-width"
                    style={{ margin: 8 }}
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