import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { Button } from "../Button";

test("can press the button", () => {
    const onPressMock = jest.fn();

    const { getByText } = render(<Button text="Testing" onPress={onPressMock} />);

    fireEvent.press(getByText("Testing"));
    expect(onPressMock).toHaveBeenCalled();
    expect(onPressMock.mock.calls.length).toBe(1);
})