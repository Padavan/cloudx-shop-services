import { render } from "@testing-library/react";
import PaperLayout from "./PaperLayout";

describe("<PaperLayout />", () => {
  it("should match to snapshot", () => {
    const component = render(
      <PaperLayout>
        <div />
      </PaperLayout>
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
