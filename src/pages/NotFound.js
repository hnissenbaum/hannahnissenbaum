import HNHelmet from "components/global/HNHelmet";
import HNNavbar from "components/global/HNNavbar";
import PageHeader from "components/global/PageHeader";

export default function NotFound() {
  return (
    <>
      <HNHelmet page="Page Not Found" />
      <HNNavbar initialState="navbar" />

      <div className="wrapper">
      <PageHeader
          title={"Page Not Found"}
        />

        <div style={{textAlign: 'center', paddingTop: '50px'}}>
            <a href="/">&#8592; Back to Home</a>
        </div>
      </div>
    </>
  );
}
