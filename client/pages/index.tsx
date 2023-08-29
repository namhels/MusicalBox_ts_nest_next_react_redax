import React from "react"
import SpaIcon from '@mui/icons-material/Spa';
import MainLayout from "@/layouts/MainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome
            <SpaIcon color="primary" fontSize="large" />
          </h1>
          <h3>
            Here are the best tracks
          </h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Index