import React from "react";
interface LoginModalProps {
    setIsModalOpen: (isModal: boolean) => void;
    setShowLoginModal: (showLoginModal: boolean) => void;
}
declare const LoginModal: ({ setIsModalOpen, setShowLoginModal }: LoginModalProps) => React.JSX.Element | null;
export default LoginModal;
