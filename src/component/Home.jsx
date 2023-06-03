import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img src="/assets/al-bg.png" class="card-img" alt="Background"  
        height="550px"/>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 class="card-title display-3 fw-bolder mb-0">Smoothy shirts</h5>
                <p class="card-text lead fs-2">
                    Check out All Products
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
