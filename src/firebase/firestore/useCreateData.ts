import { addDoc, collection } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

export function useCreateData(collectionKey: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [docId, setDocId] = useState('');

  const createData = useCallback(
    async (data: unknown) => {
      const collectionRef = collection(db, collectionKey);

      setIsLoading(true);

      try {
        const { id } = await addDoc(collectionRef, data);
        setDocId(id);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      createData,
      docId,
    }),
    [error, isLoading, createData, docId]
  );
}
