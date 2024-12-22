"use client";
import React,{ useEffect } from 'react'
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Scrolltopbtn = () => {
    useEffect(() => {
        const scrollToTopBtn = document.querySelector('.scroll_to_top_btn');
        if (scrollToTopBtn) {
          scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }
      }, [])
  return (
    <div className="scroll_to_top_btn">
        <div className="light_skew_hover">
          <div className="effect_parent"></div>
          <div className="light_skew">
      <HiOutlineChevronDoubleUp/>
          </div>
        </div>
      </div>
  )
}

export default Scrolltopbtn