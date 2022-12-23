import Paper from "../common/Paper";
import Form from "../form/Form";
import TextField from "../form/TextField";
import NumberField from "../form/NumberField";
import CheckBoxGroup from "../form/CheckBoxGroup";
import CheckBoxField from "../form/CheckBoxField";
import RadioGroup from "../form/RadioGroup";
import RadioButton from "../form/RadioButton";
import FormButton from "../form/FormButton";
import {isEmail, isEmpty, isNumberBetween, isValidPassword} from "../../helpers/validations";
import useForm from "../../hooks/useForm";

const SingUp = () => {
    const initialFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        country: '',
        hobbies: [],
        gender: '',
    }

    function validateForm(values) {
        const errors = {};

        if (isEmpty(values.firstName)) {
            errors.firstName = 'First name is required';
        }
        if (isEmpty(values.lastName)) {
            errors.lastName = 'Last name is required';
        }
        if (!isEmail(values.email)) {
            errors.email = 'Email is invalid';
        }
        if (!isValidPassword(values.password)) {
            errors.password = 'Password is invalid';
        }
        if (!isNumberBetween(values.age, 13, 115)) {
            errors.age = 'Age is invalid';
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const {
        formValues,
        formErrors,
        handleChange,
        handleBlur,
        handleCheckboxChange
    } = useForm(initialFormValues, validateForm)


    return (
        <div className="sing-up-container"
             style={
                 {
                     display: 'flex',
                     flexFlow: 'column nowrap',
                     justifyContent: 'center',
                     alignItems: 'center',
                     alignContent: 'start'

                 }}>
            <h1>Sign up</h1>
            <Paper>
                <Form onSubmit={handleSubmit}>
                    <TextField name="firstName" label="First Name" id="firstName" value={formValues.firstName}
                               onChange={handleChange} onBlur={handleBlur} error={formErrors.firstName}/>

                    <TextField name="lastName" label="Last Name" id="lastName" value={formValues.lastName}
                               error={formErrors.lastName}
                               onBlur={handleBlur} onChange={handleChange}/>
                    <TextField name="email" label="Email" id="email" value={formValues.email} error={formErrors.email}
                               onBlur={handleBlur} onChange={handleChange}/>
                    <TextField name="password" label="Password" id="password" value={formValues.password}
                               type="password" onBlur={handleBlur} onChange={handleChange} error={formErrors.password}/>

                    <NumberField id="age" name="age" label="Age" value={formValues.age} onChange={handleChange}
                                 onBlur={handleBlur} error={formErrors.age}/>

                    <CheckBoxGroup title="Hobbies">
                        <CheckBoxField value={formValues.hobbies} id="dance" label="Dance" name="hobbies" value="Dance"
                                       onCheckboxChange={handleCheckboxChange}/>
                        <CheckBoxField value={formValues.hobbies} id="run" label="Run" name="hobbies" value="Run"
                                       onCheckboxChange={handleCheckboxChange}/>
                        <CheckBoxField value={formValues.hobbies} id="sleep" label="Sleep" name="hobbies" value="Sleep"
                                       onCheckboxChange={handleCheckboxChange}/>
                    </CheckBoxGroup>

                    <RadioGroup title="Gender">
                        <RadioButton name="gender" value="Male" id="male" label="Male" onChange={handleChange}/>
                        <RadioButton name="gender" value="Female" id="female" label="Female" onChange={handleChange}/>
                    </RadioGroup>

                    <FormButton text="Submit" isFormValid={true} / >
                </Form>
            </Paper>
        </div>
)
}

export default SingUp;

