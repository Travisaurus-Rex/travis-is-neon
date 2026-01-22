import { renderHook } from "@testing-library/react";
import { useYearsOfExperience } from "./useYearsOfExperience";

test("returns years of experience as a number", () => {
  const { result } = renderHook(() => useYearsOfExperience());
  expect(result.current).not.toBeNaN();
  expect(result.current).toBeGreaterThan(0);
});
