import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./theme.hooks";
import { ThemeProvider } from "./theme.context";

describe("useTheme specs", () => {
  it('should return a theme equals { primaryColor: "black" } when it renders the hook and calls to onChangeDarkTheme', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    act(() => {
      result.current.onChangeDarkTheme();
    });

    // Assert
    expect(result.current.theme).toEqual({ primaryColor: "black" });
  });
});
