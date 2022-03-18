import React from "react";
import NetworkSelect from "./NetworkSelect";
import { LogoWrapper, NavBarWrapper } from "./styled";

export default function NavBar() {
	return (
		<NavBarWrapper>
			<LogoWrapper>
				<img src="/logo.svg" alt="logo" />
			</LogoWrapper>
			<NetworkSelect />
		</NavBarWrapper>
	);
}
