import React from "react";
import { Link } from "react-router-dom";
import BelowFooter from "./BelowFooter";

export default function Footer() {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden text-white bg-neutral-950  w-full font-poppins mx-auto pt-5">
      <footer aria-label="Site Footer" class="bg-z mx-auto px-6 py-6 max-w-6xl">
        <div>
          <div class="flex flex-col gap-6 sm:flex-row md:ml-5 xl:ml-0">
            <div className="text-left text-gray-200 text-sm font-normal ">
              {/* Logo  */}
              <img src="./images/navlogo.png" className="w-20" />
              <p className="mb-4 ">
                Experience unparalleled financial growth and investment
                opportunities with One Ozo: Your gateway to prosperity and
                success.
              </p>

              <ul className="space-y-4">
                <li>Info@oneozo.com</li>
                <li>+44 7452118915</li>
                <li>63 HATTON GARDEN LONDON ENGLAND EC1N 8LE</li>
              </ul>
            </div>

            <div class="flex gap-6 font-poppins text-left w-full items-center md:justify-center">
              <div className="space-y-3">
                <p class="font-medium text-2xl text-gray-200">Useful Links</p>

                <nav
                  aria-label="Footer Navigation - Services"
                  className="mt-14 sm:mt-14"
                >
                  <ul class="space-y-4 text-sm tracking-wider">
                    <li>
                      <Link
                        to="/"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/aboutus"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/legal"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        Legal
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        to="/trade"
                        class="text-gray-400 transition hover:opacity-75 "
                        onClick={scrollToService}
                      >
                        Services
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        to="/photos"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/banners"
                        class="text-gray-400 transition hover:opacity-75 "
                        onClick={scrollToTeam}
                      >
                        Banners
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="">
                <nav
                  aria-label="Footer Navigation - Company"
                  className="mt-[2.75rem] sm:mt-14"
                >
                  <ul class="space-y-4 text-sm ">
                    {/* <li>
                      <Link
                        to="/"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        Our Process
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        to="/earning"
                        class="text-gray-400 transition hover:opacity-75 "
                        onClick={scrollToService}
                      >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/terms-and-conditions"
                        class="text-gray-400 transition hover:opacity-75"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/privacy-policy"
                        class="text-gray-400 transition hover:opacity-75"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        Our Careers
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/faq"
                        class="text-gray-400 transition hover:opacity-75 "
                        onClick={scrollToFAQ}
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        class="text-gray-400 transition hover:opacity-75 "
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="font-poppins flex flex-col gap-2 mr-10">
              <p>
                {/* <span class="text-xs tracking-wide uppercase text-gray-500">
                  Call us
                </span> */}

                <Link class="block text-2xl font-medium hover:opacity-75 text-white ">
                  Subscribe Us
                </Link>
              </p>

              <ul class="text-sm text-gray-400">
                <p>
                  Subscribe now and unlock a world of financial possibilities
                  with us.
                </p>
              </ul>

              <ul class="flex gap-6 my-6">
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61552974897638&mibextid=9R9pXO"
                    rel="noreferrer"
                    target="_blank"
                    class=" transition hover:opacity-75 text-gray-400 "
                  >
                    <span class="sr-only">Facebook</span>

                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.instagram.com/officialoneozo/"
                    rel="noreferrer"
                    target="_blank"
                    class="transition hover:opacity-75 text-gray-400"
                  >
                    <span class="sr-only">Instagram</span>

                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="http://wa.me/447492882694"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-400 transition hover:opacity-75 "
                  >
                    <span class="sr-only">Whatsapp</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        // style="mix-blend-mode: normal"
                      >
                        <g transform="scale(6.4,6.4)">
                          <path
                            d="M4.221,29.298l-0.104,-0.181c-1.608,-2.786 -2.459,-5.969 -2.458,-9.205c0.004,-10.152 8.267,-18.412 18.419,-18.412c4.926,0.002 9.553,1.919 13.03,5.399c3.477,3.48 5.392,8.107 5.392,13.028c-0.005,10.153 -8.268,18.414 -18.42,18.414c-3.082,-0.002 -6.126,-0.776 -8.811,-2.24l-0.174,-0.096l-9.385,2.46z"
                            fill="#cfd8df"
                          ></path>
                          <path
                            d="M20.078,2v0c4.791,0.001 9.293,1.867 12.676,5.253c3.383,3.386 5.246,7.887 5.246,12.674c-0.005,9.878 -8.043,17.914 -17.927,17.914c-2.991,-0.001 -5.952,-0.755 -8.564,-2.18l-0.349,-0.19l-0.384,0.101l-8.354,2.19l2.226,-8.131l0.11,-0.403l-0.208,-0.361c-1.566,-2.711 -2.393,-5.808 -2.391,-8.955c0.004,-9.876 8.043,-17.912 17.919,-17.912M20.078,1c-10.427,0 -18.915,8.485 -18.92,18.912c-0.002,3.333 0.869,6.588 2.525,9.455l-2.683,9.802l10.03,-2.63c2.763,1.507 5.875,2.3 9.042,2.302h0.008c10.427,0 18.915,-8.485 18.92,-18.914c0,-5.054 -1.966,-9.807 -5.538,-13.382c-3.572,-3.574 -8.322,-5.543 -13.384,-5.545z"
                            fill="#ffffff"
                          ></path>
                          <path
                            d="M19.995,35c-2.504,-0.001 -4.982,-0.632 -7.166,-1.823l-1.433,-0.782l-1.579,0.414l-3.241,0.85l0.83,-3.03l0.453,-1.656l-0.859,-1.488c-1.309,-2.267 -2.001,-4.858 -2,-7.492c0.004,-8.267 6.732,-14.992 14.998,-14.993c4.011,0.001 7.779,1.563 10.61,4.397c2.833,2.834 4.392,6.602 4.392,10.608c-0.004,8.268 -6.732,14.995 -15.005,14.995z"
                            fill="#000000"
                          ></path>
                          <path
                            d="M28.28,23.688c-0.45,-0.224 -2.66,-1.313 -3.071,-1.462c-0.413,-0.151 -0.712,-0.224 -1.012,0.224c-0.3,0.45 -1.161,1.462 -1.423,1.761c-0.262,0.3 -0.524,0.337 -0.974,0.113c-0.45,-0.224 -1.899,-0.7 -3.615,-2.231c-1.337,-1.191 -2.239,-2.663 -2.501,-3.113c-0.262,-0.45 -0.029,-0.693 0.197,-0.917c0.202,-0.202 0.45,-0.525 0.674,-0.787c0.224,-0.262 0.3,-0.45 0.45,-0.75c0.151,-0.3 0.075,-0.563 -0.038,-0.787c-0.113,-0.224 -1.012,-2.437 -1.387,-3.336c-0.364,-0.876 -0.736,-0.757 -1.012,-0.771c-0.262,-0.014 -0.562,-0.015 -0.861,-0.015c-0.3,0 -0.787,0.113 -1.198,0.563c-0.411,0.45 -1.573,1.537 -1.573,3.749c0,2.212 1.611,4.35 1.835,4.649c0.224,0.3 3.169,4.839 7.68,6.786c1.072,0.462 1.911,0.739 2.562,0.947c1.076,0.342 2.057,0.294 2.832,0.178c0.864,-0.129 2.66,-1.087 3.034,-2.136c0.375,-1.049 0.375,-1.95 0.262,-2.136c-0.111,-0.192 -0.41,-0.305 -0.861,-0.529z"
                            fill="#ffffff"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.youtube.com/channel/UCfsWoYIDhB7qrsSTkynSbaQ"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-400 transition hover:opacity-75 "
                  >
                    <span class="sr-only">Youtube</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-400 transition hover:opacity-75 "
                  >
                    <span class="sr-only">Dribbble</span>

                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div class=" flex justify-center  max-w-full w-full border-gray-100 bg-black font-poppins">
        <div class="sm:flex sm:items-center max-w-6xl w-full pt-2 mt-3 pb-3 items-center justify-between gap-48 px-6">
          <nav
            aria-label="Footer Navigation - Support"
            class="flex flex-col sm:flex-row gap-12"
          >
            <ul class="flex flex-wrap gap-4 text-sm">
              {/* <li>
                <Link
                  to="/terms-and-conditions"
                  class="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  class="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </Link>
              </li> */}
              {/* <li>
                <Link to="/" class="text-gray-500 transition hover:opacity-75">
                  Cookies
                </Link>
              </li> */}
            </ul>
          </nav>

          <p class="mt-8 text-sm text-gray-500 sm:mt-0">
            &copy; All rights reserved by One Ozo
          </p>
        </div>
      </div>

      {/* <BelowFooter /> */}
    </div>
  );
}
