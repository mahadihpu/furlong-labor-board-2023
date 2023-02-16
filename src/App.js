import { useEffect, useState } from "react";
import "./App.css";
import LaborTable from "./components/LaborTable/LaborTable";

const ZOHO = window.ZOHO;

function App() {
  const [projectData, setProjectData] = useState(null);
  const [painterData, setPainterData] = useState([]);
  const [hoursData, setHoursData] = useState(null);
  const [zohoLoaded, setZohoLoaded] = useState(false);
  const [invoice, setInvoice] = useState(null);
  const [jobOffers, setJobOffers] = useState([]);
  const [laborData,setLaborData] = useState([]);
  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      //Custom Bussiness logic goes here
      // console.log(data);
    });
    /*
     * initializing the widget.
     */
    ZOHO.embeddedApp.init().then(() => {
      setZohoLoaded(true);
    });
  }, []);

  useEffect(() => {
    async function getData() {
      if (zohoLoaded) {

        await ZOHO.CRM.API.getAllRecords({
          Entity: "Project_Labor",
          sort_order: "asc",
          per_page: 100,
          page: 1,
        }).then(function (data) {
          setLaborData(data.data);
        });

        await ZOHO.CRM.API.getRecord({Entity:"Project_Labor",RecordID:"1915689000063107607"})
        .then(function(data){
          setPainterData(data.data[0]?.Labour_Board_Contractors)
        })

      }
    }
    getData();
  }, [zohoLoaded]);

  console.log({painterData})

  return (
    <div style={{ padding: "10px", height: "50vh" }}>
      {zohoLoaded && <LaborTable laborData={laborData} painterData={painterData} />}
    </div>
  );
}

export default App;
