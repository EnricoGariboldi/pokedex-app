import { useEffect, useState } from "react";

export const useAsyncLoader = (requestFn) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    let canceled = false;

    requestFn()
      .then((data) => !canceled && setValue(data))
      .catch((error) => !canceled && setValue(error));
    return () => {
      canceled = true;
    };
  }, [requestFn]);

  return value;
};
