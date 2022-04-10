import "../auth.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div class="auth login">
      <div class="card text-only card-login">
        <div class="card-header h3 fw-600 mg-16 txt-c">
          Sign up to BookAlley
        </div>
        <div class="card-content txt-l">
          <form action="" class="signup">
            <div class="signup-fn">
              <label for="firstName" class="control-label gray fs-12">
                First Name
              </label>
              <input
                type="text"
                class="input form-control"
                id="firstName"
                name="firstName"
              />
            </div>
            <div class="signup-ln">
              <label for="lastName" class="control-label gray fs-12">
                Last Name
              </label>
              <input
                type="text"
                class="input form-control"
                id="lastName"
                name="lastName"
              />
            </div>
            <div class="signup-un">
              <label for="username" class="control-label gray fs-12">
                Username
              </label>
              <input
                type="text"
                class="input form-control"
                id="username"
                name="username"
              />
            </div>
            <div class="signup-pass">
              <label for="password" class="control-label gray fs-12">
                Password
              </label>
              <input
                type="password"
                class="input form-control"
                id="password"
                name="password"
                autocomplete="off"
              />
            </div>
            <div class="signup-email">
              <label for="email" class="control-label gray fs-12">
                Email
              </label>
              <input
                type="email"
                class="input form-control"
                id="email"
                name="email"
                autocomplete="off"
              />
            </div>
            <div class="secondary-action txt-r fs-12">
              <span class="save-login">
                <input
                  type="checkbox"
                  class="input-checkbox checkbox-terms"
                  id="terms"
                />
                <label for="terms" class="gray">
                  I accept all Terms & conditions
                </label>
              </span>
            </div>
            <div class="primary-action txt-c">
              <button class="button button-full" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="create-account">
        <span>Already have an account? </span>
        <Link to="/login" class="fw-600">
          Log In
        </Link>
      </div>
    </div>
  );
};
export { SignUp };
