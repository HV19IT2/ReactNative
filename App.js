import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./Tab";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Splash from "./screens/Splash";
const queryClient = new QueryClient();
export default function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);
  if (isLoading) return <Splash />;
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer >
        <TabNav ></TabNav>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
