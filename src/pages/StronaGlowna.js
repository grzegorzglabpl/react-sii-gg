import React from "react";
import { Table, Tag, Space, Carousel } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Kod paskowy",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Nazwa Produktu",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Grupa",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "red";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: "Akcje",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Dodaj {record.name}</a>
        <a>Usuń</a>
        <a>Edytuj</a>
      </Space>
    )
  }
];

const data = [
  {
    key: "1",
    name: "1",
    age: 321231232,
    address: "Strona sklepu - szablon",
    tags: ["komponenty", "szablony"]
  },
  {
    key: "2",
    name: "2",
    age: 1231231,
    address: "Tabelka przestawna",
    tags: ["komponent"]
  },
  {
    key: "3",
    name: "3",
    age: 32,
    address: "Naglowek karuzela",
    tags: ["cool", "teacher"]
  }
];
const StronaGlowna = () => {
  return (
    <section class="strona-glowna">
      <h1>Strona Główna</h1>
      <Carousel autoplay className="carousel">
        <div>
          <img src="https://i.pinimg.com/280x280_RS/6c/e6/f8/6ce6f85c8e24d615ddfdf02bed674d55.jpg" />
        </div>
        <div>
          <img src="https://i.pinimg.com/280x280_RS/6c/e6/f8/6ce6f85c8e24d615ddfdf02bed674d55.jpg" />
        </div>
        <div>
          <img src="https://i.pinimg.com/280x280_RS/6c/e6/f8/6ce6f85c8e24d615ddfdf02bed674d55.jpg" />
        </div>
        <div>
          <img src="https://i.pinimg.com/280x280_RS/6c/e6/f8/6ce6f85c8e24d615ddfdf02bed674d55.jpg" />
        </div>
      </Carousel>
      <section class="cennik-standardowy">
        <h2>Cennik Standardowy</h2>
        <p>lorem ipsum</p>
        <Table columns={columns} dataSource={data} />
      </section>
    </section>
  );
};

export default StronaGlowna;
