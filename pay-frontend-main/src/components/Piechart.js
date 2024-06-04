import { ResponsivePie } from "@nivo/pie";

export default function PieChart({ data, isDonut, onClick }) {
  if (!data || data.length < 1) {
    return <h1>No data</h1>;
  }
  //console.log("here", data);
  // const colors = ["#889AFF", "#B4B3FE", "#B594F3", "#F1ACFE"];
  const colors = ["#b7dac3", "#83dba1", "#40e278", "#0be355"];

  return (
    <ResponsivePie
      data={data}
      onClick={onClick}
      margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
      sortByValue={true}
      innerRadius={isDonut ? 0.9 : 0}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={colors}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        tooltip: {
          container: {
            background: "#333",
          },
        },
        slices: {
          hover: {
            transitionDuration: 300,
            transitionEasing: "easeOut",
            enable: false, // You can set this to false to disable hover styles
          },
        },
      }}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      // Disabling labels by default
      enableSlicesLabels={false}
      enableRadialLabels={false}
    />
  );
}
