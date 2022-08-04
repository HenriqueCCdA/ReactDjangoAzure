import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Happy path test", async () => {

    localStorage.clear();

    render(<App />);
    const copyrightText = await screen.findByText(/copyright/i);
    expect(copyrightText).toBeInTheDocument();

    const loginLink = await screen.findByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    userEvent.click(loginLink);

    const logInText = await screen.findByRole("heading", { name: /log in/i });
    expect(logInText).toBeInTheDocument();

    const emailField = await screen.findByRole("textbox", { name: /email address/i });
    expect(emailField).toBeInTheDocument();

    const passwordField = await screen.findByLabelText(/password/i);
    expect(passwordField).toBeInTheDocument();

    const logInButton = await screen.findByRole("button", { name: /log in/i });
    expect(logInButton).toBeInTheDocument();
    expect(logInButton).toBeDisabled();

    const registerLink = await screen.findByRole("link", { name: /register/i });
    expect(registerLink).toBeInTheDocument();
    userEvent.click(registerLink);

    const registerHeader = await screen.findByRole('heading', { name: /register/i });
    expect(registerHeader).toBeInTheDocument();

    const registerName = await screen.findByRole('textbox', { name: /name/i })
    expect(registerName).toBeInTheDocument();

    const registerEmail = await screen.findByRole("textbox", { name: /email address/i });
    expect(registerEmail).toBeInTheDocument();

    const registerPassword = await screen.findByLabelText(/enter password/i);
    expect(registerPassword).toBeInTheDocument();

    const confirmPassword = await screen.findByLabelText(/confirm password/i);
    expect(confirmPassword).toBeInTheDocument();

    const registrationLinkLogin = await screen.findByRole('link', { name: /log in/i });
    expect(registrationLinkLogin).toBeInTheDocument();

    const registerButton = await screen.findByRole('button', { name: /register/i });
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toBeDisabled();

    userEvent.clear(registerName);
    userEvent.type(registerName, 'James Smith');

    userEvent.clear(registerEmail);
    userEvent.type(registerEmail, 'james@example.com');

    userEvent.clear(registerPassword);
    userEvent.type(registerPassword, 'LetMeIn1234!');

    userEvent.clear(confirmPassword);
    userEvent.type(confirmPassword, 'LetMeIn1234!');

    expect(registerButton).toBeEnabled()

    userEvent.click(registerButton);

    const verifyEmailText = await screen.findByRole('heading', { name: /Verify Email/i });
    expect(verifyEmailText).toBeInTheDocument();

    expect(screen.getByText(/A verification email has been sent to james@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Please click on the link in the email to verify your account/i)).toBeInTheDocument();

});
