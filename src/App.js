import { Layout, Typography } from "antd";
import { useState, useEffect } from "react";
import FoodList from "./components/FoodList";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart";
import SignupForm from "./components/SignupForm";
import ImageCarousel from "./components/ImageCarousel";
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

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="custom-header">
        <Title
          level={2}
          className="crab-eats-title"
          style={{
            lineHeight: "inherit",
            marginBottom: 0,
            font: "italic bold 40px/50px Georgia, serif",
          }}
          onClick={() => {
            setAuthed(false);
          }}
        >
          Crab Eats
        </Title>
        <div>{authed ? <MyCart /> : <SignupForm />}</div>
      </Header>

      <Content>
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
      </Content>
    </Layout>
  );
}

export default App;
