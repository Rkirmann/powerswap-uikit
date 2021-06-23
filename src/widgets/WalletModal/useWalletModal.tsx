import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string,
  baseUrl?: string,
  baseUrlText?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal baseUrl={baseUrl || ""} baseUrlText={baseUrlText || ""} account={account || ""} logout={logout} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
