"use client";

import Modal from "@/app/components/modals/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80 flex flex-col items-center justify-center">
        <Image
          className="object-cover"
          height={300}
          width={300}
          alt="Image"
          src={src}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
