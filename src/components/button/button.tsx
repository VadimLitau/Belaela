import style from "./button.module.css";
import arrowRight from "../../img/arrow.svg";
import { IButtonStyles } from "../../types/globalTypes";

interface IButton {
	text: string;
	arrow?: boolean;
	styles: IButtonStyles;
	type?: "button" | "submit" | "reset" | undefined;
	action?: () => void;
}

export function Button({
	text,
	arrow,
	styles,
	action,
	type = "button",
}: IButton) {
	return (
		<button
			className={style.btn}
			style={{
				padding: `${styles.padding}`,
				borderRadius: `${styles.border_radius}`,
				border: `${styles.border}`,
				backgroundColor: `${styles.background_color}`,
				marginTop: `${styles.margin_top}`,
				cursor: "pointer",
			}}
			onClick={action}
			type={type}
		>
			<span
				style={{
					color: `${styles.text_color}`,
					fontFamily: `${styles.font_family}`,
					fontWeight: `${styles.font_weight}`,
					fontSize: `${styles.font_size}`,
				}}
			>
				{text}
			</span>
			{arrow ? (
				<div className={style.arrowWrap}>
					<img src={arrowRight} alt="arrow" />
				</div>
			) : (
				false
			)}
		</button>
	);
}
