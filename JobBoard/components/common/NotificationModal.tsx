import React, { useEffect, useRef } from "react";
import {
  Animated,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type AppNotification = { title: string; desc: string };

const NotificationModal = ({ visible, onClose, notifications = [] }: { visible: boolean; onClose: () => void; notifications?: AppNotification[] }) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
    } else {
      Animated.timing(scale, { toValue: 0, duration: 150, useNativeDriver: true }).start();
    }
  }, [visible]);

  const animatedStyle = {
    transform: [
      {
        scale: scale.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }),
      },
    ],
    opacity: scale,
  } as any;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <View style={styles.header}>
            <Text style={styles.title}>Notifications</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          {notifications && notifications.length > 0 ? (
            <FlatList
              data={notifications}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.notificationItem}>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <Text style={styles.notificationDesc}>{item.desc}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={styles.emptyText}>No new notifications</Text>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  closeText: {
    fontSize: 22,
    color: "#666",
  },
  notificationItem: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  notificationTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },
  notificationDesc: {
    fontSize: 12,
    color: "#555",
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    paddingVertical: 20,
  },
});

export default NotificationModal;
