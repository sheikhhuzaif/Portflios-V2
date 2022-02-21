import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { Link } from "react-router-dom";
import a from '..\\..\\images\\a.jpg';
import b from '..\\..\\images\\b.jpg';
import c from '..\\..\\images\\c.jpg';
import d from '..\\..\\images\\d.jpg';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Home() {
  return (
    <div className="home " >
      <div className="type mt-10">

        <Link to="" className="typeItem font bg-gray-100 hover:shadow-2xl p-28 m-2" >
          <h1>Download Your Resume</h1>
        </Link>

        <Link to="" className="typeItem font bg-gray-100 hover:shadow-xl p-28 m-2" >
          <p>Go to your Portfolio</p>

        </Link>
      </div>

     <div className="typeItem font bg-gray-100 hover:shadow-2xl p-28 m-11">

     </div>
    </div>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </Box>
  );
}
