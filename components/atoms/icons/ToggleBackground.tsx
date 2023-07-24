import React from "react";

type ToggleBackGroundProps = {
  darkMode: boolean;
}

const ToggleBackGround: React.FC<ToggleBackGroundProps> = ({ darkMode }): JSX.Element => {
  return (
    <>
      {!darkMode ? (
        (
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_115_1604)">
              <rect width="60" height="30" rx="15" fill="url(#paint0_linear_115_1604)" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9389 12.1198C13.3829 12.6675 12.6514 13 11.85 13C10.9043 13 10.056 12.5369 9.47856 11.8038C9.24295 11.9295 8.97889 12 8.70002 12C7.70591 12 6.90002 11.1046 6.90002 10C6.90002 8.89543 7.70591 8 8.70002 8C8.79947 8 8.89702 8.00896 8.99208 8.02619C9.49274 6.82962 10.5842 6 11.85 6C12.8772 6 13.7896 6.5463 14.3646 7.39167C14.5209 7.35347 14.6834 7.33333 14.85 7.33333C16.0927 7.33333 17.1 8.45262 17.1 9.83333C17.1 11.214 16.0927 12.3333 14.85 12.3333C14.5257 12.3333 14.2174 12.2571 13.9389 12.1198Z" fill="url(#paint1_linear_115_1604)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5264 7.23992C29.2321 7.52984 28.8448 7.70588 28.4206 7.70588C27.9199 7.70588 27.4708 7.46074 27.1651 7.07258C27.0404 7.13917 26.9006 7.17647 26.7529 7.17647C26.2266 7.17647 25.8 6.70242 25.8 6.11765C25.8 5.53288 26.2266 5.05882 26.7529 5.05882C26.8056 5.05882 26.8572 5.06357 26.9075 5.0727C27.1726 4.43921 27.7504 4 28.4206 4C28.9644 4 29.4474 4.28922 29.7518 4.73677C29.8346 4.71655 29.9206 4.70588 30.0088 4.70588C30.6667 4.70588 31.2 5.29845 31.2 6.02941C31.2 6.76038 30.6667 7.35294 30.0088 7.35294C29.8371 7.35294 29.6739 7.31258 29.5264 7.23992Z" fill="url(#paint2_linear_115_1604)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2967 15.0399C27.8388 15.4909 27.2364 15.7647 26.5765 15.7647C25.7976 15.7647 25.099 15.3834 24.6235 14.7796C24.4295 14.8831 24.212 14.9412 23.9824 14.9412C23.1637 14.9412 22.5 14.2038 22.5 13.2941C22.5 12.3845 23.1637 11.6471 23.9824 11.6471C24.0642 11.6471 24.1446 11.6544 24.2229 11.6686C24.6352 10.6832 25.534 10 26.5765 10C27.4224 10 28.1737 10.4499 28.6473 11.1461C28.776 11.1146 28.9098 11.0981 29.0471 11.0981C30.0704 11.0981 30.9 12.0198 30.9 13.1569C30.9 14.2939 30.0704 15.2157 29.0471 15.2157C28.78 15.2157 28.5261 15.1529 28.2967 15.0399Z" fill="url(#paint3_linear_115_1604)" />
            <defs>
              <filter id="filter0_i_115_1604" x="0" y="0" width="60" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect1_innerShadow_115_1604" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_115_1604" />
              </filter>
              <linearGradient id="paint0_linear_115_1604" x1="30" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#66FFED" />
                <stop offset="1" stop-color="#FFEEB2" />
              </linearGradient>
              <linearGradient id="paint1_linear_115_1604" x1="12" y1="6" x2="12" y2="13" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF48F" />
                <stop offset="1" stop-color="#FFFEEA" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_115_1604" x1="28.5" y1="4" x2="28.5" y2="7.70588" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF48F" />
                <stop offset="1" stop-color="#FFFEEA" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear_115_1604" x1="26.7" y1="10" x2="26.7" y2="15.7647" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFF48F" />
                <stop offset="1" stop-color="#FFFEEA" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )
      ) : (
        <svg width="78" height="38" viewBox="0 0 78 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i_115_1583)">
            <rect width="78" height="38" rx="19" fill="url(#paint0_linear_115_1583)" />
          </g>
          <path d="M44.3204 10.9296C44.5103 10.635 44.9316 10.7154 45.017 11.0626L45.3189 12.2897C45.3537 12.4309 45.4533 12.5426 45.5824 12.585L46.7047 12.9544C47.0222 13.0588 47.0818 13.5176 46.8032 13.7128L45.8185 14.4028C45.7052 14.4822 45.6379 14.6193 45.6405 14.7653L45.6628 16.035C45.6692 16.3942 45.2846 16.5973 45.027 16.3708L44.1165 15.5701C44.0118 15.4781 43.8706 15.4511 43.7431 15.4989L42.6346 15.9143C42.321 16.0318 42.0238 15.6986 42.1431 15.3634L42.5652 14.1785C42.6137 14.0422 42.5937 13.8884 42.5124 13.7719L41.8049 12.759C41.6048 12.4724 41.8056 12.0634 42.137 12.0827L43.3083 12.1511C43.443 12.1589 43.5719 12.0909 43.6491 11.9711L44.3204 10.9296Z" fill="url(#paint1_linear_115_1583)" />
          <path d="M35.4706 5.23108C35.5168 5.15927 35.6195 5.17887 35.6404 5.26348L35.7139 5.56257C35.7224 5.59697 35.7467 5.62419 35.7781 5.63454L36.0517 5.72456C36.1291 5.75002 36.1436 5.86182 36.0757 5.9094L35.8357 6.07759C35.8081 6.09693 35.7917 6.13035 35.7923 6.16594L35.7978 6.4754C35.7993 6.56295 35.7056 6.61245 35.6428 6.55724L35.4209 6.3621C35.3954 6.33965 35.3609 6.33308 35.3299 6.34473L35.0597 6.44597C34.9833 6.47461 34.9108 6.3934 34.9399 6.3117L35.0428 6.02291C35.0546 5.9897 35.0497 5.95222 35.0299 5.92382L34.8575 5.67694C34.8087 5.60709 34.8576 5.5074 34.9384 5.51212L35.2239 5.52878C35.2567 5.53069 35.2881 5.5141 35.307 5.48491L35.4706 5.23108Z" fill="url(#paint2_linear_115_1583)" />
          <path d="M55.555 13.9967C55.6029 13.7853 55.8574 13.731 55.9757 13.9071L56.3941 14.5294C56.4423 14.6009 56.5211 14.6405 56.6027 14.634L57.3117 14.5772C57.5123 14.5611 57.6386 14.8064 57.5205 14.9826L57.1031 15.6057C57.0551 15.6774 57.0447 15.7708 57.0757 15.8528L57.3446 16.5653C57.4207 16.7668 57.2443 16.9726 57.053 16.9055L56.3766 16.6683C56.2988 16.641 56.2135 16.6592 56.1511 16.7164L55.6083 17.2135C55.4548 17.3542 55.2195 17.2361 55.2193 17.0184L55.2187 16.2487C55.2186 16.1601 55.1763 16.0779 55.1067 16.0313L54.5023 15.6261C54.3313 15.5114 54.3623 15.2327 54.5535 15.1652L55.2295 14.9267C55.3072 14.8993 55.3664 14.8303 55.3858 14.7443L55.555 13.9967Z" fill="url(#paint3_linear_115_1583)" />
          <path d="M63.5738 9.03703C63.6007 8.91858 63.7432 8.8882 63.8095 8.9868L64.0438 9.33533C64.0708 9.37542 64.1149 9.39758 64.1606 9.39392L64.5577 9.36213C64.67 9.35313 64.7408 9.49048 64.6746 9.5892L64.4409 9.93818C64.414 9.97832 64.4082 10.0307 64.4255 10.0765L64.5761 10.4756C64.6188 10.5885 64.52 10.7038 64.4128 10.6662L64.034 10.5333C63.9904 10.518 63.9427 10.5282 63.9077 10.5602L63.6037 10.8387C63.5177 10.9174 63.3859 10.8513 63.3858 10.7294L63.3854 10.2983C63.3854 10.2487 63.3617 10.2027 63.3228 10.1766L62.9842 9.94958C62.8885 9.88537 62.9058 9.72925 63.0129 9.69146L63.3915 9.55788C63.4351 9.54252 63.4682 9.50388 63.4791 9.45573L63.5738 9.03703Z" fill="url(#paint4_linear_115_1583)" />
          <path d="M51.6431 4.16399C51.7727 4.10391 51.908 4.2353 51.8668 4.38122L51.7212 4.89702C51.7045 4.95634 51.7172 5.02082 51.755 5.06751L52.0831 5.47337C52.1759 5.58819 52.1023 5.76806 51.9613 5.77075L51.4632 5.78027C51.4059 5.78137 51.3533 5.81444 51.3239 5.86772L51.0687 6.33094C50.9966 6.46199 50.8158 6.44177 50.7699 6.29751L50.6076 5.78759C50.5889 5.72894 50.5436 5.6849 50.4877 5.67115L50.0019 5.55157C49.8645 5.51774 49.8264 5.32537 49.939 5.23353L50.3368 4.90886C50.3825 4.87152 50.4072 4.81123 50.402 4.74945L50.3569 4.21232C50.3442 4.06037 50.5014 3.9617 50.6169 4.04919L51.025 4.35846C51.072 4.39403 51.1326 4.40081 51.1852 4.37638L51.6431 4.16399Z" fill="url(#paint5_linear_115_1583)" />
          <defs>
            <filter id="filter0_i_115_1583" x="0" y="0" width="78" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect1_innerShadow_115_1583" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_115_1583" />
            </filter>
            <linearGradient id="paint0_linear_115_1583" x1="39.975" y1="1.47778" x2="38.8324" y2="37.9948" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2B4485" />
              <stop offset="1" stop-color="#AFCAFF" />
            </linearGradient>
            <linearGradient id="paint1_linear_115_1583" x1="44.8009" y1="10.1841" x2="43.459" y2="17.2164" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ADDDFF" />
              <stop offset="1" stop-color="#EDF6FF" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_115_1583" x1="35.5877" y1="5.04936" x2="35.2606" y2="6.76334" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ADDDFF" />
              <stop offset="1" stop-color="#EDF6FF" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint3_linear_115_1583" x1="55.6762" y1="13.4615" x2="56.5804" y2="17.7027" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ADDDFF" />
              <stop offset="1" stop-color="#EDF6FF" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint4_linear_115_1583" x1="63.6417" y1="8.73728" x2="64.1481" y2="11.1127" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ADDDFF" />
              <stop offset="1" stop-color="#EDF6FF" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint5_linear_115_1583" x1="51.971" y1="4.01195" x2="49.9241" y2="6.11923" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ADDDFF" />
              <stop offset="1" stop-color="#EDF6FF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

      )}
    </>
  )
}

export default ToggleBackGround