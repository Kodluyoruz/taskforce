import styles from "./styles.module.css";

import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
	const { messages } = useChat();

	return (
		<div className={styles.chatlist}>
			<ScrollableFeed forceScroll={true}>
				{messages.map((item, key) => (
					<ChatItem key={key} item={item} />
				))}
			</ScrollableFeed>
		</div>
	);
}

export default ChatList;
