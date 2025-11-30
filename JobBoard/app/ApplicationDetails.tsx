import ApplicationDetailsScreen from '@/components/applications/ApplicationDetailsScreen';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

export default function ApplicationDetailsRoute() {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const params = route?.params || {};
  // Accept either an item object or an id param
  const id = params?.item?.id ?? params?.id;

  // Hide the default header for this screen
  React.useLayoutEffect(() => {
    if (navigation?.setOptions) {
      navigation.setOptions({ headerShown: false });
    }
  }, [navigation]);

  return <ApplicationDetailsScreen route={{ params: { id } }} />;
}
