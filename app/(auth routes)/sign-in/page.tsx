'use client';
import { login } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { Credentials } from '@/types/user';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import css from './SignInPage.module.css';

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const setUser = useAuthStore(state => state.setUser);
  const handleSubmit = async (formData: FormData) => {
    try {
      const values = Object.fromEntries(formData) as unknown as Credentials;
      const user = await login(values);
      if (user) {
        setUser(user);
        router.push('/profile');
      }
    } catch (error) {
      setError((error as ApiError).message ?? 'something went wrong');
    }
  };
  return (
    <>
      <h1 className={css.formTitle}>Sign in</h1>
      <form className={css.form} action={handleSubmit}>
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            required
          />
        </label>
        <button className={css.submitButton} type="submit">
          Login
        </button>
      </form>
      {error && <p className={css.error}>{error}</p>}
    </>
  );
};

export default SignInPage;
