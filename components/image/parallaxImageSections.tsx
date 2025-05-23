"use client";

import useMediaQuery from "@/hook/useMediaQuery";

interface ParallaxImageSectionsProps {
  sections: {
    titleRow1: string;
    titleRow2: string;
    smallImageUrl: string;
    largeImageUrl: string;
    content: string;
    align: string;
  }[];
}

export default function ParallaxImageSections(
  props: ParallaxImageSectionsProps
) {
  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <div>
      {props.sections.map((item, index) => {
        return (
          <div
            className="h-[80vh] bg-fixed bg-cover bg-center flex text-secondary-text"
            style={
              isLargeScreen
                ? {
                    backgroundImage: "url('" + item.largeImageUrl + "')",
                    justifyContent:
                      item.align === "left" ? "flex-start" : "flex-end",
                  }
                : {
                    backgroundImage: "url('" + item.smallImageUrl + "')",
                    justifyContent:
                      item.align === "left" ? "flex-start" : "flex-end",
                  }
            }
            key={index}
          >
            <div
              className="h-full flex flex-col justify-center items-center px-4"
              style={
                item.align === "left"
                  ? {
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
                    }
                  : {
                      background:
                        "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
                    }
              }
            >
              <div className="text-4xl lg:text-6xl max-w-[35rem] text-center mb-[2rem] space-y-2">
                <div>{item.titleRow1}</div>
                <div>{item.titleRow2}</div>
              </div>
              <div className="text-center max-w-[35rem]">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
