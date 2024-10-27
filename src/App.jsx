import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ImageEditPage from "./pages/ImageEditPage";
import AiImageGenerationPage from "./pages/AiImageGenerationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,  // "/" 경로에선 메인 페이지 렌더링
  },
  {
    path: "/image-edit",
    element: <ImageEditPage />,  // "/image-edit" 경로에선 이미지 편집 페이지 렌더링
  },
  {
    path: "/ai-image-generation",
    element: <AiImageGenerationPage />,  // "/ai-image-generation" 경로에선 AI 이미지 생성 페이지 렌더링
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

