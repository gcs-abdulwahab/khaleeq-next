import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// Allow domain placeholder.co for images
};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
	},
};

export default nextConfig;
