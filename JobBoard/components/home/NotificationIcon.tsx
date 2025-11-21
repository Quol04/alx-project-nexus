import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import NotificationModal from "../common/NotificationModal";

type AppNotification = { title: string; desc: string };

const NotificationIcon = ({ notifications }: { notifications: AppNotification[] }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setVisible(true)}
      >
        <Feather name="bell" size={24} color="#000" />
        {notifications.length > 0 && <View style={styles.dot} />}
      </TouchableOpacity>

      <NotificationModal
        visible={visible}
        onClose={() => setVisible(false)}
        notifications={notifications}
      />
    </>
  );
};
export default NotificationIcon;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#dddadaff",
    borderRadius: 16,
    padding: 10,
    position: "relative",
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: 8,
    right: 8,
  },
});

