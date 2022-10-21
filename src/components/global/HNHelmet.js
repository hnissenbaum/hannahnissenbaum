import { Helmet } from "react-helmet";

export default function HNHelmet({ page, description }) {
  return (
    <Helmet>
      <title>{page} | Hannah Nissenbaume</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  );
}
