import React from "react";

const MobileFirst = () => {
  return (
    <>
      <div class="mobile_first_experience">
        <div class="ccontainer">
          <div class="mobile_first_expe_cont">
            <div class="mobile_first_expe_title">
              <h3>Ensure your website</h3>
              <h2>With Mobile-first Experience</h2>
              <p>
                Responsive on all devices and specially optimized for mobile
                <br />
                Convert 80% of mobile visitors into customers with Foysal's
                smooth designs.
              </p>
            </div>
            <div class="mobile_first_four_demo">
              <div class="mobile_demo">
                <div class="mobile_video">
                  <img src="/img/mobile1.png" alt="" />
                </div>
                <h3>Menu Mobile</h3>
              </div>
              <div class="mobile_demo">
                <div class="mobile_video">
                  <img src="/img/mobile2.png" alt="" />
                </div>
                <h3>Filters Collection</h3>
              </div>
              <div class="mobile_demo">
                <div class="mobile_video">
                  <img className="iimg" src="/img/mobile3.png" alt="" />
                </div>
                <h3>Add to cart</h3>
              </div>
              <div class="mobile_demo">
                <div class="mobile_video">
                  <img src="/img/mobile4.png" alt="" />
                </div>
                <h3>Check out</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="bg_blur_two"></div>
      </div>
    </>
  );
};

export default MobileFirst;
