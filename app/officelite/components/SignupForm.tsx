'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupFormData } from '../lib/validation';
import FormField from './FormField';

import styles from './SignupForm.module.css';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = (data: SignupFormData) => {
    console.log('Form submitted:', data);
    // Integrate with backend or show confirmation here
    alert('Thank you for signing up! We will be in touch soon.');
    reset({
      name: '',
      email: '',
      plan: 'free', // Set default plan
      phone: '',
      company: ''
    });
    // Scroll to top of form or page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
        <FormField
          label='Name'
          name='name'
          type='text'
          register={register}
          error={errors.name}
          required
          hideLabel
          borderStyle='bottom'
        />

        <FormField
          label='Email Address'
          name='email'
          type='email'
          register={register}
          error={errors.email}
          required
          hideLabel
          borderStyle='bottom'
        />

        <FormField
          label='Basic Pack'
          name='plan'
          type='select'
          register={register}
          error={errors.plan}
          required
          options={['Free', 'Basic', 'Ultimate']}
          borderStyle='bottom'
          labelPosition='side'
        />

        <FormField
          label='Phone Number'
          name='phone'
          type='tel'
          register={register}
          error={errors.phone}
          required
          hideLabel
          borderStyle='bottom'
        />

        <FormField
          label='Company'
          name='company'
          type='text'
          register={register}
          error={errors.company}
          required
          hideLabel
          borderStyle='bottom'
        />

        <button type='submit' aria-label='Submit sign up form' className={styles.submitButton}>
          Get on the list
        </button>
      </form>
    </section>
  );
}
