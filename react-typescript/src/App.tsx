import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contact/Contacts";
import Sidebar from "./components/SideBar/SideBar";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import CreateContact from "./components/Contact/CreateAndUpdateContact";
import ContactDetails from "./components/Contact/ContactDetails";
import LineGraph from "./components/ChartsAndMaps/LineGraph";
import Map from "./components/ChartsAndMaps/Map";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex flex-row">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/maps" element={<Map />} />
              <Route path="/charts" element={<LineGraph />} />
              <Route path="/contact/details/:id" element={<ContactDetails />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/contact/new" element={<CreateContact />} />
              <Route path="/contact/:id" element={<CreateContact />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
