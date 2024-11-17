import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = (navigation.state = "loading");
  return (
    <div>
      AppLayout
      <Header />
      {/* loading */}
      {isLoading && <div>loading.....</div>}
      <Outlet />
    </div>
  );
};

export default AppLayout;
