export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} SkyWay Airport. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-5 w-5"
              viewBox="0 0 30 30"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-5 w-5"
              viewBox="0 0 50 50"
            >
              <path d="M 30.140625 2 C 26.870375 2 24.045399 2.9969388 22.0625 4.9667969 C 20.079601 6.936655 19 9.823825 19 13.367188 L 19 18 L 13 18 A 1.0001 1.0001 0 0 0 12 19 L 12 27 A 1.0001 1.0001 0 0 0 13 28 L 19 28 L 19 47 A 1.0001 1.0001 0 0 0 20 48 L 28 48 A 1.0001 1.0001 0 0 0 29 47 L 29 28 L 36 28 A 1.0001 1.0001 0 0 0 36.992188 27.125 L 37.992188 19.125 A 1.0001 1.0001 0 0 0 37 18 L 29 18 L 29 14 C 29 12.883334 29.883334 12 31 12 L 37 12 A 1.0001 1.0001 0 0 0 38 11 L 38 3.3457031 A 1.0001 1.0001 0 0 0 37.130859 2.3554688 C 36.247185 2.2382213 33.057174 2 30.140625 2 z M 30.140625 4 C 32.578477 4 34.935105 4.195047 36 4.2949219 L 36 10 L 31 10 C 28.802666 10 27 11.802666 27 14 L 27 19 A 1.0001 1.0001 0 0 0 28 20 L 35.867188 20 L 35.117188 26 L 28 26 A 1.0001 1.0001 0 0 0 27 27 L 27 46 L 21 46 L 21 27 A 1.0001 1.0001 0 0 0 20 26 L 14 26 L 14 20 L 20 20 A 1.0001 1.0001 0 0 0 21 19 L 21 13.367188 C 21 10.22255 21.920305 7.9269075 23.472656 6.3847656 C 25.025007 4.8426237 27.269875 4 30.140625 4 z"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-5 w-5"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
