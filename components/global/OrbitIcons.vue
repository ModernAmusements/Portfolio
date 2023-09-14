<template>
  <div class="orbit">
    <ul class="orbit-wrap">
      <li class="orbit-center">
        <i class="orbit-center__icon">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM25.459 74.7567C26.4616 75.5699 27.8743 75.9766 29.6973 75.9766C34.3913 75.9766 38.6523 74.8284 42.4805 72.5322C46.3086 70.2359 49.3164 67.1264 51.5039 63.2036C53.737 59.2329 54.8535 54.8557 54.8535 50.0718C54.8535 45.3357 53.737 40.9824 51.5039 37.0117C49.3164 32.9932 46.3086 29.8359 42.4805 27.5396C38.6523 25.1955 34.3913 24.0234 29.6973 24.0234C27.9655 24.0234 26.5983 24.454 25.5957 25.3151C24.6387 26.1284 24.1602 27.2765 24.1602 28.7595C24.1602 30.386 24.6842 31.6538 25.7324 32.5627C26.8262 33.4238 28.3073 33.8543 30.1758 33.8543C33.0013 33.8543 35.5762 34.548 37.9004 35.9353C40.2246 37.3227 42.0703 39.2602 43.4375 41.7478C44.8047 44.2354 45.4883 47.0101 45.4883 50.0718C45.4883 53.0378 44.8047 55.7407 43.4375 58.1805C42.1159 60.6203 40.2474 62.5577 37.832 63.9929C35.4622 65.4281 32.7962 66.1457 29.834 66.1457C28.0111 66.1457 26.5755 66.6001 25.5273 67.5091C24.5247 68.3702 24.0234 69.5901 24.0234 71.1687C24.0234 72.6996 24.502 73.8956 25.459 74.7567ZM52.1191 67.9396C51.2533 68.8007 50.8203 69.8532 50.8203 71.097C50.8203 72.3408 51.2533 73.4411 52.1191 74.3979C52.985 75.3068 54.0104 75.7613 55.1953 75.7613H75.9766V55.2384C75.9766 53.6597 75.498 52.368 74.541 51.3634C73.6296 50.311 72.4447 49.7608 70.9863 49.713C69.528 49.713 68.3203 50.2392 67.3633 51.2917C66.4062 52.3441 65.9277 53.6836 65.9277 55.3101V66.5762H55.1953C54.0104 66.5762 52.985 67.0307 52.1191 67.9396Z"
              fill="#fff"
            />
            <defs>
              <linearGradient>
                <stop stop-color="#f9322c" />
                <stop offset="1" stop-color="#f9322c" />
              </linearGradient>
            </defs>
          </svg>
        </i>
      </li>

      <li>
        <ul class="ring-0">
          <li><i class="orbit-icon fab fa-docker"></i></li>
          <li><i class="orbit-icon fab fa-codepen"></i></li>
          <li><i class="orbit-icon fab fa-git-square"></i></li>
          <li><i class="orbit-icon fab fa-codepen"></i></li>
        </ul>
      </li>

      <li>
        <ul class="ring-1">
          <li><i class="orbit-icon fab fa-js-square"></i></li>
          <li><i class="orbit-icon fab fa-css3"></i></li>
          <li><i class="orbit-icon fab fa-html5"></i></li>
        </ul>
      </li>
      <li>
        <ul class="ring-2">
          <li><i class="orbit-icon fab fa-php"></i></li>
          <li><i class="orbit-icon fab fa-sass"></i></li>
          <li><i class="orbit-icon fab fa-vuejs"></i></li>
          <li><i class="orbit-icon fab fa-laravel"></i></li>
          <li><i class="orbit-icon fab fa-js-square"></i></li>
          <li><i class="orbit-icon fab fa-css3"></i></li>
          <li><i class="orbit-icon fab fa-html5"></i></li>
        </ul>
      </li>
      <li>
        <ul class="ring-3">
          <li><i class="orbit-icon fab fa-bootstrap"></i></li>
          <li><i class="orbit-icon fab fa-git-square"></i></li>
          <li><i class="orbit-icon fab fa-github-square"></i></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrbitIcons",
};
</script>

<style lang="postcss">
*,
::before,
::after {
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 1px;
  --tw-ring-offset-color: #f9322c;
  --tw-ring-color: #f9322c;
  --tw-ring-offset-shadow: none;
  --tw-ring-shadow: none;
  --tw-shadow: #f9322c;
}

