import { ChangeEvent, SetStateAction, useState } from "react";

const useForm = () => {
	interface IUseForm {
		headerSearch: string;
		footerEmail: string;
		resetField: () => void;
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

	const resetField = (fieldName: string) => {
		setState((prevState: IUseForm) => ({
			...prevState,
			[fieldName]: "",
		}));
	};
	return [state, handleChange, resetField];
};
export default useForm;
