import React from "react";

type ToggleRoundProps = {
  darkMode: boolean;
  customClass?: string;
}

const ToggleRound: React.FC<ToggleRoundProps> = ({ darkMode, customClass }): JSX.Element => {
  return (
    <>
      {!darkMode ? (
        (
          <svg className={customClass} width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_115_1605)">
              <ellipse cx="18.7" cy="16.6667" rx="10.5" ry="11.6667" fill="url(#paint0_linear_115_1605)" />
              <ellipse cx="18.7" cy="16.6667" rx="8.7" ry="9.66667" fill="url(#paint1_linear_115_1605)" />
              <ellipse cx="18.7" cy="16.6667" rx="10.5" ry="11.6667" fill="#FF9255" />
              <ellipse cx="18.7" cy="16.6667" rx="8.7" ry="9.66667" fill="url(#paint2_linear_115_1605)" />
              <mask id="mask0_115_1605" maskUnits="userSpaceOnUse" x="8" y="5" width="22" height="24">
                <ellipse cx="18.7" cy="16.6667" rx="10.5" ry="11.6667" fill="url(#paint3_linear_115_1605)" />
              </mask>
              <g mask="url(#mask0_115_1605)">
                <path d="M20.9499 17.6752C26.5899 10.3419 32.1999 10.1752 34.2999 11.0086L37.7499 14.6753L34.7499 30.5086L12.9999 38.0086L0.849939 31.8419L-0.500061 17.1753C4.29994 20.3975 15.3099 25.0086 20.9499 17.6752Z" fill="url(#paint4_linear_115_1605)" />
                <path d="M17.8 16.6609C5.44094 8.33331 1.8001 10.865 -0.0715565 12.2119L-2.67158 16.6609L3.52052 31.3056L26.2393 33.0558L36.7902 23.9539L35.073 9.33467C31.0672 13.6955 25.6689 21.963 17.8 16.6609Z" fill="url(#paint5_linear_115_1605)" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_115_1605" x="0.199951" y="0" width="33" height="35.3334" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="1" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_115_1605" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_115_1605" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_115_1605" x1="18.7" y1="5" x2="18.7" y2="28.3333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC123" />
                <stop offset="1" stop-color="#F8832E" />
              </linearGradient>
              <linearGradient id="paint1_linear_115_1605" x1="18.7" y1="7" x2="18.7" y2="26.3333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBF24" />
                <stop offset="1" stop-color="#F4924B" />
              </linearGradient>
              <linearGradient id="paint2_linear_115_1605" x1="18.7" y1="7" x2="18.7" y2="26.3333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBF24" />
                <stop offset="1" stop-color="#F4924B" />
              </linearGradient>
              <linearGradient id="paint3_linear_115_1605" x1="18.7" y1="5" x2="18.7" y2="28.3333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC123" />
                <stop offset="1" stop-color="#F8832E" />
              </linearGradient>
              <linearGradient id="paint4_linear_115_1605" x1="18.6249" y1="10.6666" x2="18.6249" y2="38.0086" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9D55" stop-opacity="0.6" />
                <stop offset="1" stop-color="#FD8A37" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_115_1605" x1="15.1139" y1="7.87967" x2="22.0049" y2="34.1658" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBD3E" stop-opacity="0.49" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )
      ) : (
        <svg className={customClass} width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_115_1584)">
            <ellipse cx="18.55" cy="20" rx="13.65" ry="14.7778" fill="url(#paint0_linear_115_1584)" />
            <ellipse cx="18.5501" cy="20" rx="11.31" ry="12.2444" fill="url(#paint1_linear_115_1584)" />
          </g>
          <defs>
            <filter id="filter0_d_115_1584" x="0.900024" y="0.222229" width="39.3" height="41.5556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="2" dy="1" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_115_1584" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_115_1584" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_115_1584" x1="18.55" y1="5.22223" x2="18.55" y2="34.7778" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D6E9FF" />
              <stop offset="1" stop-color="#CDE4FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_115_1584" x1="18.5501" y1="7.75557" x2="18.5501" y2="32.2445" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CEE5FF" />
              <stop offset="0.9999" stop-color="#EDF6FF" />
              <stop offset="1" stop-color="#F1F9FF" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  )
}

export default ToggleRound