import { React, Children, cloneElement, useState, useRef } from "react";
import PagenationUp from "utils/PagenationUp";
import PagenationDown from "utils/PagenationDown";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
export default function TeamContainer({ children, pagenation, data, size }) {
  const [page, setPage] = useState(0);
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const onClickGood = contextSafe((target) => {
    gsap.to(target, {
        keyframes:{
          "0%":{
              opacity: 0.3
          },
          "30%":{
              opacity: 1 ,ease: "power4.out"
          },
          "100%":{
              opacity:0.3
          }
        },
        ease: 'power1.in',
        duration: 0.4,
      });
});

  return (
    <>
      <div
        ref={container}
        className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:p-2 lg:p-6"
      >
        {data.slice(page * size, (page + 1) * size).map((itm) => {
          return Children.map(children, (child, index) =>
            cloneElement(child, {
              id: itm["id"],
              data: itm,
            })
          );
        })}
        {pagenation && (
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="w-auto h-auto flex flex-row justify-end items-center gap-4 p-4">
              <div
                onClick={(ele) => {
                  setPage(PagenationDown(page));
                  onClickGood(ele.currentTarget);
                }}
                className={`good w-12 h-12 flex flex-col justify-center items-center rounded-[12px] p-3 bg-[#4f4f5a] opacity-30 hover:opacity-50  hover:cursor-pointer`}
              >
                <FontAwesomeIcon
                  className="text-3xl text-[#f1f1f1f1]"
                  icon={faAngleLeft}
                />
              </div>
              <div
                onClick={(ele) => {
                  setPage(PagenationUp(page, size, data.length));
                  onClickGood(ele.currentTarget);
                }}
                className="w-12 h-12 flex flex-col justify-center items-center rounded-[12px] p-3 bg-[#4f4f5a] opacity-30 hover:opacity-50 hover:cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-3xl text-[#f1f1f1f1]"
                  icon={faAngleRight}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
