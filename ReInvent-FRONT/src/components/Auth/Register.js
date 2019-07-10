import React from 'react';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Typography,
  CircularProgress,
  withStyles,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormControl,
  Radio
} from '@material-ui/core';
import cn from 'classnames';

import google from '../../assets/google.svg';
import { styles } from './auth.styles';
import { TextFieldGroup } from '../common/TextFieldGroup';
import { CREATE_USER } from '../../graphql/auth';
import { isEmptyObject } from '../../utils/helpers';
import { genders } from '../../utils/staticLists';

export const Register = withStyles(styles)(({ classes, handleTabChange }) => {
  const validateFields = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string(),
    avatar: Yup.string(),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
  });

  const onSubmit = async (fields, register) => {
    const registerResponse = await register({
      variables: {
        input: fields
      }
    });

    const { data } = registerResponse;

    if (data.register.ok) {
      return handleTabChange(undefined, 0);
    }
  };

  return (
    <Mutation mutation={CREATE_USER}>
      {(register, { loading }) => (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            gender: '',
            avatar: '',
            email: '',
            password: ''
          }}
          validationSchema={validateFields}
          onSubmit={fields => onSubmit(fields, register)}
          render={({
            errors,
            touched,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Typography variant='h3' className={classes.subGreeting}>
                Create your account
              </Typography>
              <Field
                name='gender'
                render={({ field, form }) => (
                  <FormControl
                    component='fieldset'
                    className={classes.gendersContainer}
                  >
                    <FormLabel component='legend'>Gender</FormLabel>
                    <RadioGroup
                      aria-label='Gender'
                      name='gender'
                      className={classes.genderGroup}
                      {...field}
                    >
                      {
                        genders.map(gender => (
                          <FormControlLabel
                            key={gender.value}
                            value={gender.value}
                            control={<Radio />}
                            label={gender.label}
                          />
                        ))
                      }
                    </RadioGroup>
                  </FormControl>
                )}
              />
              <Field
                name='firstName'
                render={({ field, form }) => (
                  <TextFieldGroup
                    {...field}
                    form={form}
                    label='First Name'
                    placeholder='First Name'
                    required
                  />
                )}
              />
              <Field
                name='lastName'
                render={({ field, form }) => (
                  <TextFieldGroup
                    {...field}
                    form={form}
                    label='Last Name'
                    placeholder='Last Name'
                    required
                  />
                )}
              />
              <Field
                name='email'
                render={({ field, form }) => (
                  <TextFieldGroup
                    {...field}
                    form={form}
                    type='email'
                    label='Email'
                    placeholder='Email'
                    required
                  />
                )}
              />
              <Field
                name='password'
                render={({ field, form }) => (
                  <TextFieldGroup
                    {...field}
                    form={form}
                    type='password'
                    label='Password'
                    placeholder='Password'
                    required
                  />
                )}
              />
              <div className={classes.creatingButtonContainer}>
                {loading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    disabled={!isEmptyObject(errors)}
                    size='large'
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                href='http://localhost:5000/auth/google'
                size='large'
                className={cn(
                  classes.googleButton,
                  classes.googleButtonCreating
                )}
              >
                <img src={google} alt='google' className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </Form>
          )}
        />
      )}
    </Mutation>
  );
});