.orbit {
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-icon {
  width: 1.6em;
  height: 1.6em;
  line-height: 1.6em;
  font-size: 1.2em;
  border-radius: 50%;
  text-align: center;
  display: block;
  border-radius: 50%;
  margin: 0;
  background: #f9322c;
  display: block;
}

.orbit-wrap {
  height: 40em;
  list-style: none;
  font-size: 1.3em;
}

.orbit-wrap > li {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-color: var(--color-primary) !important;
}

.orbit-wrap > li:hover ul {
  border-width: 2px;
  border-color: var(--color-primary);
}

.orbit-wrap > li:hover ~ li ul {
  border-color: var(--text);
}

.orbit-wrap > li:hover ~ li ul li {
  opacity: 0.4;
}

ul[class^="ring"] {
  transition: all 300ms ease-in-out;
}

ul[class^="ring"] li {
  transition: all 300ms ease-in-out;
}

.ring-0 {
  width: 25em;
  height: 25em;
  animation: clockwiseRotate 35s linear infinite;
}

.ring-0 i {
  animation: counterClockwiseRotate 35s linear infinite;
}

.ring-0 > *:nth-of-type(1) {
  transform: rotate(95deg) translate(12.5em) rotate(-95deg);
}

.ring-0 > *:nth-of-type(2) {
  transform: rotate(190deg) translate(12.5em) rotate(-190deg);
}

.ring-0 > *:nth-of-type(3) {
  transform: rotate(285deg) translate(12.5em) rotate(-285deg);
}

.ring-0 > *:nth-of-type(4) {
  transform: rotate(380deg) translate(12.5em) rotate(-380deg);
}

.ring-1 {
  width: 20em;
  height: 20em;
  animation: clockwiseRotate 30s linear infinite;
}

.ring-1 i {
  animation: counterClockwiseRotate 30s linear infinite;
}

.ring-1 > *:nth-of-type(1) {
  transform: rotate(126deg) translate(10em) rotate(-126deg);
}

.ring-1 > *:nth-of-type(2) {
  transform: rotate(253deg) translate(10em) rotate(-253deg);
}

.ring-1 > *:nth-of-type(3) {
  transform: rotate(380deg) translate(10em) rotate(-380deg);
}

.ring-2 {
  width: 15em;
  height: 15em;
  animation: clockwiseRotate 25s linear infinite;
}

.ring-2 i {
  animation: counterClockwiseRotate 25s linear infinite;
}

.ring-2 > *:nth-of-type(1) {
  transform: rotate(47.5deg) translate(7.5em) rotate(-47.5deg);
}

.ring-2 > *:nth-of-type(2) {
  transform: rotate(95deg) translate(7.5em) rotate(-95deg);
}

.ring-2 > *:nth-of-type(3) {
  transform: rotate(142.5deg) translate(7.5em) rotate(-142.5deg);
}

.ring-2 > *:nth-of-type(4) {
  transform: rotate(190deg) translate(7.5em) rotate(-190deg);
}

.ring-2 > *:nth-of-type(5) {
  transform: rotate(237.5deg) translate(7.5em) rotate(-237.5deg);
}

.ring-2 > *:nth-of-type(6) {
  transform: rotate(285deg) translate(7.5em) rotate(-285deg);
}

.ring-2 > *:nth-of-type(7) {
  transform: rotate(332.5deg) translate(7.5em) rotate(-332.5deg);
}

.ring-2 > *:nth-of-type(8) {
  transform: rotate(380deg) translate(7.5em) rotate(-380deg);
}

.ring-3 {
  border-color: var(--color-primary);
  width: 10em;
  height: 10em;
  animation: clockwiseRotate 20s linear infinite;
}

.ring-3 i {
  animation: counterClockwiseRotate 20s linear infinite;
}

.ring-3 > *:nth-of-type(1) {
  transform: rotate(126deg) translate(5em) rotate(-126deg);
}

.ring-3 > *:nth-of-type(2) {
  transform: rotate(253deg) translate(5em) rotate(-253deg);
}

.ring-3 > *:nth-of-type(3) {
  transform: rotate(380deg) translate(5em) rotate(-380deg);
}

ul[class^="ring"] {
  position: relative;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  box-sizing: content-box;
}

ul[class^="ring"] li {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em;
}

.orbit-center {
  z-index: 5;
  font-size: 2em;
  width: 3em;
  height: 3em;
  line-height: 1.8em;
  text-align: center;
  border-radius: 50%;
  background: #f9322c;
}

.orbit-center:hover .orbit-center__icon {
  transform: rotateZ(0deg);
}

.orbit-center__icon {
  transform: rotateZ(-360deg);
  transition: all 300ms ease-in-out;
  top: 12px;
  position: absolute;
  left: 12px;
}

.orbit-wrap > li.orbit-center:hover ~ li > ul {
  width: 0;
  height: 0;
}

.orbit-wrap > li.orbit-center:hover ~ li > ul * {
  transform: translate(0, 0);
}

/*
animations
*/
@-webkit-keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

.fab {
  color: #fff;
}

@media (max-width: 768px) {
  .orbit-center__icon {
    position: absolute;
    inset: 0;
    transform: scale(0.5);
    right: 15px;
    top: 0px;
  }

  .orbit-center:hover .orbit-center__icon {
    transform: rotateZ(0deg);
    transform: scale(0.5);
  }

  .orbit-wrap {
    height: 30em;
    list-style: none;
    font-size: 0.9em;
  }

  .orbit-wrap > li {
    position: absolute;
    left: 50%;
    top: 65% !important;
    transform: translate(-50%, -50%);
    border-color: var(--color-primary) !important;
  }
}

@media (max-width: 425px) {
  .ring-0 > *:nth-of-type(1) {
    transform: rotate(95deg) translate(9em) rotate(-95deg);
  }

  .ring-0 > *:nth-of-type(2) {
    transform: rotate(190deg) translate(9em) rotate(-190deg);
  }

  .ring-0 > *:nth-of-type(3) {
    transform: rotate(285deg) translate(9em) rotate(-285deg);
  }

  .ring-0 > *:nth-of-type(4) {
    transform: rotate(380deg) translate(9em) rotate(-380deg);
  }

  .orbit-center__icon {
    position: absolute;
    transform: scale(0.5);
    left: 0px;
    top: -14px;
    left: -10px;
  }

  .orbit-wrap {
    height: 30em;
    list-style: none;
    font-size: 0.6em;
  }

  .orbit-wrap > li {
    position: absolute;
    left: 50%;
    top: 75% !important;
    transform: translate(-50%, -50%);
    border-color: var(--color-primary) !important;
  }
}
</style>
