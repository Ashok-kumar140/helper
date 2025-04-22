import React from "react";
import "@sendbird/uikit-react/dist/index.css";
interface CareAiChatContainerPropsType {
    showChatHistory: boolean;
    setShowChatHistory: (show: boolean) => void;
    appId: string;
}
declare const CareAiChatContainer: ({ showChatHistory, setShowChatHistory, appId, }: CareAiChatContainerPropsType) => React.JSX.Element;
export default CareAiChatContainer;
