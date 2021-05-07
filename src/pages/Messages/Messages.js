import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';
import MessageCard from '../../components/card/MessageCard';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Messages.style';
import parseContentData from '../../utils/parseContentData';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };

    database().ref('messages/').push(contentObject);
  }

  function handleBanane(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={() => handleBanane(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />

      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
