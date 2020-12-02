export function svgGenerator(type) {
  switch (type) {
    case "mastercard":
      return (
        <svg
          width="39"
          height="24"
          viewBox="0 0 39 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7736 21.4358H14.2252V2.5672H24.7736V21.4358Z"
            fill="#FF5F00"
          />
          <path
            d="M14.9009 12C14.9009 8.17242 16.7015 4.76292 19.5054 2.56571C17.4549 0.958991 14.8672 -1.0932e-07 12.0549 -1.0932e-07C5.39699 -1.0932e-07 0 5.3725 0 12C0 18.6275 5.39699 24 12.0549 24C14.8672 24 17.4549 23.041 19.5054 21.4343C16.7015 19.2371 14.9009 15.8276 14.9009 12Z"
            fill="#EB001B"
          />
          <path
            d="M39 12C39 18.6275 33.603 24 26.9451 24C24.1328 24 21.5451 23.041 19.4939 21.4343C22.2985 19.2371 24.0991 15.8276 24.0991 12C24.0991 8.17242 22.2985 4.76292 19.4939 2.56571C21.5451 0.958991 24.1328 -1.0932e-07 26.9451 -1.0932e-07C33.603 -1.0932e-07 39 5.3725 39 12Z"
            fill="#F79E1B"
          />
        </svg>
      );
    case "visa":
      return (
        <svg
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 0H0V20H32V0Z" fill="white" />
          <path
            d="M31.4668 16.7502H0.533218V19.4788H31.4668V16.7502Z"
            fill="#FCB315"
          />
          <path
            d="M31.4668 0.524628H0.533218V3.25329H31.4668V0.524628Z"
            fill="#0D357F"
          />
          <path
            d="M15.7326 6.25944L14.1021 13.7596H12.1299L13.7606 6.25944H15.7326ZM24.0295 11.1024L25.0677 8.28582L25.6649 11.1024H24.0295ZM26.231 13.7596H28.0544L26.4612 6.25944H24.7791C24.3998 6.25944 24.0804 6.47575 23.939 6.80925L20.9797 13.7596H23.051L23.4621 12.6394H25.9918L26.231 13.7596ZM21.0825 11.311C21.0911 9.33166 18.3015 9.2219 18.32 8.33757C18.3261 8.06878 18.5865 7.7825 19.1563 7.70933C19.4387 7.67347 20.2179 7.64461 21.1013 8.04502L21.4468 6.45388C20.9721 6.28509 20.3616 6.12242 19.6021 6.12242C17.6524 6.12242 16.2809 7.1413 16.2699 8.60154C16.2575 9.68135 17.2498 10.2833 17.9957 10.6429C18.7647 11.0105 19.0225 11.2464 19.0188 11.5748C19.0135 12.078 18.4053 12.3007 17.8394 12.3091C16.8473 12.3243 16.2723 12.0453 15.8139 11.8351L15.456 13.4793C15.9175 13.6872 16.768 13.8681 17.6484 13.8774C19.721 13.8774 21.0764 12.8703 21.0825 11.311ZM12.9147 6.25944L9.71925 13.7596H7.63481L6.06222 7.7739C5.96696 7.40586 5.88385 7.27059 5.59392 7.11506C5.1197 6.86158 4.33673 6.62457 3.64844 6.47706L3.69496 6.25944H7.05081C7.47822 6.25944 7.86281 6.5393 7.96059 7.02367L8.79125 11.364L10.8428 6.25944H12.9147Z"
            fill="#0D357F"
          />
        </svg>
      );
    case "AccountIcon":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 15.0001C30 6.72899 23.271 0 15.0001 0C11.1102 0 7.4227 1.48257 4.61684 4.17453C4.26259 4.51444 4.25097 5.07706 4.59077 5.43132C4.93057 5.78557 5.4933 5.79707 5.84756 5.45739C8.32084 3.08461 11.5713 1.77781 15.0001 1.77781C22.2908 1.77781 28.2223 7.70928 28.2223 15.0001C28.2223 18.3157 26.9886 21.4874 24.7484 23.9312C22.2485 26.6582 18.6954 28.2223 15.0001 28.2223C11.4548 28.2223 8.04019 26.7825 5.5611 24.2573C5.57579 24.1938 5.59215 24.131 5.60827 24.0681C5.62107 24.0179 5.63292 23.9674 5.64655 23.9177C5.66741 23.8418 5.69064 23.767 5.71351 23.6921C5.72714 23.6477 5.73947 23.6026 5.75369 23.5585C5.78142 23.4726 5.81165 23.388 5.84199 23.3034C5.85349 23.2714 5.8638 23.2388 5.87565 23.2069C5.96205 22.9743 6.05817 22.7469 6.1633 22.525C6.17906 22.4919 6.19625 22.4596 6.21237 22.4267C6.25005 22.3496 6.28774 22.2726 6.32769 22.197C6.34878 22.157 6.37142 22.118 6.39323 22.0785C6.43009 22.0113 6.46659 21.9438 6.50511 21.8778C6.52988 21.8352 6.55631 21.7938 6.58179 21.7517C6.61925 21.6899 6.65646 21.6281 6.69534 21.5674C6.72307 21.5243 6.75211 21.4823 6.78055 21.4397C6.81943 21.3817 6.85795 21.3234 6.89812 21.2662C6.92835 21.2232 6.95987 21.1814 6.99093 21.1389C7.03122 21.0839 7.07128 21.0288 7.11276 20.9749C7.14536 20.9325 7.17925 20.891 7.21268 20.8493C7.25451 20.797 7.29623 20.7445 7.33926 20.6933C7.37398 20.6518 7.40978 20.6114 7.44533 20.5706C7.48883 20.5207 7.53233 20.4708 7.57701 20.4219C7.61375 20.3816 7.65144 20.3424 7.68889 20.3028C7.73417 20.2551 7.77944 20.2075 7.82566 20.1609C7.8643 20.122 7.90365 20.0841 7.94288 20.0461C7.98982 20.0007 8.03687 19.9553 8.08487 19.911C8.12528 19.8736 8.16629 19.837 8.2073 19.8005C8.25578 19.7572 8.30461 19.7143 8.35403 19.6723C8.3961 19.6365 8.43877 19.6013 8.48168 19.5663C8.53181 19.5254 8.58218 19.4848 8.63314 19.4449C8.67688 19.4108 8.72109 19.3773 8.76541 19.344C8.81709 19.3053 8.869 19.267 8.9215 19.2296C8.9669 19.1971 9.01253 19.1652 9.05851 19.1337C9.11161 19.0973 9.16506 19.0615 9.21887 19.0263C9.26569 18.9957 9.31274 18.9656 9.36015 18.9359C9.41467 18.9018 9.46966 18.8683 9.52501 18.8354C9.57313 18.8068 9.62149 18.7784 9.6702 18.7508C9.72614 18.7189 9.78267 18.6879 9.83944 18.6574C9.88887 18.6307 9.93841 18.6043 9.98831 18.5785C10.0457 18.549 10.1036 18.5206 10.1617 18.4924C10.2123 18.4678 10.2629 18.4433 10.314 18.4197C10.3729 18.3926 10.4323 18.3665 10.4918 18.3407C10.5433 18.3183 10.5948 18.2959 10.6467 18.2745C10.7071 18.2498 10.7681 18.2262 10.8291 18.2028C10.8815 18.1827 10.9336 18.1624 10.9865 18.1433C11.0484 18.1209 11.1109 18.1001 11.1734 18.0791C11.2264 18.0613 11.2792 18.0432 11.3327 18.0264C11.3961 18.0064 11.4602 17.9881 11.5243 17.9697C11.5778 17.9543 11.6311 17.9383 11.685 17.924C11.7503 17.9065 11.8162 17.8909 11.8821 17.8749C11.9357 17.862 11.9892 17.8483 12.0431 17.8364C12.1104 17.8214 12.1786 17.8085 12.2465 17.7952C12.2998 17.7848 12.3529 17.7734 12.4066 17.764C12.4766 17.7516 12.5474 17.7414 12.6179 17.7308C12.6703 17.7228 12.7223 17.7139 12.775 17.7071C12.8493 17.6972 12.9244 17.6899 12.9993 17.6819C13.0489 17.6767 13.0982 17.6703 13.1479 17.6659C13.2311 17.6586 13.3152 17.6541 13.399 17.6491C13.441 17.6466 13.4829 17.6428 13.5251 17.6409C13.6514 17.6354 13.7784 17.6324 13.906 17.6324H16.0942C18.6626 17.6324 21.0734 18.7713 22.7085 20.7571C23.0205 21.136 23.5808 21.1903 23.9597 20.8782C24.3386 20.5661 24.3929 20.006 24.0809 19.627C22.6872 17.9345 20.8263 16.7525 18.7614 16.2032C19.9366 15.162 20.6792 13.6431 20.6792 11.9534C20.6792 8.82195 18.1316 6.27423 15.0001 6.27423C11.8685 6.27423 9.32092 8.82183 9.32092 11.9534C9.32092 13.6431 10.0636 15.1618 11.2386 16.203C11.2094 16.2109 11.18 16.2182 11.1509 16.2262C11.029 16.2597 10.9081 16.2956 10.7881 16.3335C10.7734 16.3382 10.7583 16.3422 10.7436 16.3468C10.609 16.3899 10.4758 16.4361 10.3434 16.4844C10.3021 16.4995 10.2616 16.5161 10.2206 16.5317C10.1299 16.5662 10.0394 16.6012 9.94991 16.6382C9.90024 16.6588 9.8513 16.6804 9.80199 16.7018C9.72199 16.7364 9.64211 16.7713 9.56317 16.8078C9.51162 16.8317 9.46065 16.8562 9.40957 16.8809C9.33348 16.9176 9.25798 16.9551 9.18284 16.9936C9.13211 17.0195 9.08151 17.0458 9.03125 17.0727C8.95599 17.1129 8.88144 17.1543 8.80725 17.1964C8.75937 17.2235 8.71137 17.2504 8.66396 17.2783C8.58597 17.3241 8.50905 17.3715 8.43225 17.4194C8.39041 17.4455 8.34822 17.4709 8.30674 17.4975C8.21145 17.5588 8.11746 17.6222 8.02431 17.6866C8.00297 17.7013 7.98116 17.7151 7.95995 17.7301C7.84617 17.8099 7.73417 17.8922 7.62371 17.9766C7.5917 18.001 7.56065 18.0267 7.52889 18.0515C7.45114 18.1124 7.37363 18.1737 7.29754 18.2367C7.25712 18.2703 7.21754 18.3049 7.17771 18.339C7.11158 18.3955 7.0458 18.4524 6.98121 18.5106C6.93949 18.5482 6.89848 18.5864 6.85735 18.6247C6.79596 18.6818 6.73504 18.7395 6.67495 18.7982C6.63418 18.838 6.59365 18.878 6.55347 18.9186C6.49409 18.9786 6.43566 19.0394 6.37782 19.1007C6.33954 19.1413 6.30126 19.1816 6.26368 19.2228C6.20383 19.2884 6.14528 19.3552 6.08709 19.4223C6.05378 19.4607 6.01989 19.4986 5.98706 19.5376C5.91843 19.6192 5.85147 19.7025 5.78534 19.7863C5.76495 19.8121 5.74374 19.8371 5.72359 19.8632C5.63813 19.9734 5.55493 20.0855 5.47386 20.1994C5.45229 20.2298 5.43191 20.2609 5.41069 20.2915C5.35191 20.376 5.29359 20.461 5.2373 20.5474C5.20885 20.5911 5.18159 20.6356 5.15374 20.6798C5.10645 20.7548 5.05952 20.8301 5.01412 20.9064C4.98509 20.9551 4.957 21.0044 4.92879 21.0537C4.88648 21.1276 4.84488 21.2019 4.80434 21.2769C4.77673 21.328 4.74959 21.3794 4.7228 21.431C4.68357 21.5066 4.64541 21.5829 4.60807 21.6596C4.58283 21.7113 4.5577 21.7628 4.53329 21.815C4.4956 21.8958 4.45945 21.9775 4.42377 22.0595C4.40244 22.1086 4.38051 22.1572 4.35977 22.2067C4.31983 22.3023 4.28214 22.3992 4.24493 22.4964C4.23082 22.5331 4.21577 22.5694 4.20214 22.6063C4.20013 22.6118 4.19787 22.617 4.19586 22.6225C2.62724 20.403 1.77781 17.751 1.77781 15.0001C1.77781 14.5091 1.37981 14.1112 0.888903 14.1112C0.397991 14.1112 0 14.5091 0 15.0001C0 18.7617 1.39973 22.3601 3.94116 25.1325C6.77688 28.2259 10.8078 30 14.9999 30C19.1924 30 23.2231 28.2259 26.0588 25.1324C26.0591 25.1321 26.0593 25.1318 26.0596 25.1315C28.6006 22.3592 30 18.7612 30 15.0001ZM15.0001 8.05204C17.1512 8.05204 18.9014 9.80211 18.9014 11.9534C18.9014 14.1046 17.1513 15.8547 15.0001 15.8547C12.8488 15.8547 11.0987 14.1046 11.0987 11.9534C11.0987 9.80211 12.8488 8.05204 15.0001 8.05204Z"
            fill="#0083E1"
          />
        </svg>
      );
    case "unionpay":
      return (
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.9418 0C5.19465 0 3.57289 1.29912 3.1695 3.02163C3.1695 3.02207 0.0910212 16.1846 0.0910212 16.1846C-0.136707 17.1544 0.0676213 18.1313 0.650826 18.8654C1.22474 19.5861 2.11102 20 3.08127 20H23.0571C24.8035 20 26.4256 18.7014 26.8309 16.9799C26.8309 16.9779 29.9089 3.81542 29.9089 3.81542C30.1368 2.84574 29.9323 1.8669 29.3486 1.13413C28.7742 0.413473 27.889 0 26.9186 0H6.9418Z"
            fill="white"
          />
          <path
            d="M7.22152 2.13377H13.6036C14.4948 2.13377 15.0488 2.84716 14.8405 3.72631L11.8695 16.2747C11.6602 17.1537 10.7683 17.8667 9.87746 17.8667H3.49535C2.60347 17.8667 2.04982 17.1537 2.25897 16.2747L5.23052 3.72631C5.43877 2.84716 6.32964 2.13377 7.22152 2.13377Z"
            fill="#ED1C24"
          />
          <path
            d="M13.0738 2.13377H19.4555C20.3472 2.13377 20.9011 2.84716 20.6918 3.72631L17.7203 16.2747C17.511 17.1537 16.6202 17.8667 15.7274 17.8667H9.34673C8.45395 17.8667 7.90109 17.1537 8.11023 16.2747L11.081 3.72631C11.2901 2.84716 12.182 2.13377 13.0738 2.13377Z"
            fill="#00569E"
          />
          <path
            d="M20.1239 2.13377H26.505C27.3968 2.13377 27.9506 2.84716 27.7415 3.72631L24.7709 16.2747C24.5617 17.1537 23.6699 17.8667 22.7779 17.8667H16.3959C15.504 17.8667 14.9503 17.1537 15.1595 16.2747L18.1301 3.72631C18.3392 2.84716 19.2311 2.13377 20.1239 2.13377Z"
            fill="#00898E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0729 11.3974L20.4706 13.9285H20.6788L20.5529 14.4539H20.3445L20.3062 14.6143H19.5666L19.6049 14.4539H18.1014L18.219 13.9694L18.3722 13.9671L18.9838 11.3974L19.1053 10.8779H19.8607L19.801 11.1412C19.801 11.1412 19.9915 10.9974 20.1782 10.9492C20.366 10.9009 21.4595 10.8821 21.4595 10.8821L21.3326 11.3974H21.0729ZM19.7422 11.3974L19.588 12.0451C19.588 12.0451 19.8047 11.945 19.9252 11.9128C20.0466 11.8811 20.2315 11.8688 20.2315 11.8688L20.3427 11.3974H19.7422ZM19.5106 12.3676L19.3508 13.0388C19.3508 13.0388 19.5712 12.9235 19.6928 12.8912C19.8132 12.8592 19.9989 12.8389 19.9989 12.8389L20.113 12.3676H19.5106ZM19.138 13.9362H19.7394L19.8748 13.3661H19.2734L19.138 13.9362Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5014 10.8833H22.3064L22.3159 11.1781C22.3112 11.2259 22.3541 11.2499 22.4484 11.2515H22.5838L22.4624 11.7395H22.0273C21.65 11.7661 21.507 11.6062 21.5165 11.4275L21.5014 10.8833Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6382 13.1969H20.8696L20.9724 12.7624H21.8493L21.9474 12.3647H21.0808L21.1975 11.8763H23.6088L23.4911 12.3647H22.6814L22.5834 12.7624H23.394L23.2903 13.1969H22.4144L22.2696 13.3803H22.6254L22.7515 13.9277C22.7615 13.9816 22.7673 14.017 22.786 14.0394C22.8047 14.0588 22.9129 14.0685 22.9746 14.0685H23.0821L22.9551 14.6025H22.6814C22.6394 14.6025 22.5759 14.6008 22.49 14.5933C22.4067 14.587 22.3444 14.5401 22.2873 14.5143C22.235 14.4905 22.1556 14.4294 22.1304 14.3279L22.0081 13.7822L21.6476 14.3214C21.5309 14.4887 21.3684 14.6183 21.0798 14.6183H20.5195L20.6325 14.145H20.8474C20.9089 14.145 20.963 14.1203 21.0013 14.1006C21.0406 14.0826 21.0752 14.062 21.1135 14.0045L21.6382 13.1969Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1465 12.0079H15.1792L15.0625 12.4857H14.2462L14.1468 12.8927H14.9765L14.8561 13.3869H14.0262L13.8652 14.046C13.8465 14.1201 14.0683 14.1301 14.1487 14.1301L14.5608 14.0759L14.4284 14.6189H13.4903C13.4155 14.6189 13.3581 14.6105 13.2755 14.5904C13.1951 14.5716 13.1583 14.5362 13.1196 14.4829C13.0826 14.4315 13.0275 14.3864 13.0555 14.2717L13.2695 13.3952H12.8071L12.9299 12.8927H13.3932L13.4916 12.4857H13.0303L13.1465 12.0079Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4614 11.1507H15.2963L15.1748 11.6482H14.035L13.9173 11.7553C13.8692 11.8048 13.8483 11.7841 13.7824 11.8196C13.719 11.8527 13.5877 11.9151 13.4121 11.9151H13.0471L13.1642 11.4354H13.2736C13.3668 11.4354 13.43 11.4273 13.4612 11.4067C13.4948 11.386 13.5326 11.334 13.5737 11.2517L13.7595 10.877H14.5902L14.4614 11.1507Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.637 10.8806H16.3487L16.2665 11.2333C16.2665 11.2333 16.4803 11.0565 16.6344 10.9972C16.7875 10.9374 17.1386 10.887 17.1386 10.887L18.2873 10.8797L17.9772 12.1639C17.9241 12.3836 17.8568 12.5259 17.8139 12.5915C17.7728 12.6559 17.7271 12.7134 17.6298 12.7675C17.5347 12.8171 17.4487 12.8456 17.3684 12.8538C17.2909 12.8603 17.1751 12.8626 17.0144 12.8644H15.9069L15.6594 13.881C15.6342 13.9815 15.6238 14.0288 15.6444 14.0554C15.6632 14.0802 15.7024 14.108 15.7546 14.108L16.2394 14.0619L16.1077 14.619H15.5596C15.3868 14.619 15.2588 14.6168 15.171 14.6086C15.0861 14.6021 14.9983 14.6086 14.9376 14.5625C14.8824 14.5195 14.8021 14.4625 14.8002 14.4028C14.8021 14.3472 14.8189 14.2559 14.8469 14.1308L15.637 10.8806ZM17.2283 12.1796H16.0637L16.0067 12.4101H17.0154C17.1341 12.3981 17.1591 12.4128 17.1685 12.4087L17.2283 12.1796ZM16.1141 11.971C16.1141 11.971 16.3279 11.7661 16.7148 11.6991C16.8025 11.6834 17.3582 11.688 17.3582 11.688L17.4244 11.4134H16.2496L16.1141 11.971Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8401 12.9549L17.7953 13.2641C17.7709 13.3591 17.7532 13.4322 17.6833 13.4955C17.6095 13.5607 17.5217 13.6279 17.3088 13.6279L16.9166 13.643L16.9334 13.9911C16.9363 14.0923 16.9615 14.0818 16.9783 14.0976C16.9968 14.1146 17.0145 14.1222 17.0324 14.1267L17.1575 14.1222L17.5311 14.0996L17.4086 14.6108H16.9772C16.6728 14.6108 16.4487 14.6017 16.3712 14.5475C16.2955 14.4983 16.2815 14.4418 16.2778 14.3468L16.2199 12.9857H16.9101L16.9184 13.2641H17.0837C17.1416 13.2641 17.179 13.2585 17.2024 13.2438C17.222 13.2291 17.235 13.2062 17.2444 13.1714L17.2967 12.9549H17.8401Z"
            fill="white"
          />
          <path
            d="M7.97669 6.13967C7.9525 6.25212 7.50891 8.26133 7.50791 8.26221C7.41263 8.66742 7.34355 8.95963 7.10921 9.14698C6.97284 9.25448 6.81879 9.30724 6.63763 9.30724C6.34709 9.30724 6.17714 9.16449 6.14736 8.89475L6.14165 8.80334C6.14165 8.80334 6.23043 8.25857 6.23133 8.25582C6.23133 8.25582 6.69731 6.42394 6.77949 6.18053C6.78229 6.16764 6.78419 6.16037 6.78699 6.152C5.88201 6.16313 5.72056 6.15475 5.70937 6.13911C5.70466 6.1585 5.68037 6.27239 5.68037 6.27239L5.20599 8.3381L5.1649 8.513L5.08731 9.08453C5.08731 9.25492 5.12101 9.39403 5.1892 9.5099C5.40483 9.88284 6.02218 9.9389 6.37049 9.9389C6.81968 9.9389 7.24088 9.84241 7.5266 9.6739C8.01968 9.38489 8.15045 8.93385 8.26622 8.53602L8.31951 8.33116C8.31951 8.33116 8.79848 6.42758 8.88077 6.18009C8.88357 6.16676 8.88536 6.16037 8.88726 6.152C8.23263 6.16169 8.03838 6.15387 7.97669 6.13967Z"
            fill="white"
          />
          <path
            d="M10.6257 9.9178C10.3035 9.91416 10.1924 9.91416 9.81699 9.93068L9.80199 9.9059C9.83468 9.76338 9.87107 9.6257 9.90376 9.48329L9.94855 9.29263C10.0186 8.99172 10.0868 8.64676 10.0943 8.54069C10.1017 8.47637 10.1223 8.31743 9.93836 8.31743C9.85987 8.31743 9.77769 8.35422 9.69552 8.3909C9.65073 8.54895 9.55915 8.99635 9.51627 9.19934C9.42379 9.62977 9.41718 9.67846 9.3762 9.88938L9.349 9.9178C9.01849 9.91416 8.9035 9.91416 8.52351 9.93068L8.50571 9.90227C8.5693 9.64585 8.63278 9.39 8.69257 9.13414C8.85312 8.44377 8.89052 8.17965 8.93441 7.8305L8.9643 7.80583C9.33601 7.75703 9.42468 7.74514 9.82808 7.66374L9.86088 7.70009L9.80009 7.92335C9.86737 7.88292 9.93366 7.8425 10.0037 7.80583C10.1924 7.71661 10.4033 7.68808 10.5182 7.68808C10.6939 7.68808 10.8871 7.73688 10.9674 7.93612C11.045 8.11433 10.9936 8.33396 10.8927 8.76846L10.8414 8.98809C10.7378 9.47128 10.7209 9.5605 10.6649 9.88938L10.6257 9.9178Z"
            fill="white"
          />
          <path
            d="M11.93 9.91806C11.7358 9.9163 11.6115 9.91531 11.4901 9.91674C11.3697 9.91806 11.252 9.92258 11.0717 9.93095L11.0614 9.9163L11.0502 9.90253C11.0988 9.71871 11.1249 9.65438 11.1502 9.59006C11.1744 9.5253 11.1978 9.46009 11.2408 9.27495C11.2968 9.03473 11.3314 8.8639 11.3566 8.7173C11.3819 8.5718 11.3977 8.45042 11.4155 8.31043L11.4304 8.29843L11.4463 8.28554C11.6386 8.25944 11.761 8.24193 11.8851 8.2221C12.0103 8.20238 12.1373 8.17991 12.3381 8.14313L12.3511 8.17617C12.3137 8.3264 12.2764 8.47752 12.2401 8.62786C12.2036 8.77799 12.1682 8.9291 12.1326 9.07933C12.0598 9.3972 12.0318 9.51748 12.015 9.59931C11.9981 9.68104 11.9934 9.72521 11.9655 9.88965L11.9477 9.90419L11.93 9.91806Z"
            fill="white"
          />
          <path
            d="M14.8137 8.83072C14.9266 8.34422 14.8407 8.11733 14.7296 7.9791C14.5614 7.76862 14.2678 7.69978 13.9605 7.69978C13.7766 7.69978 13.3387 7.71994 12.9959 8.03241C12.7512 8.25468 12.6355 8.55867 12.5673 8.85088C12.4982 9.14716 12.4178 9.68641 12.9165 9.8807C13.0733 9.94602 13.2938 9.96628 13.4366 9.96628C13.8045 9.96628 14.1801 9.86517 14.4615 9.56889C14.6801 9.33374 14.7792 8.97677 14.8137 8.83072ZM13.9755 8.79437C13.9568 8.87566 13.8849 9.1835 13.7851 9.31303C13.7187 9.40665 13.6356 9.4636 13.5459 9.4636C13.5207 9.4636 13.362 9.46359 13.3582 9.23219C13.3564 9.11863 13.3798 9.00111 13.4096 8.87147C13.4945 8.50635 13.5945 8.19862 13.8485 8.19862C14.0493 8.19862 14.0614 8.42551 13.9755 8.79437Z"
            fill="white"
          />
          <path
            d="M21.889 9.3516C21.8228 9.44389 21.6668 9.50084 21.577 9.50084C21.5519 9.50084 21.3932 9.50084 21.3894 9.27119C21.3876 9.15819 21.4108 9.04144 21.4407 8.9129C21.5256 8.55086 21.6256 8.245 21.8796 8.245C22.045 8.245 22.1253 8.40449 22.103 8.66398C22.0898 8.72225 22.0786 8.775 22.0627 8.84395C22.0356 8.95707 22.0039 9.0682 21.9759 9.18066C21.9497 9.24685 21.9216 9.3093 21.889 9.3516ZM23.1591 7.72502C22.7575 7.79705 22.652 7.81325 22.2671 7.86567L22.2373 7.88946C22.2326 7.92162 22.2289 7.95103 22.2244 7.98187C22.1645 7.88528 22.0804 7.8008 21.945 7.7498C21.7732 7.6846 21.3699 7.77007 21.027 8.07968C20.7824 8.30106 20.6665 8.60285 20.5985 8.89264C20.5294 9.18671 20.449 9.72222 20.9477 9.91519C21.1045 9.97962 21.2494 9.99879 21.3923 9.99141C21.5453 9.9837 21.6855 9.90462 21.8172 9.79624C21.8048 9.84217 21.7938 9.88854 21.7815 9.93447L21.8041 9.9631C22.1636 9.94647 22.2737 9.94647 22.6613 9.95099L22.6968 9.92246C22.7528 9.59633 22.8071 9.27857 22.9547 8.65065C23.0246 8.3525 23.0983 8.05479 23.1721 7.75718L23.1591 7.72502Z"
            fill="white"
          />
          <path
            d="M17.0053 9.9178C16.6831 9.91416 16.5729 9.91416 16.1966 9.93068L16.1816 9.9059C16.2152 9.76338 16.2507 9.6257 16.2844 9.48329L16.3283 9.29263C16.3982 8.99172 16.4665 8.64676 16.4748 8.54069C16.4813 8.47637 16.5019 8.31743 16.3178 8.31743C16.2404 8.31743 16.1583 8.35422 16.076 8.3909C16.0313 8.54895 15.9397 8.99635 15.8959 9.19934C15.8044 9.62977 15.7968 9.67846 15.7558 9.88938L15.7287 9.9178C15.3989 9.91416 15.2841 9.91416 14.904 9.93068L14.8863 9.90227C14.9498 9.64585 15.0133 9.39 15.0731 9.13414C15.2337 8.44377 15.2701 8.17965 15.3149 7.8305L15.3448 7.80583C15.7156 7.75703 15.8052 7.74514 16.2078 7.66374L16.2404 7.70009L16.1807 7.92335C16.247 7.88292 16.3141 7.8425 16.3832 7.80583C16.5719 7.71661 16.783 7.68808 16.8978 7.68808C17.0735 7.68808 17.2668 7.73688 17.348 7.93612C17.4245 8.11433 17.3731 8.33396 17.2723 8.76846L17.2219 8.98809C17.1172 9.47128 17.1006 9.5605 17.0445 9.88938L17.0053 9.9178Z"
            fill="white"
          />
          <path
            d="M20.1342 7.31702C20.0764 7.56771 19.913 7.77907 19.6991 7.88293C19.5216 7.96972 19.3077 7.9771 19.0856 7.9771H18.9408L18.9538 7.91972C18.9538 7.91972 19.2172 6.78878 19.2162 6.79242L19.2237 6.73503L19.2293 6.68955L19.334 6.69968C19.334 6.69968 19.8784 6.74737 19.8924 6.75012C20.1071 6.83097 20.1978 7.04222 20.1342 7.31702ZM19.7869 6.13553C19.786 6.13553 19.5197 6.14104 19.5197 6.14104C18.8259 6.14787 18.5476 6.14611 18.4327 6.1319C18.4224 6.18058 18.4037 6.27012 18.4037 6.27057C18.4037 6.27057 18.1562 7.40426 18.1562 7.40514C18.1562 7.40514 17.5614 9.81592 17.5334 9.92893C18.1385 9.92056 18.3879 9.92012 18.4916 9.93157C18.5158 9.81768 18.6569 9.14615 18.6579 9.14472C18.6579 9.14472 18.7782 8.64996 18.7857 8.63443C18.7857 8.63443 18.8222 8.582 18.8614 8.56185H18.9156C19.4377 8.56185 20.0287 8.56185 20.491 8.22647C20.8048 7.99869 21.0205 7.66056 21.1166 7.24896C21.1409 7.14707 21.1597 7.02669 21.1597 6.90542C21.1597 6.75012 21.1278 6.59251 21.0344 6.46816C20.7982 6.14522 20.3303 6.14104 19.7869 6.13553Z"
            fill="white"
          />
          <path
            d="M12.2823 7.98002C12.4944 7.83618 12.5214 7.63451 12.3411 7.52987C12.161 7.42601 11.8434 7.45861 11.6305 7.60246C11.4166 7.74762 11.3914 7.94918 11.5707 8.05349C11.751 8.15779 12.0694 8.12508 12.2823 7.98002Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.8323 7.72127L25.8007 7.68536C25.4056 7.76577 25.3337 7.77821 24.9704 7.82601L24.9414 7.85025C24.9405 7.8563 24.9396 7.86225 24.9387 7.8682L24.9368 7.86357C24.6641 8.48004 24.6734 8.34688 24.4532 8.83007C24.4523 8.80804 24.4512 8.79152 24.4503 8.77081L24.3952 7.72127L24.3615 7.68536C23.946 7.76577 23.9358 7.77821 23.5529 7.82601L23.522 7.85025C23.5202 7.86456 23.5183 7.87833 23.5164 7.89309L23.5202 7.89673C23.5669 8.13926 23.5566 8.08595 23.6043 8.46539C23.6257 8.65098 23.6557 8.83976 23.6771 9.02491C23.7162 9.33077 23.7367 9.48596 23.7825 9.95285C23.5239 10.3754 23.4623 10.5343 23.2157 10.9045V10.9054L23.0392 11.1801C23.0196 11.2095 23.0009 11.2277 22.9766 11.237C22.9486 11.2489 22.9104 11.2536 22.8599 11.2536H22.7254L22.6134 11.7477L23.114 11.7405C23.4043 11.7381 23.5883 11.5972 23.6883 11.419L23.9946 10.8931L25.8323 7.72127Z"
            fill="white"
          />
        </svg>
      );
    case "back":
      return (
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L1 8L8 15"
            stroke="#0083E1"
            strokeWidth="2"
            strokelinejoincap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}