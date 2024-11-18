import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      React Router Dom
      {/* Header */}
      <Header />
      {/* Loading */}
      {isLoading && <div>Loading.....</div>}
      {/* pages */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
