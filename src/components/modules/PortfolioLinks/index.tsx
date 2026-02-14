import Link from "next/link";
import React from "react";

const PortfolioLinksComponent = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <ul className="flex gap-2 items-center">
      <li className="flex items-center justify-center bg-stone-100 h-13 w-13 p-2">
        <Link href={"https://www.instagram.com/gabrieljesus.dev/"}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="22" height="22" rx="4.224" fill="black" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7142 16.7143C14.0279 16.7143 16.7142 14.028 16.7142 10.7143C16.7142 7.40058 14.0279 4.71429 10.7142 4.71429C7.40052 4.71429 4.71423 7.40058 4.71423 10.7143C4.71423 14.028 7.40052 16.7143 10.7142 16.7143ZM10.7142 14.7143C12.9233 14.7143 14.7142 12.9234 14.7142 10.7143C14.7142 8.50515 12.9233 6.71429 10.7142 6.71429C8.50509 6.71429 6.71423 8.50515 6.71423 10.7143C6.71423 12.9234 8.50509 14.7143 10.7142 14.7143Z"
              fill="white"
            />
            <path
              d="M18.6001 2.8C18.0478 2.8 17.6001 3.24772 17.6001 3.8C17.6001 4.35228 18.0478 4.8 18.6001 4.8C19.1524 4.8 19.6001 4.35228 19.6001 3.8C19.6001 3.24772 19.1524 2.8 18.6001 2.8Z"
              fill="white"
            />
          </svg>
        </Link>
      </li>

      <li className="flex items-center justify-center bg-stone-100 h-13 w-13 p-2 ">
        <Link href={"https://www.linkedin.com/in/gabrieljesusdev/"}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_21_3)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 20H16V13.001C16 11.081 15.153 10.0098 13.634 10.0098C11.981 10.0098 11 11.126 11 13.001V20H7V7H11V8.46191C11 8.46191 12.255 6.25977 15.083 6.25977C17.912 6.25977 20 7.98611 20 11.5581V20ZM2.442 4.9209C1.093 4.9209 0 3.81896 0 2.45996C0 1.10196 1.093 0 2.442 0C3.79 0 4.883 1.10196 4.883 2.45996C4.884 3.81896 3.79 4.9209 2.442 4.9209ZM0 20H5V7H0V20Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_21_3">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </li>
      <li className="flex items-center justify-center bg-stone-100 h-13 w-13  ">
        <Link href={"http://github.com/gabrieljesusdev/"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27187 6.51588 3.91847 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18M9 18V22M9 18C4.49 20 4 16 2 16"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
      {children}
    </ul>
  );
};

export default PortfolioLinksComponent;
