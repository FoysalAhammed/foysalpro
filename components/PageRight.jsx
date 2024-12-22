"use client";
import React, { useEffect, useRef, useState } from "react";

const PageRight = () => {
  const [activeTab, setActiveTab] = useState("productpages");
  const productRef = useRef(null);
  const innerRef = useRef(null);
  const portfolioRef = useRef(null);
  const shopRef = useRef(null);
  const blogRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (productRef.current) observer.observe(productRef.current);
    if (innerRef.current) observer.observe(innerRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (shopRef.current) observer.observe(shopRef.current);
    if (blogRef.current) observer.observe(blogRef.current);

    return () => {
      if (productRef.current) observer.unobserve(productRef.current);
      if (innerRef.current) observer.unobserve(innerRef.current);
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
      if (shopRef.current) observer.unobserve(shopRef.current);
      if (blogRef.current) observer.unobserve(blogRef.current);
    };
  }, []);

  const hadleTabChange = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
    document.getElementById(tab).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div class="pages_rightside_section">
        <div class="ccontainer">
          <div class="pages_right_sec_cont">
            <div class="left_pages_name_title">
              <a
                href="#productpages"
                className={activeTab === "productpages" ? "active" : ""}
                onClick={(e) => hadleTabChange("productpages", e)}
              >
                Product Pages
              </a>
              <a
                href="#innerpages"
                className={activeTab === "innerpages" ? "active" : ""}
                onClick={(e) => hadleTabChange("innerpages", e)}
              >
                Inner Pages
              </a>
              <a
                href="#portfolio"
                className={activeTab === "portfolio" ? "active" : ""}
                onClick={(e) => hadleTabChange("portfolio", e)}
              >
                Portfolio
              </a>
              <a
                href="#shop"
                className={activeTab === "shop" ? "active" : ""}
                onClick={(e) => hadleTabChange("shop", e)}
              >
                Shop Pages
              </a>
              <a
                href="#blog"
                className={activeTab === "blog" ? "active" : ""}
                onClick={(e) => hadleTabChange("blog", e)}
              >
                Blog Pages
              </a>
            </div>
            <div class="right_pages_scroll">
              <div class="product_pages">
                <div class="pages_bx">
                  <div class="bg_linear">
                    <img loading="lazy" src="/svg/bg_linner.svg" alt="" />
                  </div>
                  <div class="pages_scroll_content">
                    <div class="pages_inner" id="productpages" ref={productRef}>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/prod1.jpg" alt="" />
                        </div>
                        <h4>Product Details layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/prod2.jpg" alt="" />
                        </div>
                        <h4>Product Details layout 2</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/prod3.jpg" alt="" />
                        </div>
                        <h4>Product Details layout 3</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/prod1.jpg" alt="" />
                        </div>
                        <h4>Product Details layout 1</h4>
                      </div>
                    </div>
                    <div class="pages_inner" id="innerpages" ref={innerRef}>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/inner1.jpg" alt="" />
                        </div>
                        <h4>Inner Details layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/inner1.jpg" alt="" />
                        </div>
                        <h4>Inner Details layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/inner1.jpg" alt="" />
                        </div>
                        <h4>Inner Details layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/inner1.jpg" alt="" />
                        </div>
                        <h4>Inner Details layout 1</h4>
                      </div>
                    </div>
                    <div class="pages_inner" id="portfolio" ref={portfolioRef}>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/port1.jpg" alt="" />
                        </div>
                        <h4>Portfolio layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/port1.jpg" alt="" />
                        </div>
                        <h4>Portfolio layout 2</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/port1.jpg" alt="" />
                        </div>
                        <h4>Portfolio layout 3</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/port1.jpg" alt="" />
                        </div>
                        <h4>Portfolio layout 4</h4>
                      </div>
                    </div>
                    <div class="pages_inner" id="shop" ref={shopRef}>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/shop1.jpg" alt="" />
                        </div>
                        <h4>Shop Details layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/shop1.jpg" alt="" />
                        </div>
                        <h4>Shop Details layout 2</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/shop1.jpg" alt="" />
                        </div>
                        <h4>Shop Details layout 3</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/shop1.jpg" alt="" />
                        </div>
                        <h4>Shop Details layout 4</h4>
                      </div>
                    </div>
                    <div class="pages_inner" id="blog" ref={blogRef}>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/blogp1.jpg" alt="" />
                        </div>
                        <h4>Blog layout 1</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/blogp1.jpg" alt="" />
                        </div>
                        <h4>Blog layout 2</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/blogp1.jpg" alt="" />
                        </div>
                        <h4>Blog layout 3</h4>
                      </div>
                      <div class="scroll_items">
                        <div class="scroll_three_dots"></div>
                        <div class="scroll_items_img">
                          <img src="/img/blogp1.jpg" alt="" />
                        </div>
                        <h4>Blog layout 4</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageRight;
