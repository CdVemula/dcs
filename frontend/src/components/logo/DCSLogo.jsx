import  React from 'react'

/**
 * DCSLogo is a functional React component that renders an SVG logo for 
 * Documents Consultancy Services (DCS). The logo is designed to be scalable 
 * and can accept additional props to customize its attributes.
 *
 * @component
 *
 * @param {Object} props - The props for the DCSLogo component.
 * @param {number} [props.width=48] - The width of the SVG logo. Defaults to 48 pixels.
 * @param {number} [props.height=48] - The height of the SVG logo. Defaults to 48 pixels.
 * @param {string} [props.className] - Optional CSS class name to apply to the SVG element.
 * @param {Object} [props.style] - Optional inline styles to apply to the SVG element.
 * 
 * @returns {JSX.Element} The rendered DCSLogo component.
 *
 * @example
 * // Usage example
 * <DCSLogo width={100} height={100} className="custom-logo" style={{ margin: '10px' }} />
 */
export function DCSLogo(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg"
             width="48" height="48" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="50" fill="#1976d2"></rect>
            <path fill="white" d="M20.30 67.42L11.28 67.42L11.28 32.58L20.49 32.58Q26.59 32.58 30.21 36.46Q33.84 40.33 33.91 47.08L33.91 47.08L33.91 52.73Q33.91 59.59 30.29 63.51Q26.66 67.42 20.30 67.42L20.30 67.42ZM20.87 38.44L18.31 38.44L18.31 61.58L20.42 61.58Q23.93 61.58 25.37 59.73Q26.80 57.87 26.88 53.33L26.88 53.33L26.88 47.27Q26.88 42.39 25.51 40.47Q24.15 38.54 20.87 38.44L20.87 38.44ZM55.54 55.81L62.57 55.81Q62.31 61.77 59.22 64.83Q56.14 67.90 50.51 67.90L50.51 67.90Q44.60 67.90 41.46 64.01Q38.31 60.12 38.31 52.92L38.31 52.92L38.31 47.06Q38.31 39.88 41.57 35.99Q44.82 32.10 50.61 32.10L50.61 32.10Q56.30 32.10 59.26 35.29Q62.21 38.47 62.62 44.43L62.62 44.43L55.56 44.43Q55.47 40.74 54.43 39.34Q53.39 37.94 50.61 37.94L50.61 37.94Q47.79 37.94 46.61 39.92Q45.44 41.89 45.37 46.41L45.37 46.41L45.37 52.99Q45.37 58.18 46.53 60.12Q47.69 62.06 50.51 62.06L50.51 62.06Q53.29 62.06 54.34 60.71Q55.40 59.35 55.54 55.81L55.54 55.81ZM81.62 58.28L81.62 58.28Q81.62 56.15 80.53 55.06Q79.44 53.97 76.57 52.80L76.57 52.80Q71.33 50.81 69.03 48.15Q66.74 45.48 66.74 41.84L66.74 41.84Q66.74 37.44 69.86 34.77Q72.98 32.10 77.79 32.10L77.79 32.10Q81.00 32.10 83.51 33.46Q86.02 34.81 87.37 37.27Q88.72 39.74 88.72 42.87L88.72 42.87L81.71 42.87Q81.71 40.43 80.67 39.15Q79.63 37.87 77.67 37.87L77.67 37.87Q75.83 37.87 74.80 38.96Q73.77 40.05 73.77 41.89L73.77 41.89Q73.77 43.32 74.92 44.49Q76.07 45.65 78.99 46.89L78.99 46.89Q84.08 48.73 86.39 51.41Q88.70 54.09 88.70 58.23L88.70 58.23Q88.70 62.78 85.80 65.34Q82.91 67.90 77.93 67.90L77.93 67.90Q74.56 67.90 71.78 66.51Q69.01 65.12 67.44 62.54Q65.87 59.95 65.87 56.44L65.87 56.44L72.93 56.44Q72.93 59.45 74.11 60.81Q75.28 62.18 77.93 62.18L77.93 62.18Q81.62 62.18 81.62 58.28Z"></path>
        </svg>
    );
}