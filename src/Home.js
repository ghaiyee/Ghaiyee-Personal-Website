
import MainLayout from "./components/layouts/MainLayout";
import Intro from "./components/Intro/Intro"
import WorksHome from "./components/Works/Works"


export default function Home() {
  return (
      <>
        <MainLayout>
          <Intro />
          <WorksHome />
        </MainLayout>
      </>
  );
}



