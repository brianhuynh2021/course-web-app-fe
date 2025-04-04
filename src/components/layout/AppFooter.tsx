// import React from "react";
// import { Layout, Space } from "antd";
// import {
//   YoutubeOutlined,
//   FacebookOutlined,
//   LinkedinOutlined,
// } from "@ant-design/icons";

// // Dùng icon dạng hình ảnh cho TikTok và Zalo
// const tiktokIconUrl =
//   "https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-1024.png";
// const { Footer } = Layout;

// const AppFooter: React.FC = () => {
//   return (
//     <Footer
//       style={{
//         backgroundColor: "#ffffff",
//         padding: "12px 20px",
//         borderTop: "1px solid #f0f0f0",
//         boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.05)",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >

//       <div style={{ flex: 1, color: "#8c8c8c" }}>
//         © {new Date().getFullYear()} Brian Huynh. All rights reserved.
//       </div>
//       <div>Email: <a href="mailto:brianhuynh@gmail.com">brianhuynh@gmail.com</a></div>
//       <div style={{ flex: 1, textAlign: "center", color: "#595959" }}>
//         Tel-Zalo-Telegram: <strong>0984 883 750</strong>
//       </div>

//       <Space size="middle" style={{ fontSize: 20, alignItems: "center", marginRight: 80}}>
//         <a href="https://facebook.com/" target="_blank" style={{ color: "#000" }}>
//           <FacebookOutlined />
//         </a>
//         <a href="https://linkedin.com/" target="_blank" style={{ color: "#000" }}>
//           <LinkedinOutlined />
//         </a>
//         <a href="https://youtube.com/" target="_blank" style={{ color: "#000" }}>
//           <YoutubeOutlined />
//         </a>
//         <a href="https://www.tiktok.com/" target="_blank">
//           <img src={tiktokIconUrl} alt="TikTok" style={{ height: 20, width: 20 }} />
//         </a>
//       </Space>
//     </Footer>
//   );
// };

// export default AppFooter;

import React from "react";
import { Layout, Space } from "antd";
import {
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const tiktokIconUrl =
  "https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-1024.png";
const { Footer } = Layout;

const AppFooter: React.FC = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Footer
      style={{
        backgroundColor: "#ffffff",
        padding: "16px 20px",
        borderTop: "1px solid #f0f0f0",
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, color: "#8c8c8c" }}>
        © {new Date().getFullYear()} Brian Huynh. All rights reserved.
        
      </div>
      <div style={{ flex: 1, textAlign: "center", color: "#595959" }}>
        Email: <a href="mailto:huynh2102@gmail.com" style={{color: "#595959" }}>huynh2102@gmail.com</a>
      </div>
      <div style={{ flex: 1, textAlign: "center", color: "#595959" }}>
        Tel-Zalo-Telegram: <strong>0984 883 750</strong>
      </div>

      <Space size="middle" style={{ fontSize: 20, alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
        <a href="https://facebook.com/" target="_blank" style={{ color: "#000" }}>
          <FacebookOutlined />
        </a>
        <a href="https://linkedin.com/" target="_blank" style={{ color: "#000" }}>
          <LinkedinOutlined />
        </a>
        <a href="https://youtube.com/" target="_blank" style={{ color: "#000" }}>
          <YoutubeOutlined />
        </a>
        <a href="https://www.tiktok.com/" target="_blank">
          <img src={tiktokIconUrl} alt="TikTok" style={{ height: 20, width: 20 }} />
        </a>
        <ArrowUpOutlined onClick={scrollTop} style={{ fontSize: 20, cursor: "pointer" }} />
      </Space>
    </Footer>
  );
};

export default AppFooter;