import React from "react";
import { VscError } from "react-icons/vsc";
import { FormError as StyledFormError } from "./styled";

export default function FormError({ text }: { text: string }) {
	return (
		<StyledFormError>
			<VscError />
			{text}
		</StyledFormError>
	);
}
