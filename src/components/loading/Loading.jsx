import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="start-50 position-absolute top-50 h-100">
      <Spinner size="lg" animation="border" variant="success" />
    </div>
  );
};

export default Loading;
