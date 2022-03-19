import React from "react";
// @ts-ignore
import { useSnackbar } from "react-simple-snackbar";
import { useGlobalStore } from "../utils/store";
import NetworkSelect from "./NetworkSelect";
import {
	LogoWrapper,
	NavBarWrapper,
	RightNavWrapper,
	UserWalletAddress,
} from "./styled";

export default function NavBar() {
	const { publicKey: userWalletAddress } =
		useGlobalStore((state) => state.appState.account) || {};

	const [openSnackbar] = useSnackbar({ position: "top-right" });
	const renderUserWalletAddress = (address: string) => {
		const firstFourParts = address.slice(0, 6);
		const lastFourParts = address.slice(address.length - 6, address.length);
		return (
			<span>
				{firstFourParts}...{lastFourParts}
			</span>
		);
	};
	const handleAddressClick = () => {
		if (navigator.clipboard && userWalletAddress) {
			navigator.clipboard.writeText(userWalletAddress).then(
				() => {
					openSnackbar("Copied!");
				},
				(err) => {
					openSnackbar("Something went wrong!");
				}
			);
		}
	};
	return (
		<NavBarWrapper>
			<LogoWrapper>
				<img src="/logo.svg" alt="logo" />
			</LogoWrapper>
			<RightNavWrapper>
				{userWalletAddress && (
					<UserWalletAddress onClick={handleAddressClick}>
						Hello, {renderUserWalletAddress(userWalletAddress.toString())}
					</UserWalletAddress>
				)}
				<NetworkSelect />
			</RightNavWrapper>
		</NavBarWrapper>
	);
}
