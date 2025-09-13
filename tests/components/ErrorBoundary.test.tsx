import React from "react";
import ErrorBoundary from "../../src/components/ErrorBoundary";
import { render } from "@testing-library/react";

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("test");
  }
  return <div>No Error</div>;
};

describe("ErrorBoundary", () => {
  it("should display an ErrorMessage if wrapped component throws", () => {
    // Suppress console.error for this test since we expect an error
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(getByText("OOOps :(")).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
