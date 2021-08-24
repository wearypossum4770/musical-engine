<template>
  <div>
    <main id="main" class="disclaimer-desktop" style="">
      <header id="hero" class="disclaimer-desktop__header">
        <div class="u-container">
          <h1 class="disclaimer-desktop__header-h1">
            Official USPS<sup>®</sup><br />Change-of-Address
          </h1>
          <button id="get-started-btn" type="button" class="c-btn--ghost mb-9">
            Get Started
          </button>
        </div>
      </header>
      <div id="value-props" class="bg-gray-200">
        <div class="disclaimer-desktop__cta u-container py-0">
          <section class="disclaimer-desktop__cta-item">
            <img
              src="/img/_icon-change-of-address.f3923961.svg"
              alt="Change-of-Address"
              class="disclaimer-desktop__cta-icon"
            />
            <div class="disclaimer-desktop__cta-text">
              <h2 class="text-xl font-bold">Change your Address</h2>
              <p class="text-base">
                Update your address in minutes! Safe, simple, secure.
              </p>
            </div>
          </section>
          <section class="disclaimer-desktop__cta-item">
            <img
              src="/img/_icon-savings.037a67ca.svg"
              alt="Savings"
              class="disclaimer-desktop__cta-icon"
            />
            <div class="disclaimer-desktop__cta-text">
              <h2 class="text-xl font-bold">Unlock Instant Savings</h2>
              <p class="text-base">
                Immediate access to over $750 in exclusive mover’s coupons and
                savings.
              </p>
            </div>
          </section>
          <section class="disclaimer-desktop__cta-item">
            <img
              src="/img/_icon-mymove.08cd5eec.svg"
              alt="MYMOVE"
              class="disclaimer-desktop__cta-icon"
            />
            <div class="disclaimer-desktop__cta-text">
              <h2 class="text-xl font-bold">Get Even More at MYMOVE</h2>
              <p class="text-base">
                Begin your Voter Registration update and/or access even more
                special offers.
              </p>
            </div>
          </section>
        </div>
      </div>
      <form novalidate="novalidate" class="u-container pb-0">
        <div class="c-progress-bar">
          <div class="c-progress-bar__step c-progress-bar__step--active">
            <div class="c-progress-bar__copy invisible lg:visible">
              Step: 1 of 5
            </div>
          </div>
          <div class="c-progress-bar__step"><!----></div>
          <div class="c-progress-bar__step"><!----></div>
          <div class="c-progress-bar__step"><!----></div>
          <div class="c-progress-bar__step"><!----></div>
        </div>
        <section id="exp-inline-choice"></section>
        <section id="get-started" class="flex py-8">
          <div class="w-1/2 max:pr-xl">
            <h3 id="step-heading" class="mb-4">
              Step 1: <span class="font-bold">Who is Moving</span>
            </h3>
            <div class="flex flex-no-wrap">
              <div class="mr-6 c-input-radio-button">
                <input
                  v-on:keyup.enter="handleKeyDown"
                  tabindex="0"
                  id="mover-type-individual"
                  type="radio"
                  name="mover-type"
                  class="c-input-radio-button__field"
                  value="INDIVIDUAL"
                  style="pointer-events: none"
                /><svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 64 64"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="mb-5 mx-auto"
                >
                  <title>Individual</title>
                  <desc>An individual mover</desc>
                  <defs>
                    <polygon
                      points="1.60353175e-15 0 64 0 64 64 1.60353175e-15 64"
                    ></polygon>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g>
                      <mask fill="white"><use xlink:href="#path-1"></use></mask>
                      <g></g>
                      <path
                        d="M52.752,47.2128 C50.2272,40.3648 45.4624,38.1088 41.6032,36.5088 C44.0256,33.1008 44.7392,27.712 44.7392,24.7968 C44.7392,17.7728 39.0272,12.0576 31.9968,12.0576 C24.9632,12.0576 19.2448,17.7728 19.2448,24.7968 L19.2512,24.7968 C19.2512,27.712 19.9648,33.1008 22.384,36.5088 C18.5344,38.1088 13.7664,40.3648 11.2384,47.2 C8.1088,42.9376 6.2528,37.6832 6.2528,31.9968 C6.2528,17.8048 17.8016,6.2464 32,6.2464 C46.1984,6.2464 57.7472,17.8048 57.7472,31.9968 C57.7472,37.6832 55.888,42.944 52.752,47.2128 M15.3984,51.6608 C16.9632,44.4224 20.8608,42.8 24.976,41.1136 C25.3888,40.9376 25.7984,40.768 26.1984,40.5984 L27.0592,40.2304 L27.7472,38.8992 L27.7472,34.4576 L27.3984,34.24 C25.9008,33.3408 24.4896,28.7584 24.4896,24.7968 C24.4896,20.6592 27.8528,17.2864 31.9968,17.2864 C36.1344,17.2864 39.504,20.6592 39.504,24.7968 C39.504,28.7584 38.0896,33.3408 36.5984,34.24 L36.1536,34.5024 L36.1536,38.7264 L36.9344,40.2304 L37.7984,40.6048 C38.1952,40.768 38.6048,40.9344 39.008,41.1136 C43.1296,42.8 47.0272,44.4224 48.5984,51.6704 C44.1088,55.4528 38.3168,57.7472 32,57.7472 C25.6768,57.7472 19.8848,55.4528 15.3984,51.6608 M32,0 C14.352,0 0,14.3488 0,31.9968 C0,49.6512 14.352,64 32,64 C49.6448,64 64,49.6512 64,31.9968 C64,14.3488 49.6448,0 32,0"
                        fill="#999999"
                        mask="url(#mask-2)"
                      ></path>
                    </g>
                  </g></svg
                ><label
                  for="mover-type-individual"
                  class="c-input-radio-button__label c-input-label"
                >
                  Individual
                </label>
              </div>
              <div class="mr-6 c-input-radio-button">
                <input
                  v-on:keyup.enter="handleKeyDown"
                  tabindex="0"
                  id="mover-type-family"
                  type="radio"
                  name="mover-type"
                  class="c-input-radio-button__field"
                  value="FAMILY"
                  style="pointer-events: none"
                /><svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 64 64"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="mb-5 mx-auto"
                >
                  <title>Family</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <polygon
                      points="0.0446511628 0.498261181 63.4939535 0.498261181 63.4939535 63.0153846 0.0446511628 63.0153846"
                    ></polygon>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="#999999"
                    fill-rule="evenodd"
                  >
                    <g>
                      <g>
                        <mask fill="white">
                          <use xlink:href="#path-1"></use>
                        </mask>
                        <g></g>
                        <path
                          d="M31.7469767,0.498261181 C14.2132093,0.498261181 0,14.4928057 0,31.7568229 C0,49.0208401 14.2132093,63.0153846 31.7469767,63.0153846 C49.2822326,63.0153846 63.4939535,49.0208401 63.4939535,31.7568229 C63.4939535,14.4928057 49.2822326,0.498261181 31.7469767,0.498261181 M31.7469767,5.91611878 C46.2191628,5.91611878 57.9906977,17.5087513 57.9906977,31.7568229 C57.9906977,46.0048945 46.2191628,57.5960615 31.7469767,57.5960615 C17.2777674,57.5960615 5.50325581,46.0048945 5.50325581,31.7568229 C5.50325581,17.5087513 17.2777674,5.91611878 31.7469767,5.91611878"
                          fill="#999999"
                          mask="url(#mask-2)"
                        ></path>
                      </g>
                      <path
                        d="M36.4368372,39.5560758 L34.1722791,36.652239 C35.2193488,35.7429123 35.9821395,35.537746 36.8275349,35.169912 L36.8275349,34.2576544 L41.0612093,34.2576544 L41.0612093,38.0715506 L39.7916279,38.2796479 C37.6989767,38.5705445 37.1140465,38.967688 36.4368372,39.5560758"
                        fill="#999999"
                      ></path>
                      <path
                        d="M56.7493953,45.479522 L53.8173023,46.7207785 C53.8753488,46.1814841 54.1596279,39.7605095 47.8586047,38.2474075 L46.9871628,37.9315979 L46.9871628,34.2576544 L49.5270698,34.2576544 L49.5270698,35.3186576 C55.4530233,37.4641116 57.0842791,42.8042991 56.7493953,45.479522"
                        fill="#999999"
                      ></path>
                      <path
                        d="M49.2011163,36.5437939 L46.9856744,34.2576544 C48.2552558,32.8867034 49.312,29.2076308 49.312,27.4182869 C49.312,23.8381338 46.9551628,20.9255041 44.0587907,20.9255041 C41.1616744,20.9255041 38.8055814,23.8381338 38.8055814,27.4182869 C38.8055814,29.1731921 39.9583256,32.9621753 41.0604651,34.2576544 L38.1700465,36.9064987 C36.7702326,35.2644351 35.3495814,30.2451864 35.3495814,27.4182869 C35.3495814,21.962327 39.2565581,17.5226733 44.0587907,17.5226733 C48.8602791,17.5226733 52.7672558,21.962327 52.7672558,27.4182869 C52.7672558,30.4562147 50.6783256,34.9478927 49.2011163,36.5437939"
                        fill="#999999"
                      ></path>
                      <path
                        d="M6.35609302,46.7207785 C6.26902326,43.5260451 8.32818605,37.1299835 16.4978605,34.704624 L16.4941395,33.132903 L19.9501395,33.1233775 L19.9605581,37.3703213 L18.6143256,37.6729417 C9.72725581,39.6711156 9.80837209,46.5632401 9.81060465,46.6335828 L6.35609302,46.7207785"
                        fill="#999999"
                      ></path>
                      <path
                        d="M22.5704186,13.349736 C16.9495814,13.349736 12.3795349,18.5646254 12.3795349,24.9738762 C12.3795349,28.3759742 14.8792558,33.2845796 16.7114419,35.4080515 L19.8556279,33.1277739 C18.4692093,31.4651936 15.959814,27.2534211 15.959814,24.9738762 C15.959814,20.5093095 18.9253953,16.8763993 22.5704186,16.8763993 C26.2154419,16.8763993 29.1802791,20.5093095 29.1802791,24.9738762 C29.1802791,26.9537317 27.5668837,30.9530104 26.2556279,32.8339463 L29.9929302,32.8449374 C31.2766512,31.3032587 32.7613023,28.7115678 32.7613023,24.9738762 C32.7613023,18.5646254 28.1912558,13.349736 22.5704186,13.349736"
                        fill="#999999"
                      ></path>
                      <path
                        d="M22.4342326,57.5960615 L19.048186,57.5960615 L19.048186,52.8618476 C19.048186,50.6870841 20.7412093,46.2393703 24.9741395,44.4375699 L24.9741395,43.8337946 L28.4234419,43.8257345 L28.4271628,47.0768887 L27.3428837,47.3795091 C22.184186,48.5386991 22.4342326,52.3577245 22.4342326,52.7907721 L22.4342326,57.5960615"
                        fill="#999999"
                      ></path>
                      <path
                        d="M38.6143256,57.9895413 L38.5406512,52.7731864 L38.5525581,52.6647413 C38.5897674,52.275658 38.7810233,48.6537388 33.6267907,47.5136 L32.3423256,47.2278326 L32.1934884,44.1884394 L35.6450233,44.025039 L35.6710698,44.5408859 C41.1140465,46.301653 42.2154419,50.6460508 41.9988837,52.9380522 L42.0695814,57.9426462 L38.6143256,57.9895413"
                        fill="#999999"
                      ></path>
                      <path
                        d="M26.2243721,45.774815 C24.9778605,44.4302426 23.1702326,40.9702583 23.1702326,38.6071814 C23.1702326,34.2525252 26.292093,30.7119399 30.1276279,30.7119399 C33.8567442,30.7119399 36.8461395,34.0737374 37.0820465,38.533175 C37.1795349,40.3335098 36.392186,42.7053796 34.7430698,45.5828379 L32.2344186,44.1884394 C34.039814,41.0420665 34.2466977,39.3875463 34.208,38.6819206 C34.0517209,35.7546361 32.2969302,33.5476322 30.1276279,33.5476322 C27.8794419,33.5476322 26.0509767,35.8169188 26.0509767,38.6071814 C26.0509767,40.1092923 27.4634419,42.9054168 28.3527442,43.8623714 L26.2243721,45.774815"
                        fill="#999999"
                      ></path>
                    </g>
                  </g></svg
                ><label
                  for="mover-type-family"
                  class="c-input-radio-button__label c-input-label"
                >
                  Family
                </label>
              </div>
              <div class="c-input-radio-button">
                <input
                  v-on:keyup.enter="handleKeyDown"
                  tabindex="0"
                  id="mover-type-business"
                  type="radio"
                  name="mover-type"
                  class="c-input-radio-button__field"
                  value="BUSINESS"
                  style="pointer-events: none"
                /><svg
                  width="70px"
                  height="60px"
                  viewBox="0 0 64 54"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="mb-5 mx-auto"
                >
                  <title>Business</title>
                  <desc>Business</desc>
                  <defs>
                    <polygon
                      points="0.0446511628 0.263405769 63.4924651 0.263405769 63.4924651 47.3538462 0.0446511628 47.3538462"
                    ></polygon>
                  </defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g>
                      <path
                        d="M42.3896104,9.13846154 L39.0259997,9.13846154 L39.0259997,3.31102629 L24.1420958,3.31102629 L24.1420958,9.13846154 L20.7792208,9.13846154 L20.7792208,2.42079411 C20.7792208,1.08580801 21.8798248,0 23.2364517,0 L39.9338509,0 C41.287535,0 42.3896104,1.08580801 42.3896104,2.42079411 L42.3896104,9.13846154"
                        fill="#999999"
                      ></path>
                      <g transform="translate(0.000000, 6.646154)">
                        <mask fill="white">
                          <use xlink:href="#path-1"></use>
                        </mask>
                        <g></g>
                        <path
                          d="M57.0649302,24.6143813 L57.0649302,41.9429293 L6.42827907,41.9429293 L6.42827907,24.6143813 L2.72,24.6143813 C2.05693023,24.6143813 1.45562791,24.370213 0.985302326,23.9758442 L0.985302326,44.6480178 C0.985302326,46.1418837 2.2027907,47.3538462 3.7067907,47.3538462 L59.7856744,47.3538462 C61.2889302,47.3538462 62.5071628,46.1418837 62.5071628,44.6480178 L62.5071628,23.9758442 C62.0346047,24.370213 61.4355349,24.6143813 60.7709767,24.6143813 L57.0649302,24.6143813"
                          fill="#999999"
                          mask="url(#mask-2)"
                        ></path>
                        <path
                          d="M60.7709767,0.263405769 L2.72148837,0.263405769 C1.21823256,0.263405769 0,1.47610817 0,2.96997404 L0,21.9070731 C0,22.7424245 0.38772093,23.4793687 0.985302326,23.9758442 C1.45562791,24.370213 2.05693023,24.6136413 2.72148837,24.6136413 L27.6293953,24.6136413 L27.6293953,20.7646615 C27.6293953,20.5019957 27.7484651,20.2696659 27.9285581,20.1039274 L4.53655814,20.1039274 L4.53655814,4.77385962 L58.9566512,4.77385962 L58.9566512,20.1039274 L35.563907,20.1039274 C35.744,20.2696659 35.8630698,20.5019957 35.8630698,20.7646615 L35.8630698,24.6136413 L60.7709767,24.6136413 C61.4355349,24.6136413 62.036093,24.370213 62.5071628,23.9758442 C63.1047442,23.4793687 63.4924651,22.7424245 63.4924651,21.9070731 L63.4924651,2.96997404 C63.4924651,1.47610817 62.2757209,0.263405769 60.7709767,0.263405769"
                          fill="#999999"
                          mask="url(#mask-2)"
                        ></path>
                      </g>
                      <path
                        d="M28.9667088,32.6260975 L35.0310043,32.6260975 L35.0310043,28.0207852 L28.9667088,28.0207852 L28.9667088,32.6260975 Z M35.5478606,34.8923077 L28.7128545,34.8923077 C27.5457349,34.8923077 26.5974026,33.9848031 26.5974026,32.8702855 L26.5974026,27.7773262 C26.5974026,26.6606218 27.5457349,25.7538462 28.7128545,25.7538462 L35.2879078,25.7538462 C36.4535028,25.7538462 37.4025974,26.6606218 37.4025974,27.7773262 L37.4025974,33.1203048 C37.4025974,34.0955989 36.5701385,34.8923077 35.5478606,34.8923077 L35.5478606,34.8923077 Z"
                        fill="#999999"
                      ></path>
                    </g>
                  </g></svg
                ><label
                  for="mover-type-business"
                  class="c-input-radio-button__label c-input-label"
                >
                  Business
                </label>
              </div>
            </div>
            <!----><!----><!---->
          </div>
          <div class="w-1/2 pl-xl">
            <h3 class="font-bold mb-4">More Information</h3>
            <p>
              Select an option to let us know which type of move you're making
              with this change-of-address. If you're unsure, select an option
              for more information about that type of move.
            </p>
            <!----><!----><!---->
          </div>
        </section>
        <div class="c-hairline"></div>
        <section class="flex py-8">
          <div class="w-1/2 max:pr-xl">
            <h3 class="font-bold mb-4">What is your contact information?</h3>
            <div class="c-input-text mt-5">
              <label for="first-name" class="c-input-text__label c-input-label"
                >First Name</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="first-name"
                placeholder="First Name"
                name="first-name"
                autocomplete="on"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="first-name-error"
                class="c-input-text__helper c-input-helper"
              ></p>
            </div>
            <div class="c-input-text mt-5">
              <label
                for="middle-initial"
                class="c-input-text__label c-input-label"
                >Middle Name or Initial</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="middle-initial"
                placeholder="Middle Name or Initial"
                name="middle-initial"
                autocomplete="on"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="middle-initial-error"
                class="c-input-text__helper c-input-helper"
              ></p>
            </div>
            <div class="c-input-text mt-5">
              <label for="last-name" class="c-input-text__label c-input-label"
                >Last Name</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="last-name"
                tabindex="0"
                placeholder="Last Name"
                name="last-name"
                autocomplete="on"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="last-name-error"
                class="c-input-text__helper c-input-helper"
              ></p>
            </div>
            <div
              class="c-input-dropdown mt-5 c-input-dropdown--labeled"
              label="Suffix"
              name="suffix"
              value=""
            >
              <label for="suffix" class="c-input-dropdown__label">Suffix</label>
              <div class="relative flex flex-col">
                <select
                  tabindex="0"
                  v-on:keyup.enter="handleKeyDown"
                  id="suffix"
                  name="suffix"
                  class="c-input-dropdown__field"
                >
                  <option value="" aria-describedby="suffix-field">
                    Select
                  </option>
                  <option value="ATTY">ATTY</option>
                  <option value="CEO">CEO</option>
                  <option value="CFO">CFO</option>
                  <option value="CIO">CIO</option>
                  <option value="CPA">CPA</option>
                  <option value="DC">DC</option>
                  <option value="DDS">DDS</option>
                  <option value="DMD">DMD</option>
                  <option value="DO">DO</option>
                  <option value="DVM">DVM</option>
                  <option value="ESQ">ESQ</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="JR">JR</option>
                  <option value="MD">MD</option>
                  <option value="PHD">PHD</option>
                  <option value="PRES">PRES</option>
                  <option value="RET">RET</option>
                  <option value="SR">SR</option>
                  <option value="VP">VP</option></select
                ><img
                  src="/img/_icon-chevron.edfd0894.svg"
                  aria-hidden="true"
                  class="c-input-dropdown__chevron"
                />
              </div>
              <p id="suffix-error" class="c-input-dropdown__helper"></p>
            </div>
            <div class="c-input-text mt-5">
              <label for="email" class="c-input-text__label c-input-label"
                >Email Address</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="email"
                placeholder="Hello@mail.com"
                name="email"
                autocomplete="on"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="email-error"
                class="c-input-text__helper c-input-helper"
              ></p>
            </div>
            <div class="c-input-text mt-5">
              <label
                for="email-confirm"
                class="c-input-text__label c-input-label"
                >Confirm Email Address</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="email-confirm"
                placeholder="Hello@mail.com"
                name="email-confirm"
                autocomplete="on"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="email-confirm-error"
                class="c-input-text__helper c-input-helper"
              >
                <span> </span>
              </p>
            </div>
            <p class="mt-5">
              We use your email address to send your transaction confirmation or
              send a one-time reminder email if you do not successfully complete
              your transaction. To opt-out of the one-time email,
              <button type="button" class="c-link">click here</button>.
            </p>
            <div class="flex mt-5">
              <div class="w-1/2 mr-3">
                <div class="c-input-text">
                  <label for="phone" class="c-input-text__label c-input-label"
                    >Phone Number</label
                  ><input
                    v-on:keyup.enter="handleKeyDown"
                    id="phone"
                    placeholder="(000) 000-0000"
                    name="phone"
                    type="tel"
                    maxlen="10"
                    class="c-input-text__field c-input-field"
                  />
                  <p
                    id="phone-error"
                    class="c-input-text__helper c-input-helper"
                  ></p>
                </div>
              </div>
              <div class="w-1/2 ml-3">
                <div class="c-input-dropdown c-input-dropdown--labeled">
                  <label for="phone-type" class="c-input-dropdown__label"
                    >Phone Type</label
                  >
                  <div class="relative flex flex-col">
                    <select
                      id="phone-type"
                      name="phone-type"
                      autocomplete="on"
                      class="c-input-dropdown__field"
                    >
                      <option value="MOBILE">Mobile</option>
                      <option value="HOME">Home</option>
                      <!----></select
                    ><img
                      src="/img/_icon-chevron.edfd0894.svg"
                      aria-hidden="true"
                      class="c-input-dropdown__chevron"
                    />
                  </div>
                  <p id="phone-type-error" class="c-input-dropdown__helper"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-xl">
            <p><strong>First Name (or Initial)</strong></p>
            <p class="mb-5">Enter your first name or initial.</p>
            <p><strong>Middle Name (or Initial)</strong></p>
            <p class="mb-5">Enter your middle name or initial.</p>
            <p><strong>Last name</strong></p>
            <p>
              Fill in only one last name. If anyone with the same last name is
              moving to a different address, use a separate Change-of-Address
              for each person.
            </p>
          </div>
          <!----><!---->
        </section>
        <div class="c-hairline"></div>
        <section class="flex py-8">
          <div class="w-1/2 max:pr-xl">
            <h3 class="font-bold mb-5">What type of move is this?</h3>
            <div class="flex flex-no-wrap">
              <div class="mr-6 c-input-radio-button">
                <input
                  v-on:keyup.enter="handleKeyDown"
                  tabindex="0"
                  id="forward-type-permanent"
                  type="radio"
                  name="forward-type"
                  class="c-input-radio-button__field"
                  value="PERMANENT"
                  style="pointer-events: none"
                /><svg
                  width="57px"
                  height="60px"
                  viewBox="0 0 28 33"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="mb-5 mx-auto"
                >
                  <title>Group 13</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(-94.000000, -321.000000)"
                  >
                    <g
                      transform="translate(34.000000, 263.000000)"
                      fill="#999999"
                    >
                      <g transform="translate(0.000000, 25.000000)">
                        <g transform="translate(60.000000, 33.000000)">
                          <path
                            d="M21.473,20.7252 C20.245,20.7252 19.018,21.1922 18.083,22.1272 C17.179,23.0322 16.68,24.2352 16.68,25.5152 C16.68,26.7942 17.18,27.9972 18.086,28.9032 C19.953,30.7712 22.994,30.7712 24.862,28.9032 C26.73,27.0352 26.73,23.9952 24.862,22.1272 C23.928,21.1922 22.701,20.7252 21.473,20.7252 M21.473,32.0342 C19.803,32.0342 18.133,31.3982 16.862,30.1272 C15.629,28.8952 14.95,27.2572 14.95,25.5152 C14.949,23.7732 15.628,22.1362 16.86,20.9032 C19.404,18.3602 23.543,18.3592 26.086,20.9032 C28.628,23.4462 28.628,27.5832 26.086,30.1272 C24.814,31.3982 23.143,32.0342 21.473,32.0342"
                          ></path>
                          <path
                            d="M26.7320274,13.224 L15.7450274,0.912 C15.2280274,0.331 14.4880274,0 13.7110274,0 L13.6710274,0 C12.8790274,0.012 12.1320274,0.367 11.6240274,0.972 L9.63502745,3.334 L6.68202745,3.334 C5.17602745,3.334 3.95502745,4.555 3.95502745,6.062 L3.95502745,9.808 L0.755027449,13.157 C0.00102744883,13.946 -0.208972551,15.11 0.219027449,16.114 C0.636027449,17.089 1.58002745,17.733 2.63502745,17.768 L2.63502745,25.487 C2.63502745,26.994 3.85602745,28.216 5.36402745,28.216 L14.0930274,28.216 C13.7800274,27.361 13.6080274,26.453 13.6080274,25.516 C13.6080274,23.592 14.3010274,21.778 15.5590274,20.345 L15.5590274,18.92 L10.9900274,18.92 L10.9900274,25.487 L5.36402745,25.487 L5.36402745,15.04 L2.72802745,15.04 L6.68202745,10.902 L6.68202745,6.062 L9.75602745,6.062 L9.75602745,7.428 L13.7110274,2.729 L24.6950274,15.04 L22.0600274,15.04 L22.0600274,17.683 C22.9960274,17.753 23.9200274,17.992 24.7880274,18.394 L24.7880274,17.768 C25.8260274,17.733 26.7580274,17.111 27.1860274,16.157 C27.6260274,15.176 27.4470274,14.027 26.7320274,13.224"
                          ></path>
                          <polygon
                            points="21.2215 27.5372 19.1115 25.5762 20.0435 24.5742 21.1195 25.5742 23.1695 23.2282 24.1995 24.1292"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g></svg
                ><label
                  for="forward-type-permanent"
                  class="c-input-radio-button__label c-input-label"
                >
                  Permanent
                </label>
              </div>
              <div class="mr-6 c-input-radio-button">
                <input
                  v-on:keyup.enter="handleKeyDown"
                  tabindex="0"
                  id="forward-type-temporary"
                  type="radio"
                  name="forward-type"
                  class="c-input-radio-button__field"
                  value="TEMPORARY"
                  style="pointer-events: none"
                /><svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 27 27"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="mb-5 mx-auto"
                >
                  <title>Temporary Move</title>
                  <desc>Temporary Move</desc>
                  <defs></defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(-254.000000, -323.000000)"
                  >
                    <g
                      transform="translate(34.000000, 263.000000)"
                      fill="#999999"
                    >
                      <g transform="translate(0.000000, 25.000000)">
                        <g transform="translate(186.000000, 35.000000)">
                          <g transform="translate(34.000000, 0.000000)">
                            <path
                              d="M13.504379,3.58182226 C10.9627194,3.58182226 8.42226771,4.54861668 6.48823865,6.4846225 C4.61461025,8.36020366 3.58296701,10.8509078 3.58296701,13.501133 C3.58296701,16.1501497 4.61702627,18.6420623 6.49186269,20.5176434 C10.3587128,24.3872381 16.6512533,24.3860296 20.5205194,20.5176434 C24.3861615,16.6492573 24.3861615,10.3530087 20.5205194,6.4846225 C18.5864904,4.54982517 16.0460387,3.58182226 13.504379,3.58182226 M13.5055871,27 C10.0470454,27 6.59091977,25.6851596 3.95986712,23.0518533 C1.40733532,20.5007245 0.00120801315,17.1084846 0,13.501133 C0,9.8937813 1.40371128,6.50274989 3.95503507,3.95041263 C9.2207644,-1.31619995 17.7892017,-1.31740844 23.052515,3.95041263 C28.3158283,9.21581672 28.3158283,17.7852407 23.052515,23.0518533 C20.4214624,25.6839511 16.9629207,27 13.5055871,27"
                            ></path>
                            <path
                              d="M17.9330476,11.4988438 C17.7920922,11.2444758 17.4385291,11.1461973 17.1824601,11.2849435 L14.297573,12.8481501 L13.858262,7.57117163 C13.8335948,7.26593011 13.5892721,7.02774923 13.226312,7 C12.8997653,7 12.6237276,7.2520555 12.5978858,7.57117163 L12.0035239,14.6934738 C11.9988254,14.7547533 11.9988254,14.8241264 12.0035239,14.8888746 C12.0552075,15.5120761 12.5943619,16 13.2298358,16 C13.2380582,16 13.2474553,15.9988438 13.2556777,15.9988438 C13.2627254,15.9988438 13.2697732,16 13.276821,16 C13.2944404,16 13.3097106,15.9965313 13.32733,15.9953751 L13.3296792,15.9953751 L13.3308539,15.9953751 C13.6303841,15.9826567 13.9134695,15.8670349 14.1319504,15.6612282 L17.8320296,12.1509507 C18.0093984,11.9809866 18.0516851,11.7139003 17.9330476,11.4988438"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g></svg
                ><label
                  for="forward-type-temporary"
                  class="c-input-radio-button__label c-input-label"
                >
                  Temporary
                </label>
              </div>
            </div>
            <!---->
          </div>
          <div class="w-1/2 pl-xl">
            <h3 class="font-bold mb-4">More Information</h3>
            <p>
              Choose an option to let us know which type of move you're making
              with this change-of-address. If you're unsure, select an option
              for more information about that type of move.
            </p>
            <!----><!---->
          </div>
        </section>
        <div class="c-hairline"></div>
        <section class="flex py-8">
          <div class="w-1/2 max:pr-xl">
            <h3 class="font-bold mb-5">
              When should we start forwarding mail to your new address?
            </h3>
            <div class="c-input-datepicker mt-3">
              <label for="forward-start-date" class="c-input-datepicker__label"
                >Mail Forwarding Date</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="forward-start-date"
                name="forward-start-date"
                maxlength="10"
                placeholder="mm/dd/yyyy"
                type="text"
                autocomplete="off"
                class="c-input-datepicker__field"
              /><img
                src="/img/_icon-calendar.0b8bd18a.svg"
                aria-hidden="true"
                class="c-input-datepicker__icon"
              />
              <p
                id="forward-start-date-error"
                class="c-input-datepicker__helper"
              >
                <span> </span>
              </p>
              <!---->
            </div>
            <!---->
          </div>
          <div class="w-1/2 pl-xl">
            Enter the date you'd like us to begin forwarding your mail to your
            new address. The date you enter must not be more than 30 days prior
            to today, or more than 3 months from today. Mail should arrive at
            your new address 7-10 postal business days after your move effective
            date OR your file date, whichever date is later.
            <p class="mt-4">
              The minimum length for filing a temporary change-of-address is 15
              days.
            </p>
            <p class="mt-4">
              The initial forwarding period is restricted to 6 months, but can
              be extended up to 1 year.
            </p>
          </div>
        </section>
        <div class="c-hairline"></div>
        <section class="flex py-8 c-hairline-after">
          <div class="w-1/2 max:pr-xl">
            <h3 class="font-bold">What's your old address?</h3>
            <div class="c-input-text mt-5">
              <label
                for="old-zip-code"
                class="c-input-text__label c-input-label"
                >ZIP Code™</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="old-zip-code"
                name="45f310bf-d978-4c87-975f-02163d4c8868"
                placeholder="00000"
                autocomplete="45f310bf-d978-4c87-975f-02163d4c8868"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="old-zip-code-error"
                class="c-input-text__helper c-input-helper"
              ></p>
              <!----><a
                href="https://tools.usps.com/go/ZipLookupAction_input"
                rel="noopener noreferrer"
                target="_blank"
                class="c-link block mt-2 text-base"
                >I don't know my ZIP Code<sup>™</sup></a
              >
            </div>
            <div
              class="c-input-text mt-5"
              label="City"
              placeholder="City"
              name="old-city"
              value=""
            >
              <label for="old-city" class="c-input-text__label c-input-label"
                >City</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="old-city"
                placeholder="City"
                name="aea6c593-0c0e-4f88-9502-de8c45c84990"
                autocomplete="aea6c593-0c0e-4f88-9502-de8c45c84990"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="old-city-error"
                class="c-input-text__helper c-input-helper"
              ></p>
              <!---->
            </div>
            <div
              class="c-input-dropdown mt-5 c-input-dropdown--labeled"
              label="State"
              name="old-state"
              value=""
            >
              <label for="old-state" class="c-input-dropdown__label"
                >State</label
              >
              <div class="relative flex flex-col">
                <select
                  id="old-state"
                  name="9d47790e-67aa-404a-b89a-0fdfe7e3a1e8"
                  autocomplete="9d47790e-67aa-404a-b89a-0fdfe7e3a1e8"
                  class="c-input-dropdown__field"
                >
                  <option value="">State</option>
                  <option value="AK">Alaska (AK)</option>
                  <option value="AL">Alabama (AL)</option>
                  <option value="AR">Arkansas (AR)</option>
                  <option value="AZ">Arizona (AZ)</option>
                  <option value="CA">California (CA)</option>
                  <option value="CO">Colorado (CO)</option>
                  <option value="CT">Connecticut (CT)</option>
                  <option value="DC">District of Columbia (DC)</option>
                  <option value="DE">Delaware (DE)</option>
                  <option value="FL">Florida (FL)</option>
                  <option value="GA">Georgia (GA)</option>
                  <option value="HI">Hawaii (HI)</option>
                  <option value="IA">Iowa (IA)</option>
                  <option value="ID">Idaho (ID)</option>
                  <option value="IL">Illinois (IL)</option>
                  <option value="IN">Indiana (IN)</option>
                  <option value="KS">Kansas (KS)</option>
                  <option value="KY">Kentucky (KY)</option>
                  <option value="LA">Louisiana (LA)</option>
                  <option value="MA">Massachusetts (MA)</option>
                  <option value="MD">Maryland (MD)</option>
                  <option value="ME">Maine (ME)</option>
                  <option value="MI">Michigan (MI)</option>
                  <option value="MN">Minnesota (MN)</option>
                  <option value="MO">Missouri (MO)</option>
                  <option value="MS">Mississippi (MS)</option>
                  <option value="MT">Montana (MT)</option>
                  <option value="NC">North Carolina (NC)</option>
                  <option value="ND">North Dakota (ND)</option>
                  <option value="NE">Nebraska (NE)</option>
                  <option value="NH">New Hampshire (NH)</option>
                  <option value="NJ">New Jersey (NJ)</option>
                  <option value="NM">New Mexico (NM)</option>
                  <option value="NV">Nevada (NV)</option>
                  <option value="NY">New York (NY)</option>
                  <option value="OH">Ohio (OH)</option>
                  <option value="OK">Oklahoma (OK)</option>
                  <option value="OR">Oregon (OR)</option>
                  <option value="PA">Pennsylvania (PA)</option>
                  <option value="RI">Rhode Island (RI)</option>
                  <option value="SC">South Carolina (SC)</option>
                  <option value="SD">South Dakota (SD)</option>
                  <option value="TN">Tennessee (TN)</option>
                  <option value="TX">Texas (TX)</option>
                  <option value="UT">Utah (UT)</option>
                  <option value="VA">Virginia (VA)</option>
                  <option value="VT">Vermont (VT)</option>
                  <option value="WA">Washington (WA)</option>
                  <option value="WI">Wisconsin (WI)</option>
                  <option value="WV">West Virginia (WV)</option>
                  <option value="WY">Wyoming (WY)</option>
                  <option disabled="disabled">--------------</option>
                  <option value="AA">Armed Forces (the) Americas (AA)</option>
                  <option value="AE">Armed Forces Europe (AE)</option>
                  <option value="AP">Armed Forces Pacific (AP)</option>
                  <option disabled="disabled">--------------</option>
                  <option value="AS">American Samoa (AS)</option>
                  <option value="FM">
                    Federated States of Micronesia (FM)
                  </option>
                  <option value="GU">Guam (GU)</option>
                  <option value="MH">Marshall Islands (MH)</option>
                  <option value="MP">Northern Mariana Islands (MP)</option>
                  <option value="PW">Palau (PW)</option>
                  <option value="PR">Puerto Rico (PR)</option>
                  <option value="VI">Virgin Islands (VI)</option></select
                ><img
                  src="/img/_icon-chevron.edfd0894.svg"
                  aria-hidden="true"
                  class="c-input-dropdown__chevron"
                />
              </div>
              <p id="old-state-error" class="c-input-dropdown__helper"></p>
            </div>
            <div
              class="c-input-text mt-5"
              label="Street Address"
              name="old-street-address"
              placeholder="12345 Main Street"
              value=""
            >
              <label
                for="old-street-address"
                class="c-input-text__label c-input-label"
                >Street Address</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="old-street-address"
                placeholder="12345 Main Street"
                name="8d761e25-3fa8-4dff-85d4-daea6b8d0d0e"
                autocomplete="8d761e25-3fa8-4dff-85d4-daea6b8d0d0e"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="old-street-address-error"
                class="c-input-text__helper c-input-helper"
              ></p>
              <!---->
            </div>
            <!----><!---->
          </div>
          <div class="w-1/2 pl-xl">
            <p>
              This is the address you're moving from. Enter a valid address, and
              remember to include apartment/suite number if applicable.
            </p>
            <p class="mt-5">
              If your address is a PO Box, enter it in the Street Address field
              for example, PO Box 1001. Please note that Change-of-Address
              request from non-USPS Private Mail Boxes (PMB) cannot be
              processed.
            </p>
            <!---->
          </div>
        </section>
        <div class="c-hairline"></div>
        <section class="flex py-8">
          <div class="w-1/2 max:pr-xl">
            <h3 class="font-bold">What's your new address?</h3>
            <div class="c-input-text mt-5">
              <label
                for="new-zip-code"
                class="c-input-text__label c-input-label"
                >ZIP Code™</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="new-zip-code"
                name="878a123c-0694-4ff9-aea4-d11273669646"
                placeholder="00000"
                autocomplete="878a123c-0694-4ff9-aea4-d11273669646"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="new-zip-code-error"
                class="c-input-text__helper c-input-helper"
              ></p>
              <!----><a
                href="https://tools.usps.com/go/ZipLookupAction_input"
                rel="noopener noreferrer"
                target="_blank"
                class="c-link block mt-2 text-base"
                >I don't know my ZIP Code<sup>™</sup></a
              >
            </div>
            <div
              class="c-input-text mt-5"
              label="City"
              placeholder="City"
              name="new-city"
              value=""
            >
              <label for="new-city" class="c-input-text__label c-input-label"
                >City</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="new-city"
                placeholder="City"
                name="0b0872a0-5593-463d-8f1f-21ff099d840c"
                autocomplete="0b0872a0-5593-463d-8f1f-21ff099d840c"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="new-city-error"
                class="c-input-text__helper c-input-helper"
              ></p>
              <!---->
            </div>
            <div
              class="c-input-dropdown mt-5 c-input-dropdown--labeled"
              label="State"
              name="new-state"
              value=""
            >
              <label for="new-state" class="c-input-dropdown__label"
                >State</label
              >
              <div class="relative flex flex-col">
                <select
                  id="new-state"
                  name="a261e613-eeaa-4102-b700-f4975cdd5a77"
                  autocomplete="a261e613-eeaa-4102-b700-f4975cdd5a77"
                  class="c-input-dropdown__field"
                >
                  <option value="">State</option>
                  <option value="AK">Alaska (AK)</option>
                  <option value="AL">Alabama (AL)</option>
                  <option value="AR">Arkansas (AR)</option>
                  <option value="AZ">Arizona (AZ)</option>
                  <option value="CA">California (CA)</option>
                  <option value="CO">Colorado (CO)</option>
                  <option value="CT">Connecticut (CT)</option>
                  <option value="DC">District of Columbia (DC)</option>
                  <option value="DE">Delaware (DE)</option>
                  <option value="FL">Florida (FL)</option>
                  <option value="GA">Georgia (GA)</option>
                  <option value="HI">Hawaii (HI)</option>
                  <option value="IA">Iowa (IA)</option>
                  <option value="ID">Idaho (ID)</option>
                  <option value="IL">Illinois (IL)</option>
                  <option value="IN">Indiana (IN)</option>
                  <option value="KS">Kansas (KS)</option>
                  <option value="KY">Kentucky (KY)</option>
                  <option value="LA">Louisiana (LA)</option>
                  <option value="MA">Massachusetts (MA)</option>
                  <option value="MD">Maryland (MD)</option>
                  <option value="ME">Maine (ME)</option>
                  <option value="MI">Michigan (MI)</option>
                  <option value="MN">Minnesota (MN)</option>
                  <option value="MO">Missouri (MO)</option>
                  <option value="MS">Mississippi (MS)</option>
                  <option value="MT">Montana (MT)</option>
                  <option value="NC">North Carolina (NC)</option>
                  <option value="ND">North Dakota (ND)</option>
                  <option value="NE">Nebraska (NE)</option>
                  <option value="NH">New Hampshire (NH)</option>
                  <option value="NJ">New Jersey (NJ)</option>
                  <option value="NM">New Mexico (NM)</option>
                  <option value="NV">Nevada (NV)</option>
                  <option value="NY">New York (NY)</option>
                  <option value="OH">Ohio (OH)</option>
                  <option value="OK">Oklahoma (OK)</option>
                  <option value="OR">Oregon (OR)</option>
                  <option value="PA">Pennsylvania (PA)</option>
                  <option value="RI">Rhode Island (RI)</option>
                  <option value="SC">South Carolina (SC)</option>
                  <option value="SD">South Dakota (SD)</option>
                  <option value="TN">Tennessee (TN)</option>
                  <option value="TX">Texas (TX)</option>
                  <option value="UT">Utah (UT)</option>
                  <option value="VA">Virginia (VA)</option>
                  <option value="VT">Vermont (VT)</option>
                  <option value="WA">Washington (WA)</option>
                  <option value="WI">Wisconsin (WI)</option>
                  <option value="WV">West Virginia (WV)</option>
                  <option value="WY">Wyoming (WY)</option>
                  <option disabled="disabled">--------------</option>
                  <option value="AA">Armed Forces (the) Americas (AA)</option>
                  <option value="AE">Armed Forces Europe (AE)</option>
                  <option value="AP">Armed Forces Pacific (AP)</option>
                  <option disabled="disabled">--------------</option>
                  <option value="AS">American Samoa (AS)</option>
                  <option value="FM">
                    Federated States of Micronesia (FM)
                  </option>
                  <option value="GU">Guam (GU)</option>
                  <option value="MH">Marshall Islands (MH)</option>
                  <option value="MP">Northern Mariana Islands (MP)</option>
                  <option value="PW">Palau (PW)</option>
                  <option value="PR">Puerto Rico (PR)</option>
                  <option value="VI">Virgin Islands (VI)</option></select
                ><img
                  src="/img/_icon-chevron.edfd0894.svg"
                  aria-hidden="true"
                  class="c-input-dropdown__chevron"
                />
              </div>
              <p id="new-state-error" class="c-input-dropdown__helper"></p>
            </div>
            <div
              class="c-input-text mt-5"
              label="Street Address"
              name="new-street-address"
              placeholder="12345 Main Street"
              value=""
            >
              <label
                for="new-street-address"
                class="c-input-text__label c-input-label"
                >Street Address</label
              ><input
                v-on:keyup.enter="handleKeyDown"
                id="new-street-address"
                placeholder="12345 Main Street"
                name="820ba030-75ba-4a09-a5c2-ae872f445d53"
                autocomplete="820ba030-75ba-4a09-a5c2-ae872f445d53"
                type="text"
                class="c-input-text__field c-input-field"
              />
              <p
                id="new-street-address-error"
                class="c-input-text__helper c-input-helper"
              ></p>
              <!---->
            </div>
            <!----><!----><!---->
          </div>
          <div class="w-1/2 pl-xl">
            <p>
              This is the address you're moving to. Enter a valid address, and
              remember to include apartment/suite number if applicable.
            </p>
            <p class="mt-5">
              If your address is a PO Box, enter it in the Street Address field
              for example, PO Box 1001. Please note that Change-of-Address
              request from non-USPS Private Mail Boxes (PMB) cannot be
              processed.
            </p>
            <!---->
          </div>
        </section>
        <div class="c-hairline"></div>
        <!----><!---->
        <section class="py-8">
          <div class="w-2/3">
            <p class="mb-5">
              <strong>Privacy Act Statement:</strong> Your information will be
              used to provide mail forwarding and Change-of-Address (COA)
              services and move related advertisements, to verify your identity,
              to facilitate communication, to identify and mitigate potential
              fraud and to provide address correction services. Collection is
              authorized by 39 U.S.C. 401, 403, 404. Providing the information
              is voluntary, but if not supplied, we may not be able to process
              and fulfill your request for services.
              <button type="button" class="c-link">Show More</button>
            </p>
            <button id="next" class="c-btn">Next</button>
          </div>
        </section>
        <div class="c-hairline"></div>
      </form>
      <div class="flex flex-col mt-4 u-container--x">
        <details class="c-accordion">
          <summary class="c-accordion__summary">
            <div class="c-accordion__summary-content">
              <span>Payment Methods</span
              ><span class="c-accordion__icon c-accordion__icon--closed"></span>
            </div>
          </summary>
          <p>
            To complete the Online Change-of-Address you will need a valid email
            address as well as a valid credit or debit card for the $1.10
            charge.
          </p>
        </details>
        <details class="c-accordion mt-6">
          <summary class="c-accordion__summary">
            <div class="c-accordion__summary-content">
              <span>Preparer Information</span
              ><span class="c-accordion__icon c-accordion__icon--closed"></span>
            </div>
          </summary>
          <p>
            The person who prepares this form states that he or she is the
            person, executor, guardian, authorized officer, or agent of the
            person for whom mail would be forwarded under this order. Anyone
            submitting false or inaccurate information on this form is subject
            to punishment by fine or imprisonment or both under Sections 2,
            1001, 1702, and 1708 of Title 18, United States Code.
          </p>
        </details>
        <div class="flex mt-8">
          <a
            href="https://about.usps.com/who/legal/privacy-policy/full-privacy-policy.htm"
            target="_blank"
            rel="noopener noreferrer"
            class="c-link c-link--inline"
            >Privacy Policy</a
          ><a
            href="/mgo/terms-of-use"
            class="c-link c-link--inline ml-4"
            target="_blank"
            ><span>Terms of Use</span></a
          >
        </div>
      </div>
      <div class="w-screen mt-8 bg-blue-200">
        <div class="flex items-center u-container--x py-6">
          <div class="text-xl text-white mr-2">
            Want to
            <a
              id="view-edit-coac"
              href="https://coacdev01.imagitas.com"
              title="Official USPS Change of Address Correct Form"
              class="font-bold"
            >
              View, Edit, Cancel
            </a>
            or
            <a
              id="disputes-home"
              href="https://coacdev01.imagitas.com/mgoc/disputes"
              title="Official USPS Change of Address Disputes Form"
              class="font-bold"
            >
              Dispute
            </a>
            your USPS Change of Address®?
          </div>
          <a
            href="https://coacdev01.imagitas.com"
            title="Official USPS Change of Address Correct Form"
            class="not-sr-only"
            ><span class="red-arrow"></span
          ></a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    handleKeyDown(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped></style>
