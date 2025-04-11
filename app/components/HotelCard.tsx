"use client";
import React from "react";

interface HotelCardProps {
	discount?: string;
	network?: number;
	family?: number;
	isAd?: boolean;
	title: string;
	beds: number;
	baths: number;
	area: string;
	rating: number;
	reviewCount: number;
	price: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
	discount,
	network = 0,
	family = 0,
	isAd = false,
	title,
	beds,
	baths,
	area,
	rating,
	reviewCount,
	price,
}) => {
	return (
		<div className="card">
			{discount && <div className="discount-badge">{discount} today</div>}

			<div className="meta-info">
				{network > 0 && <span className="meta-item">{network} Network</span>}
				{family > 0 && <span className="meta-item">{family} Family</span>}
			</div>

			{isAd && <div className="ad-badge">ADS</div>}

			<h3 className="title">{title}</h3>

			<div className="details">
				<span>{beds} beds</span>
				<span>{baths} baths</span>
				<span>{area} sq. Ft</span>
			</div>

			<div className="rating-price">
				<div className="rating">
					<span className="rating-value">{rating}</span>
					<span className="review-count">({reviewCount})</span>
				</div>
				<div className="price">{price}</div>
			</div>

			<style jsx>{`
				.card {
				
					position: relative;
					border: 1px solid #eaeaea;
					border-radius: 8px;

					padding: 16px;
					max-width: 300px;
					font-family: Arial, sans-serif;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}

				.discount-badge {
					position: absolute;
					top: -10px;
					right: 10px;
					background-color: #ff4757;
					color: white;
					padding: 4px 8px;
					border-radius: 12px;
					font-size: 12px;
					font-weight: bold;
				}

				.meta-info {
					display: flex;
					gap: 8px;
					margin-bottom: 8px;
					font-size: 12px;
					color: #666;
				}

				.meta-item {
					background-color: #f1f2f6;
					padding: 2px 6px;
					border-radius: 4px;
				}

				.ad-badge {
					display: inline-block;
					background-color: #3742fa;
					color: white;
					padding: 2px 6px;
					border-radius: 4px;
					font-size: 10px;
					margin-bottom: 8px;
					font-weight: bold;
				}

				.title {
					margin: 8px 0;
					font-size: 18px;
					color: #2f3542;
				}

				.details {
					display: flex;
					gap: 12px;
					font-size: 14px;
					color: #57606f;
					margin-bottom: 12px;
				}

				.rating-price {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.rating {
					display: flex;
					align-items: center;
					gap: 4px;
				}

				.rating-value {
					font-weight: bold;
					color: #2f3542;
				}

				.review-count {
					font-size: 12px;
					color: #666;
				}

				.price {
					font-size: 18px;
					font-weight: bold;
					color: #2f3542;
				}
			`}</style>
		</div>
	);
};

export default HotelCard;
