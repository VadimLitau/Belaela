import { ChangeEvent, SetStateAction, useState } from "react";

const useForm = () => {
  interface IUseForm {
    headerSearch: string;
    footerEmail: string;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [state, setState] = useState<IUseForm & any>({
    headerSearch: "",
    footerEmail: "",
  });

  const handleChange = (
    e: SetStateAction<IUseForm> & ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();
    setState((state: IUseForm) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return [state, handleChange];
};
export default useForm;
