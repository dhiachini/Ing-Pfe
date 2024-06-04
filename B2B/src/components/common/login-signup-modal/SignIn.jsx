import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../../Redux/Actions/authActions";

import '@fortawesome/fontawesome-free/css/all.min.css';

const SignIn = () => {
  const [Professionalemail, setProfessionalemail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, errors } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginAction({ Professionalemail, Password }));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard-home");
    }
  }, [token, navigate]);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="mb25">
        <label className="form-label fw600 dark-color">E-mail</label>
        <input
          type="email"
          className="form-control"
          placeholder="Entrez votre e-mail"
          value={Professionalemail}
          onChange={(e) => setProfessionalemail(e.target.value)}
          required
        />
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Mot de passe</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter votre mot de passe"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </button>
        </div>
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Souvenez de moi
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        <a className="fz14 ff-heading" href="/login">
          Mot de passe oublié?
        </a>
      </div>
      {/* End  Lost your password? */}

      {errors && <p style={{ color: 'red' }}>{errors}</p>}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Se connecter <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* End submit */}

      <p className="dark-color text-center mb0 mt10">
        Vous n'êtes pas inscrit?{" "}
        <Link className="dark-color fw600" to="/register">
          Demander un compte.
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
