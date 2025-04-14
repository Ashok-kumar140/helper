import React from "react";
interface EmbeddedOtpLoginProps {
    phone: string;
    closeModal: () => void;
    setIsModalOpen: (isOpen: boolean) => void;
    setShowLoginModal: (show: boolean) => void;
}
declare const EmbeddedOtpLogin: ({ phone, closeModal, setIsModalOpen, setShowLoginModal, }: EmbeddedOtpLoginProps) => React.JSX.Element | null;
export default EmbeddedOtpLogin;
