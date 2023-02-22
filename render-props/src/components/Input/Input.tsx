import React, {useState} from "react";
export interface InputInterface {
render: (value: number) => React.ReactNode;
}

const Input: React.FC<InputInterface> = ({render}) => {
	const [value, setValue] = useState<number>(0);

	return (
		<>
		<input
			type="text"
			value={value}
			onChange={(e) => setValue(+e.target.value)} //+ convierte a numero
			placeholder="Temperatura en C°"
		/>
		{render(Number(value))}
		</>
	);
};

export default Input;
