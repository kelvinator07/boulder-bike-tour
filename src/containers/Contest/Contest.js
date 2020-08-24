import React, { Component } from 'react';
import './Contest.css';
import TextInput from '../../components/UI/TextInput/TextInput';
import EmailInput from '../../components/UI/EmailInput/EmailInput';
import validate from '../Util/validate';

class Contest extends Component {

    constructor () {
        super()
        this.state = {
            formIsValid: false, //we will use this to track the overall form validity

            formControls: {
                firstname: {
                    value: '',
					valid: false,
					validationRules: {
                        minLength: 5,
						isRequired: true
					},
					placeholderText: 'Enter First Name',
					touched: false
                },
                lastname: {
                    value: '',
					valid: false,
					validationRules: {
                        minLength: 5,
						isRequired: true
					},
					placeholderText: 'Enter Last Name',
					touched: false
                },
                email: {
                    value: '',
					valid: false,
					validationRules: {
						isRequired: true
					},
					placeholderText: 'Enter Email Address',
					touched: false
                },
                slogan: {
                    value: '',
					valid: false,
					validationRules: {
                        minLength: 5,
                        maxLength: 50,
						isRequired: true
					},
					placeholderText: 'Enter Slogan',
					touched: false
                }
            }
        }
      
    }
    
    changeHandler = event => {
        
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

        // console.log(this.state.formControls)
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        
        console.dir(formData);
    }
  
    
     render() {
        return (

            <div className="Location">
                <div className="container">

                    <div className="section-title">
                        <h2>Contest For Slogan Idea</h2>
                    </div>

                    <div className="row d-flex justify-content-center">

                        <form className="Contact">

                            <div className="form-group">
                                <label>First Name:</label>
                                <TextInput name="firstname" 
                                    placeholder={this.state.formControls.firstname.placeholderText}
                                    value={this.state.formControls.firstname.value}
                                    onChange={this.changeHandler}
                                    touched={this.state.formControls.firstname.touched}
                                    valid={this.state.formControls.firstname.valid}
                                    />
                            </div>


                            <div className="form-group">
                                <label>Last Name:</label>
                                <TextInput name="lastname" 
                                    placeholder={this.state.formControls.lastname.placeholderText}
                                    value={this.state.formControls.lastname.value}
                                    onChange={this.changeHandler}
                                    touched={this.state.formControls.lastname.touched}
                                    valid={this.state.formControls.lastname.valid}
                                    />
                            </div>

                            <div className="form-group">
                                <label>Email Address:</label>
                                <EmailInput name="email" 
                                    placeholder={this.state.formControls.email.placeholderText}
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler}
                                    touched={this.state.formControls.email.touched}
                                    valid={this.state.formControls.email.valid}
                                    />
                            </div>

                            <div className="form-group">
                                <label>Slogan Idea:</label>
                                <TextInput name="slogan" 
                                    placeholder={this.state.formControls.slogan.placeholderText}
                                    value={this.state.formControls.slogan.value}
                                    onChange={this.changeHandler}
                                    touched={this.state.formControls.slogan.touched}
                                    valid={this.state.formControls.slogan.valid}
                                    />
                            </div>

                            {/* <input type="btn btn-primary" value="submit" onClick={this.onSubmitForm} /> */}
                            <button className="btn btn-primary" onClick={this.onSubmitForm} disabled={!this.state.formIsValid} > Submit </button>


                        </form> 


                    </div>

                </div>
            </div>
                 
        );
    }

};

export default Contest;