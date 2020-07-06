import React from 'react'
import Lottie from 'react-lottie'
import SuccessAnim1 from '../Assets/14333-succses.json'
export default function Success() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: SuccessAnim1,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="success">
            <Lottie options={defaultOptions}
              height={200}
              width={300}
            />
            <h3>Order Successful</h3>
            <h3>CYPHEROCK X1 will be delivered soon!</h3>
        </div>
    )
}
