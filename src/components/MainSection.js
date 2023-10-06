import "./css/Mainsection.css";

export default function MainSection() {
  return (
    <div className="main-section">
      <div className="left">
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-solid fa-laptop"></i>
      </div>
      <div className="center">
        <div>
          <h1>
            Elevate Your Events with Nexus Hosts - Your Partner in Unforgettable
            Experiences!
          </h1>
          <p>
            At <b>Nexus Hosts</b>, we are your dedicated partners in crafting
            exceptional events that leave lasting impressions. Our team of
            seasoned event management experts is here to turn your vision into
            reality, creating seamless and unforgettable experiences for any
            occasion.
          </p>
        </div>
        <div>
          <button className="btn-start">Events</button>
        </div>
        <div>
          <img
            style={{ borderRadius: "10px" }}
            width="100%"
            src="./images/NEXU Image.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="left">
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-regular fa-face-smile"></i>
      </div>
    </div>
  );
}
