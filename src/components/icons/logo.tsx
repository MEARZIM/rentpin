import React from "react";

const RentPinLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            // Changed viewBox to tightly wrap the actual content (approx 60x60 for the pin)
            viewBox="0 0 60 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Ensure the SVG takes up the full width/height of its parent container
            width="100%"
            height="100%"
            // Allows Tailwind classes like 'w-10' to override internal styles
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <defs>
                <linearGradient
                    id="rentpinGradient"
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#006948" />
                    <stop offset="1" stopColor="#00855d" />
                </linearGradient>
            </defs>

            {/* Pin + Home Icon */}
            <g transform="translate(5,5)">
                <path
                    d="M25 0C13 0 3 10 3 22C3 36 25 55 25 55C25 55 47 36 47 22C47 10 37 0 25 0Z"
                    fill="url(#rentpinGradient)"
                />

                <path
                    d="M17 26L25 19L33 26V34H28V29H22V34H17V26Z"
                    fill="white"
                />
            </g>
        </svg>
    );
};

export default RentPinLogo;