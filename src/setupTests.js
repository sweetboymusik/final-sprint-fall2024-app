import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
}));
