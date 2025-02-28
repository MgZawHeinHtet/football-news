import { LoaderCircle, LoaderPinwheelIcon } from "lucide-react";
import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center">
      <LoaderCircle className="animate-spin w-10" />
    </div>
  );
}

export default LoadingSpinner;
