import Image from "next/image";

const imageArr = [
  {
    url: "/temp-image/1200x1200.jpg",
    name: "無紡布 English Name",
  },
  {
    url: "/temp-image/1920x1080.jpg",
    name: "無紡布 English Name",
  },
  {
    url: "/temp-image/1080x1920.jpg",
    name: "1080x1920",
  },
  {
    url: "/temp-image/1200x1200_2.jpg",
    name: "豎條 English Name",
  },
  {
    url: "/temp-image/1200x1200_3.jpg",
    name: "紗線 English Name",
  },
  {
    url: "/temp-image/1200x1200_4.jpg",
    name: "科技皮 English Name",
  },
  {
    url: "/temp-image/1200x1200_5.jpg",
    name: "亮銀 English Name",
  },
  {
    url: "/temp-image/1200x1200_6.jpg",
    name: "亮銀2 English Name",
  },
  {
    url: "/temp-image/1200x1200_7.jpg",
    name: "亮金 English Name",
  },
  {
    url: "/temp-image/1200x1200_8.jpg",
    name: "冠銀 English Name",
  },
  {
    url: "/temp-image/1200x1200_9.jpg",
    name: "粗竹節 English Name",
  },
];

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {imageArr.map((item, index) => (
          <div key={index}>
            <div className="aspect-square relative">
              <Image
                src={item.url}
                alt={item.name}
                fill
                // height={600}
                // width={600}
                // sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
