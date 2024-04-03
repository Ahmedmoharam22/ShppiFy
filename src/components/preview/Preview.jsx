import { ModalBody } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closePreview } from "../../trk/slises/previewProduct";
import ProductDetails from "../productDetails/ProductDetails";

const Preview = () => {
  const preview = useSelector((state) => state.previewProduct);
  const dispatch = useDispatch();
  return (
    <Modal
      show={preview.isOpen}
      onHide={() => dispatch(closePreview())}
      size="xl"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <ModalBody>
        <ProductDetails product={preview.data} />
      </ModalBody>
      
    </Modal>
  );
};

export default Preview;
