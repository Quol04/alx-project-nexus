import ApplicationDetailsScreen from '@/components/applications/ApplicationDetailsScreen';
import { useRoute } from '@react-navigation/native';
import React from 'react';

export default function ApplicationDetailsRoute() {
  const route: any = useRoute();
  const params = route?.params || {};
  // Accept either an item object or an id param
  const id = params?.item?.id ?? params?.id;

  return (

     <ApplicationDetailsScreen route={{ params: { id } }} />
  );
}
