import React from 'react';

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: '280px', height: '100vh' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32"></svg>
        <span className="fs-4">TensorFlow</span>
      </a>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <i className="bi bi-house me-2"></i>
            Home
          </a>
        </li>
      </ul>
      <hr />

      <div className="dropdown">
        <i className="bi bi-person-circle me-2"></i>
        <strong>User</strong>
      </div>
    </div>
  );
}
