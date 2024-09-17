import * as Yup from "yup";


export const registerValidationSchema = Yup.object().shape({
    // Full name
    fullName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces.')
        .test(
            'two-words',
            'Your name must contain at least two words.',
            (value: string | undefined) => {
                return value ? value.trim().split(' ').length >= 2 : false;
            }
        )
        .required('Please enter your full name.'),

    // Phone number or email
    phoneNumberOrEmail: Yup.string()
        .test(
            'phone-or-email',
            'Invalid phone number or email address.',
            (value) => {
                if (value?.includes('@')) {
                    return Yup.string().email('Invalid email address.').isValidSync(value);
                } else {
                    return Yup.string().min(10, 'Invalid phone number.').matches(/^\+?[0-9]\d{1,14}$/, 'Số điện thoại không hợp lệ').isValidSync(value);
                }
            }
        )
        .required('Phone number or email is required.'),

    // Password
    password: Yup.string()
        .min(6, 'Your password must be at least 6 characters long.')
        .matches(/[A-Z]/, 'Password requires at least one uppercase character.')
        .matches(/\d/, 'Password requires at least one number.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password requires at least one special character.')
        .required('Password is required.'),

    // Date of birth
    dateOfBirth: Yup.date()
        .required('Date of birth is required.')
        .nullable()
        .test('is-valid-date', 'The date of birth you entered is not valid.', value => {
            return value ? !isNaN(new Date(value).getTime()) : false;
        })
        .test('is-old-enough', 'You must be at least 18 years old to proceed.', value => {
            if (!value) return false;
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1 >= 18;
            }
            return age >= 18;
        }),

    // Gender
    gender: Yup.string()
        .oneOf(['male', 'female', 'other'], 'Invalid gender selection.')
        .required('Gender is required.'),
    agreement: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions to proceed.')
});


export const loginValidationSchema = Yup.object().shape({

    // Phone number or email
    phoneNumberOrEmail: Yup.string()
        .test(
            'phone-or-email',
            'Invalid phone number or email address.',
            (value) => {
                if (value?.includes('@')) {
                    return Yup.string().email('Invalid email address.').isValidSync(value);
                } else {
                    return Yup.string().min(10,'Invalid phone number.').matches(/^\+?[0-9]\d{1,14}$/, 'Số điện thoại không hợp lệ').isValidSync(value);
                }
            }
        )
        .required('Phone number or email is required.'),

    // Password
    password: Yup.string()
        .min(6,)    //'Your password must be at least 6 characters long.'
        .matches(/[A-Z]/, )     //'Password requires at least one uppercase character.'
        .matches(/\d/, )    //'Password requires at least one number.'
        .matches(/[!@#$%^&*(),.?":{}|<>]/, ) //'Password requires at least one special character.'
        .required('Password is required.'),
});