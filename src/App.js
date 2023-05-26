import { Layout, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import FoodList from "./components/FoodList";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart";
import SignupForm from "./components/SignupForm";
import ImageCarousel from "./components/ImageCarousel";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [authed, setAuthed] = useState(() => {
    const storedAuth = localStorage.getItem("authed");
    return storedAuth === "true";
  });

  useEffect(() => {
    localStorage.setItem("authed", authed);
  }, [authed]);

  const mainContent = (
    <>
      {!authed && (
        <div className="site-background-container">
          <ImageCarousel className="image-carousel" />
        </div>
      )}
      <div className="site-content-container">
        {authed ? (
          <div className="food-list-container">
            <FoodList />
          </div>
        ) : (
          <div className="login-container">
            <LoginForm onSuccess={() => setAuthed(true)} />
          </div>
        )}
      </div>
    </>
  );

  return (
    <BrowserRouter basename="/projects/web_projects/crab_eats">
      <Layout style={{ height: "100vh" }}>
        <Header className="custom-header">
          <div className="logo-container">
            {!authed && (
              <Link to="/projects/web_projects/crab_eats">
                <ArrowLeftOutlined
                  style={{ fontSize: "20px", marginRight: "15px" }}
                />
              </Link>
            )}
            <Title
              level={2}
              className="crab-eats-title"
              onClick={() => {
                setAuthed(false);
              }}
            >
              Crab Eats
            </Title>
          </div>
          <div>{authed ? <MyCart /> : <SignupForm />}</div>
        </Header>
        <Content>
          <Routes>
            <Route path="/*" element={mainContent} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
