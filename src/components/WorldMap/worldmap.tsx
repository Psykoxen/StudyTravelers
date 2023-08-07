import e from "cors";
import "./worldmap.css";
import { useState } from "react";

function WorldMap() {
  const [selectedCity, setSelectedCity] = useState(null);

  function handleCountryClick(e: any, cityName: any) {
    setSelectedCity(cityName);
  }

  return (
    <div className="world-map-container">
      <svg
        width="2014"
        height="1166"
        viewBox="0 0 2014 1166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M296.496 74.8776C292.354 73.9363 288.07 75.7141 285.811 79.3113L232.758 163.804C231.344 166.056 230.885 168.779 231.483 171.37L261.972 303.489C262.815 307.142 265.63 310.016 269.265 310.935L460.454 359.258C461.679 359.567 462.834 360.106 463.859 360.846L497.203 384.928C499.981 386.934 503.591 387.378 506.772 386.106L626.562 338.19C630.359 336.671 632.848 332.994 632.848 328.905V259.639C632.848 255.413 630.192 251.643 626.212 250.222L579.588 233.57C574.993 231.929 569.884 233.844 567.499 238.102L517.916 326.643C514.383 332.952 505.529 333.542 501.191 327.757L424.615 225.656C419.564 218.922 424.585 209.342 432.995 209.663L627.445 217.07C634.347 217.333 639.431 210.687 637.371 204.095L610.252 117.315C609.334 114.378 609.82 111.182 611.568 108.65L654.554 46.3945C660.074 38.4001 652.103 28.0243 642.956 31.2971L436.629 105.121C434.837 105.762 432.899 105.878 431.043 105.457L296.496 74.8776Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Canada"
          onClick={(e) => handleCountryClick(e, "Canada")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M311.067 56.1191C318.354 56.9936 322.248 65.1596 318.34 71.3724L245.822 186.657C243.295 190.675 238.291 192.363 233.846 190.696L176.47 169.18C173.371 168.018 169.897 168.464 167.192 170.374L99.7704 217.965C98.0832 219.156 96.0687 219.796 94.0036 219.796H65.0363C53.6229 219.796 51.1181 203.75 61.9886 200.271L104.33 186.722C107.979 185.555 110.64 182.405 111.182 178.612L116.521 141.235C116.741 139.699 116.6 138.132 116.109 136.659L113.384 128.484C111.667 123.333 114.374 117.753 119.483 115.913L140.997 108.169C149.142 105.236 149.184 93.7324 141.061 90.7397V90.7397C133.846 88.0813 132.814 78.3018 139.315 74.1956L161.567 60.1418C163.742 58.7679 165.304 56.6084 165.928 54.1123L169.213 40.976C170.503 35.8132 175.611 32.5656 180.834 33.5875L272.09 51.442L311.067 56.1191Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Alaska"
          onClick={(e) => handleCountryClick(e, "Alaska")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M281.996 303.046C277.492 301.673 272.64 303.628 270.346 307.741L213.21 410.191C211.732 412.843 211.538 416.023 212.683 418.835L232.983 468.661C234.2 471.648 236.782 473.864 239.918 474.614L331.409 496.493C334.023 497.118 336.276 498.769 337.658 501.073L349.469 520.758C352.52 525.843 359.301 527.171 364.044 523.613L387.667 505.897C389.288 504.68 391.241 503.986 393.267 503.905L436.003 502.195C441.04 501.994 445.438 505.572 446.267 510.543L450.907 538.382C451.212 540.214 452.082 541.904 453.395 543.217V543.217C456.107 545.928 460.249 546.601 463.679 544.886L468.932 542.259C472.805 540.322 474.992 536.113 474.35 531.831L469.695 500.799C469.181 497.37 470.478 493.92 473.125 491.681L496.027 472.302C496.864 471.594 497.579 470.753 498.143 469.813L515.287 441.24C516.38 439.419 518.024 437.993 519.981 437.168L582.908 410.673C590.254 407.58 591.206 397.557 584.575 393.136L551.904 371.356C549.193 369.548 545.77 369.175 542.733 370.356L511.783 382.392C509.49 383.284 506.95 383.299 504.647 382.435L491.543 377.522C491.003 377.319 490.482 377.07 489.984 376.778L454.584 355.954C453.905 355.555 453.182 355.237 452.43 355.008L281.996 303.046Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="America"
          onClick={(e) => handleCountryClick(e, "America")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M266.825 464.037C261.035 462.268 255.322 466.992 255.973 473.011L258.677 498.021C259.354 504.284 268.418 504.417 269.279 498.176V498.176C270.032 492.719 277.552 491.835 279.548 496.97L287.395 517.148L327.187 590.448C328.317 592.529 330.149 594.142 332.358 594.999L381.121 613.921C384.599 615.27 388.538 614.572 391.34 612.11L406.877 598.458C408.777 596.787 409.974 594.458 410.226 591.941L410.534 588.861C411.243 581.776 404.53 576.242 397.71 578.288L373.5 585.551C370.253 586.525 366.733 585.787 364.15 583.592L330.683 555.145C327.109 552.107 326.127 546.992 328.322 542.847L342.113 516.796C343.466 514.241 343.646 511.226 342.609 508.528L335.06 488.901C333.955 486.029 331.591 483.826 328.648 482.927L266.825 464.037Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Mexico"
          onClick={(e) => handleCountryClick(e, "Mexico")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M415.044 601.206C413.189 597.926 409.648 595.966 405.884 596.137L389.669 596.874C380.55 597.289 376.708 608.702 383.721 614.546L439.874 661.34C441.656 662.825 442.866 664.884 443.298 667.163L456.629 737.629C457.413 741.772 460.711 744.979 464.875 745.645L505.352 752.121C509.663 752.811 513.924 750.624 515.876 746.719L526.845 724.782C527.539 723.393 527.901 721.862 527.901 720.31V682.088C527.901 681.45 527.962 680.813 528.083 680.186L528.765 676.664C529.587 672.423 527.592 668.133 523.819 666.029L505.55 655.839C504.427 655.213 503.194 654.81 501.919 654.65L486.359 652.705L445.315 646.842C442.243 646.403 439.55 644.564 438.023 641.863L415.044 601.206Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="South America"
          onClick={(e) => handleCountryClick(e, "South America")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M463.523 711.783C457.375 709.547 450.771 713.72 450.151 720.233L443.11 794.158C442.808 797.325 444.032 800.446 446.405 802.565L500.711 851.053C502.719 852.845 503.919 855.37 504.041 858.058L512.46 1043.28C512.549 1045.23 513.201 1047.1 514.338 1048.68L555.555 1105.85C561.728 1114.41 575.237 1108.81 573.536 1098.39L562.883 1033.14L549.834 880.902C549.788 880.363 549.785 879.821 549.827 879.281L553.937 825.852C554.068 824.143 553.758 822.429 553.036 820.874L526.094 762.845C525.841 762.3 525.54 761.779 525.194 761.289L501.284 727.417C500.108 725.75 498.449 724.483 496.532 723.786L463.523 711.783Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Chile"
          onClick={(e) => handleCountryClick(e, "Chile")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M533.617 643.117C530.283 639.782 525.072 639.23 521.113 641.792L498.89 656.172C494.347 659.112 492.966 665.132 495.775 669.757L524.65 717.316C526.638 720.591 530.322 722.442 534.137 722.082L621.809 713.811C630.367 713.004 633.986 702.488 627.736 696.585L606.448 676.48C605.124 675.23 603.485 674.365 601.706 673.978L557.007 664.261C555.134 663.854 553.417 662.916 552.061 661.561L533.617 643.117Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Venezuela"
          onClick={(e) => handleCountryClick(e, "Venezuela")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M535.902 707.208C532.307 707.306 529.042 709.325 527.349 712.498L508.749 747.367C506.167 752.207 507.967 758.224 512.783 760.852L520.811 765.232C522.48 766.143 523.854 767.51 524.774 769.174L560.253 833.374C560.548 833.908 560.794 834.469 560.987 835.048L587.778 915.42C588.636 917.994 590.502 920.109 592.95 921.279L630.992 939.473C635.731 941.74 641.417 939.953 644.007 935.382L675.655 879.532C676.264 878.457 677.067 877.504 678.023 876.722L722.724 840.149C724.007 839.099 725.008 837.748 725.639 836.216L738.83 804.181C739.582 802.355 739.776 800.348 739.389 798.412L731.675 759.841C731.386 758.4 730.784 757.04 729.911 755.858L696.969 711.29C695.138 708.813 692.268 707.318 689.19 707.237L610.984 705.179L535.902 707.208Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Brazil"
          onClick={(e) => handleCountryClick(e, "Brazil")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M546.65 836.102C548.157 827.495 559.204 824.825 564.475 831.795L617.05 901.304C617.379 901.738 617.671 902.198 617.924 902.679L637.416 939.714C638.688 942.131 638.916 944.963 638.047 947.553L586.032 1102.55C583.171 1111.07 571.389 1111.78 567.523 1103.66L546.493 1059.5C545.771 1057.99 545.442 1056.31 545.538 1054.63L549.706 981.699C549.745 981.013 549.713 980.325 549.611 979.645L536.887 894.818C536.728 893.753 536.741 892.67 536.927 891.609L546.65 836.102Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Argentina"
          onClick={(e) => handleCountryClick(e, "Argentina")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M77.9369 527.245C83.4061 524.262 90.2422 526.952 92.2123 532.862L96.0612 544.408C97.8616 549.81 94.7959 555.622 89.3216 557.186L79.6604 559.946C73.8719 561.6 67.9449 557.802 67.0295 551.852L65.4488 541.577C64.8082 537.413 66.8457 533.295 70.544 531.278L77.9369 527.245Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="America"
          onClick={(e) => handleCountryClick(e, "America")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M38.3794 537.282C44.039 533.24 51.9436 536.931 52.4771 543.866V543.866C52.9508 550.024 47.1802 554.793 41.2209 553.168L40.0242 552.842C34.6902 551.387 32.2206 545.241 35.0651 540.5V540.5C35.654 539.518 36.4386 538.669 37.37 538.003L38.3794 537.282Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="America"
          onClick={(e) => handleCountryClick(e, "America")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M868.981 76.3427C868.981 71.9413 866.103 68.0574 861.892 66.7759L771.79 39.3535C769.6 38.6871 767.248 38.792 765.127 39.6508L678.833 74.5792C677.35 75.1793 676.033 76.1263 674.992 77.3407L669.485 83.7664C666.084 87.7338 666.311 93.6505 670.006 97.3454L684.82 112.159C686.552 113.891 687.588 116.198 687.732 118.643L691.816 188.068C691.859 188.811 691.986 189.547 692.193 190.261L713.754 264.745C715.033 269.164 719.162 272.14 723.759 271.956L762.679 270.4C767.316 270.214 771.215 266.864 772.097 262.308L782.876 206.618C783.408 203.869 785.068 201.469 787.453 200.002L864.222 152.759C867.179 150.939 868.981 147.715 868.981 144.243V76.3427Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Greenland"
          onClick={(e) => handleCountryClick(e, "Greenland")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M867.971 243.359C868.396 235.278 859.547 230.065 852.684 234.354L827.552 250.061C821.978 253.545 821.224 261.367 826.029 265.852L841.413 280.211C845.67 284.184 852.408 283.694 856.045 279.147L864.786 268.221C866.092 266.588 866.853 264.587 866.963 262.5L867.971 243.359Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="IceLand"
          onClick={(e) => handleCountryClick(e, "IceLand")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1078.64 187.212C1075.25 182.403 1068.45 181.552 1063.98 185.373L986.828 251.233C984.239 253.442 982.952 256.817 983.412 260.189L988.054 294.231C988.73 299.185 992.962 302.879 997.962 302.879H1011.93C1013.97 302.879 1015.7 301.393 1016.01 299.379V299.379C1016.78 294.34 1024.22 294.908 1024.22 300.007V307.575C1024.22 311.257 1028.25 313.513 1031.39 311.584L1048.81 300.861C1051.25 299.363 1052.92 296.896 1053.42 294.082L1057.19 272.699C1058.7 264.181 1071.01 264.458 1072.13 273.035V273.035C1072.25 273.974 1072.2 274.928 1071.97 275.846L1058.79 328.549C1057.73 332.79 1054.04 335.85 1049.68 336.107L996.332 339.245C989.574 339.643 985.155 346.499 987.585 352.818L988.637 355.552C991.084 361.914 986.588 368.806 979.779 369.13L955.381 370.292C950.848 370.508 947.029 373.748 946.079 378.185L942.098 396.76C941.485 399.621 942.156 402.606 943.933 404.93L962.618 429.364C966.291 434.168 973.356 434.637 977.632 430.36L997.174 410.819C997.709 410.284 998.303 409.811 998.945 409.41L1027.92 391.301C1031.03 389.359 1034.95 389.272 1038.14 391.076L1082.63 416.225C1083.04 416.456 1083.42 416.705 1083.8 416.986C1087.77 419.937 1112.03 437.356 1116.05 425.318C1118.76 417.188 1123.98 405.699 1127.57 398.137C1129.7 393.64 1134.86 391.505 1139.58 393.078L1147.97 395.876C1155.22 398.291 1162.38 392.021 1160.96 384.518L1156.14 359.26C1155.67 356.751 1154.25 354.52 1152.18 353.025L1116.91 327.554C1116.34 327.139 1115.81 326.664 1115.33 326.137L1099.5 308.541C1097.51 306.339 1096.61 303.371 1097.03 300.437L1104.85 245.692C1105.02 244.472 1104.97 243.23 1104.69 242.029L1099 217.337C1098.7 216.073 1098.17 214.878 1097.42 213.818L1078.64 187.212Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Europe"
          onClick={(e) => handleCountryClick(e, "Europe")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M955.068 413.017C951.979 409.928 947.244 409.202 943.371 411.222L904.965 431.26C901.662 432.983 899.591 436.4 899.591 440.126V460.32C899.591 464.293 901.943 467.889 905.582 469.482L927.791 479.198C931.82 480.961 936.529 479.884 939.391 476.544L959.626 452.936C960.409 452.023 961.021 450.976 961.432 449.846L967.379 433.49C968.707 429.839 967.8 425.749 965.052 423.002L955.068 413.017Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Spain"
          onClick={(e) => handleCountryClick(e, "Spain")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1012.47 398.982C1006.27 401.235 1003.91 408.761 1007.71 414.147L1023.82 436.968C1025.46 439.294 1026.04 442.209 1025.4 444.983L1021.7 460.987C1020.7 465.356 1023.58 469.67 1028 470.407V470.407C1031.02 470.91 1034.05 469.596 1035.75 467.05L1043.43 455.528C1045.11 453.016 1045.56 449.881 1044.66 446.998L1042.16 439.015C1039.53 430.598 1048.29 423.144 1056.18 427.088L1060.26 429.128C1061.01 429.502 1061.7 429.968 1062.34 430.516L1090.56 454.973C1092.7 456.829 1095.81 457.026 1098.17 455.454V455.454C1099.79 454.374 1100.82 452.605 1100.96 450.663L1102.73 425.866C1102.86 424.076 1102.5 422.285 1101.7 420.681L1095.82 408.917C1094.76 406.802 1092.99 405.13 1090.81 404.198L1051.9 387.522C1049.57 386.521 1046.94 386.447 1044.55 387.316L1012.47 398.982Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Italia"
          onClick={(e) => handleCountryClick(e, "Italia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M954.91 337.143C955.865 340.327 955.176 343.777 953.071 346.349L939.746 362.635C937.908 364.881 934.981 365.93 932.135 365.36V365.36C928.467 364.627 925.828 361.407 925.828 357.667V334.215C925.828 332.313 925.285 330.451 924.264 328.846L917.85 318.767C914.221 313.064 917.178 305.477 923.71 303.736L933.95 301.005C939.17 299.613 944.553 302.619 946.105 307.794L954.91 337.143Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="UnitedKingdom"
          onClick={(e) => handleCountryClick(e, "UnitedKingdom")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M890.716 344.612C887.977 337.081 894.765 329.55 902.539 331.493L909.238 333.168C914.723 334.539 917.981 340.181 916.428 345.617L915.141 350.119C914.978 350.692 914.866 351.279 914.806 351.872L914.153 358.406C913.456 365.375 905.995 369.488 899.73 366.355L897.676 365.328C893.643 363.312 891.458 358.845 892.343 354.423L892.482 353.727C892.841 351.93 892.7 350.07 892.074 348.348L890.716 344.612Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Ireland"
          onClick={(e) => handleCountryClick(e, "Ireland")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M996.474 481.666C994.612 480.571 992.446 480.108 990.3 480.346L919.361 488.228C916.521 488.544 913.951 490.059 912.301 492.392L853.848 575.033C852.336 577.17 851.723 579.815 852.14 582.4L862.056 643.882C862.297 645.372 862.871 646.788 863.737 648.025L890.595 686.394C892.152 688.618 894.546 690.113 897.228 690.537L930.634 695.812C933.163 696.211 935.749 695.625 937.859 694.174L964.774 675.671C967.731 673.638 969.372 670.176 969.074 666.6L967.369 646.146L965.397 618.533C965.257 616.578 965.695 614.626 966.656 612.918L982.861 584.109C984.143 581.83 986.266 580.144 988.777 579.412L1022.82 569.482C1029.7 567.475 1032.3 559.096 1027.76 553.549L1021.15 545.464C1018.97 542.809 1018.31 539.225 1019.4 535.969L1028.22 509.521C1029.71 505.044 1027.87 500.132 1023.8 497.739L996.474 481.666Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="NorthAfrica"
          onClick={(e) => handleCountryClick(e, "NorthAfrica")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1020.88 505.325C1022.91 501.885 1026.78 499.977 1030.74 500.472L1110.11 510.393C1111.15 510.523 1112.19 510.489 1113.22 510.294L1148.45 503.583C1153.6 502.602 1158.63 505.765 1159.98 510.83L1166.33 534.639L1174.54 571.556C1174.89 573.157 1175.64 574.646 1176.7 575.892L1198.87 601.768C1199.5 602.504 1200.02 603.329 1200.41 604.215L1230.83 672.72C1233.6 678.955 1229.45 686.07 1222.66 686.731L1193.95 689.527C1191.64 689.752 1189.49 690.77 1187.85 692.409L1181.38 698.879C1178.84 701.422 1175.12 702.404 1171.66 701.45L1101.02 682.024C1095.12 680.402 1092.04 673.911 1094.53 668.321L1105.46 643.726C1106.63 641.095 1106.61 638.088 1105.4 635.474L1095.05 613.049C1094.48 611.805 1093.65 610.693 1092.63 609.78L1033.55 557.029C1033.16 556.679 1032.74 556.36 1032.3 556.076L1010.44 542.023C1005.92 539.12 1004.5 533.169 1007.23 528.541L1020.88 505.325Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="EastAfrica"
          onClick={(e) => handleCountryClick(e, "EastAfrica")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M949.747 667.404C949.83 670.54 951.363 673.441 953.664 675.574C971.672 692.267 1021.08 752.886 1034.14 769.001C1036.15 771.49 1039.23 772.863 1042.43 772.703L1077.93 770.928C1079.97 770.826 1081.99 771.353 1083.73 772.436L1112.21 790.237C1114.65 791.762 1117.63 792.162 1120.38 791.335L1131.94 787.866C1135.6 786.771 1138.31 783.693 1138.93 779.932L1152.63 697.775C1153.01 695.494 1152.58 693.151 1151.43 691.147L1104.1 608.825C1103.33 607.487 1102.26 606.345 1100.97 605.489L1028.85 557.408C1025.97 555.486 1022.3 555.193 1019.15 556.634L953.705 586.551C950.058 588.218 947.76 591.901 947.866 595.909L949.747 667.404Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="CentralAfrica"
          onClick={(e) => handleCountryClick(e, "CentralAfrica")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1044.65 766.287C1040.33 767.643 1037.47 771.725 1037.65 776.243L1041.64 871.824C1041.68 872.955 1041.92 874.07 1042.34 875.121L1073.65 953.378C1075.42 957.804 1080.06 960.365 1084.75 959.497L1130.09 951.101C1133.58 950.455 1136.46 948.005 1137.67 944.665L1163.73 872.488C1164.01 871.73 1164.37 871.008 1164.82 870.337L1206.81 807.35C1207.51 806.296 1208.01 805.118 1208.27 803.878L1222.83 735.238C1223.06 734.155 1223.47 733.118 1224.04 732.169L1249 690.561C1249.28 690.104 1249.52 689.626 1249.71 689.13L1252.21 682.895C1254.96 676.027 1249.55 668.656 1242.18 669.209L1175 674.247C1172.26 674.453 1169.72 675.779 1167.99 677.913L1115.75 742.202C1114.52 743.723 1112.86 744.848 1110.99 745.436L1044.65 766.287Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="SouthAfrica"
          onClick={(e) => handleCountryClick(e, "SouthAfrica")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1253.7 798.215C1252.33 798.858 1251.13 799.84 1250.24 801.069L1220.12 842.485C1217.96 845.45 1217.6 849.357 1219.18 852.667L1233.97 883.724C1236.42 888.885 1242.7 890.939 1247.74 888.229L1258.55 882.408C1263.23 879.885 1265.12 874.133 1262.84 869.323L1249.73 841.651C1248.19 838.385 1248.52 834.539 1250.61 831.59L1264.82 811.533C1270.14 804.019 1262.05 794.322 1253.7 798.215V798.215Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Madagascar"
          onClick={(e) => handleCountryClick(e, "Madagascar")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1242.94 635.069C1245.18 640.855 1252.1 643.227 1257.42 640.035L1288.02 621.67C1289.93 620.528 1291.39 618.787 1292.2 616.719L1304.7 584.578C1305.7 582.01 1305.59 579.143 1304.41 576.655L1288.98 544.264C1286.5 539.051 1288.94 532.824 1294.3 530.68L1316.24 521.904C1316.87 521.649 1317.54 521.46 1318.21 521.341L1348.31 516.029C1352.02 515.374 1355.79 516.862 1358.05 519.877L1386.73 558.119C1387.02 558.499 1387.28 558.899 1387.5 559.315L1437.45 650.519V650.519C1441.78 657.733 1452.78 655.442 1453.86 647.099L1457.13 622.095L1465.06 580.454C1465.58 577.729 1467.2 575.341 1469.55 573.863L1520.65 541.692C1523.33 540.006 1525.05 537.152 1525.29 533.997L1526.4 519.508C1526.8 514.429 1523.31 509.869 1518.3 508.917L1480.01 501.633C1478.65 501.375 1477.37 500.841 1476.23 500.063L1432.18 469.928C1431.32 469.344 1430.57 468.631 1429.93 467.814L1418.9 453.633C1416.83 450.972 1416.24 447.447 1417.33 444.257L1442.85 369.677C1443.6 367.484 1443.56 365.099 1442.75 362.929L1432.64 335.971C1431.54 333.032 1429.12 330.78 1426.11 329.892L1304.43 293.987C1300.3 292.769 1295.86 294.329 1293.4 297.86L1249.58 360.727C1248.07 362.887 1245.78 364.366 1243.19 364.843L1178.01 376.849C1171.24 378.098 1167.72 385.663 1171.14 391.645L1191.18 426.714C1194.85 433.135 1190.52 441.179 1183.14 441.655L1133.66 444.847C1132.14 444.945 1130.66 445.389 1129.34 446.144L1123.89 449.257C1119.44 451.804 1117.63 457.311 1119.72 462.001L1123.85 471.3C1124.47 472.694 1125.4 473.929 1126.57 474.908L1159.31 502.303L1208.6 548.998C1209.68 550.018 1210.52 551.265 1211.05 552.649L1242.94 635.069Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="India"
          onClick={(e) => handleCountryClick(e, "India")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1252.8 384.486C1250.67 386.793 1247.58 387.966 1244.46 387.653L1145.26 377.734C1142.02 377.41 1139.14 375.531 1137.55 372.697L1093.29 294.235C1092.44 292.735 1091.99 291.043 1091.99 289.321V191.028C1091.99 183.902 1099.23 179.063 1105.82 181.788L1141.57 196.58C1148.15 199.305 1149.85 207.851 1144.81 212.891L1143.68 214.026C1141.43 216.279 1140.38 219.469 1140.87 222.618L1141.18 224.623C1142.47 233.054 1153.05 236.095 1158.63 229.639L1185.27 198.789C1185.76 198.219 1186.32 197.707 1186.92 197.261L1215.1 176.6C1217.45 174.874 1220.44 174.263 1223.28 174.926L1269.47 185.703C1276.51 187.344 1282.91 181.219 1281.57 174.122L1273.62 131.684C1272.43 125.329 1277.49 119.531 1283.95 119.854L1311.49 121.231C1313.77 121.345 1316.01 120.679 1317.86 119.343L1377.53 76.1326C1378.12 75.7072 1378.64 75.2417 1379.12 74.7016C1385.39 67.7129 1431.34 16.9087 1437.45 23.0187C1442.75 28.3169 1476.58 60.7199 1489.39 72.9827C1492.35 75.8236 1496.75 76.5472 1500.48 74.8256L1577.2 39.4141C1578.75 38.699 1580.46 38.3922 1582.16 38.5231L1661.61 44.6348C1663.71 44.796 1665.8 44.293 1667.59 43.1971L1702.29 21.9925C1703.54 21.2283 1704.95 20.7483 1706.4 20.5865L1857.1 3.84247C1859.97 3.52378 1862.83 4.45337 1864.9 6.46551C1876.04 17.3048 1910.71 53.1294 1892.22 62.3741C1870.36 73.3061 1857.24 75.4925 1859.43 90.7974C1861.24 103.49 1840.5 131.22 1833.36 140.316C1831.85 142.245 1831.05 144.625 1831.15 147.075L1834.9 244.572C1835.13 250.682 1829.33 255.237 1823.45 253.558V253.558C1821.28 252.937 1819.42 251.52 1818.24 249.589L1766.1 163.923C1762.54 158.077 1754.29 157.452 1749.89 162.696L1707.75 212.939C1704.48 216.842 1704.67 222.584 1708.18 226.269L1744.59 264.413C1746.69 266.614 1747.68 269.653 1747.27 272.669L1739.28 331.213C1737.95 341.03 1724.68 343.132 1720.37 334.209L1709.08 310.819C1706.48 305.429 1699.75 303.516 1694.7 306.73L1680.14 315.998L1636.07 344.149C1633.55 345.755 1630.45 346.154 1627.62 345.239L1572.92 327.607C1571.54 327.161 1570.07 327.022 1568.63 327.199L1429.83 344.283C1429.08 344.375 1428.32 344.382 1427.58 344.305L1306.87 331.818C1303.74 331.494 1300.63 332.666 1298.49 334.982L1252.8 384.486Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Russia"
          onClick={(e) => handleCountryClick(e, "Russia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1478.87 315.54C1477.51 315.842 1476.22 316.425 1475.1 317.251L1446.47 338.349C1440.96 342.406 1441.06 350.669 1446.67 354.592L1498.9 391.153C1500.18 392.053 1501.66 392.638 1503.22 392.86L1573.24 402.863C1575.89 403.241 1578.58 402.544 1580.71 400.925L1629.36 363.951C1631.1 362.629 1632.36 360.772 1632.94 358.666L1639.86 333.767C1641.5 327.869 1637.5 321.896 1631.42 321.163L1517.86 307.457C1516.73 307.321 1515.59 307.378 1514.49 307.623L1478.87 315.54Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Mongolia"
          onClick={(e) => handleCountryClick(e, "Mongolia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1437.6 339.709C1431.37 335.398 1422.79 339.327 1421.98 346.866L1417.77 385.963L1401.48 465.372C1400.74 468.981 1402.05 472.705 1404.88 475.063L1451.08 513.568C1452.18 514.486 1453.47 515.157 1454.85 515.534L1523.61 534.287C1524.47 534.52 1525.35 534.639 1526.24 534.639H1565.18C1571.49 534.639 1576.22 540.412 1574.99 546.6L1573.21 555.482C1573.07 556.161 1572.87 556.824 1572.6 557.46L1561.47 583.422C1560.45 585.791 1560.39 588.46 1561.3 590.873L1577.98 635.36C1578.99 638.047 1581.1 640.172 1583.78 641.194L1618.57 654.445C1622.67 656.01 1627.32 654.709 1630.02 651.239L1636.77 642.558C1639.21 639.424 1639.56 635.146 1637.67 631.655L1615.41 590.562C1613.55 587.127 1613.86 582.924 1616.21 579.799L1636.76 552.393C1637.96 550.797 1639.61 549.595 1641.49 548.943L1686.21 533.461C1691.35 531.685 1694.12 526.136 1692.47 520.964L1678.22 476.44C1678.04 475.885 1677.82 475.346 1677.55 474.831L1658.37 438.399C1656.93 435.664 1656.84 432.418 1658.12 429.604L1666.08 412.094C1666.7 410.725 1667.62 409.513 1668.78 408.55L1714.81 370.187C1717.69 367.791 1718.98 363.989 1718.17 360.336L1711.05 328.293C1710.85 327.389 1710.78 326.461 1710.83 325.536L1712.48 297.476C1712.75 292.932 1709.91 288.781 1705.58 287.377L1643.22 267.15C1637.36 265.249 1631.19 269.051 1630.25 275.142L1623.48 319.168C1623.36 319.967 1623.14 320.748 1622.82 321.494L1603.15 368.715C1602.05 371.343 1599.89 373.379 1597.2 374.314L1554.04 389.328C1552.15 389.985 1550.11 390.06 1548.18 389.545L1487.23 373.292C1486.12 372.996 1485.07 372.51 1484.12 371.856L1437.6 339.709Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="China"
          onClick={(e) => handleCountryClick(e, "China")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1588.74 697.441C1579.75 693.72 1571.28 703.729 1576.44 711.981L1612.38 769.489C1613.77 771.712 1615.98 773.301 1618.53 773.913L1707.55 795.278C1714.91 797.046 1721.5 790.298 1719.54 782.977L1716.94 773.219C1715.85 769.13 1712.3 766.17 1708.09 765.828L1641.54 760.433C1637.19 760.08 1633.57 756.941 1632.6 752.682L1624.44 716.784C1623.72 713.62 1621.51 711.001 1618.51 709.76L1588.74 697.441Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Indonesia"
          onClick={(e) => handleCountryClick(e, "Indonesia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1688.63 678.256C1685.88 670.921 1676.14 669.454 1671.35 675.653L1650.06 703.201C1647.2 706.911 1647.29 712.115 1650.3 715.718L1673.23 743.242C1676.04 746.611 1680.71 747.757 1684.76 746.071L1697.55 740.742C1701.52 739.089 1703.98 735.086 1703.68 730.799L1702.17 709.749C1702.06 708.182 1701.58 706.664 1700.77 705.317L1695.91 697.215C1695.6 696.695 1695.34 696.148 1695.12 695.581L1688.63 678.256Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Philippines"
          onClick={(e) => handleCountryClick(e, "Philippines")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1810.2 726.066C1801.3 724.087 1794.61 734.088 1799.84 741.562L1815.03 763.265C1815.47 763.895 1815.84 764.573 1816.13 765.286L1825.22 788.014C1827.22 793.027 1832.85 795.543 1837.92 793.698L1849.51 789.482C1851.68 788.694 1854.06 788.679 1856.23 789.442L1886.06 799.88C1891.68 801.848 1897.77 798.494 1899.1 792.69L1901.08 784.147C1902.25 779.064 1899.32 773.933 1894.34 772.362L1863.63 762.663C1862.3 762.243 1861.07 761.549 1860.02 760.626L1826.37 730.934C1825.11 729.816 1823.58 729.038 1821.93 728.671L1810.2 726.066Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Indonesia"
          onClick={(e) => handleCountryClick(e, "Indonesia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1684.99 375.161C1682.06 377.721 1681 381.81 1682.31 385.472L1697.51 428.041C1699.76 434.327 1707.41 436.691 1712.81 432.765L1723.08 425.295C1724.99 423.904 1726.31 421.845 1726.78 419.526V419.526C1727.63 415.236 1725.42 410.919 1721.44 409.108L1708.98 403.447C1705.98 402.083 1703.85 399.328 1703.27 396.081L1700.55 380.641C1699.27 373.377 1690.54 370.303 1684.99 375.161V375.161Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Korea"
          onClick={(e) => handleCountryClick(e, "Korea")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1782.82 396.895C1778.93 396.895 1775.46 399.327 1774.13 402.982L1768.79 417.672C1768.02 419.792 1766.55 421.589 1764.63 422.771L1752.53 430.214C1746.39 433.998 1746.35 442.926 1752.48 446.752V446.752C1755.11 448.397 1758.37 448.688 1761.25 447.535L1774.75 442.133C1777.17 441.165 1779.12 439.291 1780.18 436.909L1787.27 420.946L1791.51 409.301C1793.7 403.271 1789.24 396.895 1782.82 396.895V396.895Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Japan"
          onClick={(e) => handleCountryClick(e, "Japan")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1756.11 463.563C1755.1 460.185 1752.38 457.59 1748.96 456.735L1740.67 454.662C1734.35 453.084 1728.24 457.857 1728.24 464.363V466.851C1728.24 471.863 1731.95 476.101 1736.92 476.763L1745.69 477.932C1752.89 478.892 1758.67 472.102 1756.59 465.146L1756.11 463.563Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Japan"
          onClick={(e) => handleCountryClick(e, "Japan")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1719.5 584.165C1719.5 575.729 1709.69 571.083 1703.16 576.425L1701.18 578.047C1697.77 580.835 1696.59 585.523 1698.27 589.594L1706.26 609.001C1708.48 614.408 1715.32 616.101 1719.81 612.357V612.357C1722.3 610.281 1723.43 606.989 1722.72 603.824L1719.73 590.371C1719.57 589.659 1719.5 588.931 1719.5 588.202V584.165Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Taiwan"
          onClick={(e) => handleCountryClick(e, "Taiwan")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1784.77 356.743C1779.4 350.656 1769.4 353.167 1767.54 361.069L1764.34 374.667C1763.63 377.657 1764.34 380.805 1766.26 383.204L1767.61 384.891C1770.23 388.163 1774.61 389.456 1778.58 388.131L1790.44 384.181C1797.23 381.915 1799.51 373.449 1794.77 368.077L1784.77 356.743Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Japan"
          onClick={(e) => handleCountryClick(e, "Japan")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1790.62 820.216C1795.1 820.714 1798.69 824.145 1799.4 828.595L1803.89 857.079C1804.44 860.51 1806.72 863.415 1809.92 864.751L1822.39 869.943C1827.24 871.964 1832.83 869.885 1835.18 865.184L1841.66 852.226C1844.88 845.776 1853.67 844.756 1858.28 850.296L1878.43 874.475C1880.25 876.658 1881.05 879.512 1880.64 882.325L1868.29 966.752C1868.21 967.282 1868.09 967.805 1867.93 968.316L1843.51 1045.66C1842.52 1048.77 1840.07 1051.21 1836.95 1052.19L1816.69 1058.52C1811.35 1060.19 1805.67 1057.14 1804.11 1051.76L1786.77 991.971C1785.87 988.89 1783.55 986.425 1780.54 985.343L1740.47 970.982C1738.22 970.177 1735.76 970.202 1733.53 971.051L1692.56 986.658C1691.57 987.034 1690.53 987.252 1689.48 987.302L1655.86 988.903C1650.07 989.179 1645.26 984.494 1645.38 978.702L1647.22 892.494C1647.3 888.884 1649.31 885.596 1652.49 883.892L1707.92 854.197C1708.35 853.969 1708.76 853.711 1709.15 853.424L1755.7 819.016C1757.72 817.518 1760.24 816.841 1762.75 817.119L1790.62 820.216Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Australia"
          onClick={(e) => handleCountryClick(e, "Australia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1829.37 1081.38C1829.07 1075.46 1823.72 1071.09 1817.86 1072L1786.86 1076.76C1779.79 1077.85 1776.12 1085.8 1779.87 1091.89L1787.05 1103.56C1788.58 1106.05 1791.12 1107.74 1794.01 1108.2L1818.84 1112.12C1825.11 1113.11 1830.7 1108.08 1830.39 1101.74L1829.37 1081.38Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="Australia"
          onClick={(e) => handleCountryClick(e, "Australia")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1956.98 1107.33C1953.85 1102.63 1947.45 1101.45 1942.85 1104.74L1920.64 1120.6L1894.58 1136.73C1887.1 1141.36 1888.81 1152.69 1897.32 1154.91L1919.13 1160.6C1922.75 1161.55 1926.59 1160.39 1929.09 1157.62L1959.18 1124.18C1962.23 1120.79 1962.6 1115.75 1960.06 1111.95L1956.98 1107.33Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="NewZealand"
          onClick={(e) => handleCountryClick(e, "NewZealand")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1969.27 1081.95C1968.93 1084.32 1969.45 1086.72 1970.73 1088.74L1975.81 1096.71C1979.69 1102.81 1988.56 1102.91 1992.57 1096.89L2007.22 1074.91C2009.13 1072.05 2009.43 1068.4 2008.02 1065.26L1996.09 1038.77C1993.35 1032.68 1985.53 1030.93 1980.47 1035.28L1978.16 1037.25C1976.32 1038.83 1975.12 1041.03 1974.77 1043.43L1969.27 1081.95Z"
          fill="#B5C9E7"
          stroke="black"
          stroke-width="6.4"
          stroke-linejoin="round"
          id="NewZealand"
          onClick={(e) => handleCountryClick(e, "NewZealand")}
        />
      </svg>
      {selectedCity && (
        <div className="selected-city-div">
          <h2 className="selected-city-title">{selectedCity}</h2>
        </div>
      )}
    </div>
  );
}

export default WorldMap;
