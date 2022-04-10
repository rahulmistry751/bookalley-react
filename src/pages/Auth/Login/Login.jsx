import "../auth.css";
import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div class="auth login">
      <div class="card text-only card-login">
        <div class="card-header h3 fw-600 mg-16 txt-c">Log in to BookAlley</div>
        <div class="card-content txt-l">
          <form action="">
            <div class="login-username">
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
            <div class="login-password">
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
            <div class="secondary-action txt-r fs-12">
              <span class="save-login">
                <input
                  type="checkbox"
                  class="input-checkbox checkbox-remember"
                  id="remember-me"
                />
                <label for="remember-me" class="gray">
                  Remember me
                </label>
              </span>
              <a href="#" class="forgot-pass">
                Forgot Password
              </a>
            </div>
            <div class="primary-action txt-c">
              <button class="button button-full" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="create-account">
        <span>New to BookAlley? </span>
        <Link to="/signup" class="fw-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export { Login };
