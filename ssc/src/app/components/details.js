import Image from "next/image";
import "./details.css";

export default function Details() {
  return (
    <>
      <h2 className="services playfair">Services</h2>
      <br />

      <div className="container text-center">
        <div className="row align-items-center cards-row">
          <div className="col p-3">
            <div className="service-card" tabIndex={0}>
              <Image
                className="service_img mb-3"
                src="https://i.postimg.cc/bNSCcmxt/1-removebg-preview.png"
                alt="Immersive Language Classes"
                width={140}
                height={140}
              />
              <h5 className="playfair service-title">
                Immersive Language Classes
              </h5>
              <p className="service-desc">
                Live, conversation-led lessons to build fluency.
              </p>
            </div>
          </div>

          <div className="col p-3">
            <div className="service-card" tabIndex={0}>
              <Image
                className="service_img mb-3"
                src="https://i.postimg.cc/2yM0LWDy/2-removebg-preview.png"
                alt="CXC Spanish and French Classes"
                width={140}
                height={140}
              />
              <h5 className="playfair service-title">
                CXC Spanish and French Classes
              </h5>
              <p className="service-desc">
                Exam-focused support and practice materials.
              </p>
            </div>
          </div>

          <div className="col p-3">
            <div className="service-card" tabIndex={0}>
              <Image
                className="service_img mb-3"
                src="https://i.postimg.cc/tRMSMKxb/3-removebg-preview.png"
                alt="Translation and Interpretation Services"
                width={140}
                height={140}
              />
              <h5 className="playfair service-title">
                Translation and Interpretation Services
              </h5>
              <p className="service-desc">
                Professional translations for documents and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
