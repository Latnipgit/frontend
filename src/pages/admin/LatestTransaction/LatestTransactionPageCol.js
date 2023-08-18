import React from 'react';
import { Link } from 'react-router-dom';
import * as moment from "moment";
import { Badge } from 'reactstrap';

const renderStarRating = (rating) => {
    const starCount = 5; // Number of stars
    const fullStarCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStarCount; i++) {
        stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const remainingStars = starCount - fullStarCount - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
};
const formateDate = (date, format) => {
    const dateFormat = format ? format : "DD MMM Y";
    const date1 = moment(new Date(date)).format(dateFormat);
    return date1;
};
const toLowerCase1 = str => {
    return (
      str === "" || str === undefined ? "" : str.toLowerCase()
    );
  };

const CheckBox = (cell) => {
    return cell.value ? cell.value : '';
};

const OrderId = (cell) => {
    return (
        <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
    );
};

const BillingName = (cell) => {
    return cell.value ? cell.value : '';
};

const Date = (cell) => {
    return cell.value ? cell.value : '';
};

const Total = (cell) => {
    return cell.value ? cell.value : '';
};

const PaymentStatus = (cell) => {
    return (
       
        <Badge
          className={"font-size-11 badge-soft-" + 
          (cell.value === "Paid" ? "success" : "danger" && cell.value === "Refund" ? "warning" : "danger")}          
        >
          {cell.value}
        </Badge>
    )
};
const PaymentMethod = (cell) => {
    return (
        <Badge>
        <div className="review">
                                   <div className="review-rating d-flex align-items-center">
                                       {renderStarRating(3.5)}
                                       {/* <h5 className="ml-2 mb-1">4.5</h5> */}
                                   </div>
                                   {/* <p>{review.comment}</p> */}
                               </div>
       </Badge>
        // <span>
        // <i
        // className={
        //   (cell.value === "Paypal" ? "fab fa-cc-paypal me-1" : "" || 
        //   cell.value === "COD" ? "fab fas fa-money-bill-alt me-1" : "" ||
        //   cell.value === "Mastercard" ? "fab fa-cc-mastercard me-1" : "" ||
        //   cell.value === "Visa" ? "fab fa-cc-visa me-1" : ""
        //   )}
        //   />{" "}
        //     {cell.value}
        // </span>
    )
};
export {
    CheckBox,
    OrderId,
    BillingName,
    Date,
    Total,
    PaymentStatus,
    PaymentMethod
};