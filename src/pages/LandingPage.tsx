import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartFiling = () => {
    navigate("/login");
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Montserrat', Arial, sans-serif;
            background: #f6f6ff;
            color: #151445;
          }
          a { color: inherit; text-decoration: none; }
          /* Navbar */
          .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 28px 44px 20px;
            background: #151445;
            color: #fff;
          }
          .logo {
            font-weight: 800;
            font-size: 2rem;
            letter-spacing: 2px;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .logo-bar {
            width: 32px;
            height: 4px;
            background: #fff;
            margin-right: 6px;
          }
          .nav-links {
            list-style: none;
            display: flex;
            gap: 36px;
            margin: 0;
            padding: 0;
          }
          .nav-links li {
            font-size: 1.1rem;
            color: #c5c0fd;
            cursor: pointer;
            position: relative;
            transition: color 0.3s;
          }
          .nav-links .active,
          .nav-links li:hover { color: #fff; }
          .nav-links .active::after {
            content: '';
            display: block;
            margin-top: 6px;
            width: 26px;
            height: 2px;
            background: #7262ff;
            border-radius: 4px;
          }
          .right-buttons { display: flex; gap: 18px; }
          .login-btn {
            background: none;
            border: none;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
          }
          .consult-btn {
            background: #fff;
            border-radius: 9px;
            border: none;
            padding: 10px 24px;
            font-size: 1rem;
            color: #151445;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 2px 8px #15144540;
            transition: background 0.2s;
          }
          .consult-btn:hover { background: #efeefd; }

          /* Section 1: HERO */
          .hero {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 58px 7vw 0 7vw;
            min-height: 680px;
            background: #151445;
            color: #fff;
          }
          .hero-left {
            flex: 3;
            display: flex;
            flex-direction: column;
            gap: 22px;
            margin-top: 36px;
          }
          .badges {
            display: flex;
            gap: 18px;
            margin-bottom: 8px;
          }
          .badges span {
            background: #23215e;
            color: #e6e5ff;
            border-radius: 18px;
            padding: 6px 22px;
            font-size: 1rem;
            font-weight: 600;
          }
          h1, .not-main-h1 {
            font-size: 2.75rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            line-height: 3.2rem;
            margin: 0;
            color: #151445; /* overridden in hero */
          }
          .hero h1 { color: #fff; }
          .underline {
            border-bottom: 3px dotted #e89b17;
            padding-bottom: 3px;
            display: inline-block;
          }
          .desc { color: #aeaed1; margin-top: 6px; margin-bottom: 0; }
          .desc-2 { color: #fff; font-weight: bold; }
          .hero-actions { display: flex; gap: 18px; margin-top: 17px; }
          .start-btn, .cta-btn, .email-btn {
            background: #ffcb61;
            color: #23215e;
            font-size: 1.1rem;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            padding: 14px 38px;
            cursor: pointer;
            box-shadow: 0 3px 12px #e7c98e56;
            transition: all 0.18s;
          }
          .cta-btn:hover, .start-btn:hover, .email-btn:hover { background: #ffd88c; }
          .expert-btn, .cta-btn-outline {
            background: none;
            color: #fff;
            font-size: 1.1rem;
            border: 1.5px solid #3a3970;
            border-radius: 8px;
            padding: 14px 34px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.16s, border 0.16s;
          }
          .expert-btn:hover, .cta-btn-outline:hover { background: #363468; border-color: #7262ff; }
          .trusted {
            color: #8081a7;
            margin-top: 8px;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 7px;
          }
          .hero-right {
            flex: 2;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            margin-top: 40px;
          }
          .stat-card {
            background: #19185b;
            border-radius: 28px;
            padding: 32px 54px 36px;
            box-shadow: 0 2px 48px #1b183a90;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 320px;
            min-height: 120px;
            margin-top: 16px;
            color: #fff;
          }
          .stat-title { font-size: 1.32rem; font-weight: 700; margin-bottom: 16px; }
          .tax-saved {
            background: #292673;
            border-radius: 12px;
            padding: 10px 26px;
            font-size: 1.07rem;
            color: #aea5cf;
            font-weight: 500;
          }
          .tax-saved span {
            color: #ffc768;
            font-size: 1.2rem;
            font-weight: bold;
            margin-left: 7px;
          }

          /* Section 2: DISCOUNT + How It Works */
          .discount-section { background: #f6f6ff; padding: 48px 0 66px 0; min-height: 70vh; }
          .discount-timer-row {
            display: flex; align-items: center; justify-content: center; gap: 24px;
            font-family: 'Montserrat', sans-serif;
          }
          .timer-container {
            display: flex; align-items: center; background: #b4161b; color: #fff;
            border-radius: 7px; font-weight: bold; font-size: 1.43rem; padding: 10px 24px; gap: 12px;
            min-width: 156px; justify-content: center;
          }
          .timer-amount { font-size: 2rem; font-weight: 700; }
          .timer-unit { font-size: 1rem; margin-left: 4px; margin-right: 10px; letter-spacing: 0.5px; }
          .discount-heading { font-size: 2.3rem; font-weight: 700; color: #151445; margin-left: 20px; }
          .center-btn { text-align: center; margin: 34px 0 14px 0; }
          .file-btn { background: #ffcb61; color: #151445; font-weight: 600; padding: 13px 44px; font-size: 1.16rem; border: none; border-radius: 7px; cursor: pointer; }
          .file-btn:hover { background: #ffd17a; }
          .how-it-works-box {
            margin: 44px auto 0 auto;
            max-width: 1100px;
            border: 2.2px dashed #bbb;
            border-radius: 22px;
            background: #fff;
            padding: 44px 36px;
          }
          .hiw-title {
            font-size: 2.1rem;
            color: #151445;
            font-weight: 700;
            margin-bottom: 38px;
            margin-left: 16px;
          }
          .hiw-steps { display: flex; flex-direction: column; gap: 38px; }
          .hiw-step { display: flex; align-items: center; gap: 28px; }
          .hiw-step-label {
            font-size: 1.08rem;
            color: #222;
            min-width: 74px;
            font-weight: 500;
            margin-left: 15px;
          }
          .hiw-step-desc {
            font-size: 1.42rem;
            font-weight: 600;
            color: #151445;
            margin-left: 15px;
          }
          .hiw-bubble {
            background: #cbcbe7;
            border-radius: 18px;
            padding: 16px 30px;
            color: #23215e;
            font-size: 1.16rem;
            font-weight: 700;
            margin-left: 12px;
          }

          /* Section 3+: PRODUCT/PLAN TABS/Cards */
          .products-section { background: #f6f6ff; padding: 48px 0 36px 0; }
          .tabs-row { display: flex; justify-content: center; margin-bottom: 30px; gap: 20px; }
          .tab-item { background: #cbcbe7; color: #151445; font-weight: 600; padding: 11px 34px; border-radius: 13px 13px 0 0; font-size: 1.06rem; cursor: pointer; border: none; outline: none; margin-left: 0; border-bottom: 3px solid transparent; }
          .tab-active { background: #ececff; color: #2e1853; border-bottom: 3px solid #7262ff; font-weight: 700; }
          .product-card {
            background: #dbd8fa;
            border-radius: 35px;
            padding: 48px 56px;
            max-width: 1280px;
            margin: 0 auto 36px auto;
            display: flex;
            align-items: center;
            gap: 36px;
          }
          .product-content { flex: 2; }
          .product-title { font-size: 2.5rem; color: #151445; font-weight: 700; margin-bottom: 18px; }
          .product-sub { color: #151445; font-size: 1.22rem; margin-bottom: 18px;}
          .product-list { color: #423e69; font-size: 1.15rem; margin-top: 18px; margin-bottom: 18px; list-style: none; padding: 0; }
          .product-list li { margin-bottom: 8px; position: relative; padding-left: 28px;}
          .product-list li:before { content: "✔"; color: #5c5283; position: absolute; left: 2px; font-size: 1.07rem; }
          .product-price-row { display: flex; align-items: center; gap: 18px; margin-top: 18px; margin-bottom: 20px; }
          .product-price { font-size: 2.1rem; color: #ff9800; font-weight: 700; margin-right: 8px; }
          .product-strike { font-size: 1.35rem; text-decoration: line-through; color: #423e69; font-weight: 500; }
          .product-btn {
            background: #23215e;
            color: #fff; font-weight: 600; border: none; border-radius: 9px; padding: 15px 44px; font-size: 1.1rem;
            cursor: pointer; transition: background 0.14s; margin-top: 16px;
          }
          .product-btn:hover { background: #3b37a7; }
          .product-illustration { flex: 1; display: flex; justify-content: flex-end; align-items: flex-end; }
          .illus-man, .illus-mutual, .illus-business, .illus-nri, .illus-advance { width: 220px; height: 170px; background: #b9b9f4; border-radius: 26px; display: flex; align-items: center; justify-content: center; font-size: 7rem; color: #826ed7; }
          .illus-mutual, .illus-business, .illus-nri, .illus-advance { font-size: 5.25rem; }
          /* You can insert custom SVGs or replace with emojies for now */

          /* Section: Why Choose Us (split columns) */
          .why-choose-section { padding: 56px 0 16px 0; width: 100%; background: #f6f6ff; }
          .why-choose-grid {
            display: flex; gap: 0; max-width: 1300px;
            margin: 0 auto; align-items: center; background: #f6f6ff; min-height: 420px;
          }
          .why-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;}
          .why-svg { width: 180px; height: 160px; background: #cbcbe7; border-radius: 36px; display: flex; align-items: center; justify-content: center; margin-bottom: 22px; font-size: 5rem;}
          .why-divider { width: 2px; background: #c9c9d9; height: 70%; margin: 0 0.5vw;}
          .why-desc { text-align: center; font-size: 1.45rem; font-weight: 700; margin-top: 11px; color: #151445;}
          .why-border-bot { border-bottom: 2px solid #bbb; margin: 45px auto 0 auto; width: 90%; }

          /* Section: Why Choose Us 2 (split columns) */
          .why-choose-section-2 { padding: 56px 0 16px 0; width: 100%; background: #f6f6ff;}
          .why-choose-grid-2 { display: flex; gap: 0; max-width: 1300px; margin: 0 auto; align-items: center; background: #f6f6ff; min-height: 420px; }
          .why-col-2 { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;}
          .why-svg-2 { width: 180px; height: 160px; background: #cbcbe7; border-radius: 36px; display: flex; align-items: center; justify-content: center; margin-bottom: 22px; font-size: 5rem;}
          .why-divider-2 { width: 2px; background: #c9c9d9; height: 70%; margin: 0 0.5vw;}
          .why-desc-2 { text-align: center; font-size: 1.45rem; font-weight: 700; margin-top: 11px; color: #151445;}

          /* Section: User Testimonials */
          .testimonials-section { background: #f6f6ff; padding: 90px 0 70px 0;}
          .testimonials-title { text-align: center; font-size: 2.4rem; font-weight: 700; margin-bottom: 55px; color: #151445; }
          .testimonial-card-row {
            display: flex; justify-content: center; gap: 38px;
            max-width: 1380px; margin: 0 auto;
          }
          .testimonial-card {
            background: #fff;
            border-radius: 28px;
            padding: 32px 28px 42px 28px;
            box-shadow: 0 3px 32px #aa94f322;
            width: 330px; min-height: 380px;
            display: flex; flex-direction: column; align-items: center;
            text-align: center;
            transition: transform 0.13s;
          }
          .testimonial-card:hover { transform: translateY(-10px) scale(1.03);}
          .testimonial-image {
            width: 75px; height: 75px; background: #e4e3f4;
            border-radius: 50%; object-fit: cover; margin-bottom: 13px;
          }
          .testimonial-name { font-weight: 700; font-size: 1.17rem; color: #151445;}
          .testimonial-sub { color: #7a759c; font-size: 1.08rem;}
          .testimonial-body { color: #212042; font-size: 1.06rem; margin-top: 14px; }

          /* Section: Refund Calculator */
          .refund-section { background: #f6f6ff; padding: 85px 0 65px 0;}
          .refund-card {
            max-width: 1200px;
            margin: 0 auto;
            background: #151445;
            border-radius: 34px;
            color: #fff;
            padding: 56px 54px 48px 54px;
            display: flex;
            flex-direction: column;
            gap: 23px;
          }
          .refund-row { display: flex; flex-wrap: wrap; gap: 34px; margin-bottom: 24px;}
          .refund-col-left { flex: 2; }
          .refund-col-right { flex: 1.8; font-size: 1.28rem; color: #e0def7; font-weight: 500; margin-left: 33px;}
          .refund-title { font-size: 2.45rem; font-weight: 700; margin-bottom: 12px; color: #fff; }
          .refund-form-row { display: flex; gap: 25px; margin-bottom: 13px; }
          .refund-form-group { display: flex; flex-direction: column; flex: 1; }
          .refund-form-label { font-size: 1rem; margin-bottom: 6px; color: #e2e2ea;}
          .refund-form-input, .refund-form-select {
            background: #23205a;
            color: #fff;
            font-size: 1rem;
            padding: 12px 20px;
            border: none;
            outline: none;
            border-radius: 7px;
            margin-bottom: 7px;
          }
          .refund-form-email-row { display: flex; gap: 22px; margin-top: 16px;}
          .refund-form-email { flex: 2; }
          .refund-btn-row { flex: 2; }
          .refund-btn {
            padding: 14px 0;
            width: 100%;
            background: #ffcb61;
            color: #151445;
            border: none;
            border-radius: 7px;
            font-size: 1.04rem;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.15s;
          }
          .refund-btn:hover { background: #ffd17a; }

          /* Section: Reserve Filing Slots */
          .slots-section { background: #f6f6ff; padding: 88px 0 60px 0;}
          .slots-card {
            background: #fff;
            border-radius: 38px;
            max-width: 1180px;
            margin: 0 auto;
            box-shadow: 0 4px 60px 2px #c9c3fa, 0 0 0 #fff;
            text-align: center;
            padding: 85px 25px 67px 25px;
          }
          .slots-title {
            font-size: 2.7rem;
            font-weight: 700;
            color: #151445;
            margin-bottom: 17px;
            line-height: 3.5rem;
          }
          .slots-sub { font-size: 1.25rem; color: #151445; margin-bottom: 29px;}
          .slots-btn-row { margin-top: 23px; display: flex; gap:18px; justify-content: center;}
          .slots-btn { background: #23215e; color: #fff; font-size: 1.13rem; font-weight: 600; padding: 15px 38px; border-radius: 7px; border: none; cursor: pointer;}
          .slots-btn:last-child {
            background: #fff;
            color: #23215e;
            border: 1.5px solid #23215e;
          }
          .slots-guarantee { color: #b8b8bc; margin-top:26px; font-size: 1.04rem;}

          /* Section: FAQ */
          .faq-section { background: #f6f6ff; padding: 54px 0 48px 0;}
          .faq-title { text-align: center; font-size: 2.4rem; font-weight: 700; margin-bottom: 26px; }
          .faq-tabs-row { display: flex; justify-content: center; align-items: center; gap: 0;}
          .faq-tab-btn { background: #ececff; color: #23215e; border: none; font-size: 1.16rem; border-radius: 7px 7px 0 0; padding: 11px 42px; font-weight: 700; margin: 0; margin-right: 9px;}
          .faq-tab-btn.active, .faq-tab-btn:active { background: #151445; color: #fff;}
          .faq-list { max-width: 1300px; margin: 0 auto; padding-top: 18px;}
          .faq-item { background:#e0deef; border-radius: 18px; margin-bottom: 16px; padding: 19px 34px; font-size: 1.18rem;}
          .faq-item.expanded { background: #cbcbe7;}
          .faq-item .faq-question { font-weight: 700; font-size: 1.14rem; }
          .faq-item .faq-answer { font-weight: 500; color: #444; margin-top: 7px;}
          .faq-chevron { float: right; font-size: 1.5rem; color: #9590a8;transform: rotate(90deg); }
          /* Section: CTA Join */
         .cta-section {
  background: #f6f6ff;
  padding: 0 0 0 0;
}

.cta-card {
  background: #181650;
  color: #fff;
  max-width: 80vw;
  margin: 80px auto 48px auto;
  border-radius: 48px;
  box-shadow: 0 0 32px 6px #b9b3f322, 0 0 0 #fff;
  padding: 82px 0 80px 0;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 0;
  line-height: 1.14em;
  color: #fff;
}

.cta-btn-row {
  display: flex;
  gap: 28px;
  justify-content: center;
}

.cta-btn {
  background: #ffcb61;
  color: #23215e;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  border-radius: 13px;
  padding: 19px 60px;
  box-shadow: 0px 3px 12px #e7c98e33;
  transition: all 0.18s;
  cursor: pointer;
}

.cta-btn-outline {
  background: #181650;
  color: #fff;
  border: 3px solid #fff;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 13px;
  padding: 19px 60px;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s;
}

.cta-btn:hover {
  background: #ffd88c;
  color: #23215e;
}

.cta-btn-outline:hover {
  background: #ffcb61;
  color: #23215e;
  border: 3px solid #ffcb61;
}

.footer {
  background: #191919;
  color: #fff;
  text-align: center;
  padding: 35px 10px 24px 10px;
  font-size: 1.12rem;
  width: 100%;
}
.footer-links {
  margin-bottom: 11px;
  font-size: 1.14rem;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .cta-card {
    padding: 54px 0 48px 0;
    font-size: 1.5rem;
  }
  .cta-title {
    font-size: 2rem;
  }
  .cta-btn, .cta-btn-outline {
    font-size: 1.1rem;
    padding: 13px 26px;
  }
}
        `}
      </style>
      {/* NAVIGATION & HERO */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-bar"></div>
          TAX
        </div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Company</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        <div className="right-buttons">
          <button className="login-btn">login</button>
          <button className="consult-btn">Book a free consultation</button>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-left">
          <div className="badges">
            <span>Simple</span>
            <span>Reliable</span>
            <span>Trustworthy</span>
          </div>
          <h1>
            Save More Tax in Just 7 <br />
            Minutes – <span className="underline">Backed by Real CAs</span>
          </h1>
          <p className="desc">
            Form-16 Upload. ₹10K+ Saved. 100% Operator Reviewed.
          </p>
          <p className="desc-2">Over 100,000+ successful tax filings.</p>
          <div className="hero-actions">
            <button className="start-btn" onClick={handleStartFiling}>
              Start Filing Instantly
            </button>
            <button className="expert-btn">Talk to a Tax Expert — Free</button>
          </div>
          <div className="trusted">🛡️ India’s most trusted tax filing partner</div>
        </div>
        <div className="hero-right">
          <div className="stat-card">
            <div className="stat-title">Files ITR in 7 minutes</div>
            <div className="tax-saved">
              Tax saved: <span>₹32,500</span>
            </div>
          </div>
        </div>
      </section>
      {/* DISCOUNT / HOW IT WORKS */}
      <section className="discount-section">
        <div className="discount-timer-row">
          <div className="timer-container">
            <span className="timer-amount">14</span>
            <span className="timer-unit">mins</span>
            <span className="timer-amount">59</span>
            <span className="timer-unit">secs</span>
          </div>
          <span className="discount-heading">Click fast to get 10% additional discount</span>
        </div>
        <div className="center-btn">
          <button className="file-btn">File ITR Now</button>
        </div>
        <div className="how-it-works-box">
          <div className="hiw-title">How It Works</div>
          <div className="hiw-steps">
            <div className="hiw-step">
              <span className="hiw-step-label">Step 1</span>
              <span className="hiw-step-desc hiw-bubble">
                Upload Form-16 or enter income manually
              </span>
            </div>
            <div className="hiw-step">
              <span className="hiw-step-label">Step 2</span>
              <span className="hiw-step-desc hiw-bubble">
                We auto-fill and match with AIS/26AS
              </span>
            </div>
            <div className="hiw-step">
              <span className="hiw-step-label">Step 3</span>
              <span className="hiw-step-desc hiw-bubble">
                Our Operator reviews, you get ITR + e-verification
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* SALARIED EMPLOYEE */}
      <section className="products-section">
        <div className="tabs-row">
          <button className="tab-item tab-active">Salaried Employee</button>
          <button className="tab-item">Stocks, Mutual Funds, or Crypto</button>
          <button className="tab-item">Business or Freelancer</button>
          <button className="tab-item">NRI or Have Foreign Income</button>
          <button className="tab-item">Advance Tax Payments</button>
        </div>
        <div className="product-card">
          <div className="product-content">
            <div className="product-title">For Salaried Employee</div>
            <div className="product-sub">
              Ideal for: Individuals earning salary with optional home loan, rent, savings interest
            </div>
            <ul className="product-list">
              <li>Salary income with Form-16</li>
              <li>House property (owned/rented)</li>
              <li>Interest from savings, deposits</li>
              <li>Basic deductions (80C, 80D etc.)</li>
            </ul>
            <div className="product-price-row">
              <span className="product-price">₹999</span>
              <span className="product-strike">₹1599</span>
            </div>
            <button className="product-btn">File ITR Now</button>
          </div>
          <div className="product-illustration">
            <div className="illus-man">👨‍💼</div>
          </div>
        </div>
      </section>
      {/* STOCKS, MF, CRYPTO */}
      <section className="products-section">
        <div className="product-card">
          <div className="product-content">
            <div className="product-title">For Stocks, Mutual Funds, or Crypto</div>
            <div className="product-sub">
              Ideal for: People with capital gains or digital assets
            </div>
            <ul className="product-list">
              <li>Everything in salaried plan</li>
              <li>Capital gains (stocks, mutual funds, Indian property)</li>
              <li>Crypto income</li>
              <li>Lottery, gaming winnings</li>
            </ul>
            <div className="product-price-row">
              <span className="product-price">₹1,999</span>
              <span className="product-strike">₹2599</span>
            </div>
            <button className="product-btn">File My Capital Gains Return</button>
          </div>
          <div className="product-illustration">
            <div className="illus-mutual">📈</div>
          </div>
        </div>
      </section>
      {/* BUSINESS/FREELANCER */}
      <section className="products-section">
        <div className="product-card">
          <div className="product-content">
            <div className="product-title">For Business or a Freelancer</div>
            <div className="product-sub">
              Ideal for: Self-employed professionals, freelancers, business owners
            </div>
            <ul className="product-list">
              <li>All income from profession or business</li>
              <li>Presumptive income (44ADA/44AE)</li>
              <li>{`Traders with TO < or > ₹2 Cr`}</li>
              <li>{`Freelancers with TO < or > ₹50L`}</li>
              <li>Books of accounts, P&amp;L, depreciation</li>
            </ul>
            <div className="product-price-row">
              <span className="product-price">₹2,999</span>
              <span className="product-strike">₹3,599</span>
            </div>
            <button className="product-btn">File My Business Return</button>
          </div>
          <div className="product-illustration">
            <div className="illus-business">🗂️</div>
          </div>
        </div>
      </section>
      {/* NRI/FOREIGN INCOME */}
      <section className="products-section">
        <div className="product-card">
          <div className="product-content">
            <div className="product-title">For NRI or Have Foreign Income</div>
            <div className="product-sub">
              Ideal for: NRIs or residents with overseas income or capital gains
            </div>
            <ul className="product-list">
              <li>Everything in previous plans</li>
              <li>Foreign income (salary, investments, property)</li>
              <li>NRO/NRE tax implications</li>
              <li>Capital gains from foreign asset</li>
              <li>DTAA, RSU/ESOP advisory</li>
              <li>Residency status determination</li>
            </ul>
            <div className="product-price-row">
              <span className="product-price">₹3,999</span>
              <span className="product-strike">₹4599</span>
            </div>
            <button className="product-btn">File My NRI Return</button>
          </div>
          <div className="product-illustration">
            <div className="illus-nri">🌍</div>
          </div>
        </div>
      </section>
      {/* ADVANCE TAX */}
      <section className="products-section">
        <div className="product-card">
          <div className="product-content">
            <div className="product-title">For Advance Tax Payments</div>
            <div className="product-sub">
              Ideal for: Anyone liable to pay advance tax quarterly
            </div>
            <ul className="product-list">
              <li>Quarterly advance tax computation</li>
              <li>Challan generation support</li>
              <li>ESOP/bonus/interest calculation</li>
            </ul>
            <div className="product-price-row">
              <span className="product-price">₹499</span>
              <span className="product-strike">₹999</span>
            </div>
            <button className="product-btn">Estimate Advance Tax</button>
          </div>
          <div className="product-illustration">
            <div className="illus-advance">📅</div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US SECTION 1 */}
      <section className="why-choose-section">
        <div className="why-choose-grid">
          <div className="why-col">
            <div className="why-svg">🛡️</div>
            <div className="why-desc">100% Paperless &amp; Secure</div>
          </div>
          <div className="why-divider"></div>
          <div className="why-col">
            <div className="why-svg">🧑‍💼</div>
            <div className="why-desc">For Salaried, Investors,<br />Freelancers, NRIs</div>
          </div>
        </div>
        <div className="why-border-bot"></div>
      </section>
      {/* WHY CHOOSE US SECTION 2 */}
      <section className="why-choose-section-2">
        <div className="why-choose-grid-2">
          <div className="why-col-2">
            <div className="why-svg-2">🤖</div>
            <div className="why-desc-2">AI-Powered + Operator Reviewed</div>
          </div>
          <div className="why-divider-2"></div>
          <div className="why-col-2">
            <div className="why-svg-2">🗃️</div>
            <div className="why-desc-2">Tax Filing + Planning – All in One Place</div>
          </div>
        </div>
        <div className="why-border-bot"></div>
      </section>
      {/* USER TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-title">~ What Our Users Say ~</div>
        <div className="testimonial-card-row">
          <div className="testimonial-card">
            <img className="testimonial-image" src="https://via.placeholder.com/75x75?text= " alt="User 1" />
            <div className="testimonial-name">Tarun Gupta</div>
            <div className="testimonial-sub">Tech Lead, Lenovo India</div>
            <div className="testimonial-body">Thanks to my Operator and the entire team of DoMyTaxes, I was able to maximise my deductions and minimise my tax liability. Their professional guidance is invaluable and they made the entire process smooth and stress-free. Kudos to #DoMyTaxes</div>
          </div>
          <div className="testimonial-card" style={{ transform: 'rotate(-6deg)' }}>
            <img className="testimonial-image" src="https://via.placeholder.com/75x75?text= " alt="User 2" />
            <div className="testimonial-name">Amrutha Narasimha</div>
            <div className="testimonial-sub">Manager - CSR &amp; Volunteering, Donatekart</div>
            <div className="testimonial-body">I had the pleasure of speaking with Abhinesh, and I must say he is incredibly knowledgeable about taxes, savings, and investment options. During our one-hour Operatorll, he patiently explained various savings strategies and their benefits.</div>
          </div>
          <div className="testimonial-card" style={{ transform: 'rotate(3deg)' }}>
            <img className="testimonial-image" src="https://via.placeholder.com/75x75?text= " alt="User 3" />
            <div className="testimonial-name">Rafa Prasoon</div>
            <div className="testimonial-sub">Govt Office</div>
            <div className="testimonial-body">The team at Mytaxclub is incredibly professional and responsive. They helped me navigate complex tax issues with ease, ensuring I stayed compliant while optimizing my returns. Their personalized approach makes all the difference!</div>
          </div>
        </div>
      </section>
      {/* REFUND CALCULATOR */}
      <section className="refund-section">
        <div className="refund-card">
          <div className="refund-row">
            <div className="refund-col-left">
              <div className="refund-title">Want to Know Your Refund Before You File?</div>
            </div>
            <div className="refund-col-right">
              Estimate how much tax you could save — in less than 30 seconds. No login needed.
            </div>
          </div>
          <form>
            <div className="refund-form-row">
              <div className="refund-form-group">
                <label className="refund-form-label">Income (CTC)</label>
                <input type="text" className="refund-form-input" placeholder="e.g. ₹12,00,000" />
              </div>
              <div className="refund-form-group">
                <label className="refund-form-label">House Rent Paid (per month)</label>
                <input type="text" className="refund-form-input" placeholder="e.g. ₹15,000" />
              </div>
              <div className="refund-form-group">
                <label className="refund-form-label">80C Investments</label>
                <input type="text" className="refund-form-input" placeholder="e.g. ₹1,50,000" />
              </div>
            </div>
            <div className="refund-form-row">
              <div className="refund-form-group">
                <label className="refund-form-label">80D (Health Insurance)</label>
                <input type="text" className="refund-form-input" placeholder="e.g. ₹25,000" />
              </div>
              <div className="refund-form-group">
                <label className="refund-form-label">City Category (for HRA)</label>
                <select className="refund-form-select">
                  <option>Metro</option>
                  <option>Non-Metro</option>
                </select>
              </div>
              <div className="refund-form-group">
                <label className="refund-form-label">Age</label>
                <select className="refund-form-select">
                  <option>Below 60</option>
                  <option>60-80</option>
                  <option>Above 80</option>
                </select>
              </div>
            </div>
            <div className="refund-form-email-row">
              <div className="refund-form-group refund-form-email">
                <label className="refund-form-label">Email*</label>
                <input type="email" className="refund-form-input" placeholder="Enter your email" />
              </div>
              <div className="refund-btn-row">
                <button className="refund-btn" type="submit">Calculate &amp; Email for Free</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* SLOTS RESERVATION CTA */}
      <section className="slots-section">
        <div className="slots-card">
          <div className="slots-title">Operator Filing Slots Are Limited<br />– Reserve Yours Now</div>
          <div className="slots-sub">Speak to a licensed tax expert before the deadline.</div>
          <div className="slots-btn-row">
            <button className="slots-btn">Start Filing Now</button>
            <button className="slots-btn">Talk to Operator Advisor</button>
          </div>
          <div className="slots-guarantee">Fully compliant. 100% accuracy guaranteed.</div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-title">Have Questions? Let&apos;s Clear Them.</div>
        <div className="faq-tabs-row">
          <button className="faq-tab-btn active">ITR FILING</button>
          <button className="faq-tab-btn">TAX PLANNING</button>
        </div>
        <div className="faq-list">
          <div className="faq-item expanded">
            <div className="faq-question">What documents do I need to file my ITR?</div>
            <div className="faq-answer">You&apos;ll need your PAN, Aadhaar, Form-16 (if salaried), interest certificates, capital gain statements (if applicable), and investment proofs for deductions.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Can I file without Form-16?</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">How long does it take to file my return?</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Do you handle capital gains or crypto?</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Will I get Operator support?</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Can I file for previous years?</div>
          </div>
        </div>
      </section>
      {/* FINAL CTA + FOOTER */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-title">Join 100K+ Taxpayers<br />Who Filed Smarter</div>
          <div className="cta-btn-row">
            <button className="cta-btn">File ITR Now</button>
            <button className="cta-btn cta-btn-outline">Talk to Operator Advisor</button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-links">About | Pricing | Contact</div>
        <div>© 2025 DoMyTaxes. All rights reserved. GSTIN: XX | This is a private platform. Not affiliated with Income Tax Dept</div>
      </footer>
    </div>
  );
};

export default LandingPage;
