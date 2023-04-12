import { useState, useCallback, useMemo } from 'react';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from './index';

export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | void>(null);
  const [user, setUser] = useState<null | UserCredential>(null);

  const signIn = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredentials);
    } catch (error) {
      setError(alert('일치하는 회원정보가 없습니다.'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signIn,
    }),
    [isLoading, error, user, signIn]
  );
}
