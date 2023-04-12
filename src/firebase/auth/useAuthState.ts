import { useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './index';

export function useAuthState() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    setIsLoading(true);
    return onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
    }),
    [isLoading, error, user]
  );
}
