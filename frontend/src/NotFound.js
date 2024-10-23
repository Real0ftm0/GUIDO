// Define the NotFound functional component
import { useRef } from "react";
export default function NotFound() {
  const imageRef = useRef();
  return (
    <div>
      <div className="w-100 text-center">
        <img
          src="./images/404.svg"
          alt="404image"
          ref={imageRef}
          style={{ height: "600px" }}
          className="mx-auto"
        />
        <h2 className="my-4">صفحه مورد نظر یافت نشد!</h2>
      </div>
    </div>
  );
}
