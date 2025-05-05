import "./details.css";

export default function Details() {
  return (
    <>
      <h2 className="services playfair">Services</h2>
      <br></br>

      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <img
              className="service_img"
              src="https://i.postimg.cc/bNSCcmxt/1-removebg-preview.png"
            ></img>
            <h5 className="playfair">CXC Spanish and French Classes</h5>
          </div>

          <div className="col">
            <img
              className="service_img"
              src="https://i.postimg.cc/2yM0LWDy/2-removebg-preview.png"
            ></img>
            <h5 className="playfair">CXC Spanish and French Classes</h5>
          </div>

          <div className="col">
            <img
              className="service_img"
              src="https://i.postimg.cc/tRMSMKxb/3-removebg-preview.png"
            ></img>
            <h5 className="playfair">CXC Spanish and French Classes</h5>
          </div>
        </div>
      </div>
    </>
  );
}
