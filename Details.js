import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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
        height: '325px',
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
class Details extends React.Component {
    constructor(props) {
        super(props);
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
                        placeholder="First Name"
                        fullWidth
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
                        placeholder="Last Name"
                        fullWidth
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.textBox}
                    />
                    <Select
                        placeholder="Job Title"
                        options={countryOptions}
                        styles={colourStyles}
                    />
                    <Select
                        placeholder="Role In Incident"
                        options={countryOptions}
                        styles={colourStyles}
                    />
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