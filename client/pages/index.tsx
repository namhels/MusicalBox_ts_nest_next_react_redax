import React from "react"
import SpaIcon from '@mui/icons-material/Spa';
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar/>
      <div className="center">
        <h1>Welcome
          <SpaIcon color="primary" fontSize="large" />
        </h1>
        <h3>
          here are the best tracks
        </h3>
      </div>
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