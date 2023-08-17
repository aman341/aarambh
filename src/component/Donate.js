import React from 'react'
import "./Donate.css"

export default function Donate() {
  return (
    <div>

        <div className='DonateLines'>
            <div className='Donateitem'>
                <div className="Donateheading">
                    <p>
                    <b className="btag">Donation Culture of Giving</b>
                    </p>
                </div>

                <div className="heading1">
                    <p className="ptag"><b>Donating is not just an act of giving, but an expression of empathy and compassion towards those in need.</b></p>
                    <p className="ptag"><b>Every donation, no matter how small, has the power to make a difference in someone's life and create a ripple effect of kindness.</b></p>
                    <p className="ptag"><b>Donating is an opportunity to share our blessings and be a source of hope for those facing adversity.</b></p>
                    <p className="ptag"><b>Those who understand the joy of giving know that the truest wealth lies in the ability to make a positive difference in the lives of others.</b></p>
                </div>
            </div>   
        </div>
        
        
        
        <div className='DonateOnline'>
        <div className='DonateOnlineitemtext'>
            <p className='ptag'>Scan to Donate</p>
            <p className='ptag1'>Easy and Secure</p>
        </div>
            <div className='DonateOnlineitem1'>
                <img src={require("./image/Donation_photo.jpg")} className="card-img-top" alt=""/>
            </div>
            <div className='DonateOnlineitem2'>
                <img src={require("./image/QR_code.jpg")} className="card-img-top" alt=""/> 
            </div>
            <div className='DonateOnlineitem3'>
                <img src={require("./image/QR_code.jpg")} className="card-img-top" alt=""/>
            </div>
            <div className='DonateOnlineitem4'>
            <img src={require("./image/donate_photo1.jpg")} className="card-img-top" alt=""/>
            </div>
        </div>

        <div className='DonatePhoto'>
            <div className='DonatePhotoitem'>
                <img src={require("./image/Disaster and Food Relief.jpg")} className="card-img-top" alt=""/>
                <p className='ptag'>Disaster and Food Relief</p>
            </div> 
            <div className='DonatePhotoitem'>
                <img src={require("./image/Clothes & Food Support.jpg")} className="card-img-top" alt=""/>
                <p className='ptag'>Clothes Support</p>
            </div> 
            <div className='DonatePhotoitem'>
                <img src={require("./image/Charitable Medical Camps.jpg")} className="card-img-top" alt=""/>
                <p className='ptag'>Charitable Medical Camps</p>
            </div> 
            <div className='DonatePhotoitem'>
                <img src={require("./image/Educational Materials.jpg")} className="card-img-top" alt=""/>
                <p className='ptag'>Child Education</p>
            </div> 
        </div> 

        <div className="Donatebank">
            <div className="Donatebankitemheading">
                <p>BANK ACCOUNT DETAILS</p>
                <p>Directly Send Your Donations into the following bank account</p>
            </div>
            <div className="Donatebankitem">
                <p className='ptag'>Accout Name</p>
                <p className='ptag'>Account Number</p>
                <p className='ptag'>IFSC Code</p>
                <p className='ptag'>Account Type</p>
                <p className='ptag'>Bank Name</p>
            </div>
            <div className="Donatebankitem1">
                <p className='ptag'>Aarambh Ek Pahal Sanstha</p>
                <p className='ptag'>5973000100024898</p>
                <p className='ptag'>PUNB0597300</p>
                <p className='ptag'>Saving Account</p>
                <p className='ptag'>Punjab National Bank</p>
            </div>
           
        </div>
    </div>
  )
}
