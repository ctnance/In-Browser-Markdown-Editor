import { useState } from "react";

function useToggler(defaultValue = false) {
  const [isActive, setIsActive] = useState(defaultValue);

  function toggle() {
    setIsActive((prev) => !prev);
  }

  return [isActive, toggle] as const;
}

export default useToggler;
